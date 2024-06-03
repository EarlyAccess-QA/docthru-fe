'use client';

import { Button } from '@/components/Button';
import { useStore } from '@/store';
import Modal from '.';

export default function ConfirmSignUpModal() {
  const { hideModal } = useStore((state) => ({
    hideModal: state.hideModal,
  }));

  return (
    <Modal.Container style="confirmSignUpModal">
      <p className="flex justify-center text-18 font-medium text-gray-8">가입이 완료되었습니다!</p>
      <Button
        isLink={true}
        destination="/"
        type="button"
        style="w-120 h-48 py-[14.5px] flex justify-center items-center shrink-0 bg-primary-black rounded-sm text-white font-semibold text-16 absolute right-28 bottom-28"
        onClick={() => hideModal('confirmSignUpModal')}
      >
        확인
      </Button>
    </Modal.Container>
  );
}
