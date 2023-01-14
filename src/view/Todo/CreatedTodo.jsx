import React from 'react'
import style from './style/index.module.scss'

const CreatedTodo = ({children}) => {
  return (
    <div className={style.created_todo}>
      {children}
    </div>
  )
}

export default CreatedTodo