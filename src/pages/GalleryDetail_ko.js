import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import Seo from '../components/Seo';
import './Gallery.css';
import { getAllGallerySortedKo, getGalleryByIdKo } from '../data/galleryData_ko';

const GalleryDetail_ko = () => {
  const { id } = useParams();
  const item = getGalleryByIdKo(id);

  if (!item) {
    return <Navigate to="/ko/gallery" replace />;
  }

  const allSorted = getAllGallerySortedKo();
  const currentIndex = allSorted.findIndex(g => g.id === item.id);
  const prevItem = allSorted[currentIndex + 1];
  const nextItem = allSorted[currentIndex - 1];

  const bannerSrc = `${process.env.PUBLIC_URL}/background/gallery.jpg`;

  return (
    <div className="gallery-page gallery-detail-page">
      <Seo routeKey="gallery" />

      <div className="page-banner" style={{ backgroundImage: `url(${bannerSrc})` }}>
        <h1>갤러리</h1>
      </div>

      <div className="page-content gallery-detail-content">
        <Link to="/ko/gallery" className="gallery-detail-back">&larr; 갤러리로 돌아가기</Link>

        <h2 className="gallery-detail-title">{item.title}</h2>
        <div className="gallery-detail-meta">
          <span>{item.date}</span>
          {item.location && (
            <>
              <span className="gallery-detail-meta-divider">·</span>
              <span>{item.location}</span>
            </>
          )}
        </div>

        <div className="gallery-detail-images">
          {item.images.map((src, i) => (
            <div key={i} className="gallery-detail-image-wrapper" onContextMenu={(e) => e.preventDefault()}>
              <img
                src={src}
                alt={item.title}
                className="gallery-detail-image"
                draggable={false}
              />
            </div>
          ))}
        </div>

        <div className="gallery-detail-nav">
          {prevItem ? (
            <Link to={`/ko/gallery/${prevItem.id}`} className="gallery-detail-nav-link gallery-detail-nav-prev">
              <span className="gallery-detail-nav-label">&lsaquo; 이전 글</span>
              <span className="gallery-detail-nav-title">{prevItem.title}</span>
            </Link>
          ) : (
            <span className="gallery-detail-nav-link disabled">
              <span className="gallery-detail-nav-label">&lsaquo; 이전 글</span>
            </span>
          )}
          {nextItem ? (
            <Link to={`/ko/gallery/${nextItem.id}`} className="gallery-detail-nav-link gallery-detail-nav-next">
              <span className="gallery-detail-nav-label">다음 글 &rsaquo;</span>
              <span className="gallery-detail-nav-title">{nextItem.title}</span>
            </Link>
          ) : (
            <span className="gallery-detail-nav-link gallery-detail-nav-next disabled">
              <span className="gallery-detail-nav-label">다음 글 &rsaquo;</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryDetail_ko;
