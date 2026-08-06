import { useLocation, useNavigate } from 'react-router-dom';

// 탭 상태를 URL 해시(#professor)로 관리하는 훅.
// ?tab= 쿼리 링크는 Google이 전부 별도 URL로 크롤링해 Search Console에
// '적절한 표준 태그가 포함된 대체 페이지'로 쌓이지만, 해시는 같은 URL로 취급되어 색인이 오염되지 않는다.
// 과거에 색인/공유된 ?tab= 링크 호환을 위해 쿼리도 fallback으로 읽는다.
export default function useTab(defaultTab) {
  const location = useLocation();
  const navigate = useNavigate();

  // 중첩 탭은 #researcher/intern 형태를 사용하며, 상위 탭은 첫 조각으로 판별한다.
  const fromHash = decodeURIComponent(location.hash.replace(/^#/, '')).split('/')[0];
  const legacy = new URLSearchParams(location.search).get('tab');
  const tab = fromHash || legacy || defaultTab;

  // 탭 변경 시 쿼리(page, 레거시 tab)는 초기화하고 해시만 갱신 (기본 탭이면 해시 제거)
  const setTab = (next) =>
    navigate({
      pathname: location.pathname,
      search: '',
      hash: next === defaultTab ? '' : `#${next}`,
    });

  return [tab, setTab];
}

// 상위 탭 아래의 내부 탭 상태를 같은 URL 해시에 저장한다.
// 언어 전환 시 path만 바뀌고 해시는 보존되므로 동일한 내부 탭이 유지된다.
export function useNestedTab(parentTab, defaultTab, validTabs) {
  const location = useLocation();
  const navigate = useNavigate();

  const [hashParent, hashChild] = decodeURIComponent(location.hash.replace(/^#/, '')).split('/');
  const tab = hashParent === parentTab && validTabs.includes(hashChild) ? hashChild : defaultTab;

  const setTab = (next) =>
    navigate({
      pathname: location.pathname,
      search: '',
      hash: next === defaultTab ? `#${parentTab}` : `#${parentTab}/${next}`,
    });

  return [tab, setTab];
}
