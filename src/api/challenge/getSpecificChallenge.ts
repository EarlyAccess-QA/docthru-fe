import instance from '../axios';

export const getSpecificChallenge = async (challengeId: number) => {
  try {
    const response = await instance.get(`/challenges/${challengeId}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};
