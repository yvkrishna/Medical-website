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
import Button from '@mui/material/Button';
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


export default function PatientDetails() {  
  const [is_risk_pressed, setIs_risk_pressed] = useState(null);
  const [risk, setRisk] = useState(null);

  const [is_survival_pressed, setIs_survival_pressed] = useState(null);
  const [survival, setSurvival] = useState(null);

  const [is_hazard_pressed, setIs_hazard_pressed] = useState(null);
  const [hazard, setHazard] = useState(null);

    const checkRisk = async () => {
       fetch('http://localhost:5000/getRiskScore')
        .then(response => response.json())
        .then(data => {
          setRisk([data.predictions_1, data.predictions_2]);
          setIs_risk_pressed(true);
        });
      }

      const checkSurvival = async () => {
        fetch('http://localhost:5000/getSurvivalScore')
         .then(response => response.json())
         .then(data => {
            setSurvival(data.prediction);
            setIs_survival_pressed(true);
         });
       }

       const checkHazard = async () => {
        fetch('http://localhost:5000/getHazardScore')
         .then(response => response.json())
         .then(data => {
            setHazard([data.predictions_1, data.predictions_2]);
            setIs_hazard_pressed(true);
         });
       }

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
                      <Badge badgeContent={5} color="error">
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
            <div><b>Patients List</b></div>
            <div><b>Prognosis</b></div>
            <div><b>Diagnosis</b></div>
            <div><b>Patient Reports</b></div>
        </div><br /><br />

        <div>
          <h3>Risk Estimation</h3><br />
          <div className={styles.risk_model}>
              <h4 style={{"color":"var(--danger-color1)"}}>Readings From Patient Reports</h4><br />
            <Grid container spacing={2}>
            <Grid item xs={8}>
                  <Grid container spacing={2}>
                  <Grid item xs={6}>
                      <div className={styles.parameter_names}>
                          Age: <span className={styles.parameter_values}>&emsp;40</span>
                    <br />Sex: <span className={styles.parameter_values}>&emsp;Male</span>
                    <br />Chest Pain Type: <span className={styles.parameter_values}>&emsp;ATA (Atypical Angin4)</span>
                    <br />Resting BP: <span className={styles.parameter_values}>&emsp;140 mm Hg</span>
                    <br />Cholesterol: <span className={styles.parameter_values}>&emsp;289 mm/dl</span>
                    <br />Fasting Blood Sugar: <span className={styles.parameter_values}>&emsp;0</span>
                      </div>
                  </Grid>
                  <Grid item xs={6}>
                      <div className={styles.parameter_names}>
                         
                    <br />Resting ECG: <span className={styles.parameter_values}>&emsp;Normal</span>
                    <br />Max Heart Rate: <span className={styles.parameter_values}>&emsp;172</span>
                    <br />Exercise-induced Angina:  <span className={styles.parameter_values}>&emsp;N</span>
                    <br />Old peak: <span className={styles.parameter_values}>&emsp;0</span>
                    <br />ST Slope:  <span className={styles.parameter_values}>&emsp;Up</span>
                      </div>
                  </Grid>
                </Grid><br /><br /> 
            </Grid>
            <Grid item xs={4}  className={styles.model_predictions_grid}>
            <div className={styles.model_predictions}>
            <h3 style={{"color":"var(--danger-color1)"}}>Model Predictions</h3><br />
            {/* <button onClick={testApi} className={styles.modelPrediction_btn}>Test API</button> {risk[0]} */}
            <Button onClick={checkRisk} variant="contained">Check Risk</Button>
                {(is_risk_pressed && (risk.length != 0) )? (<div>
                  <div className={styles.parameter_names}>
                    <br />Risk of not getting the Heart disease: <span className={styles.parameter_values}>&emsp;{risk[0]}</span>
                    <br />Risk of getting the Heart disease: <span className={styles.parameter_values}>&emsp;{risk[1]}</span>
                    </div>
                </div>) : 
                (<></>)}
            </div>
            </Grid>
            </Grid>
          </div><br /><br />


          <h3>Survival Estimation</h3><br />
          <div className={styles.survival_model}>
              <h4 style={{"color":"var(--danger-color1)"}}>Readings From Patient Reports</h4><br />
            <Grid container spacing={2}>
            <Grid item xs={8}>
                  <Grid container spacing={2}>
                  <Grid item xs={6}>
                      <div className={styles.parameter_names}>
                          Age: <span className={styles.parameter_values}>&emsp;65</span>
                    <br />Sex: <span className={styles.parameter_values}>&emsp;Male</span>
                    <br />Anaemia: <span className={styles.parameter_values}>&emsp;1</span>
                    <br />Creatinine Phosphokinase: <span className={styles.parameter_values}>&emsp;160</span>
                    <br />Diabetes: <span className={styles.parameter_values}>&emsp;True</span>
                    <br />Ejection Fraction: <span className={styles.parameter_values}>&emsp;20</span>
                      </div>
                  </Grid>
                  <Grid item xs={6}>
                      <div className={styles.parameter_names}>
                         
                    <br />High Blood Pressure: <span className={styles.parameter_values}>&emsp;False</span>
                    <br />Platelets: <span className={styles.parameter_values}>&emsp;327000</span>
                    <br />Serum Creatinine:  <span className={styles.parameter_values}>&emsp;2.7</span>
                    <br />Serum Sodium: <span className={styles.parameter_values}>&emsp;116</span>
                    <br />Smoking:  <span className={styles.parameter_values}>&emsp;False</span>
                      </div>
                  </Grid>
                </Grid><br /><br /> 
            </Grid>
            <Grid item xs={4}  className={styles.model_predictions_grid}>
            <div className={styles.model_predictions}>
            <h3 style={{"color":"var(--danger-color1)"}}>Model Predictions</h3><br />
            {/* <button onClick={testApi} className={styles.modelPrediction_btn}>Test API</button> {risk[0]} */}
            <Button onClick={checkSurvival} variant="contained">Check Survival Rate For 100 Days</Button>
                {(is_survival_pressed )? (<div>
                  <div className={styles.parameter_names}>
                    <br />Survival Estimate for 100 days: <span className={styles.parameter_values}>&emsp;{survival}</span>
                    </div>
                </div>) : 
                (<></>)}
            </div>
            </Grid>
            </Grid>
          </div><br /><br />


          <h3>Hazard Estimation</h3><br />
          <div className={styles.hazard_model}>
              <h4 style={{"color":"var(--danger-color1)"}}>Readings From Patient Reports</h4><br />
            <Grid container spacing={2}>
            <Grid item xs={8}>
                  <Grid container spacing={2}>
                  <Grid item xs={6}>
                      <div className={styles.parameter_names}>
                          Age: <span className={styles.parameter_values}>&emsp;65</span>
                    <br />Sex: <span className={styles.parameter_values}>&emsp;Male</span>
                    <br />Anaemia: <span className={styles.parameter_values}>&emsp;1</span>
                    <br />Creatinine Phosphokinase: <span className={styles.parameter_values}>&emsp;160</span>
                    <br />Diabetes: <span className={styles.parameter_values}>&emsp;True</span>
                    <br />Ejection Fraction: <span className={styles.parameter_values}>&emsp;20</span>
                      </div>
                  </Grid>
                  <Grid item xs={6}>
                      <div className={styles.parameter_names}>
                         
                    <br />High Blood Pressure: <span className={styles.parameter_values}>&emsp;False</span>
                    <br />Platelets: <span className={styles.parameter_values}>&emsp;327000</span>
                    <br />Serum Creatinine:  <span className={styles.parameter_values}>&emsp;2.7</span>
                    <br />Serum Sodium: <span className={styles.parameter_values}>&emsp;116</span>
                    <br />Smoking:  <span className={styles.parameter_values}>&emsp;False</span>
                      </div>
                  </Grid>
                </Grid><br /><br /> 
            </Grid>
            <Grid item xs={4}  className={styles.model_predictions_grid}>
            <div className={styles.model_predictions}>
            <h3 style={{"color":"var(--danger-color1)"}}>Model Predictions</h3><br />
            {/* <button onClick={testApi} className={styles.modelPrediction_btn}>Test API</button> {risk[0]} */}
            <Button onClick={checkHazard} variant="contained">Check Hazard Score</Button>
                {(is_hazard_pressed && (hazard.length != 0) )? (<div>
                  <div className={styles.parameter_names}>
                    <br />Hazard score for 100 days: <span className={styles.parameter_values}>&emsp;{hazard[0]}</span>
                    <br />Survival score for 100 days: <span className={styles.parameter_values}>&emsp;{hazard[1]}</span>
                    </div>
                </div>) : 
                (<></>)}
            </div>
            </Grid>
            </Grid>
          </div><br /><br />
        </div><br /> <br />
    </div>
  )
}