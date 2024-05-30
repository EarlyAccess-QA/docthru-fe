'use client';

import useDropDown from '@/hooks/useDropDown';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { useStore } from '@/store';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { memo, useRef } from 'react';
import defaultAdminImg from '../../../public/icons/admin.png';
import defaultMemberImg from '../../../public/icons/member.png';
import ProfileImgFallbackUI from '../FallbackUI/NavBar/ProfileImgFallbackUI';

interface Props {
  userName?: string;
  profileImg?: string;
  userRole?: 'general' | 'professional' | 'admin';
  isPending?: boolean;
}

const ProfileDropDown = memo(({ userName, profileImg, userRole, isPending }: Props) => {
  const { isOpen: isDropDownOpen, openDropDown, closeDropDown } = useDropDown();
  const setLogout = useStore((state) => state.setLogout);

  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useOnClickOutside(containerRef, closeDropDown);

  const handleContainerClick = () => {
    if (isDropDownOpen) closeDropDown();
    else openDropDown();
  };

  const handleLogoutClick = async () => {
    closeDropDown();
    setLogout();
    router.push('/');
  };

  if (isPending) {
    return <ProfileImgFallbackUI />;
  }

  return (
    <div className="relative flex-shrink-0" ref={containerRef} onClick={handleContainerClick}>
      <div className="relative h-32 w-32 cursor-pointer overflow-hidden rounded-full">
        <Image
          src={profileImg ? profileImg : userRole === 'admin' ? defaultAdminImg : defaultMemberImg}
          alt="프로필 이미지"
          fill
          objectFit="cover"
        />
      </div>
      {isDropDownOpen && (
        <div
          className="absolute right-[-5px] top-40 flex w-152 flex-col gap-7 rounded-xs border-2 border-solid border-gray-1 bg-white px-16 pb-8 pt-16"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex w-full items-center gap-8 pb-3">
            <div className="relative h-32 w-32 overflow-hidden rounded-full">
              <Image
                src={profileImg ? profileImg : userRole === 'admin' ? defaultAdminImg : defaultMemberImg}
                alt="프로필 이미지"
                fill
                objectFit="cover"
              />
            </div>
            <div className="flex h-full flex-1 flex-col">
              <p className="text-14 font-medium text-gray-8">{userName}</p>
              <p className="text-12 font-medium text-gray-5">
                {userRole === 'admin' ? '어드민' : userRole === 'general' ? '일반' : '전문가'}
              </p>
            </div>
          </div>
          <div className="w-full border-t-2 border-solid border-gray-1"></div>
          <div className="flex w-full flex-col gap-3 pb-7 pt-6">
            {/* 추후 변경 예정 */}
            {userRole === 'admin' || <Link href={'/'}>나의 챌린지</Link>}
            <div
              onClick={handleLogoutClick}
              className="cursor-pointer text-16 font-medium text-gray-4 hover:text-gray-5"
            >
              로그아웃
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

export default ProfileDropDown;
