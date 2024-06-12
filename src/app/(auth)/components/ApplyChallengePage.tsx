'use client';

import { postApplyChallenge } from '@/api/challenge/postApplyChallenge';
import { Button } from '@/components/Button';
import FormDropDown from '@/components/Dropdown/FormDropdown';
import { PostApplyChallengeType } from '@/types/challenges';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';

export default function ApplyChallengePage() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<PostApplyChallengeType>();
  const router = useRouter();

  const watchedField = watch('field');
  const watchedDocType = watch('docType');

  const onSubmit: SubmitHandler<PostApplyChallengeType> = async (data) => {
    const response = await postApplyChallenge(data);
    console.log(response);
    // router.push('/me'); // 예시로 제출 후 이동할 페이지
  };

  return (
    <div className="mt-32 flex w-590 flex-col gap-24">
      <header className="w-full text-20 font-semibold text-gray-8">신규 챌린지 신청</header>
      <form className="flex w-full flex-col gap-24" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-8">
          <label className="text-14 font-medium text-gray-9">제목</label>
          <input
            {...register('title', { required: '제목을 입력해주세요' })}
            className="h-48 w-full rounded-sm border-1 border-solid border-gray-2 bg-white px-20 py-11 text-16 text-gray-9 placeholder:text-16 placeholder:text-gray-4"
            placeholder="제목을 입력해주세요"
          />
          {errors.title && <span className="text-12 text-red">{errors.title.message}</span>}
        </div>

        <div className="flex flex-col gap-8">
          <label className="text-14 font-medium text-gray-9">원문 링크</label>
          <input
            {...register('link', { required: '원문 링크를 입력해주세요' })}
            className="h-48 w-full rounded-sm border-1 border-solid border-gray-2 bg-white px-20 py-11 text-16 text-gray-9 placeholder:text-16 placeholder:text-gray-4"
            placeholder="원문 링크를 입력해주세요"
          />
          {errors.link && <span className="text-12 text-red">{errors.link.message}</span>}
        </div>

        <div className="flex flex-col gap-8">
          <label className="text-14 font-medium text-gray-9">분야</label>
          <FormDropDown
            placeholder="카테고리"
            setCategory={setValue}
            list={['NEXT', 'WEB', 'JS', 'API', 'CAREER']}
            formLabel="field"
            selectedValue={watchedField}
          />
          {errors.field && <span className="text-red-600">{errors.field.message}</span>}
        </div>

        <div className="flex flex-col gap-8">
          <label className="text-14 font-medium text-gray-9">문서 타입</label>
          <FormDropDown
            placeholder="카테고리"
            setCategory={setValue}
            list={['DOCUMENT', 'BLOG']}
            formLabel="docType"
            selectedValue={watchedDocType}
          />
          {errors.docType && <span className="text-red-600">{errors.docType.message}</span>}
        </div>

        <div className="flex flex-col gap-8">
          <label className="text-14 font-medium text-gray-9">마감일</label>
          <input
            {...register('deadLine', { required: '마감일을 입력해주세요' })}
            className="h-48 w-full rounded-sm border-1 border-solid border-gray-2 bg-white px-20 py-11 text-16 text-gray-9 placeholder:text-16 placeholder:text-gray-4"
            placeholder="YYYY/MM/DD"
          />
          {errors.deadLine && <span className="text-12 text-red">{errors.deadLine.message}</span>}
        </div>

        <div className="mt-8 flex flex-col gap-8">
          <label className="text-14 font-medium text-gray-9">최대 인원</label>
          <input
            {...register('maxParticipants', { required: '인원을 입력해주세요' })}
            className="h-48 w-full rounded-sm border-1 border-solid border-gray-2 bg-white px-20 py-11 text-16 text-gray-9 placeholder:text-16 placeholder:text-gray-4"
            placeholder="인원을 입력해주세요"
          />
          {errors.maxParticipants && <span className="text-12 text-red">{errors.maxParticipants.message}</span>}
        </div>

        <div className="mt-8 flex flex-col gap-8">
          <label className="text-14 font-medium text-gray-9">내용</label>
          <textarea
            {...register('content', { required: '내용을 입력해주세요' })}
            className="min-h-219 w-full resize-none rounded-sm border-1 border-solid border-gray-2 bg-white px-20 py-16 text-16 text-gray-9 placeholder:text-16 placeholder:text-gray-4"
            placeholder="내용을 입력해주세요"
          />
          {errors.content && <span className="text-12 text-red">{errors.content.message}</span>}
        </div>

        <Button
          style="w-full h-48 rounded-xs bg-primary-black flex justify-center items-center text-white text-16 font-semibold mb-100"
          type="submit"
          isLink={false}
        >
          신청하기
        </Button>
      </form>
    </div>
  );
}
