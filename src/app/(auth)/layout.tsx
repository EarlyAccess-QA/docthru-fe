import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 flex h-screen w-screen justify-center bg-gray-1">
      {children}
    </div>
  );
}
