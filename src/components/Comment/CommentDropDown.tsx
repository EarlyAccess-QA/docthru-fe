'use client';

import useDropDown from '@/hooks/useDropDown';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import Image from 'next/image';
import { Dispatch, SetStateAction, memo, useRef } from 'react';
import kebabImg from '../../../public/icons/Meatballs_menu.png';

interface Props {
  setModifying: Dispatch<SetStateAction<boolean>>;
}

const CommentDropDown = memo(({ setModifying }: Props) => {
  const { isOpen: isDropDownOpen, openDropDown, closeDropDown } = useDropDown();
  const containerRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(containerRef, closeDropDown);

  const handleContainerClick = () => {
    if (isDropDownOpen) closeDropDown();
    else openDropDown();
  };

  const handleModifyClick = () => {
    setModifying(true);
  };

  const handleDeleteClick = () => {};

  return (
    <div
      className="relative flex h-24 w-24 cursor-pointer items-start"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <Image src={kebabImg} alt="케밥 버튼" width={24} height={24} />
      {isDropDownOpen && (
        <div className="absolute right-[-5px] top-20 flex h-86 w-139 flex-col rounded-xs border-1 border-solid border-gray-3 bg-white">
          <div
            className="flex items-center justify-center border-b-1 border-solid border-gray-3 bg-white text-16 text-gray-5 hover:bg-gray-2"
            onClick={handleModifyClick}
          >
            수정하기
          </div>
          <div
            className="flex items-center justify-center bg-white text-16 text-gray-5 hover:bg-gray-2"
            onClick={handleDeleteClick}
          >
            삭제하기
          </div>
        </div>
      )}
    </div>
  );
});

export default CommentDropDown;
