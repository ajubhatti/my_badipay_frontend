import React, { useState } from 'react';
import './Header.css';
import {
  MDBContainer,
  MDBRow, MDBCol,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBCollapse,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter, MDBTypography, MDBInput,
  MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink
} from 'mdb-react-ui-kit';
import { BrowserRouter as Router } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons' 

const Header = () => {
    const [showBasic, setShowBasic] = useState(false);
    const [centredModal, setCentredModal] = useState(false);
    const toggleShow = () => setCentredModal(!centredModal);
    return (
        <div className='header'>
        <MDBContainer fluid>
            <MDBRow className="top-row bg-primary text-white">
                <MDBCol>
                    <ul className="list-unstyled">
                        <li><a href="mailto:test@gmail.com"><FontAwesomeIcon icon={faEnvelope} /> test@mail.com</a></li>
                        <li><a href="tel:+9123456789"><FontAwesomeIcon icon={faPhone} /> 123-456-7890</a></li>
                    </ul>
                </MDBCol>
                <MDBCol className="text-end"> Follow us on: 
                    <ul className="list-unstyled d-inline-block">
                        <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faYoutube} /></a></li>
                    </ul>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        <MDBNavbar expand='lg' white bgColor='white'>
            <MDBContainer>
                <div className='logo'>
                    <MDBNavbarBrand href='#'>                    
                        <img src='./assets/images/logo.jpg' className='img-fluid' />
                    </MDBNavbarBrand>
                </div>
                <MDBNavbarToggler
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
                onClick={() => setShowBasic(!showBasic)}
                >
                <FontAwesomeIcon icon={faBars} />
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showBasic}>
                <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 justify-content-end align-items-center'>
                    <MDBNavbarItem>
                    <MDBNavbarLink active aria-current='page' href='#'>
                        Home
                    </MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                    <MDBNavbarLink href='#'>Service</MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                    <MDBNavbarLink href='#'>bussiness opportunity</MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                    <MDBNavbarLink href='#'>download</MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                    <MDBNavbarLink href='#'>contact us</MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                    <MDBNavbarLink href='#'>
                        <div className='wallet'>
                            <img src='./assets/images/wallet.png' className='img-fluid' />
                        </div>
                    </MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                    <MDBDropdown>
                        <MDBDropdownToggle className='nav-link' color='link'>Ezaz</MDBDropdownToggle>
                        <MDBDropdownMenu>
                            <MDBDropdownItem>
                            <MDBDropdownLink href="#">My Profile</MDBDropdownLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem>
                            <MDBDropdownLink onClick={toggleShow} href="#">Wallet request</MDBDropdownLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem>
                            <MDBDropdownLink href="#">Sign out</MDBDropdownLink>
                            </MDBDropdownItem>
                        </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBNavbarItem>
                </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
        <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
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
        </MDBModal>
        </div>
    )
}

export default Header;