import React from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../db/firebase';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { registartionShema } from '../../utils/validateShema/registartionShema';
import { PATH } from '../../utils/const';

import AuthView from '../../view/AuthView';
import RegistationForm from '../../view/AuthView/RegistationForm';

const RegistationComponent = () => {
  const navigate = useNavigate();
  const userData = {
    email: '',
    password: '',
  };

  const handelSend = ({ email, password }) => {
    if (email && password) {
      createUserWithEmailAndPassword(auth, email, password)
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
    <AuthView>
      <RegistationForm formik={formik} />
    </AuthView>
  );
};

export default RegistationComponent;
