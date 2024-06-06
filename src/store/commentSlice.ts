import { StateCreator } from 'zustand';
import { CommentState } from './store.types';

export const createCommentSlice: StateCreator<CommentState> = (set) => ({
  clickedComment: 0,
  setClickedComment: (data) => set((state) => ({ ...state, clickedComment: data })),
});
