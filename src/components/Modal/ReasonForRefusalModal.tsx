'use client';

import { Button } from '@/components/Button';
import { useStore } from '@/store';
import Modal from '.';

export default function ReasonForRefusalModal() {
  const { clearModal, hideModal } = useStore((state) => ({
    clearModal: state.clearModal,
    hideModal: state.hideModal,
  }));

  const handleSubmit = () => {};

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
