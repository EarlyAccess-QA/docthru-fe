import ModalBody from './ModalBody';
import { default as ModalContainer, default as ModalLayout } from './ModalContainer';
import ModalHead from './ModalHead';

const Modal = Object.assign(ModalLayout, {
  Container: ModalContainer,
  Body: ModalBody,
  Head: ModalHead,
});

export default Modal;
