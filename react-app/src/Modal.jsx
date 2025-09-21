import React from 'react';
import { genres } from './data.js';

const Modal = ({ podcast, onClose }) => {
  if (!podcast) return null;

  // Handle backdrop click to close modal
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Handle escape key to close modal
  React.useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [onClose]);

  return (
    <div className="modal" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
      </div>
    </div>
  );
};

export default Modal;