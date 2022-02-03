import React, { useState, useEffect } from 'react';
import './Footer.css';
import {
    MDBContainer,
    MDBRow, MDBCol, MDBTypography, MDBFooter,
    
} from 'mdb-react-ui-kit';

const Footer = () => {
    console.log("footer")
    return (
    <MDBFooter backgroundColor='primary' className='footer bg-primary'>
        <MDBContainer className='py-5'>
            <MDBRow>
                <MDBCol lg='3' md='6'>
                    <img src='./assets/images/footer_logo.png' className='img-fluid footer-logo' />
                    <MDBTypography variant='p' colorText='white'>Wanted distributors and retailers all over india. Hi speed recharge system with high margin, please contact us to start this business</MDBTypography>
                </MDBCol>                
                <MDBCol lg='3' md='6'>
                    <MDBTypography variant='h5' className='mb-4 text-white'>Features</MDBTypography>
                    <ul className='text-white px-3 mb-0'>
                        <li>All Mobile/DTH Operators available</li>
                        <li>Instant recharge</li>
                        <li>Recharge by SMS or web</li>
                        <li>One Account for all recharge services</li>
                        <li>Profitable Margin</li>
                    </ul>
                </MDBCol>
                <MDBCol lg='3' md='6'>
                    <MDBTypography variant='h5' className='mb-4 text-white'>Multi Services</MDBTypography>
                    <ul className='text-white px-3 mb-0'>
                        <li>Recharge any Mobile Phone</li>
                        <li>Top-Up All DTH Services</li>
                        <li>Data Card Recharge</li>
                        <li>Postpaid bill payment</li>
                        <li>Single Wallet multi recharge</li>
                    </ul>
                </MDBCol>
                <MDBCol lg='3' md='6'>
                    <MDBTypography variant='h5' className='mb-4 text-white' >About</MDBTypography>
                    <ul className='text-white p-0 mb-0 list-unstyled footer-link'>
                        <li><a href="#">contact us</a></li>
                        <li><a href="#">about us</a></li>
                        <li><a href="#">payment</a></li>
                        <li><a href="#">help</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        <div className='text-center p-3 border-top text-white'>Copyright &copy; {new Date().getFullYear()}{' '}, badipay.in, All rights reserved</div>
    </MDBFooter>
    )
}

export default Footer