export interface AuthState {
  isLogin?: boolean;
  setLogin: () => void;
  setLogout: () => void;
  userRole: '' | 'member' | 'admin';
  setUserRole: (data: '' | 'member' | 'admin') => void;
  userId: number;
  setUserId: (data: number) => void;
  userAccessToken: string;
  setUserAccessToken: (data: string) => void;
  userRefreshToken: string;
  setUserRefreshToken: (data: string) => void;
}

export interface NotificationState {
  previousNotification: number;
  setPreviousNotification: (data: number) => void;
}

export interface ChallengeState {
  challengeId: number;
  setChallengeId: (data: number) => void;
}

export interface CommentState {
  clickedComment: number;
  setClickedComment: (data: number) => void;
}

export type modalType =
  | 'confirmSignUpModal'
  | 'reasonForRefusalModal'
  | 'commentDeleteModal'
  | 'challengeDeleteModal'
  | 'askForLoginModal';

export interface ModalState {
  modals: modalType[];
  showModal: (type: modalType) => void;
  hideModal: (type: modalType) => void;
  clearModal: () => void;
}
