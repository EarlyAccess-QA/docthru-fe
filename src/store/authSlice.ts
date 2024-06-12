import { StateCreator } from 'zustand';
import { AuthState } from './store.types';

export const createAuthSlice: StateCreator<AuthState> = (set) => ({
  isLogin: undefined,
  setLogin: () => set((state) => ({ ...state, isLogin: true })),
  setLogout: () => set((state) => ({ ...state, isLogin: false })),
  userRole: '',
  setUserRole: (data) => set((state) => ({ ...state, userRole: data })),
  userGrade: '',
  setUserGrade: (data) => set((state) => ({ ...state, userGrade: data })),
  userName: '',
  setUserName: (data) => set((state) => ({ ...state, userName: data })),
  userAccessToken: '',
  setUserAccessToken: (data) => set((state) => ({ ...state, userAccessToken: data })),
  userRefreshToken: '',
  setUserRefreshToken: (data) => set((state) => ({ ...state, userRefreshToken: data })),
});
