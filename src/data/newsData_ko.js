// 뉴스 데이터 (한글)
export const newsDataKo = [
  {
    id: 1,
    date: '2025년 09월 11~12일',
    title: '제 4회 금융보안워크샵 참여',
    sortDate: '2025-09-12'
  },
  {
    id: 2,
    date: '2025년 10월 13일',
    title: '2025 디지털자산안전세미나 참여',
    sortDate: '2025-10-13'
  },
  {
    id: 3,
    date: '2025년 08월 12일',
    title: '제3차 사이버 복합 넥서스 세미나 참여',
    sortDate: '2025-08-12'
  },
  {
    id: 4,
    date: '2025년 04월 08일',
    title: '금융보안원 창립 10주년 기념 세미나 참여',
    sortDate: '2025-04-08'
  },
  {
    id: 5,
    date: '2025년 04월 02일',
    title: '디지털자산정책포럼 국회 토론회 참여',
    sortDate: '2025-04-02'
  },
  {
    id: 6,
    date: '2025년 11월 06일',
    title: '금융권 사이버보안 사고 사례 및 사이버보험 트렌드 세미나 강연',
    sortDate: '2025-11-06'
  },
  {
    id: 7,
    date: '2025년 12월 10일',
    title: '금융연수원 25년도 하반기 IBK Pre-CEO과정 출강',
    sortDate: '2025-12-10'
  },
  {
    id: 8,
    date: '2025년 11월 07일',
    title: '부산은행 특강 - 금융 망분리 제도의 한계와 제로트러스트 도입방안',
    sortDate: '2025-11-07'
  },
  {
    id: 9,
    date: '2025년 06월 25일',
    title: '신한지주 특강',
    sortDate: '2025-06-25'
  },
  {
    id: 10,
    date: '2025년 06월 24일',
    title: '시큐아이 세미나 참여',
    sortDate: '2025-06-24'
  }
];

// 날짜 기준으로 정렬하여 최신 N개 반환
export const getLatestNewsKo = (count = 5) => {
  return [...newsDataKo]
    .sort((a, b) => new Date(b.sortDate) - new Date(a.sortDate))
    .slice(0, count);
};

// 전체 뉴스를 날짜 기준으로 정렬하여 반환
export const getAllNewsSortedKo = () => {
  return [...newsDataKo].sort((a, b) => new Date(b.sortDate) - new Date(a.sortDate));
};
