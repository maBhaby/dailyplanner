import React from 'react';
import style from './style/index.module.scss';
import classNames from 'classnames';

const Input = ({ label = '', className = '', name, error, ...props }) => {
  return (
    <label className={style.wrap}>
      <p className={style.title}>{label}</p>
      <input
        className={classNames(style.input, error && style.input__error, className)}
        name={name}
        {...props}
      />
      {error && <p className={style.text__error}>{error}</p>}
    </label>
  );
};

export default Input;
