import React from 'react';

import './styles.css';

const Modal = React.memo(({ children, onCloseModal, title }) => {
  return (
    <div className="overlay">
      <div className="modal__container">
        <div className="modal__header">
          <button onClick={onCloseModal} className="header__button">
            <i className="fas fa-arrow-left"></i>
          </button>
          <span className="header__title">{title}</span>
        </div>
        <div className="modal__content">{children}</div>
      </div>
    </div>
  );
});

export default Modal;
