import Image from 'next/image';
import { PropsWithChildren, memo } from 'react';
import outImg from '../../../public/icons/out.png';

interface Props {
  style: string;
  onClick: () => void;
}

const ModalHead = memo(({ style, onClick, children }: PropsWithChildren<Props>) => {
  return (
    <div className="flex items-center justify-between">
      <div className={`${style}`}>{children}</div>
      <Image src={outImg} alt="나가기 버튼" width={24} height={24} className="cursor-pointer" onClick={onClick} />
    </div>
  );
});

export default ModalHead;
