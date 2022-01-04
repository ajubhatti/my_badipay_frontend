import React, { useState } from 'react';
import './Footer.css';
import {
    MDBContainer,
    MDBRow, MDBCol, MDBTypography, MDBFooter
} from 'mdb-react-ui-kit';

const Footer = () => {
    return (
    <MDBFooter backgroundColor='dark' className='footer bg-dark'>
        <MDBContainer className='py-5'>
            <MDBRow>
                <MDBCol lg='3' md='6'>
                    <img src='../assets/images/footer.png' className='img-fluid' />
                </MDBCol>
                <MDBCol lg='3' md='6'>
                    <MDBTypography variant='h4' className='mb-4 text-muted' >Business opportunity</MDBTypography>
                    <MDBTypography variant='p' colorText='white'>Wanted distributors and retailers all over india. Hi speed recharge system with high margin, please contact us to start this business</MDBTypography>
                </MDBCol>
                <MDBCol lg='3' md='6'>
                    <MDBTypography variant='h4' className='mb-4 text-muted'>Features</MDBTypography>
                    <ul className='text-white px-3 mb-0'>
                        <li>All Mobile/DTH Operators available</li>
                        <li>Instant recharge</li>
                        <li>Recharge by SMS or web</li>
                        <li>One Account for all recharge services</li>
                        <li>Profitable Margin</li>
                    </ul>
                </MDBCol>
                <MDBCol lg='3' md='6'>
                    <MDBTypography variant='h4' className='mb-4 text-muted'>Multi Services</MDBTypography>
                    <ul className='text-white px-3 mb-0'>
                        <li>Recharge any Mobile Phone</li>
                        <li>Top-Up All DTH Services</li>
                        <li>Data Card Recharge</li>
                        <li>Postpaid bill payment</li>
                        <li>Single Wallet multi recharge</li>
                    </ul>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        <div className='text-center p-3 bg-black text-muted'>Copyright &copy; {new Date().getFullYear()}{' '}, badipay.in, All rights reserved</div>
    </MDBFooter>
    )
}

export default Footer