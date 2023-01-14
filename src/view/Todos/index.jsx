import React, { useEffect } from 'react';
import styles from './styles/index.module.scss';
import dayjs from 'dayjs';
import Todo from '../../components/Todo';
import CreatedTodo from '../Todo/CreatedTodo';
import weekday from 'dayjs/plugin/weekday';

// const testArray = [
//   {
//     data: dayjs().weekday(1).format('D.M'),
//     day:'Пн',
//     rep:[
//       {
//         par: 1
//       }
//     ]
//   },
//   {
//     data: dayjs().weekday(2).format('D.M'),
//     day:'Вт',
//   },
//   {
//     data: dayjs().weekday(3).format('D.M'),
//     day:'Ср',
//   },
//   {
//     data: dayjs().weekday(4).format('D.M'),
//     day:'Чт',
//   },
//   {
//     data: dayjs().weekday(5).format('D.M'),
//     day:'Пт',
//   },
//   {
//     data: dayjs().weekday(6).format('D.M'),
//     day:'Сб',
//   },
// ]

const Todos = ({ tasks }) => {
  dayjs.extend(weekday);
  return (
    <ul className={styles.todos}>
      {tasks.map(({ day, todos }, i) => {
        const dayFormated = dayjs().weekday(day).format('D.M')
        return (
          <li key={i} className={styles.todos__item}>
            <div data-curr={dayFormated === dayjs().format('D.M')} className={styles.todos__data}>
              <span>{dayFormated}</span>
              <span className={styles.todos__data_day}>{dayFormated}</span>
            </div>
            <div className={styles.todos__body}>
              {todos &&
                todos.length > 0 &&
                todos.map((el, i) => {
                  console.log(el);
                  return <CreatedTodo>sssssssss sssssssssssssssss</CreatedTodo>;
                })}
              <Todo key={i} />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Todos;
