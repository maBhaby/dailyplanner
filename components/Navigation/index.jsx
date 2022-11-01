import React from 'react';
import Registation from '../../pages/Registation';
import { Route, Routes } from 'react-router-dom';
import DailyPlaner from '../../pages/DailyPlaner';
import Authorization from '../../pages/Authorization';
import { PATH } from '../../utils/const';

const Navigation = () => {
  return (
    <Routes>
      <Route path={PATH.REGISTER} element={<Registation />} />
      <Route path={PATH.AUTH} element={<Authorization />} />
      <Route path={PATH.MAIN} element={<DailyPlaner />} />
    </Routes>
  );
};

export default Navigation;
