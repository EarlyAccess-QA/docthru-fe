import NavBar from '@/components/NavBar/NavBar';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="w-100vw h-100vh flex flex-col items-center justify-start bg-gray-0">
      <NavBar />
      {children}
    </div>
  );
}
