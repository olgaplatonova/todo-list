import React from 'react';
import PropTypes from 'prop-types';
import styles from './Todo.module.scss'

const Todo = ({taskName, done, deleted, id, checkboxToggle}) => {

    //Обработчик изменения чекбокса
    const emitCheckbox = e => {
        checkboxToggle(id, e.target.checked)
        console.log(e.target.checked)
    }

    return (
        <>
        <ul className={styles.border}>
            <li>
                <label>
                    <input className={styles.checkbox} type={'checkbox'} onChange={emitCheckbox}  />
                    <span className={styles.fakeCheckbox}/>
                        {taskName}
                </label>
            </li>
        </ul>
        </>
    );
}

Todo.propTypes = {};

export default Todo;