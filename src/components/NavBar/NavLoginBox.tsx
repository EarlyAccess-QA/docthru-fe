'use client';

// import { useStore } from '@/store';
import Link from 'next/link';
import ProfileDropDown from './ProfileDropDown';
import NotificationDropDown from './NotificationDropDown';

export default function NavLoginBox() {
  // const { isLogin, userRole } = useStore((state) => ({
  //   isLogin: state.isLogin,
  //   userRole: state.userRole,
  // }));

  const isLogin = true;
  const userRole = 'member';

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

  return (
    <>
      {isLogin ? (
        <div className="flex w-72 flex-shrink-0 items-center justify-between">
          {userRole === 'member' && <NotificationDropDown data={notificationData} />}
          <ProfileDropDown userName={'체다치즈'} userRole="admin" />
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
