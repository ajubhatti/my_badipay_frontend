import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import {AppBar, Container, OutlinedInput, InputAdornment , Tabs, Tab, Button, Typography, TextField, Box, Grid, Select, Radio, InputLabel, MenuItem, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  
  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const FullWidthTabs = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [age, setAge] = React.useState('');
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleChangeSelect = (event) => {
    setAge(event.target.value);
  };

  const handleChangeVal = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <Container maxWidth="xl" className='recharge-tab'>
      <Box sx={{ bgcolor: 'background.paper'}}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Mobile" {...a11yProps(0)} />
            <Tab label="DTH" {...a11yProps(1)} />
            <Tab label="Datacard" {...a11yProps(2)} />
            <Tab label="Landline" {...a11yProps(3)} />
            <Tab label="Broadband" {...a11yProps(4)} />
            <Tab label="Electicity" {...a11yProps(5)} />
            <Tab label="Gas" {...a11yProps(6)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
          <h3>Online Mobile Recharge</h3>
            <Grid container spacing={2} sx={{ mb: 1 }}>
              <Grid item md={6}>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Bill Type</FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel value="prepaid" control={<Radio />} label="Prepaid" />
                    <FormControlLabel value="postpaid" control={<Radio />} label="Postpaid" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item md={6} display="flex" justifyContent="flex-end">
                <a href='#'>View Plan</a>
              </Grid>
            </Grid>
            <Grid container spacing={2} display="flex" alignItems="stretch" >
              <Grid item lg={3} md={6}>
                <TextField fullWidth id="mobilenumber" label="Outlined" variant="outlined" />
              </Grid>
              <Grid item lg={3} md={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChangeSelect}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              </Grid>
              <Grid item lg={3} md={6}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    value={values.amount}
                    onChange={handleChangeVal('amount')}
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    label="Amount"
                  />
                </FormControl>  
              </Grid>
              <Grid item lg={3} md={6}>
                <Button className='h-100' fullWidth variant="contained">Continue</Button>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            Item One
          </TabPanel>
          <TabPanel value={value} index={4} dir={theme.direction}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={5} dir={theme.direction}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={6} dir={theme.direction}>
            Item Three
          </TabPanel>
        </SwipeableViews>
      </Box>
    </Container>
  );
}

export default FullWidthTabs;
