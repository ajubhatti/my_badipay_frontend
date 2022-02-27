import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BehaviorSubject } from 'rxjs';
import "./DashBoard.css";

import { servicesService } from "../services/service.service";

const DashBoard = () => {
    const [servicesList, setServicesList] = useState([]);

    // const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    useEffect(() => {
        getListOfServices();
    }, []);

    const getListOfServices = () => {
        servicesService.getAll().then(res => {
            console.log("lst --", res)
            setServicesList(res)
        })
    }

    // const deleteTask = (id : any) => {


    //     taskService.deleteTask(id).then(res=>{
    //         var lst : any = taskList.filter((x : any) => x._id !== id);
    //         console.log("delete task ---",lst)
    //         setTaskList(lst);
    //     });
    // }

    return (
        <div>
            {/* <!-- Carousel wrapper --> */}
            <div id="carouselBasicExample" class="home-banner carousel slide carousel-fade" data-mdb-ride="carousel">
                {/* <!-- Inner --> */}
                <div class="carousel-inner">
                    {/* <!-- Single item --> */}
                    <div class="carousel-item active">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp" class="d-block w-100" alt="Sunset Over the City" />
                    </div>
                    {/* <!-- Single item --> */}
                    <div class="carousel-item">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" class="d-block w-100" alt="Canyon at Nigh" />
                    </div>
                    {/* <!-- Single item --> */}
                    <div class="carousel-item">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp" class="d-block w-100" alt="Cliff Above a Stormy Sea" />
                    </div>
                </div>
                {/* <!-- Inner --> */}

                {/* <!-- Controls --> */}
                <button class="carousel-control-prev" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            {/* <!-- Carousel wrapper --> */}
            <div className='container-xl'>
                {/* <!-- Tabs navs --> */}
                <ul class="nav nav-tabs mb-3 recharge-tab" id="ex1" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a
                            class="nav-link active"
                            id="ex1-tab-1"
                            data-mdb-toggle="tab"
                            href="#ex1-tabs-1"
                            role="tab"
                            aria-controls="ex1-tabs-1"
                            aria-selected="true"
                        >Tab 1</a
                        >
                    </li>
                    <li class="nav-item" role="presentation">
                        <a
                            class="nav-link"
                            id="ex1-tab-2"
                            data-mdb-toggle="tab"
                            href="#ex1-tabs-2"
                            role="tab"
                            aria-controls="ex1-tabs-2"
                            aria-selected="false"
                        >Tab 2</a
                        >
                    </li>
                    <li class="nav-item" role="presentation">
                        <a
                            class="nav-link"
                            id="ex1-tab-3"
                            data-mdb-toggle="tab"
                            href="#ex1-tabs-3"
                            role="tab"
                            aria-controls="ex1-tabs-3"
                            aria-selected="false"
                        >Tab 3</a
                        >
                    </li>
                </ul>
                {/* <!-- Tabs navs --> */}
                <div class="tab-content" id="ex1-content">
                    <div
                        class="tab-pane fade show active"
                        id="ex1-tabs-1"
                        role="tabpanel"
                        aria-labelledby="ex1-tab-1"
                    >
                        Tab 1 content
                    </div>
                    <div class="tab-pane fade" id="ex1-tabs-2" role="tabpanel" aria-labelledby="ex1-tab-2">
                        Tab 2 content
                    </div>
                    <div class="tab-pane fade" id="ex1-tabs-3" role="tabpanel" aria-labelledby="ex1-tab-3">
                        Tab 3 content
                    </div>
                </div>
                {/* <!-- Tabs content --> */}
            </div>
            {/* <!-- Tabs content --> */}
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
        </div>
    );
}

export default DashBoard;