import { createAuthSlice } from './authSlice';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { AuthState } from './store.types';

type SliceType = AuthState;

export const useStore = create<SliceType>()(
  devtools(
    persist(
      (...a) => ({
        ...createAuthSlice(...a),
      }),
      {
        name: 'store',
        partialize: (state) => ({
          userRole: state.userRole,
          isLogin: state.isLogin,
        }),
      },
    ),
  ),
);
