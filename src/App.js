import './App.css';

import { useState } from 'react';
import Task from './components/Task';
function App() {
  const [toDoList, setTodoList] = useState([]);
  const [newTask, setnewTask] = useState("");
  const handleText = (event) => {
    setnewTask(event.target.value);
  }
  // add task
const addToList = () => {
    const task = {
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    }
    setTodoList([...toDoList, task]);
}
  // delete Task
const deleteTask = (id) => {
    
    setTodoList(toDoList.filter((task) => task.id !== id));
}
  // complete Task 
const completedTask = (id) => {
    // console.log(completedTask)
    setTodoList(toDoList.map((task) => {
      if (task.id === id) {
        return { ...task, completed:true}
      }
      return task
    }));
  }
  return (
    <div className="App">
      <div className='addTask'>
        <input onChange={handleText}/>
        <button onClick={addToList}>Add Task</button>
      </div>
      <div className='list'>
            {
          toDoList.map((task,key) => {
            return <Task
              taskName={task.taskName}
              id={task.id}
              completed = {task.completed}
              delete={deleteTask}
              completedTask={completedTask}
              
            />
          })
        }
   
      </div>
    </div>
  );
  
}
export default App;
