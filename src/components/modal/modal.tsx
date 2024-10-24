import ReactDOM from 'react-dom';
import './styles.scss';
import { ModalProps } from '@src/types';

function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}

export default Modal;
