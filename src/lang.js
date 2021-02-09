import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import {Context} from './context/dataObj'

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
  root: {
    Width: '100%',
    minWidth: '90%',
    minHeight: '35vh',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign:'center',
    
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
 

}));

export default function Lang() {
  const classes = useStyles();
  const {userData, setUserData}=useContext(Context)

 
  const [open, setOpen] = React.useState(false);


  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };


  return (
    <Container  style={{ height:'100vh' ,background: 'linear-gradient(310deg, rgba(134,44,120) 1%, rgba(200,38,128) 100%)',
}}>
        <Grid
  container
  direction="column"
  justify="center"
  alignItems="center"
>
    <Grid  className={classes.root} item> 
 
  
    <Typography style={{ color:'#fff'}}variant="h5"  > 
    Let's personalize your App!

    </Typography>
  
   
    

  
    </Grid>
    <Card style={{flexDirection: "column",display: "flex",justifyContent: "center",minHeight: '20vh',minWidth: '90%',textAlign:'center',}}>
      <CardContent style={{minHeight: '1vh',}}>
       
       

        <Typography style={{fontSize: '20px',}} variant="subtitle1" component="h2">
          Select language
        </Typography>
        <div>
      
      <FormControl className={classes.formControl}>

        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          defaultValue=""
          onChange={(e)=> setUserData({...userData, lang:e.target.value})}
        >
          
          <MenuItem value="FI">Finnish</MenuItem>
          <MenuItem value="SV">Swedish </MenuItem>
          <MenuItem value="EN">English</MenuItem>
          
          <MenuItem value="AF">Afrikaans</MenuItem>
  <MenuItem value="SQ">Albanian</MenuItem>
  <MenuItem value="AR">Arabic</MenuItem>
  <MenuItem value="HY">Armenian</MenuItem>
  <MenuItem value="EU">Basque</MenuItem>
  <MenuItem value="BN">Bengali</MenuItem>
  <MenuItem value="BG">Bulgarian</MenuItem>
  <MenuItem value="CA">Catalan</MenuItem>
  <MenuItem value="KM">Cambodian</MenuItem>
  <MenuItem value="ZH">Chinese (Mandarin)</MenuItem>
  <MenuItem value="HR">Croatian</MenuItem>
  <MenuItem value="CS">Czech</MenuItem>
  <MenuItem value="DA">Danish</MenuItem>
  <MenuItem value="NL">Dutch</MenuItem>
  <MenuItem value="ET">Estonian</MenuItem>
  <MenuItem value="FJ">Fiji</MenuItem>
  <MenuItem value="FR">French</MenuItem>
  <MenuItem value="KA">Georgian</MenuItem>
  <MenuItem value="DE">German</MenuItem>
  <MenuItem value="EL">Greek</MenuItem>
  <MenuItem value="GU">Gujarati</MenuItem>
  <MenuItem value="HE">Hebrew</MenuItem>
  <MenuItem value="HI">Hindi</MenuItem>
  <MenuItem value="HU">Hungarian</MenuItem>
  <MenuItem value="IS">Icelandic</MenuItem>
  <MenuItem value="ID">Indonesian</MenuItem>
  <MenuItem value="GA">Irish</MenuItem>
  <MenuItem value="IT">Italian</MenuItem>
  <MenuItem value="JA">Japanese</MenuItem>
  <MenuItem value="JW">Javanese</MenuItem>
  <MenuItem value="KO">Korean</MenuItem>
  <MenuItem value="LA">Latin</MenuItem>
  <MenuItem value="LV">Latvian</MenuItem>
  <MenuItem value="LT">Lithuanian</MenuItem>
  <MenuItem value="MK">Macedonian</MenuItem>
  <MenuItem value="MS">Malay</MenuItem>
  <MenuItem value="ML">Malayalam</MenuItem>
  <MenuItem value="MT">Maltese</MenuItem>
  <MenuItem value="MI">Maori</MenuItem>
  <MenuItem value="MR">Marathi</MenuItem>
  <MenuItem value="MN">Mongolian</MenuItem>
  <MenuItem value="NE">Nepali</MenuItem>
  <MenuItem value="NO">Norwegian</MenuItem>
  <MenuItem value="FA">Persian</MenuItem>
  <MenuItem value="PL">Polish</MenuItem>
  <MenuItem value="PT">Portuguese</MenuItem>
  <MenuItem value="PA">Punjabi</MenuItem>
  <MenuItem value="QU">Quechua</MenuItem>
  <MenuItem value="RO">Romanian</MenuItem>
  <MenuItem value="RU">Russian</MenuItem>
  <MenuItem value="SM">Samoan</MenuItem>
  <MenuItem value="SR">Serbian</MenuItem>
  <MenuItem value="SK">Slovak</MenuItem>
  <MenuItem value="SL">Slovenian</MenuItem>
  <MenuItem value="ES">Spanish</MenuItem>
  <MenuItem value="SW">Swahili</MenuItem>
  <MenuItem value="TA">Tamil</MenuItem>
  <MenuItem value="TT">Tatar</MenuItem>
  <MenuItem value="TE">Telugu</MenuItem>
  <MenuItem value="TH">Thai</MenuItem>
  <MenuItem value="BO">Tibetan</MenuItem>
  <MenuItem value="TO">Tonga</MenuItem>
  <MenuItem value="TR">Turkish</MenuItem>
  <MenuItem value="UK">Ukrainian</MenuItem>
  <MenuItem value="UR">Urdu</MenuItem>
  <MenuItem value="UZ">Uzbek</MenuItem>
  <MenuItem value="VI">Vietnamese</MenuItem>
  <MenuItem value="CY">Welsh</MenuItem>
  <MenuItem value="XH">Xhosa</MenuItem>
        </Select>
      </FormControl>
    </div>
  
        
        
      </CardContent>
      <CardActions style={{justifyContent: 'center'}}>
        
    
      </CardActions>
    </Card>
    <Grid className={classes.root} item> </Grid>
    </Grid>
    </Container>
  );
}
