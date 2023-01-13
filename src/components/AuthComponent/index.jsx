import React from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../db/firebase';
import { useFormik } from 'formik';
import { registartionShema } from '../../utils/validateShema/registartionShema';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../../utils/const';

import AuthView from '../../view/AuthView';
import AuthForm from '../../view/AuthView/AuthForm';

const RegistationComponent = () => {
  const navigate = useNavigate();
  const userData = {
    email: '',
    password: '',
  };

  const handelSend = ({ email, password }) => {
    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential);
          navigate(PATH.MAIN);
        })
        .catch((error) => {
          console.log(error);
          console.log(formik);
        });
    } else {
      formik.setErrors('email', 'gecnj');
    }
  };
  const formik = useFormik({
    initialValues: userData,
    validationSchema: registartionShema,
    onSubmit: handelSend,
  });

  return (
    <AuthView isAuth>
      <AuthForm formik={formik} />
    </AuthView>
  );
};

export default RegistationComponent;
