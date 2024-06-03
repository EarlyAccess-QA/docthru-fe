import { StateCreator } from 'zustand';
import { AuthState } from './store.types';

export const createAuthSlice: StateCreator<AuthState> = (set) => ({
  isLogin: undefined,
  setLogin: () => set((state) => ({ ...state, isLogin: true })),
  setLogout: () => set((state) => ({ ...state, isLogin: false })),
  userRole: '',
  setUserRole: (data) => set((state) => ({ ...state, userRole: data })),
  userId: 0,
  setUserId: (data) => set((state) => ({ ...state, userId: data })),
});
