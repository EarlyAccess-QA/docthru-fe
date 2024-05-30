import { Chip } from '@/components/Chip';
import NavBar from '@/components/NavBar/NavBar';

export default function LandingPage() {
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
      </div>
    </>
  );
}
