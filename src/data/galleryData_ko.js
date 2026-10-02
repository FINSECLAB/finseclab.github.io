// 갤러리 데이터 (한글)
export const galleryDataKo = [
  {
    id: 1,
    title: '2026 금융보안연구실 MT',
    date: '2026.01.23.(금)-2026.01.24.(토)',
    sortDate: '2026-01-23',
    location: '',
    images: [
      `${process.env.PUBLIC_URL}/gallery/260123.jpeg`,
    ],
  },
  {
    id: 2,
    title: '2026 1학기 개강파티',
    date: '2026.03.03.(화)',
    sortDate: '2026-03-03',
    location: '',
    images: [
      `${process.env.PUBLIC_URL}/gallery/260303.jpeg`,
    ],
  },
  {
    id: 3,
    title: '봄맞이 청계산 등산',
    date: '2026.04.08.(수)',
    sortDate: '2026-04-08',
    location: '청계산',
    images: [
      `${process.env.PUBLIC_URL}/gallery/260408_01.jpeg`,
      `${process.env.PUBLIC_URL}/gallery/260408_02.jpeg`,
    ],
  },
  {
    id: 4,
    title: '2026 스승의날',
    date: '2026.05.15.(금)',
    sortDate: '2026-05-15',
    location: '',
    images: [
      `${process.env.PUBLIC_URL}/gallery/260515.jpeg`,
    ],
  },
  {
    id: 5,
    title: '2026 1학기 종강파티',
    date: '2026.06.29.(월)',
    sortDate: '2026-06-29',
    location: '',
    images: [
      `${process.env.PUBLIC_URL}/gallery/260629.jpeg`,
    ],
  },
  {
    id: 6,
    title: '2026 한미 공동 세미나',
    date: '2026.08.31.(월)',
    sortDate: '2026-08-31',
    location: '노보텔 앰배서더 서울 동대문',
    images: [
      `${process.env.PUBLIC_URL}/gallery/260831.jpeg`,
    ],
  },
  {
    id: 7,
    title: '2026 제5회 금융보안워크숍',
    date: '2026.09.11.(금)',
    sortDate: '2026-09-11',
    location: '서울 여의도 FKI타워',
    images: [
      `${process.env.PUBLIC_URL}/gallery/260911_01.jpeg`,
      `${process.env.PUBLIC_URL}/gallery/260911_02.jpg`,
    ],
  },
  {
    id: 8,
    title: '2026 고려대학교 정보보호대학원 교우회 정기등반대회',
    date: '2026.09.19.(토)',
    sortDate: '2026-09-19',
    location: '청계산',
    images: [
      `${process.env.PUBLIC_URL}/gallery/260919_01.jpg`,
      `${process.env.PUBLIC_URL}/gallery/260919_02.jpeg`,
      `${process.env.PUBLIC_URL}/gallery/260919_03.jpeg`,
    ],
  },
  {
    id: 9,
    title: '2026 제19회 CPS 보안 워크숍',
    date: '2026.10.01.(목)-2026.10.02.(금)',
    sortDate: '2026-10-01',
    location: '제주 메종 글래드호텔',
    images: [
      `${process.env.PUBLIC_URL}/gallery/261001_00.jpeg`,
    ],
  },
  {
    id: 10,
    title: '가을맞이 금융보안연구실 MT',
    date: '2026.10.01.(목)-2026.10.02.(금)',
    sortDate: '2026-10-01',
    location: '제주도',
    layout: 'mosaic',
    coverImage: `${process.env.PUBLIC_URL}/gallery/261001_02.png`,
    images: [
      `${process.env.PUBLIC_URL}/gallery/261001_01.jpeg`,
      `${process.env.PUBLIC_URL}/gallery/261001_02.png`,
      `${process.env.PUBLIC_URL}/gallery/261001_03.jpeg`,
      `${process.env.PUBLIC_URL}/gallery/261001_04.jpeg`,
      `${process.env.PUBLIC_URL}/gallery/261001_05.jpeg`,
      `${process.env.PUBLIC_URL}/gallery/261002_01.jpeg`,
      `${process.env.PUBLIC_URL}/gallery/261002_02.jpeg`,
      `${process.env.PUBLIC_URL}/gallery/261002_03.jpeg`,
      `${process.env.PUBLIC_URL}/gallery/261002_04.jpeg`,
      `${process.env.PUBLIC_URL}/gallery/261002_05.jpeg`,
      `${process.env.PUBLIC_URL}/gallery/261002_06.jpeg`,
    ],
  },
];

// 날짜 기준 최신순 정렬
export const getAllGallerySortedKo = () => {
  return [...galleryDataKo].sort((a, b) => new Date(b.sortDate) - new Date(a.sortDate) || b.id - a.id);
};

export const getGalleryByIdKo = (id) => galleryDataKo.find(g => String(g.id) === String(id));
