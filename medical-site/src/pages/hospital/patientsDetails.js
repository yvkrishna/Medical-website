import styles from './components.module.css'
import { useState } from 'react'
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
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import MedicationIcon from '@mui/icons-material/Medication';
import Chart from "./chart"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


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


function createData(last_measured, spo2, heart_rate, temperature, bp, stress, glucose) {
  return { last_measured, spo2, heart_rate, temperature, bp, stress, glucose };
}

const rows = [
  createData('1 min back', 97, 75, 25.2, '124/80', 'Normal', 140),
  createData('2 min back', 95, 75, 25, '124/80', 'Normal', 141),
  createData('5 min back', 99, 75, 26, '124/80', 'Normal', 140),
  createData('7 min back', 96, 75, 25, '124/80', 'Normal', 141),
  createData('10 min back', 86, 90, 28.5, '132/79', 'High', 140)
];

export default function PatientDetails() {  
          
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
        </div><br /><br />

        <div className={styles.allTabsList}>
            <div><b>Dashboard</b></div>
            <div><b>Patients List</b></div>
            <div><b>Treatment Effects</b></div>
            <div><b>Patient Reports</b></div>
            <div><b>Work</b></div>
        </div><br /><br />

        <div className={styles.cards}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>
            <Grid item xs={3}>
              <Card sx={{ minWidth: 50 }} elevation={0} className={styles.cardMain}>
                  <CardContent>
                    <div className={styles.cardBody}>
                          <MonitorHeartIcon className={styles.cardIcon}/>
                          <Typography variant="body2">
                            <span className={styles.sensorName}>ECG</span> <br />
                            25
                          </Typography>
                    </div>
                  </CardContent>
                </Card>
            </Grid>
            <Grid item xs={3}>
                <Card sx={{ minWidth: 50 }} elevation={0} className={styles.cardMain}>
                  <CardContent>
                    <div className={styles.cardBody}>
                          <DirectionsWalkIcon className={styles.cardIcon}/>
                          <Typography variant="body2">
                            <span className={styles.sensorName}>Blood Pressure</span> <br />
                            120/80
                          </Typography>
                    </div>
                  </CardContent>
                </Card>
            </Grid>
            <Grid item xs={3}>
                <Card sx={{ minWidth: 50 }} elevation={0} className={styles.cardMain}>
                  <CardContent>
                    <div className={styles.cardBody}>
                          <MedicationIcon className={styles.cardIcon}/>
                          <Typography variant="body2">
                            <span className={styles.sensorName}>SPO2</span> <br />
                            97
                          </Typography>
                    </div>
                  </CardContent>
                </Card>
            </Grid>
            <Grid item xs={3}>
              <Card sx={{ minWidth: 50 }} elevation={0} className={styles.cardMain}>
                  <CardContent>
                    <div className={styles.cardBody}>
                          <FavoriteIcon className={styles.cardIcon}/>
                          <Typography variant="body2">
                            <span className={styles.sensorName}>Heart Rate</span> <br />
                            86
                          </Typography>
                    </div>
                  </CardContent>
                </Card>
            </Grid>
          </Grid>
        </Box>
        </div><br />

        <div className={styles.charts}>
          {/* <div className={styles.ecgPlot}>
              <h3>ECG Plot</h3><br />
              <Chart type="line" chart_name="ECG" width={40} height={10}/>
          </div><br /><br />

          <Grid container spacing={2}>
            <Grid item xs={6}>
                <div className={styles.spo2Plot}>
                  <h3>SPO2 Plot</h3><br />
                    <Chart type="line" chart_name="SPO2" width={40} height={20}/>
                </div>
            </Grid>
            <Grid item xs={6}>
                <div className={styles.tempPlot}>
                    <h3>Temperature</h3><br />
                    <Chart type="line" chart_name="TEMP" width={40} height={20}/>
                </div>
            </Grid>
          </Grid>
        </div><br /><br /> */}

        <div className={styles.sensorTable}>
          <h3>Sensor Data Readings</h3><br />
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead style={{"background":"#34EEAE"}}>
                <TableRow>
                  <TableCell>Last Measured</TableCell>
                  <TableCell align="right">SPO2</TableCell>
                  <TableCell align="right">Heart Rate</TableCell>
                  <TableCell align="right">Temperature</TableCell>
                  <TableCell align="right">BP</TableCell>
                  <TableCell align="right">Stress</TableCell>
                  <TableCell align="right">Glucose</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.last_measured}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.last_measured} 
                    </TableCell>
                    <TableCell align="right">{row.spo2}</TableCell>
                    <TableCell align="right">{row.heart_rate}</TableCell>
                    <TableCell align="right">{row.temperature}</TableCell>
                    <TableCell align="right">{row.bp}</TableCell>
                    <TableCell align="right">{row.stress}</TableCell>
                    <TableCell align="right">{row.glucose}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div><br /> <br />
    </div>
  )
}