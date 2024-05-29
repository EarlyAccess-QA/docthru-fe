export interface AuthState {
  isLogin?: boolean;
  setLogin: () => void;
  setLogout: () => void;
  userRole: '' | 'member' | 'admin';
  setUserRole: (data: '' | 'member' | 'admin') => void;
}
