import { createNavSlice } from './navSlice';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { createAuthSlice } from './authSlice';
import { createChallengeSlice } from './challengeSlice';
import { createCommentSlice } from './commentSlice';
import { createModalSlice } from './modalSlice';
import { createNotificationSlice } from './notificationSlice';
import { AuthState, ChallengeState, CommentState, ModalState, NavState, NotificationState } from './store.types';

type SliceType = AuthState & NotificationState & ModalState & ChallengeState & CommentState & NavState;

export const useStore = create<SliceType>()(
  devtools(
    persist(
      (...a) => ({
        ...createAuthSlice(...a),
        ...createNotificationSlice(...a),
        ...createModalSlice(...a),
        ...createChallengeSlice(...a),
        ...createCommentSlice(...a),
        ...createNavSlice(...a),
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
