'use client';

import useDropDown from '@/hooks/useDropDown';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { useStore } from '@/store';
import Image from 'next/image';
import Link from 'next/link';
import { memo, useRef } from 'react';
import kebabImg from '../../../public/icons/Meatballs_menu.png';

interface Props {
  challengeId: number;
}

const CardDropDown = memo(({ challengeId }: Props) => {
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

  const handleModifyClick = () => {
    closeDropDown();
  };

  const handleDeleteClick = () => {
    setChallengeId(challengeId);
    showModal('challengeDeleteModal');
  };

  return (
    <div
      className="relative flex h-24 w-24 cursor-pointer items-start"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <Image src={kebabImg} alt="케밥 버튼" width={24} height={24} />
      {isDropDownOpen && (
        <div className="absolute right-5 top-30 flex h-86 w-139 flex-col overflow-hidden rounded-xs border-1 border-solid border-gray-3 bg-white">
          <Link
            // 나중에 수정하기 페이지로 이동하게끔 변경
            href={'/'}
            className="flex flex-1 items-center justify-center border-b-1 border-solid border-gray-3 bg-white text-16 text-gray-5 hover:bg-gray-2"
          >
            <p onClick={handleModifyClick}>수정하기</p>
          </Link>
          <div
            className="flex flex-1 items-center justify-center bg-white text-16 text-gray-5 hover:bg-gray-2"
            onClick={handleDeleteClick}
          >
            삭제하기
          </div>
        </div>
      )}
    </div>
  );
});

export default CardDropDown;
