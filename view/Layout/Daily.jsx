import React from 'react';
import DailyHeader from '../Header/DailyHeader';
import Section from '../Section';
import { SECTION_TYPE } from '../../utils/const';
import style from './style/daily.module.scss';

const Daily = ({ children }) => {
  return (
    <div className={style.daily}>
      <DailyHeader />
      <main>
        <Section type={SECTION_TYPE.DAILY}>{children}</Section>
      </main>
    </div>
  );
};

export default Daily;
