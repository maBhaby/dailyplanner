import React from 'react';
import styles from './styles/index.module.scss';
import Todo from '../../components/Todo';

const testArray = [
  {
    data: '1.1',
    day:'Пн',
    todos:[
      {
        par: 1
      }
    ]
  },
  {
    data: '1.1',
    day:'Вт',
  },
  {
    data: '1.1',
    day:'Ср',
  },
  {
    data: '1.1',
    day:'Чт',
  },
  {
    data: '1.1',
    day:'Пт',
  },
  {
    data: '1.1',
    day:'Сб',
  },
]

const Todos = ({ buttonClick }) => {
  return (
    <ul className={styles.todos}>
      {
        testArray.map(({data, day, todos}, i) => (
          <li key={i} className={styles.todos__item}>
            <div className={styles.todos__data}>
              <span onClick={buttonClick}>{data}</span>
              <span className={styles.todos__data_day}>{day}</span>
            </div>
            <div className={styles.todos__body}>
              {
                todos && todos.length > 0 && 
                  todos.map((el, i) => (
                    <Todo key={i} />
                  ))
              }
            </div>
          </li>
        ))
      }
    </ul>
  );
};

export default Todos;
