import React, {useEffect} from 'react';
import { signOut } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../db/firebase';
import Todos from '../../view/Todos';

const TodosComponent = () => {
  useEffect(() => {
    setDoc(doc(db, 'artemColl/2021-11-1'), {
      todos:[
        'test'
      ]
    })
  }, [])

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
