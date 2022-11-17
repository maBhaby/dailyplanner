import React from 'react';
import style from './style/index.module.scss';
import cn from 'classnames';

const AvatarView = ({ email }) => {
  console.log(email);
  return <button className={cn('btn_reset', style.avatar__btn)}>ss</button>;
};

export default AvatarView;
