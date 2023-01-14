import React from 'react';
import style from './style/daily.module.scss';
import dayjs from 'dayjs';
import { numToMonth } from '../../utils';
import { exit } from '../../assets/image';
import AvatarComponent from '../../components/AvatarComponent';
import { signOut } from 'firebase/auth';
import { auth } from '../../db/firebase';

const DailyHeader = () => {
  const thisMonth = numToMonth(dayjs().format('M YYYY'));

  const handelClick = () => {
    signOut(auth)
      .catch((error) => {
        alert(error + ' проблемы какие то!')
      });
  };

  return (
    <header className={style.header}>
      <h2 className={style.header__title}>{thisMonth}</h2>
      <div className={style.header__right}>
        <AvatarComponent />
        <div onClick={handelClick} className={style.header__exit}>
          <img src={exit} alt="exit" width={30} height={30} />
        </div>
      </div>
    </header>
  );
};

export default DailyHeader;
