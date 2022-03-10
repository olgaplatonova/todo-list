import React from 'react';
import styles from './Todo.module.scss';
import { FaTrash } from 'react-icons/fa'

const Todo = ({taskName, done, id, checkboxToggle, onRemoveTask}) => {

    //Обработчик изменения чекбокса
    const emitCheckbox = e => {
        checkboxToggle(id, e.target.checked)
    }

    const emitRemove = e => {
        onRemoveTask(id)
    }

    return (
        <>
        <ul className={styles.border}>
            <li>
                <label>
                    <input className={styles.checkbox} type={'checkbox'} onChange={emitCheckbox} checked={done} />
                    <span className={styles.fakeCheckbox}/>
                        {taskName}
                </label>
                <button onClick={emitRemove}>
                    <FaTrash />
                </button>
            </li>
        </ul>
        </>
    );
}

Todo.propTypes = {};

export default Todo;