import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import {TextField, Typography, Grid, Button} from '@mui/material';
import Modal from "@mui/material/Modal";
import { MenuItem, Select, FormControl, InputLabel, TextareaAutosize } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const WalletModal = (props) => {
  const [open, setOpen] = useState(false);
  const [type, setType] = React.useState("");

  const handleChange = (event) => {
    setType(event.target.value);
  };

  useEffect(() => {
    setOpen(props.openModal);
  }, [props.openModal]);

  return (
    <div>
      <Modal
        open={open}
        onClose={() => props.handleClose(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={{ mb: 3 }} variant="h5" component="h5" align='center' id="exampleModalLabel">
              Wallet Request
          </Typography>
          <FormControl fullWidth size="small" sx={{ mb: 2 }}>
            <InputLabel id="demo-simple-select-label">Bank Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={type}
              label="PaymentType"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth size="small" sx={{ mb: 2 }}>
            <InputLabel id="demo-simple-select-label">Payment Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={type}
              label="PaymentType"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <TextField fullWidth sx={{ mb: 2 }}
            label="Amount"
            type="text" size="small"
          />
          <TextField fullWidth sx={{ mb: 2 }}
            label="Reference Number"
            type="text" size="small"
          />
          <FormControl fullWidth size="small" sx={{ mb: 2 }}>
            <InputLabel id="demo-simple-select-label">Deposit Bank</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={type}
              label="DepositBank"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <TextField fullWidth sx={{ mb: 2 }}
            label="Deposit Branch"
            type="text" size="small"
          />
          <TextField fullWidth sx={{ mb: 2 }}
            label="Remark"
            type="text" size="small"
          />
          <Grid container spacing={2}>
              <Grid item xs={6}>
                  <Button fullWidth variant="contained" color="secondary" onClick={() => props.handleClose(false)}>Cancel</Button>
              </Grid>
              <Grid item xs={6}>
                  <Button fullWidth variant="contained" onClick={() => props.handleClose(false)}>Submit</Button>
              </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};

export default WalletModal;
