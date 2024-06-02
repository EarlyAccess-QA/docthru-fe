import '@/styles/tailwind.css';
import Link from 'next/link';
import { PropsWithChildren, memo } from 'react';

interface Props {
  destination?: string;
  style: string;
  type?: 'button' | 'reset' | 'submit';
  isLink: boolean;
  onClick?: () => void;
}

// destination: 사용할 때 props에 이동할 Route를 string 형태로 넣어주세요.
// style: tailwindCSS를 넣어주세요.
const PrimaryButton = memo(({ destination, style, children, type, isLink, onClick }: PropsWithChildren<Props>) => {
  return (
    <>
      {isLink ? (
        <Link href={`${destination}`}>
          <button className={`${style}`} type={type} onClick={onClick}>
            {children}
          </button>
        </Link>
      ) : (
        <button className={`${style}`} type={type} onClick={onClick}>
          {children}
        </button>
      )}
    </>
  );
});

export default PrimaryButton;
