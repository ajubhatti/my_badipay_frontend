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
  MDBCollapse
} from 'mdb-react-ui-kit';
import { BrowserRouter as Router } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons' 

const Header = () => {
    const [showBasic, setShowBasic] = useState(false);
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
                        <img src='./assets/images/logo.png' className='img-fluid' />
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
                <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 justify-content-end'>
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
                    <MDBNavbarItem className='user_block'>
                    <MDBBtn className='font-weight-bold' rounded>Button</MDBBtn>
                    </MDBNavbarItem>
                </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
        </div>
    )
}

export default Header;