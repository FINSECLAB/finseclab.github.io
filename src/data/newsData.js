// 뉴스 데이터
export const newsData = [
  {
    id: 1,
    date: 'Sep 11-12, 2025',
    title: 'Participation in the 4th Financial Security Workshop',
    sortDate: '2025-09-12' // 정렬용 날짜
  },
  {
    id: 2,
    date: 'Oct 13, 2025',
    title: 'Participation in the 2025 Digital Asset Security Seminar',
    sortDate: '2025-10-13'
  },
  {
    id: 3,
    date: 'Aug 12, 2025',
    title: '제3차 사이버 복합 넥서스 세미나 참여',
    sortDate: '2025-08-12'
  },
  {
    id: 4,
    date: 'Apr 08, 2025',
    title: 'Participation in the Financial Security Institute\'s (FSI) 10th Anniversary Seminar',
    sortDate: '2025-04-08'
  },
  {
    id: 5,
    date: 'Apr 02, 2025',
    title: '디지털자산정책포럼 국회 토론회 참여',
    sortDate: '2025-04-02'
  },
  {
    id: 6,
    date: 'Nov 06, 2025',
    title: '금융권 사이버보안 사고 사례 및 사이버보험 트렌드 세미나 강연',
    sortDate: '2025-11-06'
  },
  {
    id: 7,
    date: 'Dec 10, 2025',
    title: '금융연수원 25년도 하반기 IBK Pre-CEO과정 출강',
    sortDate: '2025-12-10'
  },
  {
    id: 8,
    date: 'Nov 07, 2025',
    title: 'Busan Bank Special Lecture - 금융 망분리 제도의 한계와 제로트러스트 도입방안',
    sortDate: '2025-11-07'
  },
  {
    id: 9,
    date: 'Jun 25, 2025',
    title: 'Shinhan Financial Group Special Lecture',
    sortDate: '2025-06-25'
  },
  {
    id: 10,
    date: 'Jun 24, 2025',
    title: 'Participation in the SECUI Seminar',
    sortDate: '2025-06-24'
  }
];

// 날짜 기준으로 정렬하여 최신 5개 반환
export const getLatestNews = (count = 5) => {
  return [...newsData]
    .sort((a, b) => new Date(b.sortDate) - new Date(a.sortDate))
    .slice(0, count);
};

// 전체 뉴스를 날짜 기준으로 정렬하여 반환
export const getAllNewsSorted = () => {
  return [...newsData].sort((a, b) => new Date(b.sortDate) - new Date(a.sortDate));
};




