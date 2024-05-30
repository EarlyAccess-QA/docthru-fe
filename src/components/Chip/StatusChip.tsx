import '@/styles/tailwind.css';
import classNames from 'classnames';
import { PropsWithChildren, ReactNode, memo } from 'react';

interface Props {
  backgroundColor: 'bg-[#fffde7]' | 'bg-[#Fff0f0]' | 'bg-[#dff0ff]';
  fontColor: 'text-[#f2bc00]' | 'text-[#e54946]' | 'text-[#4095de]';
  children: ReactNode;
}

const StatusChip = memo(({ backgroundColor, fontColor, children }: PropsWithChildren<Props>) => {
  const bgColor = classNames(backgroundColor);
  const textColor = classNames(fontColor);

  return (
    <p
      className={`inline-flex items-center justify-center rounded-[4px] px-8 py-4 text-13 font-semibold ${bgColor} ${textColor}`}
    >
      {children}
    </p>
  );
});

export default StatusChip;
