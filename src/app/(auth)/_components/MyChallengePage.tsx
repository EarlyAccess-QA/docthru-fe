'use client';

import { Button } from '@/components/Button';
import Card from '@/components/Card/Card';
import SearchBar from '@/components/Search/SearchBar';
import MyTab from '@/components/Tab/MyTab';
import { GetMyChallengesResponseType } from '@/types/challenges';
import { useState } from 'react';
import crossImg from '../../../../public/icons/size=m_plus.png';
import arrowDownImg from '../../../../public/icons/toggle_down.png';
import MyTable from '@/components/Table/MyTable';

type Tab = '참여중인 챌린지' | '완료한 챌린지' | '신청한 챌린지';

export default function MyChallengePage() {
  const [search, setSearch] = useState<string>('');
  const [fetchData, setFetchData] = useState<GetMyChallengesResponseType>();
  const [clickedTab, setClickedTab] = useState<Tab>('참여중인 챌린지');

  return (
    <div className="mt-24 flex w-996 flex-col">
      <header className="flex justify-between">
        <span className="text-20 font-semibold text-gray-8">나의 챌린지</span>
        <Button.IncludingImgButton
          image={crossImg}
          direction="right"
          style="rounded-[19.5px] bg-primary-black w-154 h-39 flex items-center justify-center gap-8 font-semibold text-white text-16 p-10"
          type="button"
          isLink={true}
          destination="/apply/challenge"
          width={16}
          height={16}
        >
          신규 챌린지 신청
        </Button.IncludingImgButton>
      </header>
      <main className="flex w-full flex-col gap-24">
        <MyTab setFetchData={setFetchData} setClickedTab={setClickedTab} />
        <div className="flex gap-12">
          <SearchBar
            placeholder="챌린지 이름을 검색해보세요"
            setSearch={setSearch}
            style="flex flex-1 h-40 w-full items-center gap-4 rounded-ml border-1 border-solid border-gray-2 bg-white p-8"
          />
          {clickedTab === '신청한 챌린지' && (
            <Button.IncludingImgButton
              image={arrowDownImg}
              direction="right"
              style="rounded-xl py-8 px-12 border-1 border-solid border-gray-3 bg-white w-140 h-40 flex items-center justify-between text-gray-4 text-16"
              type="button"
              isLink={false}
              width={24}
              height={24}
            >
              승인 대기
            </Button.IncludingImgButton>
          )}
        </div>
        {clickedTab === '신청한 챌린지' ? (
          <MyTable fetchData={fetchData} search={search} />
        ) : (
          <div className="flex flex-col gap-24">
            {typeof fetchData === 'string' ? (
              <div className="mt-150 flex w-full items-center justify-center text-16 font-medium text-gray-5">
                챌린지가 없습니다.
              </div>
            ) : (
              fetchData
                ?.filter((value) => {
                  if (value.Challenge.title.includes(search) || value.Challenge.content.includes(search)) return true;
                })
                .map((data) => (
                  <Card
                    key={data.Challenge.id}
                    title={data.Challenge.title}
                    chipCategory={data.Challenge.field}
                    chipType={data.Challenge.docType}
                    dueDate={data.Challenge.deadLine}
                    currentMember={data.Challenge.participants}
                    memberCapacity={data.Challenge.maxParticipants}
                    status={
                      data.Challenge.progress
                        ? data.Challenge.participants === data.Challenge.maxParticipants
                          ? 'full'
                          : 'recruit'
                        : 'done'
                    }
                    id={data.Challenge.id}
                    authorName="진수"
                  />
                ))
            )}
          </div>
        )}
      </main>
    </div>
  );
}
