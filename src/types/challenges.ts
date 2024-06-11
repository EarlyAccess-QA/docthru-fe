export interface ChallengeType {
  challengeId: number;
  // 다른 필요한 필드들...
}

export interface ChallengesType {
  contents: ChallengeType[];
  hasNext: boolean;
  total: number;
}
