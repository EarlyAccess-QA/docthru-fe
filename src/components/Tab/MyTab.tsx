import instance from '@/api/axios';
import { GetMyChallengesResponseType } from '@/types/challenges';
import { Dispatch, SetStateAction, memo, useEffect, useState } from 'react';

interface Props {
  setFetchData: Dispatch<SetStateAction<GetMyChallengesResponseType | undefined>>;
  setClickedTab: Dispatch<SetStateAction<Tab>>;
}

type Tab = '참여중인 챌린지' | '완료한 챌린지' | '신청한 챌린지';

const MyTab = memo(({ setFetchData, setClickedTab }: Props) => {
  const [activeTab, setActiveTab] = useState<Tab>('참여중인 챌린지');

  useEffect(() => {
    const getMyApplicationChallenges = async () => {
      let url = '';
      switch (activeTab) {
        case '참여중인 챌린지':
          url = '/users/me/challenges/ongoing';
          break;
        case '완료한 챌린지':
          url = '/users/me/challenges/completed';
          break;
        case '신청한 챌린지':
          url = '/users/me/challenges/application';
          break;
      }

      try {
        const response = await instance.get(url);
        setFetchData(response.data);
        setClickedTab(activeTab);
      } catch (error: any) {
        throw new Error(error.response.data.message);
      }
    };

    getMyApplicationChallenges();
  }, [activeTab]);

  return (
    <div className="flex w-full justify-start border-b-1 border-solid border-gray-3">
      {['참여중인 챌린지', '완료한 챌린지', '신청한 챌린지'].map((tab) => (
        <button
          key={tab}
          className={`px-24 py-16 ${activeTab === tab ? 'border-b-3 border-solid border-primary-black text-18 font-semibold text-gray-8' : 'text-18 font-semibold text-gray-5'}`}
          onClick={() => setActiveTab(tab as Tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
});

export default MyTab;
