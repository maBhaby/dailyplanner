import React, { useEffect } from 'react';
import style from '../style/index.module.scss';
import { auth } from '../../../../db/firebase';
import dayjs from 'dayjs';

const UserData = () => {
  const userData = [
    {
      data:auth.currentUser.email, 
      title: 'Почта'
    },{
      data:dayjs(auth.currentUser.metadata.creationTime).format('DD.M.YYYY') ,
      title: 'Дата регистрации'
    }
  ];

  return (
    <div className={style.user_data}>
      <h2 className={style.user_data__title}>Аккаунт</h2>
      <ul>
        {userData.map((el, i) => (
          <li className={style.user_data__item} key={i}>
            <span>{el.data}</span>
            <span>{el.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserData;
