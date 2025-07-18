import React, {useState} from 'react';
import Createtask from '../modals/createtask';
const Todolist = () => {
    const [modal, setmodal]=useState(false);
    const [taskList, setTaskList]= useState([])
    const toggle =() => {
        setmodal(!modal);
    }
    const saveTask=(taskObj)=>{
        let tempList=taskList
        tempList.push(taskObj)
        setTaskList(tempList)
        setmodal(false)
    }
    return (
        <>
            <div className='header text-center'>
                <h3>Todo List</h3>
                <button className="btn btn-primary mt-2" onClick={() => setmodal(true)}>Create Task</button>
            </div>
            <div className='task-container'>
                {taskList.map(()=><li>{Object.name}</li>)}
            </div>
            <Createtask toggle={toggle} modal = {modal} save={saveTask}/> 
        </>
    );
};

export default Todolist;