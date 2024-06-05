'use client';

import { Button } from '@/components/Button';
import { useStore } from '@/store';
import Image from 'next/image';
import Modal from '.';
import modalCheckImg from '../../../public/icons/modal_check_icon.png';

export default function AskForLoginModal() {
  const { hideModal } = useStore((state) => ({
    hideModal: state.hideModal,
  }));

  return (
    <Modal.Container style="askForLoginModal">
      <Modal.Body style="flex flex-col items-center w-full gap-24">
        <Image src={modalCheckImg} alt="모달 체크 아이콘" width={24} height={24} />
        <p className="flex justify-center text-center text-16 font-medium text-gray-8">
          로그인이 필요한 기능이에요,
          <br /> 로그인 하시겠어요?
        </p>
      </Modal.Body>
      <Button
        style="w-153 h-40 flex justify-center items-center rounded-sm bg-black text-white text-16 font-semibold"
        type="button"
        isLink={true}
        destination="/"
        onClick={() => hideModal('askForLoginModal')}
      >
        로그인하러 가기
      </Button>
    </Modal.Container>
  );
}
