import { useState, useCallback } from 'react';

/**
 * 드롭다운을 열고 닫을 때 사용하는 커스텀 훅
 */
export default function useDropDown() {
  const [isOpen, setIsOpen] = useState(false);

  const openDropDown = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeDropDown = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggleDropDown = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return {
    isOpen,
    openDropDown,
    closeDropDown,
    toggleDropDown,
  };
}
