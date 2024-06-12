import { PostApplyChallengeType } from '@/types/challenges';
import instance from '../axios';

export const postApplyChallenge = async ({
  title,
  link,
  field,
  docType,
  deadLine,
  maxParticipants,
  content,
}: PostApplyChallengeType) => {
  const [yyyy, mm, dd] = deadLine.split('/');

  const year = `${yyyy}`;
  const month = mm.padStart(2, '0');
  const day = dd.padStart(2, '0');

  const date = new Date(`${year}-${month}-${day}T00:00:00.000Z`);

  const isoString = date.toISOString();

  try {
    const response = await instance.post('/challenges/application', {
      title,
      link,
      field,
      docType,
      deadLine: isoString,
      maxParticipants,
      content,
    });
    return response.data;
  } catch (error: any) {
    return error.response;
  }
};
