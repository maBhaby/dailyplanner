import React, { useEffect, useState } from 'react';

import { doc, getDoc } from "firebase/firestore";
import { auth, db } from '../../db/firebase';
import Todos from '../../view/Todos';

const TodosComponent = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    getDoc(doc(db, 'artemColl', '2021-11-1'))
      .then((response) => setTodos(response.data()))
  }, [])


  return <Todos todos={todos} />;
};

export default TodosComponent;
