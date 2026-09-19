import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const GalleryCard = ({ item, to, lang }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const hasMultiplePhotos = item.images.length > 1;
  const isKo = lang === 'ko';

  const changePhoto = (direction) => {
    setPhotoIndex(index => (index + direction + item.images.length) % item.images.length);
  };

  return (
    <article className="gallery-card">
      <div className="gallery-card-media">
        <Link to={to} className="gallery-card-image">
          <img src={item.images[photoIndex]} alt={item.title} draggable={false} />
        </Link>
        {hasMultiplePhotos && (
          <>
            <button
              type="button"
              className="gallery-photo-button gallery-photo-button-prev"
              aria-label={`${item.title}: ${isKo ? '이전 사진' : 'Previous photo'}`}
              onClick={() => changePhoto(-1)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="m14 6-6 6 6 6" />
              </svg>
            </button>
            <button
              type="button"
              className="gallery-photo-button gallery-photo-button-next"
              aria-label={`${item.title}: ${isKo ? '다음 사진' : 'Next photo'}`}
              onClick={() => changePhoto(1)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="m10 6 6 6-6 6" />
              </svg>
            </button>
            <span className="gallery-photo-status" role="status" aria-atomic="true">
              {isKo
                ? `${item.title}: 사진 ${photoIndex + 1} / ${item.images.length}`
                : `${item.title}: Photo ${photoIndex + 1} of ${item.images.length}`}
            </span>
          </>
        )}
      </div>
      <Link to={to} className="gallery-card-body">
        <p className="gallery-card-title">{item.title}</p>
        <p className="gallery-card-date">{item.date}</p>
      </Link>
    </article>
  );
};

export default GalleryCard;
