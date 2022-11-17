import React from 'react';
import styles from './styles/index.module.scss';
import Button from '../Button';
import dayjs from 'dayjs'
// import custom



// const todos =
// console.log(dayjs.now())

const data = dayjs('2018-04-13').format('MM.DD')
console.log(data)

const Todos = ({ buttonClick }) => {
  return (
    <ul className={styles.todos}>
      <li>
        <Button handelClick={buttonClick} className={styles.out}>
          Sing out
        </Button>
        {data}
      </li>
    </ul>
  );
};

export default Todos;
