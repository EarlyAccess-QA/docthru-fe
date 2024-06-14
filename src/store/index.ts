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
          userName: state.userName,
          userRole: state.userRole,
          userGrade: state.userGrade,
          isLogin: state.isLogin,
          challengeStatus: state.challengeStatus,
          userAccessToken: state.userAccessToken,
          previousNotification: state.previousNotification,
        }),
      }
    )
  )
);
