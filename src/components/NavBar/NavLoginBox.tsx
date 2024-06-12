'use client';

import { useStore } from '@/store';
import Link from 'next/link';
import ProfileDropDown from './ProfileDropDown';
import NotificationDropDown from './NotificationDropDown';
import NavLoginBoxFallbackUI from '../FallbackUI/NavBar/NavLoginBoxFallbackUI';
import { useEffect } from 'react';

export default function NavLoginBox() {
  const { isLogin, userRole, userGrade, userName, setLogout } = useStore((state) => ({
    isLogin: state.isLogin,
    userRole: state.userRole,
    userGrade: state.userGrade,
    userName: state.userName,
    setLogout: state.setLogout,
  }));

  const notificationData = [
    {
      id: 0,
      contents:
        "‘신청한 챌린지 이름'/’챌린지 이름'에 도전한 작업물에/’챌린지 이름’의 작업물에 작성한 피드백이 수정/삭제되었어요",
      date: '2024.04.01',
    },
    {
      id: 1,
      contents: "'신청한 챌린지 이름'이 승인/거절되었어요",
      date: '2024.04.01',
    },
  ];

  useEffect(() => {
    const userAuth = window.localStorage.getItem('store');

    if (userAuth) {
      const parsedUserAuth = JSON.parse(userAuth);
      const { state } = parsedUserAuth;
      if (!Object.keys(state).includes('isLogin')) {
        const changeIsLogin = setTimeout(() => {
          setLogout();
        }, 1000);

        return () => clearTimeout(changeIsLogin);
      }
    }
    return undefined;
  }, []);

  if (typeof isLogin === 'undefined') {
    return <NavLoginBoxFallbackUI />;
  }

  return (
    <>
      {isLogin ? (
        <div className="flex w-72 flex-shrink-0 items-center justify-between">
          {userRole === 'USER' && <NotificationDropDown data={notificationData} />}
          <ProfileDropDown userName={userName} userRole={userRole} userGrade={userGrade} />
        </div>
      ) : (
        <Link
          href={'/login'}
          className="flex-center h-40 w-90 flex-shrink-0 rounded-sm border-1 border-solid border-gray-8 bg-white px-16 pb-3 pt-2 font-semibold text-gray-8"
        >
          로그인
        </Link>
      )}
    </>
  );
}
