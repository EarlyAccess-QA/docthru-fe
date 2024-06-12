import instance from '../axios';

export const postLogout = async () => {
  try {
    const response = await instance.post('/logout');
    return response.data;
  } catch (error: any) {
    return error.response;
  }
};
