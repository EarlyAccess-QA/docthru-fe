'use client';

import { postLogin } from '@/api/auth/postLogin';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import invisibleImg from '../../../../public/icons/btn_invisible.png';
import visibleImg from '../../../../public/icons/btn_visible.png';
import logoImg from '../../../../public/images/img_logo.png';
import { useStore } from '@/store';

interface LoginFormInputs {
  email: string;
  password: string;
}

export default function LoginPage() {
  const router = useRouter();
  const { setUserAccessToken, setUserRole, setUserGrade, setUserName, setLogin } = useStore((state) => ({
    setUserAccessToken: state.setUserAccessToken,
    setUserRole: state.setUserRole,
    setUserGrade: state.setUserGrade,
    setUserName: state.setUserName,
    setLogin: state.setLogin,
  }));
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid, touchedFields },
  } = useForm<LoginFormInputs>({
    mode: 'onBlur',
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    const response = await postLogin({
      email: data.email,
      password: data.password,
    });

    if (response.status === 400) {
      setError('email', { type: 'manual', message: '이메일 또는 비밀번호를 확인해주세요.' });
      setError('password', { type: 'manual', message: '이메일 또는 비밀번호를 확인해주세요.' });
    } else {
      setUserAccessToken(response.accessToken);
      setUserName(response.nickName);
      setUserRole(response.userRole);
      setUserGrade(response.userGrade);
      setLogin();
      router.replace('/login/flow');
    }
  };

  const handleVisibleClick = () => {
    setIsVisible((prev) => !prev);
  };

  useEffect(() => {
    setIsFormValid(isValid);
  }, [isValid]);

  return (
    <div className="mt-124 flex flex-col items-center gap-40">
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

        <button
          type="submit"
          className={`flex h-48 items-center justify-center rounded-sm text-16 font-semibold text-white ${isFormValid ? 'bg-primary-black' : 'bg-gray-4'}`}
          disabled={!isFormValid}
        >
          로그인
        </button>
      </form>
      <div className="mt-[-16px] text-center">
        <p className="text-16 text-gray-6">
          회원이 아니신가요?{' '}
          <Link href="/signup">
            <span className="text-primary-black hover:underline">회원가입하기</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
