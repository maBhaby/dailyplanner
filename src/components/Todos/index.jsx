import React, { useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from '../../db/firebase';
import Todos from '../../view/Todos';

const TodosComponent = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    getDoc(doc(db, 'artemColl', '2021-11-1'))
      .then((response) => setTodos(response.data()))
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

  return <Todos todos={todos} buttonClick={handelClick} />;
};

export default TodosComponent;
