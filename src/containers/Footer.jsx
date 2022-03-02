import React, { useState, useEffect } from 'react';
import './Footer.css';
import {Container, Grid, Item, Box, Typography} from '@mui/material';


const Footer = () => {
    return (
        <footer className='bg-primary footer'>
            <Container maxWidth="xl">
            <Grid container spacing={2} className='section-space'>
                <Grid item lg={3} md={6}>                    
                    <div className='footer-logo'>
                        <img src='assets/images/logo.jpg' className='img-fluid' />
                    </div>
                    <p className='text-white'>Wanted distributors and retailers all over india. Hi speed recharge system with high margin, please contact us to start this business</p>
                </Grid>
                <Grid item lg={3} md={6}>
                    <ul className='text-white px-3 mb-0'>
                        <li>All Mobile/DTH Operators available</li>
                        <li>Instant recharge</li>
                        <li>Recharge by SMS or web</li>
                        <li>One Account for all recharge services</li>
                        <li>Profitable Margin</li>
                    </ul>
                </Grid>
                <Grid item lg={3} md={6}>
                    <ul className='text-white px-3 mb-0'>
                        <li>Recharge any Mobile Phone</li>
                        <li>Top-Up All DTH Services</li>
                        <li>Data Card Recharge</li>
                        <li>Postpaid bill payment</li>
                        <li>Single Wallet multi recharge</li>
                    </ul>
                </Grid>
                <Grid item lg={3} md={6}>
                    <ul className='text-white p-0 mb-0 list-unstyled footer-link'>
                        <li><a href="#">contact us</a></li>
                        <li><a href="#">about us</a></li>
                        <li><a href="#">payment</a></li>
                        <li><a href="#">help</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </Grid>
            </Grid>
            </Container>
            <Typography sx={{ p: 3 }} variant="p" component="p" align='center'>Copyright &copy; {new Date().getFullYear()}{' '}, badipay.in, All rights reserved.</Typography>
        </footer>
    )
}

export default Footer