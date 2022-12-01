import React from 'react'
import style from './style/index.module.scss'

const Todo = () => {
  return (
    <div className={style.todo}>
      <input className={style.todo__input} type='text' />
    </div>
  )
}

export default Todo