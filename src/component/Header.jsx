import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import WalletModal from "../containers/Modals/WalletModal";
import "./Header.css";
import { Container, Grid, Box, Paper, AppBar, Toolbar, Badge, IconButton, Typography, Menu, Avatar, Button, Tooltip, MenuItem } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
const pages = ['Home', 'Services', 'Bussiness Opportunity', 'Download', 'Contact Us'];
const settings = ['My Profile', 'Wallet Request', 'Logout'];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  boxShadow: 'none',
  background: 'transparent',
  color: theme.palette.text.secondary,
}));

const Header = () => {
  const [showBasic, setShowBasic] = useState(false);
  const [openWalletModal, setOpenWalletModal] = useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <div className="header">
      <Grid container spacing={2} className='bg-primary top-row'>
        <Grid item md={6}>
          <Item color='white'>
            <ul>
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
          </Item>
        </Grid>
        <Grid item md={6} display="flex" justifyContent="flex-end">
          <Item>
            <ul>
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
          </Item>
        </Grid>
      </Grid>
      <AppBar position="static" sx={{ bgcolor: "white" }} elevation={2}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography className="logo"
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              <img src="assets/images/logo.jpg" />
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <div>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Typography textAlign="center">Wallet</Typography>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>My Profile</MenuItem>
                <MenuItem onClick={() => setOpenWalletModal(true)}>Wallet Request</MenuItem>
                <MenuItem>Logout</MenuItem>
              </Menu>
            </div>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box className="wallet" sx={{ flexGrow: 0 }}>
              <img src="assets/images/wallet.png" />
            </Box>
            <MenuItem sx={{ flexGrow: 0 }}>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon color="primary" />
                </Badge>
              </IconButton>
            </MenuItem>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>My Profile</MenuItem>
                <MenuItem onClick={() => setOpenWalletModal(true)}>Wallet Request</MenuItem>
                <MenuItem>Logout</MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {/* <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <a className="navbar-brand mt-2 mt-lg-0 logo" href="#">
                <img src="assets/images/logo.jpg" className="img-fluid" />
              </a>
            </Grid>
            
            <Grid item xs={9} display="flex" justifyContent="flex-end">
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
            </Grid>
            
          </Grid>
          <div className="d-flex align-items-center">
            <a className="wallet me-3" href="#">
              <img src="assets/images/wallet.png" className="img-fluid" />
            </a>
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
        </div>
      </nav> */}
      <WalletModal
        openModal={openWalletModal}
        handleOpen={(data) => setOpenWalletModal(data)}
        handleClose={(data) => setOpenWalletModal(data)}
      />
    </div>
  );
};

export default Header;
