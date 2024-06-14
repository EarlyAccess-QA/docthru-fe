'use client';

import { GetMyChallengesResponseType } from '@/types/challenges';
import { truncateText } from '@/utils/truncateText';
import { memo } from 'react';
import { Chip } from '../Chip';
import Link from 'next/link';
import { useStore } from '@/store';

interface Props {
  fetchData: GetMyChallengesResponseType | undefined;
  search: string;
}

const MyTable = memo(({ fetchData, search }: Props) => {
  const setChallengeStatus = useStore((state) => state.setChallengeStatus);

  return (
    <div className="flex w-full flex-col gap-8">
      <div className="flex h-36 items-center overflow-hidden rounded-xs bg-gray-8">
        <div className="tableHead w-68">No.</div>
        <div className="tableHead w-84">분야</div>
        <div className="tableHead w-84">카테고리</div>
        <div className="tableHead w-358">챌린지 제목</div>
        <div className="tableHead w-94">모집인원</div>
        <div className="tableHead w-94">신청일</div>
        <div className="tableHead w-94">마감 기한</div>
        <div className="tableHead w-120">상태</div>
      </div>
      <div className="flex w-full flex-col bg-white">
        {typeof fetchData === 'string' ? (
          <div className="mt-150 flex w-full items-center justify-center text-16 font-medium text-gray-5">
            챌린지가 없습니다.
          </div>
        ) : (
          fetchData
            ?.filter((value) => {
              if (value.Challenge.title.includes(search) || value.Challenge.content.includes(search)) return true;
            })
            .map((data) => {
              return (
                <div key={data.Challenge.id} className="flex h-48 w-full items-center">
                  <div className="tableData w-68">{data.Challenge.id}</div>
                  <div className="tableData w-84">{data.Challenge.docType === 'BLOG' ? '블로그' : '공식문서'}</div>
                  <div className="tableData w-84">{data.Challenge.field}</div>
                  <Link href={`/me/challenge/${data.challengeId}`}>
                    <div className="tableData w-358" onClick={() => setChallengeStatus(data.status)}>
                      {truncateText(data.Challenge.title)}
                    </div>
                  </Link>
                  <div className="tableData w-94">{data.Challenge.maxParticipants}</div>
                  <div className="tableData w-94">{data.appliedAt ? data.appliedAt?.toISOString() : '데이터 없음'}</div>
                  <div className="tableData w-94">{data.Challenge.deadLine.substring(0, 10)}</div>
                  <div className="tableData w-120">
                    {data.status === 'APPLY' && (
                      <Chip.Status backgroundColor="bg-[#dff0ff]" fontColor="text-[#4095de]">
                        신청 승인
                      </Chip.Status>
                    )}
                    {data.status === 'REFUSE' && (
                      <Chip.Status backgroundColor="bg-[#Fff0f0]" fontColor="text-[#e54946]">
                        승인 거절
                      </Chip.Status>
                    )}
                    {data.status === 'WAITING' && (
                      <Chip.Status backgroundColor="bg-[#fffde7]" fontColor="text-[#f2bc00]">
                        승인 대기
                      </Chip.Status>
                    )}
                  </div>
                </div>
              );
            })
        )}
      </div>
    </div>
  );
});

export default MyTable;
