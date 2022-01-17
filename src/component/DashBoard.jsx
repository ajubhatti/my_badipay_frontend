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
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 p-0'>
                    <h3 className='text-center py-5 mb-0 w-75 mx-auto'>Recharge &amp; pay bills, book flights &amp; movie tickets, open a savings account, invest in stocks &amp; mutual funds, and do a lot more.</h3>
                        <img src='./assets/images/10107.jpg' className='img-fluid' />
                    </div>
                </div>
            </div>
            <div className='container'>
                <marquee width="100%" direction="right">
                This is a sample scrolling text that has scrolls texts to right.
                <span><img src='./assets/images/smartphone.png' className='img-fluid' /></span>
                </marquee>
            </div>            
            <div className='bg-light'>
                <div className='container-xl'>
                    <div className='row py-5'>
                        <div className='col-md-6 text-right'>
                            <ul className='list-unstyled feature-list text-right'>
                                <li>
                                    <span><img src='./assets/images/smartphone.png' className='img-fluid' /></span>
                                    <p>Recharge Prepaid Mobile</p>
                                </li>
                                <li>
                                    <span><img src='./assets/images/home.png' className='img-fluid' /></span>
                                    <p>Pay rent payment</p>
                                </li>
                                <li>
                                    <span><img src='./assets/images/idea.png' className='img-fluid' /></span>
                                    <p>pay electricity bill</p>
                                </li>
                                <li>
                                    <span><img src='./assets/images/satellite.png' className='img-fluid' /></span>
                                    <p>Recharge DTH connection</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-md-6'>
                            <ul className='list-unstyled feature-list'>
                                <li>
                                    <span><img src='./assets/images/gas-cylinder.png' className='img-fluid' /></span>
                                    <p>book gas cylinder</p>
                                </li>
                                <li>
                                    <span><img src='./assets/images/credit-cards.png' className='img-fluid' /></span>
                                    <p>pay credit card bill</p>
                                </li>
                                <li>
                                    <span><img src='./assets/images/flight.png' className='img-fluid' /></span>
                                    <p>book flight tickets</p>
                                </li>
                                <li>
                                    <span><img src='./assets/images/investing.png' className='img-fluid' /></span>
                                    <p>invest in stock</p>
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