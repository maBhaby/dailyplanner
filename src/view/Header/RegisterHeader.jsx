import React from 'react';
import { logoRegistration } from '../../assets/image';
import styles from './style/register.module.scss';

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
    </header>
  );
};

export default RegisterHeader;
