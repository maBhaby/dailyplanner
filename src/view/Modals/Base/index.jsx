import React from 'react';
import ReactDOM from 'react-dom';
import style from './style/index.module.scss';
import cn from 'classnames';
import { observer } from 'mobx-react-lite';

const BaseModals = observer(({ closeModal, children, currenModal }) => {
  const dontCloseModal = (e) => {
    e.stopPropagation();
  };
  return ReactDOM.createPortal(
    <div
      onClick={closeModal}
      className={cn({
        [style.base_modal]: true,
      })}
    >
      <div
        className={cn({ [style[`base_modal__${currenModal}`]]: !!currenModal })}
        onClick={dontCloseModal}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
});

export default BaseModals;
