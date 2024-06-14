'use client';

import { deleteApplyChallenge } from '@/api/challenge/deleteApplyChallenge';
import { Button } from '@/components/Button';
import { useStore } from '@/store';
import { useMutation } from '@tanstack/react-query';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Modal from '.';
import modalCheckImg from '../../../public/icons/modal_check_icon.png';

export default function CancelApplyingChallengeModal() {
  const { hideModal, clearModal, challengeId } = useStore((state) => ({
    hideModal: state.hideModal,
    clearModal: state.clearModal,
    challengeId: state.challengeId,
  }));
  const router = useRouter();

  const cancelApplyingMutation = useMutation({
    mutationFn: deleteApplyChallenge,
  });

  const handleSubmit = () => {
    // 챌린지 지원 취소 요청에 대한 api 콜
    cancelApplyingMutation.mutate(challengeId, {
      onSuccess: () => {
        clearModal();
        router.replace('/me');
      },
    });
  };

  return (
    <Modal.Container style="doubleCheckForDeleteModal">
      <Modal.Body style="flex flex-col items-center w-full gap-24">
        <Image src={modalCheckImg} alt="모달 체크 아이콘" width={24} height={24} />
        <p className="flex justify-center text-16 font-medium text-gray-8">정말 취소하시겠어요?</p>
      </Modal.Body>
      <div className="flex w-full justify-center gap-8">
        <Button
          style="w-90 h-40 flex justify-center items-center rounded-sm bg-white text-gray-8 text-16 font-semibold border-1 border-solid border-gray-8"
          type="button"
          isLink={false}
          onClick={() => hideModal('cancelApplyingChallengeModal')}
        >
          아니오
        </Button>
        <Button
          style="w-90 h-40 flex justify-center items-center rounded-sm bg-black text-white text-16 font-semibold"
          type="button"
          isLink={false}
          onClick={handleSubmit}
        >
          네
        </Button>
      </div>
    </Modal.Container>
  );
}
