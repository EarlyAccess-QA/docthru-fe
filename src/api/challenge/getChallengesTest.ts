import instance from '../axios';

export const getChallengesTest = async () => {
  try {
    const response = await instance.get('/challenges');
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};
