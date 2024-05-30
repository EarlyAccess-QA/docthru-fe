import { createModalSlice } from './modalSlice';
import { createNotificationSlice } from './notificationSlice';
import { createAuthSlice } from './authSlice';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { AuthState, ModalState, NotificationState } from './store.types';

type SliceType = AuthState & NotificationState & ModalState;

export const useStore = create<SliceType>()(
  devtools(
    persist(
      (...a) => ({
        ...createAuthSlice(...a),
        ...createNotificationSlice(...a),
        ...createModalSlice(...a),
      }),
      {
        name: 'store',
        partialize: (state) => ({
          userRole: state.userRole,
          isLogin: state.isLogin,
          previousNotification: state.previousNotification,
        }),
      }
    )
  )
);
