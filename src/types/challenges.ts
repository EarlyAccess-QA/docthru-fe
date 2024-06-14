export interface ChallengeType {
  id: number;
  title: string;
  link: string;
  field: 'NEXT' | 'WEB' | 'JS' | 'API' | 'CAREER';
  docType: 'DOCUMENT' | 'BLOG';
  deadLine: string;
  progress: boolean;
  participants: number;
  maxParticipants: number;
  content: string;
}

export interface ChallengesType {
  contents: ChallengeType[];
  hasNext: boolean;
  total: number;
}

// NEXT, JS, API, WEB, CAREER
// DOCUMENT, BLOG

export interface PostApplyChallengeType {
  title: string;
  link: string;
  field: 'NEXT' | 'WEB' | 'JS' | 'API' | 'CAREER';
  docType: 'DOCUMENT' | 'BLOG';
  deadLine: string;
  maxParticipants: number;
  content: string;
}

export type GetChallengesResponseType = ChallengeType[];

export interface GetMyChallengeResponseType {
  id: number;
  userId: number;
  challengeId: number;
  status: 'WAITING' | 'REFUSE' | 'APPLY';
  appliedAt: null | Date;
  refuseReasons: null | string;
  refuseAt: null | Date;
  Challenge: ChallengeType;
}

export type GetMyChallengesResponseType = GetMyChallengeResponseType[];

// admin

export interface AppliedChallenge {
  id: number;
  userId: number;
  challengeId: number;
  status: 'WAITING' | 'REFUSE' | 'APPLY';
  appliedAt: null | Date;
  refuseReasons: null | string;
  refuseAt: null | Date;
}

export type AppliedChallenges = AppliedChallenge[];
