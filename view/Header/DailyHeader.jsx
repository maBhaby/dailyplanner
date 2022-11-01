import React from 'react';
import style from './style/daily.module.scss';
import AvatarComponent from '../../components/AvatarComponent';

const DailyHeader = () => {
  return (
    <header className={style.header}>
      <h2>Сентябрь 2022</h2>
      <div className={style.header__right}>
        <AvatarComponent />
        <div>Settings</div>
      </div>
    </header>
  );
};

export default DailyHeader;
