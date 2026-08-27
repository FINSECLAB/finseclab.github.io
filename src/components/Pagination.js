import React from 'react';

// 페이지 번호를 10개 단위 블록으로 나누어 보여줌 (1-10, 11-20, ...)
const PAGE_BLOCK_SIZE = 10;

const Pagination = ({ page, totalPages, onChange }) => {
  if (totalPages <= 0) return null;

  const currentBlock = Math.ceil(page / PAGE_BLOCK_SIZE);
  const startPage = (currentBlock - 1) * PAGE_BLOCK_SIZE + 1;
  const endPage = Math.min(startPage + PAGE_BLOCK_SIZE - 1, totalPages);
  const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  return (
    <div className="pagination">
      <button
        className="pagination-nav"
        onClick={() => onChange(1)}
        disabled={page === 1}
        aria-label="First page"
      >
        &lt;&lt;
      </button>
      <button
        className="pagination-nav"
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        aria-label="Previous page"
      >
        &lt;
      </button>
      {pageNumbers.map(p => (
        <button key={p} className={p === page ? 'active' : ''} onClick={() => onChange(p)}>
          {p}
        </button>
      ))}
      <button
        className="pagination-nav"
        onClick={() => onChange(page + 1)}
        disabled={page === totalPages}
        aria-label="Next page"
      >
        &gt;
      </button>
      <button
        className="pagination-nav"
        onClick={() => onChange(totalPages)}
        disabled={page === totalPages}
        aria-label="Last page"
      >
        &gt;&gt;
      </button>
    </div>
  );
};

export default Pagination;
