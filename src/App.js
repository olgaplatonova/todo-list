import './App.module.scss';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import React, {useEffect, useState} from 'react';
import styles from './App.module.scss';

function App(compareFn) {
    const [todos, setTodos] = useState([]);

    const addTask = (task) => {
        setTodos([...todos, task]);
    }

    const checkboxToggle = (id, done) => {
        const todo = todos.find(element => element.id === id)

        if (todo) {
            const newTodos = [...todos.filter(it => it.id !== id), {...todo, done}];
            setTodos(newTodos.sort(function (a, b) {
                return a.id - b.id;
            }))
        }
    }

    const onRemoveTask = (id) => {
        setTodos([...todos.filter(it => it.id !==id)])
        console.log(id)
    }

    // useEffect(() => console.log(todos), [todos]);

    return (
        <div className={styles.App}>
            <header>
                <h1>Список дел: {todos.length}</h1>
            </header>
            <TodoForm saveToDo={addTask}/>
            <TodoList listTodo={todos} checkboxToggle={checkboxToggle} onRemoveTask={onRemoveTask}/>
        </div>
    );
}

export default App;
