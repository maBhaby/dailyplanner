import React from 'react';
import Input from '../input/Input';
import InputPass from '../input/Password';
import style from './style/form.module.scss';
import Button from '../Button';

const AuthForm = ({ formik }) => {
  const { values, handleChange, errors, handleSubmit, dirty, isValid } = formik;
  return (
    <div className={style.wrap}>
      <h3>ZAIDI</h3>
      <p>lets get started with a few simple steps!</p>
      <form onSubmit={handleSubmit} className={style.form}>
        <Input
          label="E-mail"
          name="email"
          type="email"
          onChange={handleChange}
          value={values.email}
          error={errors.email}
        />
        <InputPass
          label="Password"
          name="password"
          onChange={handleChange}
          value={values.password}
          error={errors.password}
        />
        <Button type="submit" disabled={dirty && !isValid} className={style.form__btn}>
          Get started
        </Button>
      </form>
    </div>
  );
};

export default AuthForm;
