'use client';

import { useStore } from '@/store';
import { AppliedChallenges } from '@/types/challenges';
import { truncateText } from '@/utils/truncateText';
import Link from 'next/link';
import { memo } from 'react';
import { Chip } from '../Chip';

interface Props {
  fetchData: AppliedChallenges | undefined;
  search: string;
}

const AppliedTable = memo(({ fetchData, search }: Props) => {
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
          fetchData?.map((data) => {
            return (
              <div key={data.challengeId} className="flex h-48 w-full items-center">
                <div className="tableData w-68">{data.challengeId}</div>
                <div className="tableData w-84"></div>
                <div className="tableData w-84"></div>
                <Link href={`/admin/manage/challenge/${data.challengeId}`}>
                  <div className="tableData w-358" onClick={() => setChallengeStatus(data.status)}>
                    데이터 구조 문제로 어드민 쪽 applied Challenge 데이터 없음
                  </div>
                </Link>
                <div className="tableData w-94"></div>
                <div className="tableData w-94">{data.appliedAt ? data.appliedAt?.toISOString() : '데이터 없음'}</div>
                <div className="tableData w-94"></div>
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

export default AppliedTable;
