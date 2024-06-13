'use client';

import useDropDown from '@/hooks/useDropDown';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import Image from 'next/image';
import { MouseEvent, memo, useRef, useState } from 'react';
import { UseFormSetValue } from 'react-hook-form';
import { v4 as uuidV4 } from 'uuid';
import arrowDownImg from '../../../public/icons/toggle_down.png';
import arrowUpImg from '../../../public/icons/toggle_up.png';

interface Props {
  placeholder: string;
  setCategory: UseFormSetValue<any>;
  list: string[];
  formLabel: string;
  selectedValue: string;
}

const FormDropDown = memo(({ placeholder, setCategory, list, formLabel, selectedValue }: Props) => {
  const [isSelected, setIsSelected] = useState(false);
  const { isOpen: isDropDownOpen, openDropDown, closeDropDown } = useDropDown();
  const containerRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(containerRef, closeDropDown);

  const handleContainerClick = () => {
    isDropDownOpen ? closeDropDown() : openDropDown();
  };

  const handleOptionClick = (e: MouseEvent<HTMLDivElement>) => {
    setCategory(formLabel, e.currentTarget.innerText);
    setIsSelected(true);
    closeDropDown();
  };

  return (
    <div
      className="relative flex h-56 w-full cursor-pointer items-center gap-12 rounded-[4px] border-1 border-solid border-gray-2 px-12 py-8"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className={`flex-1 text-16 ${isSelected ? 'text-gray-9' : 'text-gray-4'}`}>
        {isSelected ? selectedValue : placeholder}
      </div>
      {isDropDownOpen ? (
        <Image src={arrowUpImg} alt="화살표 위 버튼" width={24} height={24} />
      ) : (
        <Image src={arrowDownImg} alt="화살표 아래 버튼" width={24} height={24} />
      )}
      {isDropDownOpen && (
        <div className="absolute right-0 top-65 z-beforeInfinite flex w-full flex-col overflow-hidden rounded-xs border-1 border-solid border-gray-3 bg-white">
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
