'use client';

import Image from 'next/image';
import { Dispatch, KeyboardEvent, SetStateAction, memo, useState } from 'react';
import searchImg from '../../../public/icons/search.png';

interface Props {
  placeholder: string;
  style: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

const SearchBar = memo(({ placeholder, style, setSearch }: Props) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setSearch(inputValue);
    }
  };

  const handleSearchIconClick = () => {
    setSearch(inputValue);
  };

  return (
    <div className={style}>
      <Image
        src={searchImg}
        alt="검색 아이콘"
        width={24}
        height={24}
        className="cursor-pointer"
        onClick={handleSearchIconClick}
      />
      <input
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex flex-1 items-center justify-start text-16 text-gray-8 placeholder:text-gray-4"
      />
    </div>
  );
});

export default SearchBar;
