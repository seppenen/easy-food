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
import lightBlue from '@material-ui/core/colors/lightBlue';
import Fab from '@material-ui/core/Fab';
import {Link} from 'react-router-dom';
import HistoryIcon from '@material-ui/icons/History';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ListIcon from '@material-ui/icons/List';
import {Recent} from '../recent'
import Convert from '../utils/Convert'

import {Context} from '../context/dataObj'

const useStyles = makeStyles((theme) => ({
  title: {

    flexGrow: 1,
    textAlign: 'center',
    fontFamily:'Roboto',
    color: 'black',
    fontWeight: '500',
    

  },
  results: {

    flexGrow: 1,
    textAlign: 'center',
    fontFamily:'Roboto',
    color: 'black',
    fontWeight: '500',
    
    marginRight:'40px'
  },
  bar:{
    background: '#fff',
  },
  fab:{
    height: '60px' ,
    width: '60px',
    fontWeight: '400',
    fontSize: '12px',
   
  },
  
}));


function DrawerMUI ({isActive, setIsActive}) {

const classes = useStyles();
const [open, setOpen] = useState(false);
const {recent}=useContext(Context)



const handleOpen = () => { 
  setOpen(true); 
} 

const handleClose = () => { 
  setOpen(false); 
}

const handleCamOpen = () => { 

  setIsActive(!isActive)
}

const [value, setValue] = useState(0);
    const handleChange = (event, val) => {
        setValue(val);
      }
      const {userData,foodData,Reader,setReaderData}=useContext(Context)



  return (


    <div>
     
      <AppBar  style={{borderTopLeftRadius: '5px',borderTopRightRadius: '5px'}} position='static' >
        <Toolbar  style={{borderTopLeftRadius: '5px',borderTopRightRadius: '5px'}}    className={classes.bar} >
          <IconButton onClick={ handleOpen } color='inherit'><ExpandLessIcon style={{ color: "black" }} /></IconButton>
   
        <Typography  variant='h4'  style={{padding:'3px',display: 'flex', justifyContent: 'center'}} className={classes.title} >
        <div className="buton-inside" style={{borderRadius: '50%', backgroundColor: lightBlue[700],height: '64px', width: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div className="buton-inside" style={{borderRadius: '50%', backgroundColor: '#fff',height: '62px', width: '62px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Fab  className={classes.fab} onClick={()=>handleCamOpen()} color="primary" aria-label="Scan" >
  Scannaa
  
      </Fab>
      </div></div>
          </Typography> 
       <IconButton onClick={ handleOpen }  > <ListIcon style={{ color: "black" }} /></IconButton>
        </Toolbar>
      </AppBar>

      <Drawer value={ value } anchor='bottom' open={ open } onClick={ handleClose }>
      
      <List>
      <ListItem button >
        
        <ListItemIcon  > <ExpandMoreIcon/> </ListItemIcon>
<ListItemText className={classes.results} primary={<Convert  text="Recent results" language={userData.lang}/>} /> </ListItem>
<Recent/>
    </List>
      
      </Drawer>

    </div>
  );
}

export default DrawerMUI;
