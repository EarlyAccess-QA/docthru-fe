'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LogoImg from "../../../public/images/img_logo.svg";
import NavLoginBox from './NavLoginBox';

export default function NavBar() {
  const pathname = usePathname();
  const pathnameArr = pathname.split('/');
  const firstPathname = pathnameArr[1];

  

  return (
    <nav className="py-16.5 flex-center h-60 w-screen gap-40 bg-white px-10">
      <div className="flex w-800 items-center justify-between ">
        <Link href={'/'} className="shrink-0">
          <LogoImg className="h-27 w-120" viewBox="0 0 365 82" />
        </Link>
        <NavLoginBox />
      </div>
    </nav>
  );
}
