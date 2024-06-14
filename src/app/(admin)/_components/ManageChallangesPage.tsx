'use client';

import { getAppliedChallengesTest } from '@/api/admin/getAppliedChallenges';
import { Button } from '@/components/Button';
import SearchBar from '@/components/Search/SearchBar';
import AppliedTable from '@/components/Table/AppliedTable';
import { AppliedChallenges } from '@/types/challenges';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import filterImg from '../../../../public/icons/ic_filter.png';

export default function ManageChallengesPage() {
  const [search, setSearch] = useState<string>('');

  const { data: appliedChallengesData } = useQuery<AppliedChallenges>({
    queryKey: ['appliedChallenges'],
    queryFn: () => getAppliedChallengesTest(),
    staleTime: 3 * 1000,
  });

  return (
    <div className="mt-24 flex w-996 flex-col gap-16">
      <span className="text-20 font-semibold text-gray-8">챌린지 목록</span>
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
        <AppliedTable fetchData={appliedChallengesData} search={search} />
      </main>
    </div>
  );
}
