import React, { useState } from "react";
import WalletModal from "../containers/Modals/WalletModal";
import "./Header.css";

const Header = () => {
  const [showBasic, setShowBasic] = useState(false);
  const [openWalletModal, setOpenWalletModal] = useState(false);

  return (
    <div className="header">
      <div className="container-fluid">
        <div className="row top-row bg-primary text-white">
          <div className="col-6">
            <ul className="list-unstyled">
              <li>
                <a href="mailto:test@gmail.com">
                  <i className="fa fa-envelop"></i> test@mail.com
                </a>
              </li>
              <li>
                <a href="tel:+9123456789">
                  <i className="fa fa-phone"></i> 123-456-7890
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 text-end text-white">
            <ul className="list-unstyled d-inline-block">
              <li>
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg">
        {/* <!-- Container wrapper --> */}
        <div className="container-fluid">
          {/* <!-- Toggle button --> */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-bars"></i>
          </button>

          {/* <!-- Collapsible wrapper --> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <!-- Navbar brand --> */}
            <a className="navbar-brand mt-2 mt-lg-0 logo" href="#">
              <img src="assets/images/logo.jpg" className="img-fluid" />
            </a>
            {/* <!-- Left links --> */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Bussiness Opportunity
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Download
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
            {/* <!-- Left links --> */}
          </div>
          {/* <!-- Collapsible wrapper --> */}

          {/* <!-- Right elements --> */}
          <div className="d-flex align-items-center">
            {/* <!-- Icon --> */}
            <a className="wallet me-3" href="#">
              <img src="assets/images/wallet.png" className="img-fluid" />
            </a>
            {/* <!-- Notifications --> */}
            <div className="dropdown">
              <a
                className="text-reset me-3 dropdown-toggle hidden-arrow"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa fa-bell"></i>
                <span className="badge rounded-pill badge-notification bg-danger">
                  1
                </span>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Some news
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another news
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            {/* <!-- Avatar --> */}
            <div className="dropdown">
              <span
                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </span>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <span className="dropdown-item">My profile</span>
                </li>
                <li>
                  <span
                    className="dropdown-item"
                    onClick={() => setOpenWalletModal(true)}
                  >
                    Wallet request
                  </span>
                </li>
                <li>
                  <span className="dropdown-item">Logout</span>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- Right elements --> */}
        </div>
        {/* <!-- Container wrapper --> */}
      </nav>
      <WalletModal
        openModal={openWalletModal}
        handleOpen={(data) => setOpenWalletModal(data)}
        handleClose={(data) => setOpenWalletModal(data)}
      />
    </div>
  );
};

export default Header;
