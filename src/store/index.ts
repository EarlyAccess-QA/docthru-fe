import { createCommentSlice } from './commentSlice';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { createAuthSlice } from './authSlice';
import { createChallengeSlice } from './challengeSlice';
import { createModalSlice } from './modalSlice';
import { createNotificationSlice } from './notificationSlice';
import { AuthState, ChallengeState, CommentState, ModalState, NotificationState } from './store.types';

type SliceType = AuthState & NotificationState & ModalState & ChallengeState & CommentState;

export const useStore = create<SliceType>()(
  devtools(
    persist(
      (...a) => ({
        ...createAuthSlice(...a),
        ...createNotificationSlice(...a),
        ...createModalSlice(...a),
        ...createChallengeSlice(...a),
        ...createCommentSlice(...a),
      }),
      {
        name: 'store',
        partialize: (state) => ({
          userId: state.userId,
          userRole: state.userRole,
          isLogin: state.isLogin,
          previousNotification: state.previousNotification,
        }),
      }
    )
  )
);
