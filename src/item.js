
import React,{useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {Context} from './context/dataObj'

import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Convert from './utils/Convert'
import {Nutrition} from './nutrition'
import DrawerMUI from './nav/DrawerMUI'

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex:-1,
    marginTop:'20px',
    width: '100%',
  },
  
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    marginLeft:'0px',
    marginRight:'0px',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export const Item=(props) =>{

  /*   let { id } = useParams();    */ 


  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const {setReaderData,userData}=useContext(Context)



const handleExpandClick = () => {
    setExpanded(!expanded);
  
  };

  const back=()=>{
    
    setReaderData(false)

  }

  return (
   <>
       <DrawerMUI /> 

    {(typeof props.item!=="undefined") ? 
<>

      <div key={props.item.id} className={classes.root}>
      <Typography variant="body2" color="textSecondary" component="p">
          
          <IconButton  component={ Link } to='/' onClick={ ()=>{back()} } aria-label="settings">
                        <ArrowBackIosIcon />
                      </IconButton>
                    <Convert  text="" language={userData.lang}/>
                    </Typography>
        <CardHeader 
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              G
            </Avatar>
            
          }
          
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={props.item.title}
          subheader={props.item.supplier}
        />
        <CardMedia
          
          className={classes.media}
          image={require(`${props.item.url}`)}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
          
          <Convert  text={props.item.headline} language={userData.lang}/>

          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            
            <Nutrition row={props.item}/>
            <Typography paragraph>
              
            </Typography>
            <Typography paragraph>
              
            </Typography>
       
          </CardContent>
        </Collapse>
    
      </div>
      
       </>
    
    :

    <></>
}
  </>);
}
