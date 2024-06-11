'use client';

import NavBar from '@/components/NavBar/NavBar';
import { useStore } from '@/store';

export default function LandingPage() {
  const { modals, showModal } = useStore((state) => ({
    modals: state.modals,
    showModal: state.showModal,
  }));

  return (
    <>
      <NavBar />
    </>
  );
}
