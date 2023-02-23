import React from 'react';
import { ITask } from '../InterFaces';
import styles from "../../components/Header.module.css";

interface Props {
    task: ITask;
    completeTask(taskNameToDelete:String) : void;
}

const TodoTask = ({ task , completeTask}: Props) => {
    return (

        <div className={styles.task}>
            <div className={styles.content}>
                <span>{task.taskName}</span>
                <span>{task.deadline}</span>
            </div>
            <button onClick={() => {completeTask(task.taskName)}}>X</button>
        </div>
    );
};

export default TodoTask;