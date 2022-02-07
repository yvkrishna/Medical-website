import styles from './components.module.css'
import { useState } from 'react'
import { DataGrid } from '@material-ui/data-grid'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Image from 'next/image'
import Avatar from '@mui/material/Avatar';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PatientList() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 120 },
        { field: 'Name', headerName: 'Name', width: 200 },
        {
          field: 'Room_Number',
          headerName: 'Room Number',
          type: 'number',
          width: 180,
        },
        {
          field: 'Risk_Score',
          headerName: 'Risk Score',
          type: 'number',
          width: 180,
        },
        { field: 'Patient_Condition', headerName: 'Patient Condition', width: 200 },
      ];
      
      const rows = [
        { id: 1, Name: 'Snow', Room_Number: 35 ,  Risk_Score: 60, Patient_Condition: 'Critical' },
        { id: 2, Name: 'Lannister', Room_Number: 42 ,  Risk_Score: 40, Patient_Condition: 'Average' },
        { id: 3, Name: 'Lannister', Room_Number: 45 ,  Risk_Score: 35, Patient_Condition: 'Average' },
        { id: 4, Name: 'Stark', Room_Number: 16 ,  Risk_Score: 32, Patient_Condition: 'Average' },
        { id: 5, Name: 'Targaryen', Room_Number: 10,  Risk_Score: 15, Patient_Condition: 'Normal' },
        { id: 6, Name: 'Melisandre', Room_Number: 150,  Risk_Score: 14, Patient_Condition: 'Normal'  },
        { id: 7, Name: 'Clifford', Room_Number: 44 ,  Risk_Score: 12, Patient_Condition: 'Normal' },
        { id: 8, Name: 'Frances', Room_Number: 36 ,  Risk_Score: 10, Patient_Condition: 'Normal' },
        { id: 9, Name: 'Roxie', Room_Number: 65 ,  Risk_Score: 10, Patient_Condition: 'Normal' },
      ];
          

      const [anchorEl, setAnchorEl] = useState(null);
      const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    
      const isMenuOpen = Boolean(anchorEl);
      const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    
      const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
      };
    
      const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
      };
    
      const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
      };
    
      const menuId = 'primary-search-account-menu';
      const renderMenu = (
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          id={menuId}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={isMenuOpen}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
      );
    
      const mobileMenuId = 'primary-search-account-menu-mobile';
      const renderMobileMenu = (
        <Menu
          anchorEl={mobileMoreAnchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          id={mobileMenuId}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={isMobileMenuOpen}
          onClose={handleMobileMenuClose}
        >
          <MenuItem>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <p>Messages</p>
          </MenuItem>
          <MenuItem>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon style={{"oppacity":"0.7"}}/>
              </Badge>
            </IconButton>
            <p>Notifications</p>
          </MenuItem>
          <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <p>Profile</p>
          </MenuItem>
        </Menu>
      );
  return (
    <div className={styles.container}>

        <div className="navbar">
            <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static" className={styles.appBarBackground} elevation={0}>
                <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <Image src='/icon-healthcare.jpg' className={styles.icon} width={40} height={40}/>
                </IconButton>
                  <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ display: { xs: 'none', sm: 'block' } }}
                    className={styles.HeaddingName}
                  >
                    <b>Healthcare</b>
                  </Typography>
                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search…"
                      inputProps={{ 'aria-label': 'search' }}
                    />
                  </Search>
                  <Box sx={{ flexGrow: 1 }} />
                  <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    
                    <IconButton
                      size="large"
                      aria-label="show 17 new notifications"
                      color="inherit"
                    >
                      <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                      </Badge>
                    </IconButton>
                    <IconButton
                      size="large"
                      edge="end"
                      aria-label="account of current user"
                      aria-controls={menuId}
                      aria-haspopup="true"
                      onClick={handleProfileMenuOpen}
                      color="inherit"
                    >
                      <Avatar alt="Doctor" src='/vedha.jpg' />
                    </IconButton>
                  </Box>
                  <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                      size="large"
                      aria-label="show more"
                      aria-controls={mobileMenuId}
                      aria-haspopup="true"
                      onClick={handleMobileMenuOpen}
                      color="inherit"
                    >
                      <MoreIcon />
                    </IconButton>
                  </Box>
                </Toolbar>
              </AppBar>
              {renderMobileMenu}
              {renderMenu}
            </Box>
        </div><br />

        <div className={styles.allTabsList}>
            <div><b>Dashboard</b></div>
            <div><b>Patients List</b></div>
            <div><b>Treatment Effects</b></div>
            <div><b>Patient Reports</b></div>
            <div><b>Work</b></div>
        </div>

        <div className={styles.bodyPatientsList}>
          <h2>Patients List</h2>
          <br /><br />
          <div className={styles.bodyPatientsTable} style={{ height: 400, width: '80%' }}>
              <DataGrid
                  rows={rows}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  checkboxSelection
              />
          </div>
        </div>
    </div>
  )
}