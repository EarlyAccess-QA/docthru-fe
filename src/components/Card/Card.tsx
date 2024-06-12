'use client';

import { memo } from 'react';
import { Chip } from '../Chip';
import CardDropDown from './CardDropDown';
import { categoryChipColor } from '@/utils/categoryChipColor';
import Image from 'next/image';
import clockImg from '../../../public/icons/clock.png';
import peopleImg from '../../../public/icons/people.png';
import { categoryChipText } from '@/utils/categoryChipText';

interface Props {
  status: 'full' | 'done' | 'recruit';
  title: string;
  chipCategory: 'NEXT' | 'WEB' | 'JS' | 'API' | 'CAREER';
  chipType: string;
  dueDate: string;
  currentMember: number;
  memberCapacity: number;
}

const Card = memo(({ status, title, chipCategory, chipType, dueDate, currentMember, memberCapacity }: Props) => {
  const chipCategoryColor = categoryChipColor(chipCategory);
  const chipCategoryText = categoryChipText(chipCategory);

  return (
    <div className={'flex w-996 flex-col gap-16 rounded-sm border-2 border-solid border-gray-8 bg-white p-24'}>
      <div className="mb-[-2px] flex items-start justify-between">
        {status === 'recruit' ? <div className="inline-flex h-32 flex-1"></div> : <Chip.Card type={status} />}
        <CardDropDown challengeId={1} />
      </div>
      <div className="flex flex-col items-start gap-14">
        <p className="text-22 font-semibold text-gray-7">{title}</p>
        <div className="flex gap-8">
          <Chip color={chipCategoryColor}>{chipCategoryText}</Chip>
          <Chip.Category>{chipType}</Chip.Category>
        </div>
      </div>
      <div className="w-full border-t-1 border-solid border-gray-2"></div>
      <div className="mt-4 flex items-center gap-12">
        <div className="flex items-center gap-4">
          <Image src={clockImg} alt="마감 시간 아이콘" width={24} height={24} />
          <p className="text-13 text-gray-6">{`${dueDate} 마감`}</p>
        </div>
        <div className="flex items-center gap-4">
          <Image src={peopleImg} alt="마감 인원 아이콘" width={24} height={24} />
          <p className="text-13 text-gray-6">{`${currentMember}/${memberCapacity} 참여 완료`}</p>
        </div>
      </div>
    </div>
  );
});

export default Card;
