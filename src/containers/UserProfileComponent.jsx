import React, { useEffect, useState } from "react";
import "./UserProfile.css";
import {
  Container,
  Grid,
  Item,
  Box,
  Typography,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import PropTypes from "prop-types";
import { accountService } from "../services/account.service";
import { transactionService } from "../services/transaction.service";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div className="main-wrapper">
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box className="tab-content">
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const VerticalTabs = () => {
  const [value, setValue] = React.useState(0);
  const [userDetail, setUserDetail] = useState({});
  const [transaction, setTransaction] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    getUserDataById();
    getUserTransactionById();
  }, []);

  const getUserDataById = async () => {
    console.log("get By id --");
    await accountService.getAll({}).then(async (res) => {
      let payload = { id: res[0].id };
      await accountService.getUserById(payload).then((result) => {
        setUserDetail(result);
        console.log(result);
      });
    });
  };

  const getUserTransactionById = async () => {
    console.log("get By id --");
    await accountService.getAll({}).then(async (res) => {
      let payload = { userId: res[0].id };
      await transactionService
        .getTransactionByUserId(payload)
        .then((result) => {
          setTransaction(result);
          console.log(result);
        });
    });
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1, display: "flex" }} className="vertical_tab">
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider" }}
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
          <h3 className="sec-title">Recent Data</h3>
          <TableContainer component={Paper} className="tab-shadow">
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>requestAmount</TableCell>
                  <TableCell>creditAmount</TableCell>
                  <TableCell>debitAmount</TableCell>
                  <TableCell>amountType</TableCell>
                  <TableCell>finalWalletAmount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {transaction.map((trsctn, index) => (
                  <TableRow key={index}>
                    <TableCell>{trsctn.created}</TableCell>
                    <TableCell>{trsctn.requestAmount}</TableCell>
                    <TableCell>{trsctn.creditAmount}</TableCell>
                    <TableCell>{trsctn.debitAmount}</TableCell>
                    <TableCell>{trsctn.amountType}</TableCell>
                    <TableCell>{trsctn.finalWalletAmount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <h3 className="sec-title">Personal Information</h3>
          <div className="tab-shadow info-list">
            <p>
              <label>Name</label>
              <span>{userDetail.userName}</span>
            </p>
            <p>
              <label>Balance</label>
              <span>{userDetail.balance}</span>
            </p>
            <p>
              <label>Email</label>
              <span>{userDetail.email}</span>
            </p>
            <p>
              <label>Mobile</label>
              <span>{userDetail.phoneNumber}</span>
            </p>
            {/* <p>
              <label>location</label>
              <span>{userDetail.location}</span>
            </p> */}
            {/* <p>
              <label>Active</label>
              <span>{userDetail.isActive ? "Active" : "Deactive"}</span>
            </p> */}
          </div>
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
    </Container>
  );
};
export default VerticalTabs;
