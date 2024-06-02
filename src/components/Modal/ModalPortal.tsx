import { ReactNode, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type PortalProps = {
  children: ReactNode;
  container?: Element | DocumentFragment;
};

function ModalPortal({ children, container }: PortalProps) {
  const [mountNode, setMountNode] = useState<Element | DocumentFragment | null>(null);

  useLayoutEffect(() => {
    setMountNode(container || document.getElementById('modal'));
  }, [container]);

  return mountNode ? createPortal(children, mountNode) : null;
}

export default ModalPortal;
