import { useState,useEffect } from "react";
import {Pomodoro,Progress,TasksList,Details} from './comps'
import unChecked from './assets/circle.svg'
import Checked from './assets/circle-check.svg'
const App = () => {
  const 
    [task, setTask] = useState(''),
    [groub, setGroub] = useState('today'),
    [taskList, setTaskList] = useState([]),
    [groubList, setGroubList] = useState([{title:"today",id:0}]),
    [isChecked,setCheck] = useState(unChecked),
    [selectedTask, setSelect] = useState({}),
     input = document.getElementById('input')

    //sould add porgerss states over there
    
  const inputTask = (e)=>{
    setTask(e.target.value)
  }

  const addTask =()=>{

    if (task.length>0) {
      setCheck(unChecked)
      taskList.push({title:task, groub:groub,checked:unChecked , id:taskList.length})
      input.value = ""
      setTask('')
    } 
  }
 
  const inputGroub = (e)=>{
    setGroub(e.target.value)
  }

  const addGroub =()=>{
    groubList.push(groub)
  }
  const handleCheck=(id)=>{
    if (isChecked ==unChecked) {
      setCheck(Checked)
      taskList[id].Checked = isChecked
      console.log(taskList[id].checked)
      
    } else {
      setCheck(unChecked)
      taskList[id].Checked =isChecked
      console.log(taskList[id].Checked)
    }
  }

  const handleSelect = (e,id)=>{
    const selected = taskList.find(task=>task.id === id)
    console.log(id)

  }
  return ( 
    <>
    <p className="text-2xl font-bold underline text-cyan-400">hello world</p>
    <img src={isChecked} alt="" onClick={()=>handleCheck(0)}/>
     <TasksList
        groubList={groubList}
        taskList={taskList}
        tasks={task}
        groub={groub}
        inputTask={inputTask}
        inputGroub={inputGroub}
        addGroub={addGroub}
        addTask={addTask}
        checkbox = {isChecked}
        handleCheck={handleCheck}
        handleSelect={handleSelect}
     />
     <Details task={selectedTask}/>
     <Pomodoro tasks ={taskList}/>
     <Progress />
    </>
   );
}
 
export default App;