import instance from '../axios';

export const deleteApplyChallenge = async (challengeId: number) => {
  try {
    const response = await instance.delete(`/challenges/application/${challengeId}`);
    return response.data;
  } catch (error: any) {
    return error.response;
  }
};
