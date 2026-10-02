#!/usr/bin/env python3
"""Remove HDR gain maps from gallery JPEGs without recompressing pixels.

Run: python3 scripts/prepare-gallery-images.py (inspect only)
     python3 scripts/prepare-gallery-images.py --apply (replace in place)
For upright SDR-primary JPEGs with auxiliary HDR gain maps, preserve the
primary image, ICC profile and JPEG coding markers; omit HDR/EXIF metadata
and trailing auxiliary images. Already-SDR files are left untouched.
No third-party packages are needed.
"""

import argparse
from pathlib import Path
import struct

ROOT = Path(__file__).resolve().parents[1]
HDR_MARKERS = (b"HDRGainMap", b"hdrgm:", b"urn:iso:std:iso:ts:21496")


def has_hdr(data):
    return any(marker in data for marker in HDR_MARKERS)


def check_orientation(payload):
    if not payload.startswith(b"Exif\0\0"):
        return
    tiff = payload[6:]
    byte_order = {b"II": "<", b"MM": ">"}[tiff[:2]]
    offset = struct.unpack_from(byte_order + "I", tiff, 4)[0]
    count = struct.unpack_from(byte_order + "H", tiff, offset)[0]
    for index in range(count):
        entry = offset + 2 + index * 12
        tag = struct.unpack_from(byte_order + "H", tiff, entry)[0]
        if tag == 274 and struct.unpack_from(byte_order + "H", tiff, entry + 8)[0] != 1:
            raise ValueError("Rotate this image losslessly before removing EXIF orientation")


def sdr_primary(data):
    if data[:2] != b"\xff\xd8":
        raise ValueError("Not a JPEG")
    output = bytearray(data[:2])
    position = 2
    while position < len(data):
        start = position
        if data[position] != 0xFF:
            raise ValueError("Expected JPEG marker")
        while data[position] == 0xFF:
            position += 1
        marker = data[position]
        position += 1
        if marker == 0xD9:
            output.extend(b"\xff\xd9")
            return bytes(output)
        if marker == 0x01 or 0xD0 <= marker <= 0xD7:
            output.extend(data[start:position])
            continue
        length = int.from_bytes(data[position:position + 2], "big")
        end = position + length
        if length < 2 or end > len(data):
            raise ValueError("Invalid JPEG segment length")
        payload = data[position + 2:end]
        if marker == 0xE1:
            check_orientation(payload)
        is_app = 0xE0 <= marker <= 0xEF
        # Preserve ICC color interpretation and Adobe transform markers only.
        if not is_app or (marker == 0xE2 and payload.startswith(b"ICC_PROFILE\0")) or marker == 0xEE:
            output.extend(data[start:end])
        elif marker == 0xE0 and payload.startswith(b"JFIF\0"):
            # Keep standard JFIF data, excluding any Apple MPF extension suffix.
            jfif_size = 14 + 3 * payload[12] * payload[13]
            jfif = payload[:jfif_size]
            output.extend(b"\xff\xe0" + (len(jfif) + 2).to_bytes(2, "big") + jfif)
        position = end
        if marker == 0xDA:
            # Entropy data may contain stuffed FF00 bytes and restart markers.
            scan_start = position
            while True:
                next_marker = data.find(b"\xff", position)
                if next_marker < 0:
                    raise ValueError("Unterminated JPEG scan")
                position = next_marker + 1
                while data[position] == 0xFF:
                    position += 1
                code = data[position]
                if code == 0 or 0xD0 <= code <= 0xD7:
                    position += 1
                    continue
                output.extend(data[scan_start:next_marker])
                position = next_marker
                break
    raise ValueError("Missing JPEG end marker")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--apply", action="store_true", help="Replace HDR JPEGs in place")
    args = parser.parse_args()
    for source in sorted((ROOT / "public/gallery").rglob("*")):
        if source.suffix.lower() not in {".jpg", ".jpeg"}:
            continue
        data = source.read_bytes()
        if not has_hdr(data):
            continue
        result = sdr_primary(data)
        if has_hdr(result):
            raise ValueError(f"HDR metadata remains: {source.name}")
        if args.apply:
            source.write_bytes(result)
        print(f"{source.name}: {len(data):,} -> {len(result):,} bytes ({'replaced' if args.apply else 'preview'})")
