import React, { useEffect, useState } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { auth } from '../../db/firebase';
import { db } from '../../db/firebase';
import Todos from '../../view/Todos';
import Loading from '../../view/Loading';


const TodosComponent = () => {
  const [todos, setTodos] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if(auth.currentUser){
      getDoc(doc(db, auth.currentUser.uid, 'tasks'))
        .then((response) => {setTodos(response.data())})
        .then(() => setIsLoading(false))
    }
  }, [auth])


  return isLoading ? <Loading /> :<Todos tasks={todos.tasks} />;
};

export default TodosComponent;
