import instance from '../axios';

export interface Props {
  pageParam?: number | null;
}

export const getChallenges = async ({ pageParam = null }: Props) => {
  try {
    const response = await instance.get('/challenges', {
      params: {
        size: 5,
        lastIdxId: pageParam,
      },
    });
    return {
      contents: response.data.contents,
      hasNext: response.data.hasNext,
      total: response.data.total,
    };
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};
