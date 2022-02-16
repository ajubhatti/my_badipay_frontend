import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { MenuItem, Select } from "@mui/material";

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
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
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
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Wallet Request
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={() => props.handleClose(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="form-wrap">
                  <div className="row">
                    <div className="col-md-4">
                      <label className="form-label" for="form12">
                        Payment Type
                      </label>
                    </div>
                    <div className="col-md-8">
                      <Select
                        value={age}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <label className="form-label" for="form12">
                        Bank Type
                      </label>
                    </div>
                    <div className="col-md-8">
                      <select className="form-control">
                        <option>bank type 1</option>
                        <option>bank type 2</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <label className="form-label" for="form12">
                        Amount
                      </label>
                    </div>
                    <div className="col-md-8">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Amount"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <label className="form-label" for="form12">
                        Reference Number
                      </label>
                    </div>
                    <div className="col-md-8">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Reference Number"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <label className="form-label" for="form12">
                        Deposit Bank
                      </label>
                    </div>
                    <div className="col-md-8">
                      <select className="form-control">
                        <option>Deposit bank type 1</option>
                        <option>Deposit bank type 2</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <label className="form-label" for="form12">
                        Deposit Branch
                      </label>
                    </div>
                    <div className="col-md-8">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Deposit Branch"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <label className="form-label" for="form12">
                        Remark
                      </label>
                    </div>
                    <div className="col-md-8">
                      <textarea
                        className="form-control"
                        placeholder="Enter Remark"
                        rows={4}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => props.handleClose(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => props.handleClose(false)}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default WalletModal;
