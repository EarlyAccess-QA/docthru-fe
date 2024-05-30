import { StateCreator } from 'zustand';
import { ModalState } from './store.types';

export const createModalSlice: StateCreator<ModalState> = (set) => ({
  modals: [],
  showModal: (type) => set((state) => ({ ...state, modals: [...state.modals, type] })),
  hideModal: (type) =>
    set((state) => ({ ...state, modals: [...state.modals.filter((modalType) => modalType !== type)] })),
  clearModal: () => set(() => ({ modals: [] })),
});
