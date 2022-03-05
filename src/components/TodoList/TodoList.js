import React from 'react';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.scss'

const TodoList = ({listTodo = [], checkboxToggle}) => {
    if (!listTodo.length) { return <div className={styles.checkboxNothing}>На сегодня дел еще нету</div> }

    return (
        <div>
                {listTodo.map(todos =>
                    <Todo key={todos.id} {...todos} checkboxToggle={checkboxToggle} />
                )}
        </div>
    )
}

export default TodoList;