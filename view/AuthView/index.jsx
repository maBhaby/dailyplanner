import React from 'react';
import styles from './style/index.module.scss';
import classNames from 'classnames';
import { teachingRegistr } from '../../assets/image';
import { PATH } from '../../utils/const';
import { Link } from 'react-router-dom';

const AuthView = ({ children, isAuth }) => {
  return (
    <div className={styles.registration}>
      <div className={styles.registration__left}>
        <div className={styles.registration__content}>
          <h2 className={styles.registration__title}>
            Connect your team <br /> with WorkFly
          </h2>
          <p className={styles.registration__subtitle}> {isAuth ? 'Sign in' : 'Registration'}</p>
          <p className={styles.registration__subtitle}>
            Already have an accout?
            <Link to={isAuth ? PATH.REGISTER : PATH.AUTH} className={styles.registration__btn}>
              {isAuth ? 'Registration' : 'Sign in'}
            </Link>
          </p>
        </div>
        <img
          width={650}
          height={500}
          src={teachingRegistr}
          alt="register"
          className={styles.registration__img}
        />
      </div>
      {children}
    </div>
  );
};

export default AuthView;
