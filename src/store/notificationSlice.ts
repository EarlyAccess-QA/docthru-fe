import { StateCreator } from 'zustand';
import { NotificationState } from './store.types';

export const createNotificationSlice: StateCreator<NotificationState> = (set) => ({
  previousNotification: 0,
  setPreviousNotification: (data) => set((state) => ({ ...state, previousNotification: data })),
});
