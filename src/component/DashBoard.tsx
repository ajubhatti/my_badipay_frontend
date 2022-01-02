import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { taskService } from '../services/task.services';
import { BehaviorSubject } from 'rxjs';

const DashBoard = () => {
    const [taskList, setTaskList] : any = useState([]);

    const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    useEffect(() => {
        getListOfUsers();
    }, []);

    const getListOfUsers = () => {
        taskService.getByUserId(currentUserSubject.value._id).then(res=>{
            console.log("lst --",res)
            setTaskList(res)
        })
    }

    const deleteTask = (id : any) => {
        
       
        taskService.deleteTask(id).then(res=>{
            var lst : any = taskList.filter((x : any) => x._id !== id);
            console.log("delete task ---",lst)
            setTaskList(lst);
        });
    }

    return (
        <div>
            <h1>To Do List</h1>
            <Link 
                to={`/task/add`} 
                className="btn btn-sm btn-success mb-2">Add Task
            </Link>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th style={{ width: '30%' }}>description</th>
                        <th style={{ width: '10%' }}></th>
                    </tr>
                </thead>
                <tbody>
                    {taskList && taskList.map((list : any) =>
                        <tr key={list.id}>                            
                            <td>{list.description}</td>                            
                            <td style={{ whiteSpace: 'nowrap' }}>
                                <Link to={`edit/${list._id}`} className="btn btn-sm btn-primary mr-1">Edit</Link>
                                <button 
                                onClick={() => deleteTask(list._id)} 
                                className="btn btn-sm btn-danger btn-delete-user" disabled={list.isDeleting}>
                                    {list.isDeleting 
                                        ? <span className="spinner-border spinner-border-sm"></span>
                                        : <span>Delete</span>
                                    }
                                </button>
                            </td>
                        </tr>
                    )}
                    {!taskList &&
                        <tr>
                            <td className="text-center">
                                <div className="spinner-border spinner-border-lg align-center"></div>
                            </td>
                        </tr>
                    }
                    {taskList && !taskList.length &&
                        <tr>
                            <td className="text-center">
                                <div className="p-2">No Task To Display</div>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    );
}

export default DashBoard;