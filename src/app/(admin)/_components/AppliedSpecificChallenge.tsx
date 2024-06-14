'use client';

import { getSpecificChallenge } from '@/api/challenge/getSpecificChallenge';
import { Chip } from '@/components/Chip';
import MyWaitingDropDown from '@/components/Dropdown/MyWaitingDropDown';
import { useStore } from '@/store';
import { ChallengeType } from '@/types/challenges';
import { categoryChipColor } from '@/utils/categoryChipColor';
import { categoryChipText } from '@/utils/categoryChipText';
import { statusChipColor } from '@/utils/statusChipColor';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import clockImg from '../../../../public/icons/clock.png';
import peopleImg from '../../../../public/icons/people.png';
import clickImg from '../../../../public/icons/icon_click.png';
import { changeToFormattedDate } from '@/utils/changeToFormattedDate';
import Link from 'next/link';
import CancelApplyingChallengeModal from '@/components/Modal/CancelApplyingChallengeModal';

type chipCategory = 'NEXT' | 'WEB' | 'JS' | 'API' | 'CAREER';

export default function AppliedSpecificChallengePage() {
  const { id } = useParams();
  const challengeId = parseInt(id as string);
  const { challengeStatus, showModal, modals } = useStore((state) => ({
    challengeStatus: state.challengeStatus,
    showModal: state.showModal,
    modals: state.modals,
  }));

  const { backgroundColor: chipBackgroundColor, textColor: chipTextColor } = statusChipColor(challengeStatus);

  const { data: challengeData, error } = useQuery<ChallengeType>({
    queryKey: ['challenge', challengeId],
    queryFn: () => getSpecificChallenge(challengeId),
    staleTime: 3 * 1000,
  });

  const chipCategoryColor = categoryChipColor(challengeData?.field as chipCategory);
  const chipCategoryText = categoryChipText(challengeData?.field as chipCategory);
  const formattedDueDate = changeToFormattedDate(challengeData?.deadLine);

  if (error) {
    return <div>Error fetching challenge data.</div>;
  }

  return (
    <div className="mt-24 flex w-996 flex-col gap-16">
      <div className={'flex w-full flex-col gap-16'}>
        <div className="flex justify-between">
          <p className="flex-1 text-24 font-semibold text-gray-8">{challengeData?.title}</p>
          <MyWaitingDropDown challengeId={challengeId} />
        </div>
        <div className="flex gap-8">
          {challengeData?.field && <Chip color={chipCategoryColor}>{chipCategoryText}</Chip>}
          <Chip.Category>
            {challengeData?.docType === 'DOCUMENT' && '공식문서'}
            {challengeData?.docType === 'BLOG' && '블로그'}
          </Chip.Category>
        </div>
        <p className="w-full text-16 font-medium text-gray-7">{challengeData?.content}</p>
        <div className="mt-4 flex items-center gap-12">
          <div className="flex items-center gap-4">
            <Image src={clockImg} alt="마감 시간 아이콘" width={24} height={24} />
            <p className="text-13 text-gray-6">{`${formattedDueDate} 마감`}</p>
          </div>
          <div className="flex items-center gap-4">
            <Image src={peopleImg} alt="마감 인원 아이콘" width={24} height={24} />
            <p className="text-13 text-gray-6">{`${challengeData?.maxParticipants}명`}</p>
          </div>
        </div>
        <div className="w-full border-t-1 border-solid border-gray-2"></div>
        <p className="text-gary-8 text-18 font-semibold">원문 링크</p>
        {challengeData?.link && (
          <div className="relative h-420 w-full">
            <iframe
              src={challengeData?.link}
              title="Next.js Routing Fundamentals"
              className="h-full w-full border-none"
              loading="lazy"
            ></iframe>
            <Link href={challengeData?.link} target="_blank" className="absolute right-16 top-8">
              <div className="flex items-center justify-center gap-2 rounded-[10px] bg-gray-3 py-4 pl-10 pr-4 text-14 font-bold text-gray-7">
                링크 열기
                <Image src={clickImg} alt="클릭 아이콘" width={24} height={24} />
              </div>
            </Link>
          </div>
        )}
      </div>
      {modals[modals.length - 1] === 'cancelApplyingChallengeModal' && <CancelApplyingChallengeModal />}
    </div>
  );
}
