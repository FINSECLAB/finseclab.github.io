import React, { useEffect } from 'react';

const PHOTO_SELECTOR = '.gallery-card-image, .gallery-detail-image-wrapper, .page-banner';

const preventPhotoAction = (event) => {
  if (event.target instanceof Element && event.target.closest(PHOTO_SELECTOR)) {
    event.preventDefault();
  }
};

const preventModifiedPhotoClick = (event) => {
  if (event.button !== 0 || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) {
    preventPhotoAction(event);
  }
};

// These controls discourage browser UI saving; public image URLs remain accessible.
const GalleryPage = ({ children, className = '' }) => {
  useEffect(() => {
    const preventSaveShortcut = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 's') {
        event.preventDefault();
      }
    };

    document.addEventListener('keydown', preventSaveShortcut, true);
    return () => document.removeEventListener('keydown', preventSaveShortcut, true);
  }, []);

  return (
    <div
      className={`gallery-page ${className}`.trim()}
      onContextMenu={preventPhotoAction}
      onDragStart={preventPhotoAction}
      onCopy={preventPhotoAction}
      onMouseDown={preventModifiedPhotoClick}
      onClick={preventModifiedPhotoClick}
      onAuxClick={preventPhotoAction}
    >
      {children}
    </div>
  );
};

export default GalleryPage;
