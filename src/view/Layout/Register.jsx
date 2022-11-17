import React from 'react';
import styles from './style/register.module.scss';
import RegisterHeader from '../Header/RegisterHeader';
import Section from '../Section';
import { SECTION_TYPE } from '../../utils/const';

const Register = ({ children }) => {
  return (
    <>
      <RegisterHeader />
      <main className={styles.register__main}>
        <Section type={SECTION_TYPE.REGISTER}>{children}</Section>
      </main>
    </>
  );
};

export default Register;
