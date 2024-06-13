'use client';

import { postSignup } from '@/api/auth/postSignup';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import invisibleImg from '../../../../public/icons/btn_invisible.png';
import visibleImg from '../../../../public/icons/btn_visible.png';
import logoImg from '../../../../public/images/img_logo.png';
import { useRouter } from 'next/navigation';

interface SignUpFormInputs {
  email: string;
  nickname: string;
  password: string;
  confirmPassword: string;
}

export default function SignUpPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, touchedFields },
  } = useForm<SignUpFormInputs>({
    mode: 'onBlur',
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);

  const password = watch('password');
  const onSubmit: SubmitHandler<SignUpFormInputs> = async (data) => {
    const response = await postSignup({
      nickname: data.nickname,
      email: data.email,
      password: data.password,
    });

    if (response === 'success') {
      // 성공 시 추가 작업 (예: 리디렉션 또는 메시지 표시)
      console.log('회원가입 성공:', response.data);
      router.replace('/login');
    } else {
      // 실패 시 추가 작업 (예: 오류 메시지 표시)
      console.error('회원가입 실패:', response);
    }
  };

  const handleVisibleClick = () => {
    setIsVisible((prev) => !prev);
  };

  const handleConfirmVisibleClick = () => {
    setIsConfirmVisible((prev) => !prev);
  };

  useEffect(() => {
    setIsFormValid(isValid);
  }, [isValid]);

  return (
    <div className="mt-100 flex flex-col items-center gap-40">
      <Link href={'/'}>
        <Image src={logoImg} alt="독스루 로고 아이콘" width={320} height={72} />
      </Link>
      <form onSubmit={handleSubmit(onSubmit)} className="flex w-518 flex-col gap-24">
        <div className="flex flex-col gap-8">
          <label className="font-medium text-gray-9">이메일</label>
          <input
            type="email"
            {...register('email', {
              required: '이메일을 입력해주세요',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: '유효한 이메일 주소를 입력해주세요',
              },
            })}
            className={`w-full rounded-sm border-1 border-solid bg-white px-20 py-11 text-16 text-gray-8 placeholder:text-16 placeholder:text-gray-4 focus:outline-none focus:ring-2 ${touchedFields && errors.email ? 'border-red focus:ring-red' : 'border-gray-2 focus:ring-gray-7'}`}
            placeholder="이메일을 입력해주세요"
          />
          {errors.email && <p className="text-12 text-red">{errors.email.message}</p>}
        </div>

        <div className="flex flex-col gap-8">
          <label className="font-medium text-gray-9">닉네임</label>
          <input
            type="text"
            {...register('nickname', {
              required: '닉네임을 입력해주세요',
            })}
            className={`w-full rounded-sm border-1 border-solid bg-white px-20 py-11 text-16 text-gray-8 placeholder:text-16 placeholder:text-gray-4 focus:outline-none focus:ring-2 ${touchedFields && errors.email ? 'border-red focus:ring-red' : 'border-gray-2 focus:ring-gray-7'}`}
            placeholder="닉네임을 입력해주세요"
          />
          {errors.nickname && <p className="text-12 text-red">{errors.nickname.message}</p>}
        </div>

        <div className="relative flex flex-col gap-8">
          <label className="font-medium text-gray-9">비밀번호</label>
          <input
            type={`${isVisible ? 'text' : 'password'}`}
            {...register('password', {
              required: '비밀번호를 입력해주세요',
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/,
                message: '비밀번호는 영문과 숫자를 포함하여 8~16자로 입력해주세요',
              },
            })}
            className={`w-full rounded-sm border-1 border-solid bg-white px-20 py-11 text-16 text-gray-8 placeholder:text-16 placeholder:text-gray-4 focus:outline-none focus:ring-2 ${touchedFields && errors.password ? 'border-red focus:ring-red' : 'border-gray-2 focus:ring-gray-7'}`}
            placeholder="비밀번호를 입력해주세요"
          />
          <Image
            src={isVisible ? visibleImg : invisibleImg}
            alt={`${isVisible ? '비밀번호 보이기 아이콘' : '비밀번호 가리기 아이콘'}`}
            className="absolute right-15 top-45 cursor-pointer"
            width={24}
            height={24}
            onClick={handleVisibleClick}
          />
          {errors.password && <p className="text-12 text-red">{errors.password.message}</p>}
        </div>

        <div className="relative flex flex-col gap-8">
          <label className="font-medium text-gray-9">비밀번호 확인</label>
          <input
            type={`${isConfirmVisible ? 'text' : 'password'}`}
            {...register('confirmPassword', {
              required: '비밀번호를 한 번 더 입력해주세요',
              validate: (value) => value === password || '비밀번호가 일치하지 않습니다',
            })}
            className={`w-full rounded-sm border-1 border-solid bg-white px-20 py-11 text-16 text-gray-8 placeholder:text-16 placeholder:text-gray-4 focus:outline-none focus:ring-2 ${touchedFields && errors.confirmPassword ? 'border-red focus:ring-red' : 'border-gray-2 focus:ring-gray-7'}`}
            placeholder="비밀번호를 한 번 더 입력해주세요"
          />
          <Image
            src={isConfirmVisible ? visibleImg : invisibleImg}
            alt={`${isConfirmVisible ? '비밀번호 보이기 아이콘' : '비밀번호 가리기 아이콘'}`}
            className="absolute right-15 top-45 cursor-pointer"
            width={24}
            height={24}
            onClick={handleConfirmVisibleClick}
          />
          {errors.confirmPassword && <p className="text-12 text-red">{errors.confirmPassword.message}</p>}
        </div>

        <button
          type="submit"
          className={`flex h-48 items-center justify-center rounded-sm text-16 font-semibold text-white ${isFormValid ? 'bg-primary-black' : 'bg-gray-4'}`}
          disabled={!isFormValid}
        >
          회원가입
        </button>
      </form>
      <div className="mt-[-16px] text-center">
        <p className="text-16 text-gray-6">
          회원이신가요?{' '}
          <Link href="/login">
            <span className="text-primary-black hover:underline">로그인하기</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
