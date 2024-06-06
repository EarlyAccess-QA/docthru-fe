'use client';

import useDropDown from '@/hooks/useDropDown';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import Image from 'next/image';
import { Dispatch, SetStateAction, memo, useRef } from 'react';
import kebabImg from '../../../public/icons/Meatballs_menu.png';
import { Button } from '../Button';
import { useStore } from '@/store';

interface Props {
  commentId: number;
  setIsModifying: Dispatch<SetStateAction<boolean>>;
  isModifying: boolean;
  content: string;
  setContent: Dispatch<SetStateAction<string>>;
  setTempContent: Dispatch<SetStateAction<string>>;
  tempContent: string;
}

const CommentDropDown = memo(
  ({ commentId, setIsModifying, isModifying, content, setContent, tempContent, setTempContent }: Props) => {
    const { isOpen: isDropDownOpen, openDropDown, closeDropDown } = useDropDown();
    const containerRef = useRef<HTMLDivElement>(null);

    useOnClickOutside(containerRef, closeDropDown);

    const { showModal, setClickedComment } = useStore((state) => ({
      showModal: state.showModal,
      setClickedComment: state.setClickedComment,
    }));

    const handleContainerClick = () => {
      isDropDownOpen ? closeDropDown() : openDropDown();
    };

    const handleModifyClick = () => {
      setIsModifying(true);
      closeDropDown();
    };

    const handleDeleteClick = () => {
      setClickedComment(commentId);
      showModal('commentDeleteModal');
    };

    const handleCancelClick = () => {
      setTempContent(content);
      setIsModifying(false);
    };

    const handleModifyingCompleteClick = () => {
      // react query를 이용한 코멘트 수정 api 요청 로직 추가
      setContent(tempContent);
      setIsModifying(false);
    };

    return (
      <>
        {isModifying ? (
          <div className="flex gap-4">
            <Button
              style="text-gray-5 text-14 font-semibold pl-20 pr-19 pt-7 pb-8"
              type="button"
              isLink={false}
              onClick={handleCancelClick}
            >
              취소
            </Button>
            <Button
              style="text-white w-80 h-32 text-14 font-semibold flex justify-center items-center bg-primary-black rounded-[10px]"
              type="button"
              isLink={false}
              onClick={handleModifyingCompleteClick}
            >
              수정 완료
            </Button>
          </div>
        ) : (
          <div
            className="relative flex h-24 w-24 cursor-pointer items-start"
            ref={containerRef}
            onClick={handleContainerClick}
          >
            <Image src={kebabImg} alt="케밥 버튼" width={24} height={24} />
            {isDropDownOpen && (
              <div className="absolute right-5 top-30 flex h-86 w-139 flex-col overflow-hidden rounded-xs border-1 border-solid border-gray-3 bg-white">
                <div
                  className="flex flex-1 items-center justify-center border-b-1 border-solid border-gray-3 bg-white text-16 text-gray-5 hover:bg-gray-2"
                  onClick={handleModifyClick}
                >
                  수정하기
                </div>
                <div
                  className="flex flex-1 items-center justify-center bg-white text-16 text-gray-5 hover:bg-gray-2"
                  onClick={handleDeleteClick}
                >
                  삭제하기
                </div>
              </div>
            )}
          </div>
        )}
      </>
    );
  }
);

export default CommentDropDown;
