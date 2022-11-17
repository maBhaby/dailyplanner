import React from 'react';
import style from './style/daily.module.scss';
import dayjs from 'dayjs';
import { numToMonth } from '../../utils';
import AvatarComponent from '../../components/AvatarComponent';

const DailyHeader = () => {
  const thisMonth = numToMonth(dayjs().format('M'));

  return (
    <header className={style.header}>
      <h2>{thisMonth}</h2>
      <div className={style.header__right}>
        <AvatarComponent />
        <div>Settings</div>
      </div>
    </header>
  );
};

export default DailyHeader;
