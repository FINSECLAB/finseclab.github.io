// 갤러리 데이터 (영문)
export const galleryData = [
  {
    id: 1,
    title: '2026 FinSec LAB MT',
    date: '2026.01.23. (Fri) - 2026.01.24. (Sat)',
    sortDate: '2026-01-23',
    location: '',
    images: [
      `${process.env.PUBLIC_URL}/gallery/260123.jpeg`,
    ],
  },
  {
    id: 2,
    title: 'Start-of-Semester Party for the First Semester of 2026',
    date: '2026.03.03. (Tue)',
    sortDate: '2026-03-03',
    location: '',
    images: [
      `${process.env.PUBLIC_URL}/gallery/260303.jpeg`,
    ],
  },
  {
    id: 3,
    title: 'Spring Hike on Mt. Cheonggye',
    date: '2026.04.08. (Wed)',
    sortDate: '2026-04-08',
    location: '',
    images: [
      `${process.env.PUBLIC_URL}/gallery/260408_01.jpeg`,
      `${process.env.PUBLIC_URL}/gallery/260408_02.jpeg`,
    ],
  },
  {
    id: 4,
    title: "2026 Teachers' Day",
    date: '2026.05.15. (Fri)',
    sortDate: '2026-05-15',
    location: '',
    images: [
      `${process.env.PUBLIC_URL}/gallery/260515.jpeg`,
    ],
  },
  {
    id: 5,
    title: 'End-of-Semester Party for the First Semester of 2026',
    date: '2026.06.29. (Mon)',
    sortDate: '2026-06-29',
    location: '',
    images: [
      `${process.env.PUBLIC_URL}/gallery/260629.jpeg`,
    ],
  },
  {
    id: 6,
    title: '2026 ROK-U.S. Joint Seminar',
    date: '2026.08.31. (Mon)',
    sortDate: '2026-08-31',
    location: 'Novotel Ambassador Seoul Dongdaemun Hotel',
    images: [
      `${process.env.PUBLIC_URL}/gallery/260831.jpeg`,
    ],
  },
];

// 날짜 기준 최신순 정렬
export const getAllGallerySorted = () => {
  return [...galleryData].sort((a, b) => new Date(b.sortDate) - new Date(a.sortDate));
};

export const getGalleryById = (id) => galleryData.find(g => String(g.id) === String(id));
