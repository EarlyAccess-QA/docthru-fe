import '@/styles/tailwind.css';
import Image from 'next/image';
import { memo } from 'react';
import peopleImg from '../../../public/icons/card_people.png';
import clockImg from '../../../public/icons/card_clock.png';

interface Props {
  type: 'full' | 'done';
}

const CardChip = memo(({ type }: Props) => {
  return (
    <>
      {type === 'full' ? (
        <div className="inline-flex items-center gap-4 rounded-sm bg-gray-2 px-12 py-8 text-13 font-medium text-gray-8">
          <Image src={peopleImg} alt="사람들 아이콘" width={16} height={16} />
          모집이 완료된 상태에요
        </div>
      ) : (
        <div className="inline-flex items-center gap-4 rounded-sm bg-gray-8 px-12 py-8 text-13 font-medium text-white">
          <Image src={clockImg} alt="시계 아이콘" width={16} height={16} />
          챌린지가 마감되었어요
        </div>
      )}
    </>
  );
});

export default CardChip;
