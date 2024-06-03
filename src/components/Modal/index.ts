import ModalBody from './ModalBody';
import { default as ModalContainer, default as ModalLayout } from './ModalContainer';

const Modal = Object.assign(ModalLayout, {
  Container: ModalContainer,
  Body: ModalBody,
});

export default Modal;
