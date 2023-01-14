import React, { useEffect, useState } from 'react';

import { doc, getDoc } from "firebase/firestore";
import { db } from '../../db/firebase';
import Todos from '../../view/Todos';
import Loading from '../../view/Loading';


const TodosComponent = () => {
  const [todos, setTodos] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getDoc(doc(db, 'artemColl', '2021-11-1'))
      .then((response) => {setTodos(response.data())})
      .then(() => setIsLoading(false))
  }, [])


  return isLoading ? <Loading /> :<Todos todos={todos['todos']} />;
};

export default TodosComponent;
