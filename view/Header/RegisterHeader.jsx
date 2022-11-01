import React from 'react';
import { logoRegistration } from '../../assets/image';
import styles from './style/register.module.scss';
import classNames from 'classnames';

const RegisterHeader = () => {
  return (
    <header className={styles.header}>
      <img
        width={72}
        height={42}
        className={styles.header__img}
        src={logoRegistration}
        alt="logo"
      />
      <button className={classNames('btn_reset', styles.header__btn)}>Sing In</button>
    </header>
  );
};

export default RegisterHeader;
