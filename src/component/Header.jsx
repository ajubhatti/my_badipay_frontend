import React, { useState } from 'react';
import './Header.css';


const Header = () => {
    const [showBasic, setShowBasic] = useState(false);
    return (
        <div className='header'>
            <div className='container-fluid'>
                <div className='row top-row bg-primary text-white'>
                    <div className='col-6'>
                    <ul className="list-unstyled">
                        <li><a href="mailto:test@gmail.com"><i className='fa fa-envelop'></i> test@mail.com</a></li>
                        <li><a href="tel:+9123456789"><i className='fa fa-phone'></i> 123-456-7890</a></li>
                    </ul>
                    </div>
                    <div className='col-6 text-end text-white'>
                    <ul className="list-unstyled d-inline-block">
                        <li><a href="#"><i className='fa fa-facebook'></i></a></li>
                        <li><a href="#"><i className='fa fa-instagram'></i></a></li>
                        <li><a href="#"><i className='fa fa-twitter'></i></a></li>
                        <li><a href="#"><i className='fa fa-youtube'></i></a></li>
                    </ul>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg">
                {/* <!-- Container wrapper --> */}
                <div className="container-fluid">
                    {/* <!-- Toggle button --> */}
                    <button
                    className="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <i className="fa fa-bars"></i>
                    </button>

                    {/* <!-- Collapsible wrapper --> */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* <!-- Navbar brand --> */}
                    <a className="navbar-brand mt-2 mt-lg-0 logo" href="#">
                        <img src='assets/images/logo.jpg' className='img-fluid' />
                    </a>
                    {/* <!-- Left links --> */}
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Bussiness Opportunity</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Download</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Contact Us</a>
                        </li>
                    </ul>
                    {/* <!-- Left links --> */}
                    </div>
                    {/* <!-- Collapsible wrapper --> */}

                    {/* <!-- Right elements --> */}
                    <div className="d-flex align-items-center">
                    {/* <!-- Icon --> */}
                    <a className="wallet me-3" href="#">
                        <img src='assets/images/wallet.png' className='img-fluid' />
                    </a>
                    {/* <!-- Notifications --> */}
                    <div className="dropdown">
                        <a
                        className="text-reset me-3 dropdown-toggle hidden-arrow"
                        href="#"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                        >
                        <i className="fa fa-bell"></i>
                        <span className="badge rounded-pill badge-notification bg-danger">1</span>
                        </a>
                        <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="navbarDropdownMenuLink"
                        >
                        <li>
                            <a className="dropdown-item" href="#">Some news</a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">Another news</a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </li>
                        </ul>
                    </div>
                    {/* <!-- Avatar --> */}
                    <div className="dropdown">
                        <a
                        className="dropdown-toggle d-flex align-items-center hidden-arrow"
                        href="#"
                        id="navbarDropdownMenuAvatar"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                        >
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                            className="rounded-circle"
                            height="25"
                            alt="Black and White Portrait of a Man"
                            loading="lazy"
                        />
                        </a>
                        <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="navbarDropdownMenuAvatar"
                        >
                        <li>
                            <a className="dropdown-item" href="#">My profile</a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#" data-mdb-toggle="modal" data-mdb-target="#exampleModal">Wallet request</a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">Logout</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                    {/* <!-- Right elements --> */}
                </div>
                {/* <!-- Container wrapper --> */}
            </nav>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Wallet Request</h5>
                    <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className='form-wrap'>
                        <div className='row'>
                            <div className="col-md-4">
                                <label className="form-label" for="form12">Payment Type</label>
                            </div>
                            <div className="col-md-8">
                                <select className="form-control">
                                    <option>type 1</option>
                                    <option>type 2</option>
                                </select>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-md-4">
                                <label className="form-label" for="form12">Bank Type</label>
                            </div>
                            <div className="col-md-8">
                                <select className="form-control">
                                    <option>bank type 1</option>
                                    <option>bank type 2</option>
                                </select>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-md-4">
                                <label className="form-label" for="form12">Amount</label>
                            </div>
                            <div className="col-md-8">
                                <input type='text' className='form-control' placeholder='Enter Amount' />
                            </div>
                        </div>                        
                        <div className='row'>
                            <div className="col-md-4">
                                <label className="form-label" for="form12">Reference Number</label>
                            </div>
                            <div className="col-md-8">
                                <input type='text' className='form-control' placeholder='Enter Reference Number' />
                            </div>
                        </div>  
                        <div className='row'>
                            <div className="col-md-4">
                                <label className="form-label" for="form12">Deposit Bank</label>
                            </div>
                            <div className="col-md-8">
                                <select className="form-control">
                                    <option>Deposit bank type 1</option>
                                    <option>Deposit bank type 2</option>
                                </select>
                            </div>
                        </div> 
                        <div className='row'>
                            <div className="col-md-4">
                                <label className="form-label" for="form12">Deposit Branch</label>
                            </div>
                            <div className="col-md-8">
                                <input type='text' className='form-control' placeholder='Enter Deposit Branch' />
                            </div>
                        </div> 
                        <div className='row'>
                            <div className="col-md-4">
                                <label className="form-label" for="form12">Remark</label>
                            </div>
                            <div className="col-md-8">
                                <textarea className='form-control' placeholder='Enter Remark' rows={4} />
                            </div>
                        </div> 
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-primary">Submit</button>
                </div>
                </div>
            </div>
            </div>
            {/* <!-- Navbar --> */}
            {/* <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
            <MDBModalDialog centered>
            <MDBModalContent>
                <MDBModalHeader>
                <MDBModalTitle>Wallet Request</MDBModalTitle>
                <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                </MDBModalHeader>
                <MDBModalBody>
                <MDBRow className='align-items-center mb-3'>
                    <MDBCol lg='4' md='12'>
                        <label>Payment type</label>
                    </MDBCol>
                    <MDBCol lg='8' md='12'>   
                    <select className="browser-default custom-select">
                    <option selected="">Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    </select>                 
                        <MDBInput label='Enter payment type' type='text' />
                    </MDBCol>
                </MDBRow>
                <MDBRow className='align-items-center mb-3'>
                    <MDBCol lg='4' md='12'>
                        <label>Bank</label>
                    </MDBCol>
                    <MDBCol lg='8' md='12'>                    
                        <MDBInput label='Enter Bank' type='text' />
                    </MDBCol>
                </MDBRow>
                <MDBRow className='align-items-center mb-3'>
                    <MDBCol lg='4' md='12'>
                        <label>Amount</label>
                    </MDBCol>
                    <MDBCol lg='8' md='12'>                    
                        <MDBInput label='Enter Amount' type='text' />
                    </MDBCol>
                </MDBRow>
                <MDBRow className='align-items-center mb-3'>
                    <MDBCol lg='4' md='12'>
                        <label>Reference Number</label>
                    </MDBCol>
                    <MDBCol lg='8' md='12'>                    
                        <MDBInput label='Enter Reference Number' type='text' />
                    </MDBCol>
                </MDBRow>
                <MDBRow className='align-items-center mb-3'>
                    <MDBCol lg='4' md='12'>
                        <label>Deposite Bank</label>
                    </MDBCol>
                    <MDBCol lg='8' md='12'>                    
                        <MDBInput label='Enter Deposite Bank' type='text' />
                    </MDBCol>
                </MDBRow>
                <MDBRow className='align-items-center mb-3'>
                    <MDBCol lg='4' md='12'>
                        <label>Deposite Branch</label>
                    </MDBCol>
                    <MDBCol lg='8' md='12'>                    
                        <MDBInput label='Enter Deposite Branch' type='text' />
                    </MDBCol>
                </MDBRow>
                <MDBRow className='align-items-center mb-3'>
                    <MDBCol lg='4' md='12'>
                        <label>Remark</label>
                    </MDBCol>
                    <MDBCol lg='8' md='12'>                    
                        <MDBInput label='Enter Remark' textarea rows={4} />
                    </MDBCol>
                </MDBRow>
                </MDBModalBody>
                <MDBModalFooter>
                <MDBBtn color='light' onClick={toggleShow}>
                    Cancel
                </MDBBtn>
                <MDBBtn>Submit</MDBBtn>
                </MDBModalFooter>
            </MDBModalContent>
            </MDBModalDialog>
            </MDBModal> */}
        </div>
    )
}

export default Header;