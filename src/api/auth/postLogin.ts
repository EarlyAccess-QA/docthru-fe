import instance from '../axios';

interface props {
  email: string;
  password: string;
}

export const postLogin = async ({ email, password }: props) => {
  try {
    const response = await instance.post('/login', {
      email,
      password,
    });
    return response.data;
  } catch (error: any) {
    return error.response;
  }
};
