import React, {useState, FC, ChangeEvent, Component} from 'react';

import './App.css';
import './index.css';
import { ITask } from './Interfaces';
import TodoTask from './Components/TodoTask';

const App: FC = () => {
const [task, setTask] = useState<string>("");
const [todoList, setTodoList] = useState<ITask[]>([]);


const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
  setTask(event.target.value)
}

const addTask = (): void => {
  const newTask = {taskName: task}
  setTodoList([...todoList, newTask]);
  setTask("");
  
}

const deleteTask =(taskToDelete: string): void => {
  setTodoList(todoList.filter((task) => {
    return task.taskName !== taskToDelete
  }))

};

  return (
    <div className="App">
    <div className='header'>
      <div className='inputContainer'> 
      <input type='text' onChange={handleChange} value={task} />
      </div>
     
      <button onClick={addTask} >Add Task</button>
    </div>
    <div className='todoList'>
    {todoList.map((task: ITask , key: number) => {
      return <TodoTask  key={key} task={task} deleteTask={deleteTask}/>;
    })}

    </div>
 
    </div>
  );
}

export default App;
