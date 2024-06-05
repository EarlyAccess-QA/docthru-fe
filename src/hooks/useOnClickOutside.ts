import { RefObject, useEffect, useCallback } from 'react';

/**
 * 드롭다운 밖을 클릭하면 닫히게 만드는 커스텀 훅
 * @param ref container Ref 입력!
 * @param handler 바깥을 클릭했을 때 실행될 함수!
 */

export default function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: MouseEvent | TouchEvent) => void
) {
  // 이벤트 리스너를 useCallback으로 메모이제이션
  const listener = useCallback(
    (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    },
    [ref, handler]
  );

  useEffect(() => {
    document.addEventListener('mousedown', listener, true);

    return () => {
      document.removeEventListener('mousedown', listener, true);
    };
  }, [listener]);
}
