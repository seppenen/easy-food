import React, {useState,useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';
import TuneIcon from '@material-ui/icons/Tune';
import InfoIcon from '@material-ui/icons/Info';
import Convert from '../utils/Convert'
import {Context} from '../context/dataObj'


const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    textAlign: 'center',
    fontFamily:'Dancing Script',
    marginRight:50
  },
  bar:{
    background: 'linear-gradient(160deg, rgba(134,44,120) 1%, rgba(200,38,128) 100%)',
  
  }
  
}));


function DrawerMUI () {
const {userData}=useContext(Context)
const classes = useStyles();
const [open, setOpen] = useState(false);

const handleOpen = () => { 
  setOpen(true); 
} 

const handleClose = () => { 
  setOpen(false); 
}

const [value, setValue] = useState(0);
    const handleChange = (event, val) => {
        setValue(val);
      }

  return (
    <div style={{  marginBottom:'60px'}}>
      <AppBar position='fixed' >
        <Toolbar className={classes.bar} >
          <IconButton onClick={ handleOpen } color='inherit'><MenuIcon /></IconButton>
        <Typography  variant='h4'  className={classes.title} >EasyFood</Typography> 
        </Toolbar>
      </AppBar>

      <Drawer value={ value } anchor='left' open={ open } onClick={ handleClose }>
      
      <List>
      <ListItem button component={ Link } to='/Varaa' >
        <ListItemIcon  ><TuneIcon /></ListItemIcon>
<ListItemText primary={<Convert  text="Settings" language={userData.lang}/>} /> </ListItem>

<ListItem button component={ Link } to='/Bookings'>
        <ListItemIcon><InfoIcon /></ListItemIcon>
<ListItemText primary={<Convert  text="About us" language={userData.lang}/>}  /> </ListItem>




    </List>
      
      </Drawer>

   
   
    </div>
  );
}

export default DrawerMUI;
