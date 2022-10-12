import React from "react";
import { ITask } from "../Interfaces";


interface Props {
    task: ITask;
    deleteTask(taskToDelete: string): void;
}

const TodoTask = ({ task, deleteTask }: Props) => {
    return <div className="task">
        <div className="content">
            <span>{task.taskName}
               
            </span>
            <button onClick={() => {
                deleteTask(task.taskName)}}>Delete</button>
        </div>
     
    </div>
    
    
    
    
  
};

export default TodoTask;