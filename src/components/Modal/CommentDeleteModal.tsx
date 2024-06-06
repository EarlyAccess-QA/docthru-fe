'use client';

import { Button } from '@/components/Button';
import { useStore } from '@/store';
import Image from 'next/image';
import Modal from '.';
import modalCheckImg from '../../../public/icons/modal_check_icon.png';

export default function CommentDeleteModal() {
  const { hideModal, clickedComment } = useStore((state) => ({
    hideModal: state.hideModal,
    clickedComment: state.clickedComment,
  }));

  const handleSubmit = () => {
    // 댓글 삭제 요청에 대한 api 콜
    // react query를 이용한 페이지 댓글 get 요청 다시하기
  };

  return (
    <Modal.Container style="doubleCheckForDeleteModal">
      <Modal.Body style="flex flex-col items-center w-full gap-24">
        <Image src={modalCheckImg} alt="모달 체크 아이콘" width={24} height={24} />
        <p className="flex justify-center text-16 font-medium text-gray-8">정말 삭제하시겠어요?</p>
      </Modal.Body>
      <div className="flex w-full justify-center gap-8">
        <Button
          style="w-90 h-40 flex justify-center items-center rounded-sm bg-white text-gray-8 text-16 font-semibold border-1 border-solid border-gray-8"
          type="button"
          isLink={false}
          onClick={() => hideModal('commentDeleteModal')}
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
