'use client';

import { Button } from '@/components/Button';
import { Chip } from '@/components/Chip';
import ConfirmSignUpModal from '@/components/Modal/ConfirmSignUpModal';
import DoubleCheckForDeleteModal from '@/components/Modal/DoubleCheckForDeleteModal';
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
            onClick={() => showModal('doubleCheckForDeleteModal')}
          >
            삭제 확인 모달
          </Button>
        </div>
      </div>
      {modals[modals?.length - 1] === 'confirmSignUpModal' && <ConfirmSignUpModal />}
      {modals[modals?.length - 1] === 'reasonForRefusalModal' && <ReasonForRefusalModal />}
      {modals[modals?.length - 1] === 'doubleCheckForDeleteModal' && <DoubleCheckForDeleteModal />}
    </>
  );
}
