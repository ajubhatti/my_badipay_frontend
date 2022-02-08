import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
    console.log("footer")
    return (
        <footer className='bg-primary footer'>
            <div className='container-xl section-space'>
                <div className='row'>
                    <div className='col-lg-3 col-md-6'>
                        <div className='footer-logo'>
                        <img src='assets/images/logo.jpg' className='img-fluid' />
                        </div>
                        <p className='text-white'>Wanted distributors and retailers all over india. Hi speed recharge system with high margin, please contact us to start this business</p>
                    </div>
                    <div className='col-lg-3 col-md-6'>
                        <ul className='text-white px-3 mb-0'>
                            <li>All Mobile/DTH Operators available</li>
                            <li>Instant recharge</li>
                            <li>Recharge by SMS or web</li>
                            <li>One Account for all recharge services</li>
                            <li>Profitable Margin</li>
                        </ul>
                    </div>
                    <div className='col-lg-3 col-md-6'>
                        <ul className='text-white px-3 mb-0'>
                            <li>Recharge any Mobile Phone</li>
                            <li>Top-Up All DTH Services</li>
                            <li>Data Card Recharge</li>
                            <li>Postpaid bill payment</li>
                            <li>Single Wallet multi recharge</li>
                        </ul>
                    </div>
                    <div className='col-lg-3 col-md-6'>
                        <ul className='text-white p-0 mb-0 list-unstyled footer-link'>
                            <li><a href="#">contact us</a></li>
                            <li><a href="#">about us</a></li>
                            <li><a href="#">payment</a></li>
                            <li><a href="#">help</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='text-center p-3 border-top text-white'>Copyright &copy; {new Date().getFullYear()}{' '}, badipay.in, All rights reserved</div>
        </footer>
    )
}

export default Footer