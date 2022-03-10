import React, {useEffect, useState} from 'react';
import styles from './TodoForm.module.scss'

let id = 0;

const TodoForm = ({ saveToDo }) => {

    const[taskName, setTaskName] = useState('');

    const submit = event => {
        event.preventDefault();
        if (taskName) {
            saveToDo({taskName, done: false, id: ++id});
            setTaskName('');
        }
    }

    return (
        <div className={styles.todo__form}>
            <form>
                <fieldset>
                <label>
                    <input
                        className={styles.todo__name}
                        placeholder={'Напишите сюда свои задачи'}
                        type={'text'}
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}/>
                </label>
                <input className={styles.button__form}
                       type={'button'}
                       value={'Сохранить'}
                       onClick={(e) => submit(e)}
                />
                </fieldset>
            </form>
        </div>
    );
}

TodoForm.propTypes = {};

export default TodoForm;