'use client';

import Link from 'next/link';
// import { usePathname } from 'next/navigation';
import LogoImg from '../../../public/images/img_logo.svg';
import NavLoginBox from './NavLoginBox';
import { useStore } from '@/store';

export default function NavBar() {
  const userRole = useStore((state) => state.userRole);

  // const pathname = usePathname();
  // const pathnameArr = pathname.split('/');
  // const firstPathname = pathnameArr[1];

  return (
    <nav className="py-16.5 flex-center h-60 w-screen gap-40 bg-white px-360">
      <div className="flex w-full items-center justify-between">
        <div className="flex-center">
          <Link href={'/'} className="shrink-0 px-24">
            <LogoImg className="h-27 w-120" viewBox="0 0 365 82" />
          </Link>
          {userRole === 'ADMIN' && (
            <div>
              <Link href={'/'} className="px-17 py-21 text-15 font-bold text-gray-5 focus:text-gray-8">
                챌린지 관리
              </Link>
              <Link href={'/'} className="px-17 py-21 text-15 font-bold text-gray-5 focus:text-gray-8">
                챌린지 목록
              </Link>
            </div>
          )}
        </div>
        <NavLoginBox />
      </div>
    </nav>
  );
}
