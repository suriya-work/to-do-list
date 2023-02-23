import React, { FC, ChangeEvent, useState } from 'react';
import styles from "./Header.module.css";
import TodoTask from './todotask/TodoTask';
import { ITask } from "./InterFaces"
const Header: FC = () => {
    const [task, setTask] = useState<string>("");
    const [deadline, setDeadline] = useState<number>(0);
    const [todoList, setTodoList] = useState<ITask[]>([]);
    //Function
    const changeHandel = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === 'task') {
            setTask(event.target.value)
        } else {

            setDeadline(Number(event.target.value))
        }
    }

    //AddTask
    const addTask = (): void => {
        const newTask = { taskName: task, deadline: deadline };
        setTodoList([...todoList, newTask]);
        setTask("")
        setDeadline(0)
    }

    const completeTask = (taskNameToDelete: String): void => {
        setTodoList(todoList.filter((task) => {
            return task.taskName != taskNameToDelete
        }))
    }
    return (
        <>
            <div className={styles.header}>
                <div className={styles.inputContainer}>
                    <input type="text" placeholder='Task...' name='task' value={task} onChange={changeHandel} />

                    <input type="number" placeholder='Deadline (in Days)...' name='deadline' value={deadline} onChange={changeHandel} />
                </div>
                <button onClick={addTask}>Add Task</button>

            </div>
            <div className={styles.todolist}>
                {
                    todoList.map((task: ITask, key: number) => {
                        return <TodoTask task={task} completeTask={completeTask} />
                    })
                }
            </div>
        </>

    );
};

export default Header;