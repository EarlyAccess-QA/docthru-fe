import { StateCreator } from 'zustand';
import { ChallengeState } from './store.types';

export const createChallengeSlice: StateCreator<ChallengeState> = (set) => ({
  challengeId: 0,
  setChallengeId: (data) => set((state) => ({ ...state, challengeId: data })),
  challengeStatus: '',
  setChallengeStatus: (data) => set((state) => ({ ...state, challengeStatus: data })),
});
