'use client';

import { Button } from '@/components/Button';
import Card from '@/components/Card/Card';
import { Chip } from '@/components/Chip';
import Comment from '@/components/Comment/Comment';
import AskForLoginModal from '@/components/Modal/AskForLoginModal';
import CommentDeleteModal from '@/components/Modal/CommentDeleteModal';
import ConfirmSignUpModal from '@/components/Modal/ConfirmSignUpModal';
import ReasonForRefusalModal from '@/components/Modal/ReasonForRefusalModal';
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
      <div className="flex w-screen flex-col items-center gap-10 px-50 py-50">
        <div className="flex gap-10">
          <Chip color="bg-[#79E16A]">Next.js</Chip>
          <Chip color="bg-[#FF905E]">API</Chip>
          <Chip color="bg-[#7EB2EE]">Career</Chip>
          <Chip color="bg-[#F66E6B]">Modern JS</Chip>
          <Chip color="bg-[#F7EA5D]">Web</Chip>
        </div>
        <div className="flex gap-10">
          <Chip.Category>공식문서</Chip.Category>
          <Chip.Category>블로그</Chip.Category>
        </div>
        <div className="flex gap-10">
          <Chip.Status backgroundColor="bg-[#fffde7]" fontColor="text-[#f2bc00]">
            승인 대기
          </Chip.Status>
          <Chip.Status backgroundColor="bg-[#Fff0f0]" fontColor="text-[#e54946]">
            신청 거절
          </Chip.Status>
          <Chip.Status backgroundColor="bg-[#dff0ff]" fontColor="text-[#4095de]">
            신청 승인
          </Chip.Status>
        </div>
        <div className="flex gap-10">
          <Button
            isLink={false}
            type="button"
            style="px-5 py-2 inline-flex justify-center items-center shrink-0 border-1 border-primary-black border-solid rounded-md"
            onClick={() => showModal('confirmSignUpModal')}
          >
            가입 확인 모달
          </Button>
          <Button
            isLink={false}
            type="button"
            style="px-5 py-2 inline-flex justify-center items-center shrink-0 border-1 border-primary-black border-solid rounded-md"
            onClick={() => showModal('reasonForRefusalModal')}
          >
            거절 사유 모달
          </Button>
          <Button
            isLink={false}
            type="button"
            style="px-5 py-2 inline-flex justify-center items-center shrink-0 border-1 border-primary-black border-solid rounded-md"
            onClick={() => showModal('commentDeleteModal')}
          >
            삭제 확인 모달
          </Button>
          <Button
            isLink={false}
            type="button"
            style="px-5 py-2 inline-flex justify-center items-center shrink-0 border-1 border-primary-black border-solid rounded-md"
            onClick={() => showModal('askForLoginModal')}
          >
            로그인 모달
          </Button>
        </div>
        <div className="flex gap-10">
          <Comment
            commentId={1}
            username="럽윈즈올"
            writtenDate="24/01/17 15:38"
            commentContent="일반적으로 개발자는 일련의 하드 스킬을 가지고 있어야 -> 일반적으로 개발자는 개인이 갖고 있는 스킬셋에 대한 전문성이 있어야 커리어에서 유망하다고 여겨집니다. 라고 바꾸는게 더 자연스러운 말일 것 같아요 ...... 일반적으로 개발자는 일련의 하드 스킬을 가지고 있어야 -> 일반적으로 개발자는 개인이 갖고 있는 스킬셋에 대한 전문성이 있어야 커리어에서 유망하다고 여겨집니다. 라고 바꾸는게 더 자연스러운 말일 것 같아요 ......"
          />
        </div>
        <div className="flex gap-10">
          <Card
            status="full"
            title="Next.js - App Router: Routing Fundamentals"
            chipCategory="Next.js"
            chipType="공식문서"
            dueDate="2024년 3월 3일"
            currentMember={5}
            memberCapacity={5}
          />
        </div>
      </div>
      {modals[modals?.length - 1] === 'confirmSignUpModal' && <ConfirmSignUpModal />}
      {modals[modals?.length - 1] === 'reasonForRefusalModal' && <ReasonForRefusalModal />}
      {modals[modals?.length - 1] === 'commentDeleteModal' && <CommentDeleteModal />}
      {modals[modals?.length - 1] === 'askForLoginModal' && <AskForLoginModal />}
    </>
  );
}
