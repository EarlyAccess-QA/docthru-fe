'use client';

import { memo } from 'react';

interface Props {
  contents?: string;
  date?: string;
}

const Notification = memo(({ contents, date }: Props) => {
  return (
    <div className="flex flex-col gap-5 border-b-1 border-solid border-gray-2 px-16 py-12">
      <div className="w-full text-14 text-gray-8">{contents}</div>
      <div className="w-full text-14 text-gray-4">{date}</div>
    </div>
  );
});

export default Notification;
