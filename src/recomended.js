import React,{useState,useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {Context} from './context/dataObj'
import Card from '@material-ui/core/Card';
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
const useStyles = makeStyles((theme) => ({
  root: {
    zIndex:-1,
    marginTop:'10px',
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

export default function Recomended(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const {userData,foodData,Reader,setReaderData}=useContext(Context)


  const handleExpandClick = () => {
    setExpanded(!expanded);
  
  };

  return (
   <>
    
      <Card key={props.row.id} className={classes.root}>
        <CardHeader 
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
             
                <Convert  text={props.row.title} language={userData.lang}/>
            </Avatar>

          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={<Convert  text={props.row.title} language={userData.lang}/>}

          subheader={props.row.supplier}
        />
        <CardMedia
          
          className={classes.media}
          image={require(`${props.row.url}`)}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
          
          <Convert  text={props.row.headline} language={userData.lang}/>

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
            
            <Nutrition row={props.row}/>
            <Typography paragraph>
              
            </Typography>
            <Typography paragraph>
              
            </Typography>
       
          </CardContent>
        </Collapse>
    
      </Card>
      
       
    
    
  </>);
}
