import React, {useEffect, useState} from 'react';
import Createtask from '../modals/createtask';
const Todolist = () => {
    const [modal, setmodal]=useState(false);
    const [taskList, setTaskList]= useState([])

    useEffect(()=>{
        let arr=localStorage.getItem("taskList")
        let obj= JSON.parse(arr)
        if(arr){
            setTaskList(obj)
        }
    },[])
    const toggle =() => {
        setmodal(!modal);
    }
    const saveTask=(taskObj)=>{
        let tempList=taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
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
                {taskList.map((obj)=><li>{obj.Name}</li>)}
            </div>
            <Createtask toggle={toggle} modal = {modal} save={saveTask}/> 
        </>
    );
};

export default Todolist;