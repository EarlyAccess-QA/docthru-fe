export interface AuthState {
  isLogin?: boolean;
  setLogin: () => void;
  setLogout: () => void;
  userRole: '' | 'member' | 'admin';
  setUserRole: (data: '' | 'member' | 'admin') => void;
}

export interface NotificationState {
  previousNotification: number;
  setPreviousNotification: (data: number) => void;
}

export type modalType =
  | 'confirmSignUpModal'
  | 'reasonForRefusalModal'
  | 'doubleCheckForDeleteModal'
  | 'askForLoginModal';

export interface ModalState {
  modals: modalType[];
  showModal: (type: modalType) => void;
  hideModal: (type: modalType) => void;
  clearModal: () => void;
}
