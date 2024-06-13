import { getChallenges } from '@/api/challenge/getChallenges';
import { ChallengesType } from '@/types/challenges';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useChallenges = () => {
  return useInfiniteQuery<ChallengesType, Error, ChallengesType, string[], number | null>({
    queryKey: ['challenges'],
    queryFn: async ({ pageParam }) => {
      return await getChallenges({ pageParam });
    },
    getNextPageParam: (lastPage) => {
      return lastPage.hasNext ? lastPage.contents[lastPage.contents.length - 1].id : undefined;
    },
    initialPageParam: null,
  });
};
