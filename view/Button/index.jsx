import React from 'react';
import styles from './style/index.module.scss';
import classNames from 'classnames';

const Button = ({ className = '', theme = 'default', children, handelClick, ...props }) => {
  return (
    <button
      onClick={handelClick}
      className={classNames('btn_reset', styles[theme], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
