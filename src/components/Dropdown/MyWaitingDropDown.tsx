'use client';

import useDropDown from '@/hooks/useDropDown';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { useStore } from '@/store';
import Image from 'next/image';
import { memo, useRef } from 'react';
import kebabImg from '../../../public/icons/Meatballs_menu.png';

interface Props {
  challengeId: number;
}

const MyWaitingDropDown = memo(({ challengeId }: Props) => {
  const { isOpen: isDropDownOpen, openDropDown, closeDropDown } = useDropDown();
  const containerRef = useRef<HTMLDivElement>(null);

  const { showModal, setChallengeId } = useStore((state) => ({
    showModal: state.showModal,
    setChallengeId: state.setChallengeId,
  }));

  useOnClickOutside(containerRef, closeDropDown);

  const handleContainerClick = () => {
    isDropDownOpen ? closeDropDown() : openDropDown();
  };

  const handleDeleteClick = () => {
    setChallengeId(challengeId);
    showModal('cancelApplyingChallengeModal');
  };

  return (
    <div
      className="relative flex h-24 w-24 cursor-pointer items-start"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <Image src={kebabImg} alt="케밥 버튼" width={24} height={24} />
      {isDropDownOpen && (
        <div
          className="absolute right-5 top-30 flex h-43 w-139 items-center justify-center rounded-xs border-1 border-solid border-gray-3 bg-white text-16 text-gray-5 hover:bg-gray-0"
          onClick={handleDeleteClick}
        >
          취소하기
        </div>
      )}
    </div>
  );
});

export default MyWaitingDropDown;
