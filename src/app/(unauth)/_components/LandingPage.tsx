'use client';

import { getChallengesTest } from '@/api/challenge/getChallengesTest';
import { Button } from '@/components/Button';
import AskForLoginModal from '@/components/Modal/AskForLoginModal';
import SearchBar from '@/components/Search/SearchBar';
import { useStore } from '@/store';
import { GetChallengesResponseType } from '@/types/challenges';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import filterImg from '../../../../public/icons/ic_filter.png';
import crossImg from '../../../../public/icons/size=m_plus.png';
import Card from '@/components/Card/Card';

export default function LandingPage() {
  const [search, setSearch] = useState<string>('');
  const { isLogin, modals, showModal } = useStore((state) => ({
    isLogin: state.isLogin,
    modals: state.modals,
    showModal: state.showModal,
  }));

  const handleApplyButtonClick = () => {
    if (isLogin) return;

    showModal('askForLoginModal');
  };

  const { data: challengesData } = useQuery<GetChallengesResponseType>({
    queryKey: ['challenges'],
    queryFn: () => getChallengesTest(),
    staleTime: 3 * 1000,
  });

  return (
    <div className="mt-24 flex w-996 flex-col gap-16">
      <header className="flex justify-between">
        <span className="text-20 font-semibold text-gray-8">챌린지 목록</span>
        <Button.IncludingImgButton
          image={crossImg}
          direction="right"
          style="rounded-[19.5px] bg-primary-black w-154 h-39 flex items-center justify-center gap-8 font-semibold text-white text-16 p-10"
          type="button"
          isLink={isLogin ? true : false}
          destination="/apply/challenge"
          width={16}
          height={16}
          onClick={handleApplyButtonClick}
        >
          신규 챌린지 신청
        </Button.IncludingImgButton>
      </header>
      <main className="flex flex-col gap-24">
        <div className="flex gap-12">
          <Button.IncludingImgButton
            image={filterImg}
            direction="right"
            style="rounded-xl py-8 px-12 border-1 border-solid border-gray-3 bg-white w-112 h-40 flex items-center justify-between text-gray-4 text-16"
            type="button"
            isLink={false}
            width={16}
            height={16}
          >
            필터
          </Button.IncludingImgButton>
          <SearchBar
            placeholder="챌린지 이름을 검색해보세요"
            setSearch={setSearch}
            style="flex h-40 flex-1 items-center gap-4 rounded-ml border-1 border-solid border-gray-2 bg-white p-8"
          />
        </div>
        <div className="flex flex-col gap-24">
          {challengesData
            ?.filter((value) => {
              if (value.content.includes(search) || value.title.includes(search)) return true;
            })
            .map((data) => (
              <Card
                key={data.id}
                title={data.title}
                chipCategory={data.field}
                chipType={data.docType}
                dueDate={data.deadLine}
                currentMember={data.participants}
                memberCapacity={data.maxParticipants}
                status={data.progress ? (data.participants === data.maxParticipants ? 'full' : 'recruit') : 'done'}
                id={data.id}
                authorName="진수"
              />
            ))}
        </div>
      </main>
      {modals[modals?.length - 1] === 'askForLoginModal' && <AskForLoginModal />}
    </div>
  );
}
