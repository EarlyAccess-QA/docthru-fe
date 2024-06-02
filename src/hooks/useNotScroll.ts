import { useEffect } from 'react';

const useNotScroll = () => {
  useEffect(() => {
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.overflowY = 'scroll';
    document.body.style.width = '100%';

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.overflowY = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollY);
    };
  }, []);

  return null;
};

export default useNotScroll;
