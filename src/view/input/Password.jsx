import React, { useState } from 'react';
import style from './style/index.module.scss';
import { lock } from '../../assets/image';
import classNames from 'classnames';

const InputPass = ({ label = '', className = '', name, error, ...props }) => {
  const [enablePass, setEnabelPass] = useState(true);

  const handelClick = (e) => {
    e.preventDefault();
    setEnabelPass((prev) => !prev);
  };

  return (
    <label className={style.wrap}>
      <p className={style.title}>{label}</p>
      <input
        className={classNames(style.input, error && style.input__error, className)}
        name={name}
        type={enablePass ? 'password' : 'text'}
        {...props}
      />
      <img
        className={style.btn}
        onClick={handelClick}
        width={20}
        height={20}
        src={lock}
        alt="seePass"
      />
      {error && <p className={style.text__error}>{error}</p>}
    </label>
  );
};

export default InputPass;
