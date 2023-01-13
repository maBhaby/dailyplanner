import React from 'react';
import style from './style/daily.module.scss';
import dayjs from 'dayjs';
import { numToMonth } from '../../utils';
import AvatarComponent from '../../components/AvatarComponent';

const DailyHeader = () => {
  const thisMonth = numToMonth(dayjs().format('M YYYY'));

  return (
    <header className={style.header}>
      <h2 className={style.header__title}>{thisMonth}</h2>
      <div className={style.header__right}>
        <AvatarComponent />
        <div className={style.header__btn}>Выход</div>
      </div>
    </header>
  );
};

export default DailyHeader;
