'use client';

import Image from 'next/image';
import { Dispatch, KeyboardEvent, SetStateAction, memo, useState } from 'react';
import searchImg from '../../../public/icons/search.png';

interface Props {
  placeholder: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

const SearchBar = memo(({ placeholder, setSearch }: Props) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    setSearch(inputValue);
  };

  const handleSearchIconClick = () => {
    setSearch(inputValue);
  };

  return (
    <div className="flex h-40 w-375 items-center gap-4 rounded-ml border-1 border-solid border-gray-2 bg-white p-8">
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
