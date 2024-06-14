import { StateCreator } from 'zustand';
import { NavState } from './store.types';

export const createNavSlice: StateCreator<NavState> = (set) => ({
  clickedNavTab: '챌린지 관리',
  setClickedNavTab: (data) => set((state) => ({ ...state, clickedNavTab: data })),
});
