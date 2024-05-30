import { createNotificationSlice } from './notificationSlice';
import { createAuthSlice } from './authSlice';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { AuthState, NotificationState } from './store.types';

type SliceType = AuthState & NotificationState;

export const useStore = create<SliceType>()(
  devtools(
    persist(
      (...a) => ({
        ...createAuthSlice(...a),
        ...createNotificationSlice(...a),
      }),
      {
        name: 'store',
        partialize: (state) => ({
          userRole: state.userRole,
          isLogin: state.isLogin,
          previousNotification: state.previousNotification,
        }),
      },
    ),
  ),
);
