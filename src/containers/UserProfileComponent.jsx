import React from 'react';
import './UserProfile.css';
import {Container, Grid, Item, Box, Typography, Tabs, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import PropTypes from 'prop-types';

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
    return (
        <div className="main-wrapper" sx={{ flex:'1' }}>             
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`vertical-tabpanel-${index}`}
                aria-labelledby={`vertical-tab-${index}`}
                {...other}
                >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                    </Box>
                )}
            </div>                              
        </div>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }

  const VerticalTabs = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
      return(
            <Box sx={{ flexGrow: 1, display: 'flex', p: 3 }} >
                <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="inherit"
                variant="fullWidth"
                aria-label="Vertical tabs example" className='vertical_tab'
                sx={{ borderRight: 1, borderColor: 'divider' }}
                >
                <Tab label="Dashboard" {...a11yProps(0)} />
                <Tab label="Account" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />
                <Tab label="Item Four" {...a11yProps(3)} />
                <Tab label="Item Five" {...a11yProps(4)} />
                <Tab label="Item Six" {...a11yProps(5)} />
                <Tab label="Item Seven" {...a11yProps(6)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Date</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Fee</TableCell>
                                <TableCell>Amount</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>17 Jul</TableCell>
                                <TableCell>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati officia, </TableCell>
                                <TableCell>Pending</TableCell>
                                <TableCell>$0.05</TableCell>
                                <TableCell>#100.03</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>17 Jul</TableCell>
                                <TableCell>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati officia, </TableCell>
                                <TableCell>Pending</TableCell>
                                <TableCell>$0.05</TableCell>
                                <TableCell>#100.03</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>17 Jul</TableCell>
                                <TableCell>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati officia, </TableCell>
                                <TableCell>Pending</TableCell>
                                <TableCell>$0.05</TableCell>
                                <TableCell>#100.03</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>17 Jul</TableCell>
                                <TableCell>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati officia, </TableCell>
                                <TableCell>Pending</TableCell>
                                <TableCell>$0.05</TableCell>
                                <TableCell>#100.03</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>17 Jul</TableCell>
                                <TableCell>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati officia, </TableCell>
                                <TableCell>Pending</TableCell>
                                <TableCell>$0.05</TableCell>
                                <TableCell>#100.03</TableCell>
                            </TableRow>
                        </TableBody>
                        </Table>
                    </TableContainer>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <h3>Personal Information</h3>
                </TabPanel>
                <TabPanel value={value} index={2}>
                Item Three
                </TabPanel>
                <TabPanel value={value} index={3}>
                Item Four
                </TabPanel>
                <TabPanel value={value} index={4}>
                Item Five
                </TabPanel>
                <TabPanel value={value} index={5}>
                Item Six
                </TabPanel>
                <TabPanel value={value} index={6}>
                Item Seven
                </TabPanel>
            </Box>
      )
  }
export default VerticalTabs;