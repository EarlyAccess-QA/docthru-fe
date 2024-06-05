'use client';

import { ChangeEvent, memo, useState } from 'react';

interface Props {
  status: 'full' | 'done';
  title: string;
  chipCategory: string;
  chipType: string;
  dueDate: string;
  currentMember: number;
  memberCapacity: number;
}

const Card = memo(({ status, title, chipCategory, chipType, currentMember, memberCapacity }: Props) => {
  return (
    <div className={'flex flex-col gap-16 p-24 '}>
      <div className=""></div>
      <div className=""></div>
    </div>
  );
});

export default Card;
