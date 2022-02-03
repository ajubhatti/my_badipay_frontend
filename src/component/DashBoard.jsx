import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BehaviorSubject } from 'rxjs';
import "./DashBoard.css";

const DashBoard = () => {
    // const [taskList, setTaskList] : any = useState([]);

    // const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    // useEffect(() => {
    //     getListOfUsers();
    // }, []);

    // const getListOfUsers = () => {
    //     taskService.getByUserId(currentUserSubject.value._id).then(res=>{
    //         console.log("lst --",res)
    //         setTaskList(res)
    //     })
    // }

    // const deleteTask = (id : any) => {
        
       
    //     taskService.deleteTask(id).then(res=>{
    //         var lst : any = taskList.filter((x : any) => x._id !== id);
    //         console.log("delete task ---",lst)
    //         setTaskList(lst);
    //     });
    // }

    return (
        <div>
            <div className='section-space bg-light'>
            <div className='container-xl'>
                <div className='row'>
                    <div className='col-12 p-0 text-center'>
                        <h5 className='subtitle'>what we do</h5>
                        <h3 className='section-title'>Simple, fast and Hassle Free payments</h3>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6 text-right'>
                        <ul className='list-unstyled feature-list'>
                            <li>
                                <span><img src='./assets/images/smartphone.png' className='img-fluid' /></span>
                                <div>
                                    <h4>Service title</h4>
                                    <p>Recharge Prepaid Mobile</p>
                                </div>
                            </li>
                            <li>
                                <span><img src='./assets/images/home.png' className='img-fluid' /></span>
                                <div>
                                    <h4>Service title</h4>
                                    <p>Pay rent payment</p>
                                </div>
                            </li>
                            <li>
                                <span><img src='./assets/images/idea.png' className='img-fluid' /></span>
                                <div>
                                    <h4>Service title</h4>
                                    <p>pay electricity bill</p>
                                </div>
                            </li>
                            <li>
                                <span><img src='./assets/images/satellite.png' className='img-fluid' /></span>
                                <div>
                                    <h4>Service title</h4>
                                    <p>Recharge DTH connection</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='col-md-6'>
                        <ul className='list-unstyled feature-list'>
                            <li>
                                <span><img src='./assets/images/gas-cylinder.png' className='img-fluid' /></span>
                                <div>
                                    <h4>Service title</h4>
                                    <p>book gas cylinder</p>
                                </div>
                            </li>
                            <li>
                                <span><img src='./assets/images/credit-cards.png' className='img-fluid' /></span>
                                <div>
                                    <h4>Service title</h4>
                                    <p>pay credit card bill</p>
                                </div>
                            </li>
                            <li>
                                <span><img src='./assets/images/flight.png' className='img-fluid' /></span>
                                <div>
                                    <h4>Service title</h4>
                                    <p>book flight tickets</p>
                                </div>
                            </li>
                            <li>
                                <span><img src='./assets/images/investing.png' className='img-fluid' /></span>
                                <div>
                                    <h4>Service title</h4>
                                    <p>invest in stock</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
            {/* <h1>To Do List</h1>
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
            </table> */}
        </div>
    );
}

export default DashBoard;