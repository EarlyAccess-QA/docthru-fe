import instance from '../axios';

export const getAppliedChallengesTest = async () => {
  try {
    const response = await instance.get('/challenges/application');
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};
