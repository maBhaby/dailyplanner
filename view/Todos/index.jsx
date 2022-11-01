import React from 'react';
import styles from './styles/index.module.scss';
import Button from '../Button';

const Todos = ({ buttonClick }) => {
  return (
    <div className={styles.todos}>
      <Button handelClick={buttonClick} className={styles.out}>
        Sing out
      </Button>
    </div>
  );
};

export default Todos;
