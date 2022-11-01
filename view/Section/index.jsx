import React from 'react';
import style from './style/index.module.scss';
import classNames from 'classnames';

const Section = ({ type = '', className = '', children }) => {
  return <section className={classNames(style[type], className)}>{children}</section>;
};

export default Section;
