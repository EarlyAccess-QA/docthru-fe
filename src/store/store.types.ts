export interface AuthState {
  isLogin?: boolean;
  setLogin: () => void;
  setLogout: () => void;
  userRole: '' | 'USER' | 'ADMIN';
  setUserRole: (data: '' | 'USER' | 'ADMIN') => void;
  userGrade: '' | 'NOMAL' | 'EXPERT';
  setUserGrade: (data: '' | 'NOMAL' | 'EXPERT') => void;
  userName: string;
  setUserName: (data: string) => void;
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
  challengeStatus: '' | 'APPLY' | 'REFUSE' | 'WAITING';
  setChallengeStatus: (data: '' | 'APPLY' | 'REFUSE' | 'WAITING') => void;
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
  | 'askForLoginModal'
  | 'cancelApplyingChallengeModal';

export interface ModalState {
  modals: modalType[];
  showModal: (type: modalType) => void;
  hideModal: (type: modalType) => void;
  clearModal: () => void;
}

export interface NavState {
  clickedNavTab: string;
  setClickedNavTab: (data: string) => void;
}
