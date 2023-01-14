import React from 'react';
import Input from '../input/Input';
import style from './style/form.module.scss';
import Button from '../Button';

const RegistationForm = ({ formik }) => {
  const { values, handleChange, errors, handleSubmit, dirty, isValid } = formik;

  const disabledButton = !isValid && values;
  return (
    <div className={style.wrap}>
      <h3>Зарегестрируйся</h3>
      <p>давайте начнем с нескольких простых шагов!</p>
      <form onSubmit={handleSubmit} className={style.form}>
        <Input
          label="E-mail"
          name="email"
          type="email"
          onChange={handleChange}
          value={values.email}
          error={errors.email}
        />
        <Input
          label="Password"
          name="password"
          type="text"
          onChange={handleChange}
          value={values.password}
          error={errors.password}
        />
        <Button type="submit" disabled={disabledButton} className={style.form__btn}>
          Get started
        </Button>
      </form>
    </div>
  );
};

export default RegistationForm;
