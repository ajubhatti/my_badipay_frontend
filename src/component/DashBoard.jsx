import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BehaviorSubject } from 'rxjs';
import {Container, Grid, Item, Box, Typography, Tab} from '@mui/material';
import "./DashBoard.css";

const DashBoard = () => {
    return (
        <div>    
            <div className='section-space bg-light'>
                <Typography variant="h5" fullWidth component="h5" align='center' className='subtitle'>what we do</Typography>
                <Typography variant="h3" sx={{ mb: 3 }} fullWidth component="h3" align='center' className='section-title'>Simple, fast and Hassle Free payments</Typography>
                <Container maxWidth="xl">
                    <Grid container spacing={2}>
                        <Grid item lg={6} md={12}>
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
                        </Grid>
                        <Grid item lg={6} md={12}>
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
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    );
}

export default DashBoard;