'use client';

import { Button } from '@/components/Button';
import { useStore } from '@/store';
import Modal from '.';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { putRefuseChallenge } from '@/api/admin/putRefuseChallenge';
import { useParams, useRouter } from 'next/navigation';

export default function ReasonForRefusalModal() {
  const [value, setValue] = useState('');
  const router = useRouter();
  const { id } = useParams();
  const challengeId = parseInt(id as string);
  const { clearModal, hideModal } = useStore((state) => ({
    clearModal: state.clearModal,
    hideModal: state.hideModal,
  }));

  const refuseChallengeMutation = useMutation({
    mutationFn: putRefuseChallenge,
  });

  const handleSubmit = () => {
    refuseChallengeMutation.mutate(
      { challengeId: challengeId, status: 'REFUSE', reasons: value },
      {
        onSuccess: () => {
          clearModal();
          router.replace('/admin/manage');
        },
      }
    );
  };

  return (
    <Modal.Container style="reasonForRefusalModal">
      <Modal.Head
        style="flex justify-center text-18 font-medium text-gray-8"
        onClick={() => hideModal('reasonForRefusalModal')}
      >
        거절 사유
      </Modal.Head>
      <Modal.Body style="flex flex-col w-full gap-8">
        <p className="text-16 text-gray-9 ">내용</p>
        <textarea
          name="reasonForRefusal"
          id="refusalTextarea"
          placeholder="거절사유를 입력해주세요"
          className="h-219 w-full resize-none overflow-scroll rounded-[6px] border-1 border-solid border-gray-3 bg-white px-20 py-16 text-16 outline-0 placeholder:text-gray-5 focus:border-1 focus:border-solid focus:border-gray-5 focus:ring-0"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        ></textarea>
      </Modal.Body>
      <Button
        style="w-full h-48 py-[14.5px] flex justify-center rounded-sm bg-black text-white text-16 font-semibold"
        type="button"
        isLink={false}
        onClick={handleSubmit}
      >
        전송
      </Button>
    </Modal.Container>
  );
}
