import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../db/firebase';
import Todos from '../../view/Todos';

const TodosComponent = () => {
  const handelClick = () => {
    console.log('yes');
    signOut(auth)
      .then(() => {
        console.log('yes');
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return <Todos buttonClick={handelClick} />;
};

export default TodosComponent;
