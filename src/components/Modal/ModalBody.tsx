import { PropsWithChildren, memo } from 'react';

interface Props {
  style: string;
}

const ModalBody = memo(({ style, children }: PropsWithChildren<Props>) => {
  return <div className={`${style}`}>{children}</div>;
});

export default ModalBody;
