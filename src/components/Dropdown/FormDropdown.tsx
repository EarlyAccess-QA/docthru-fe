'use client';

import useDropDown from '@/hooks/useDropDown';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import Image from 'next/image';
import { Dispatch, MouseEvent, SetStateAction, memo, useRef } from 'react';
import arrowDownImg from '../../../public/icons/toggle_down.png';
import arrowUpImg from '../../../public/icons/toggle_up.png';
import { v4 as uuidV4 } from 'uuid';

interface Props {
  placeholder: string;
  setCategory: Dispatch<SetStateAction<string>>;
  list: string[];
}

const FormDropDown = memo(({ placeholder, setCategory, list }: Props) => {
  const { isOpen: isDropDownOpen, openDropDown, closeDropDown } = useDropDown();
  const containerRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(containerRef, closeDropDown);

  const handleContainerClick = () => {
    isDropDownOpen ? closeDropDown() : openDropDown();
  };

  const handleOptionClick = (e: MouseEvent<HTMLDivElement>) => {
    setCategory(e.currentTarget.innerText);
    closeDropDown();
  };

  return (
    <div
      className="relative flex h-56 w-800 cursor-pointer items-center gap-12 rounded-[4px] border-1 border-solid border-gray-2 px-12 py-8"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="flex-1 text-16 text-gray-4">{placeholder}</div>
      {isDropDownOpen ? (
        <Image src={arrowUpImg} alt="화살표 위 버튼" width={24} height={24} />
      ) : (
        <Image src={arrowDownImg} alt="화살표 아래 버튼" width={24} height={24} />
      )}
      {isDropDownOpen && (
        <div className="absolute right-0 top-65 flex w-800 flex-col overflow-hidden rounded-xs border-1 border-solid border-gray-3 bg-white">
          {list.map((el) => (
            <div
              key={uuidV4()}
              onClick={handleOptionClick}
              className="flex h-43 w-full items-center justify-center border-b-1 border-t-1 border-solid border-gray-3 bg-white text-16 text-gray-5 hover:bg-gray-0"
            >
              {el}
            </div>
          ))}
        </div>
      )}
    </div>
  );
});

export default FormDropDown;
