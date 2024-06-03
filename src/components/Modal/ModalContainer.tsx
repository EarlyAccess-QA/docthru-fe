'use client';

import '@/styles/tailwind.css';
import { PropsWithChildren, memo } from 'react';
import { useStore } from '@/store';
import { useRouter } from 'next/navigation';
import ModalPortal from './ModalPortal';
import useNotScroll from '@/hooks/useNotScroll';

interface Props {
  style: string;
  type?: string;
}

const ModalContainer = memo(({ style, type, children }: PropsWithChildren<Props>) => {
  const { modals, hideModal } = useStore((state) => ({
    modals: state.modals,
    hideModal: state.hideModal,
  }));
  const router = useRouter();

  useNotScroll();

  const handleOutsideClick = () => {
    if (type === 'back') {
      hideModal(modals[modals.length - 1]);
      router.replace('/');
    } else hideModal(modals[modals.length - 1]);
  };

  if (!modals.length) {
    return null;
  }

  return (
    <ModalPortal>
      <div
        className="fixed bottom-0 left-0 right-0 top-0 z-infinite flex h-full w-screen items-center justify-center bg-[#00000066]"
        onClick={handleOutsideClick}
      >
        <div className={`${style}`} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </ModalPortal>
  );
});

export default ModalContainer;
