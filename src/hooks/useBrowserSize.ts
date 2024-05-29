import { useEffect, useState } from 'react';

/**
 * 실시간 브라우저 사이즈(가로, 세로)와 해당 사이즈가 모바일, iPad mini 사이즈인지 판별
 * @returns windowSize, isMobile, isPad
 */

export const useBrowserSize = () => {
  // 초기 state 값은 undefined로 세팅한다.
  const [windowSize, setWindowSize] = useState<{
    width: undefined | number;
    height: undefined | number;
  }>({
    width: undefined,
    height: undefined,
  });

  const [isMobile, setIsMobile] = useState<boolean | undefined>();
  const [isPad, setIsPad] = useState<boolean | undefined>();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        setWindowSize({ width, height });
        setIsMobile(width <= 375);
        setIsPad(width <= 744);
      };

      // resize 이벤트가 발생할 때 handleResize 함수가 실행되도록 한다.
      window.addEventListener('resize', handleResize);

      // 초기값을 설정할 수 있도록 handleResize 함수를 한 번 실행시킨다.
      handleResize();

      // 이벤트 리스너를 제거하여 이벤트 리스너가 리사이즈될 때마다 계속해서 생겨나지 않도록 처리한다. (clean up)
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []); // 컴포넌트가 처음 마운트 될때와 언마운트 될 때 실행

  return { windowSize, isMobile, isPad };
};
