import instance from '../axios';

interface props {
  nickname: string;
  email: string;
  password: string;
}

export const postSignup = async ({ nickname, email, password }: props) => {
  try {
    const response = await instance.post('/users', {
      nickName: nickname,
      email,
      password,
    });
    return response.data;
  } catch (error: any) {
    return error.response;
  }
};
