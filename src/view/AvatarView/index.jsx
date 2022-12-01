import React from 'react';
import style from './style/index.module.scss';
import cn from 'classnames';
import { sliceStr } from '../../utils';

const AvatarView = ({email}) => {
  return (
    <div>
      {
        email && <button className={cn('btn_reset', style.avatar__btn)}>{sliceStr(email)}</button>
      }
    </div>
  );
};

export default AvatarView;
