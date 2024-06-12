export interface ChallengeType {
  challengeId: number;
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

export interface PostChallengeType {
  title: string;
  link: string;
  field: 'NEXT' | 'WEB' | 'JS' | 'API' | 'CAREER';
  docType: 'DOCUMENT' | 'BLOG';
  deadLine: string;
  maxParticipants: number;
  content: string;
}

export type GetChallengesResponseType = ChallengeType[];
