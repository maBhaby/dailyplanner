import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../db/firebase';

import Layout from '../view/Layout';
import { PATH } from '../utils/const';
import TodosComponent from '../components/Todos';
import Loading from '../view/Loading';

const DailyPlaner = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const checkAuthUser = () => {
    setLoading(true);

    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate(PATH);
      } else {
        navigate(PATH.AUTH);
      }

      setLoading(false);
    });
  };

  useEffect(() => {
    checkAuthUser();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <Layout.Daily>
      <TodosComponent />
    </Layout.Daily>
  );
};

export default DailyPlaner;
