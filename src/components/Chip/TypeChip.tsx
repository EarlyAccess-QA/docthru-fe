import '@/styles/tailwind.css';
import classNames from 'classnames';
import { PropsWithChildren, ReactNode, memo } from 'react';

interface Props {
  color: 'bg-[#79E16A]' | 'bg-[#FF905E]' | 'bg-[#7EB2EE]' | 'bg-[#F66E6B]' | 'bg-[#F7EA5D]';
  children: ReactNode;
}

const TypeChip = memo(({ color, children }: PropsWithChildren<Props>) => {
  const bgColor = classNames(color);

  return (
    <p
      className={`font-quantico inline-flex items-center justify-center rounded-xs px-12 py-3 text-14 font-bold text-gray-6 ${bgColor}`}
    >
      {children}
    </p>
  );
});

export default TypeChip;
