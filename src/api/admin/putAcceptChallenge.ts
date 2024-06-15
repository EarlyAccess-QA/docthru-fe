import instance from '../axios';

interface Props {
  challengeId: number;
  status: '' | 'APPLY' | 'REFUSE' | 'WAITING';
  reasons: string;
}

export const putAcceptChallenge = async ({ challengeId, status, reasons }: Props) => {
  try {
    const response = await instance.put(`/challenges/application/${challengeId}`, {
      status,
      reasons,
    });
    return response.data;
  } catch (error: any) {
    return error.response;
  }
};
