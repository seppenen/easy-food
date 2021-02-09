import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import {Context} from './context/dataObj'
import Convert from './utils/Convert'

const useStyles = makeStyles({
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
    Bottom: 12,
  },
 

});

export default function Allergic() {
  const classes = useStyles();
  const {userData, setUserData}=useContext(Context)

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
  
    <Convert  text="Let's personalize your App!" language={userData.lang}/> 

    </Typography>
  
   
    

  
    </Grid>
    <Card style={{flexDirection: "column",display: "flex",justifyContent: "center",minHeight: '20vh',minWidth: '90%',textAlign:'center',}}>
      <CardContent style={{minHeight: '1vh',}}>
       
        <Typography style={{fontSize: '20px',}} variant="subtitle1" component="h2">
        <Convert  text="Haluatko syödä terveellisesti?" language={userData.lang}/> 

        </Typography>
       
        
        
      </CardContent>
      <CardActions style={{justifyContent: 'center'}}>
      <Button onClick={()=> setUserData({...userData, healthy:true})} style={{borderRadius: 50,marginRight:'10px', background: 'linear-gradient(145deg, rgba(134,44,120) 1%, rgba(200,38,128) 10%)', color:'#fff'}}  size="medium">    <Convert  text="Kyllä" language={userData.lang}/> 
</Button>
        <Button onClick={()=> setUserData({...userData, healthy:false})} style={{borderRadius: 50,marginLeft:'10px',background: 'linear-gradient(145deg, rgba(134,44,120) 1%, rgba(200,38,128) 1%)', color:'#fff'}}  size="medium"><Convert  text="No" language={userData.lang}/> </Button>
        
      </CardActions>
    </Card>
    <Grid className={classes.root} item> </Grid>
    </Grid>
    </Container>
  );
}
