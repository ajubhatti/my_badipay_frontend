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
            <nav class="navbar navbar-expand-lg">
                {/* <!-- Container wrapper --> */}
                <div class="container-fluid">
                    {/* <!-- Toggle button --> */}
                    <button
                    class="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <i class="fa fa-bars"></i>
                    </button>

                    {/* <!-- Collapsible wrapper --> */}
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* <!-- Navbar brand --> */}
                    <a class="navbar-brand mt-2 mt-lg-0 logo" href="#">
                        <img src='assets/images/logo.jpg' className='img-fluid' />
                    </a>
                    {/* <!-- Left links --> */}
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Services</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Bussiness Opportunity</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Download</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Contact Us</a>
                        </li>
                    </ul>
                    {/* <!-- Left links --> */}
                    </div>
                    {/* <!-- Collapsible wrapper --> */}

                    {/* <!-- Right elements --> */}
                    <div class="d-flex align-items-center">
                    {/* <!-- Icon --> */}
                    <a class="wallet me-3" href="#">
                        <img src='assets/images/wallet.png' className='img-fluid' />
                    </a>
                    {/* <!-- Notifications --> */}
                    <div class="dropdown">
                        <a
                        class="text-reset me-3 dropdown-toggle hidden-arrow"
                        href="#"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                        >
                        <i class="fa fa-bell"></i>
                        <span class="badge rounded-pill badge-notification bg-danger">1</span>
                        </a>
                        <ul
                        class="dropdown-menu dropdown-menu-end"
                        aria-labelledby="navbarDropdownMenuLink"
                        >
                        <li>
                            <a class="dropdown-item" href="#">Some news</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">Another news</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </li>
                        </ul>
                    </div>
                    {/* <!-- Avatar --> */}
                    <div class="dropdown">
                        <a
                        class="dropdown-toggle d-flex align-items-center hidden-arrow"
                        href="#"
                        id="navbarDropdownMenuAvatar"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                        >
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                            class="rounded-circle"
                            height="25"
                            alt="Black and White Portrait of a Man"
                            loading="lazy"
                        />
                        </a>
                        <ul
                        class="dropdown-menu dropdown-menu-end"
                        aria-labelledby="navbarDropdownMenuAvatar"
                        >
                        <li>
                            <a class="dropdown-item" href="#">My profile</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">Wallet request</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">Logout</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                    {/* <!-- Right elements --> */}
                </div>
                {/* <!-- Container wrapper --> */}
            </nav>
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
                    <select class="browser-default custom-select">
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