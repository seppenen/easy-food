import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {Context} from './context/dataObj'
import Convert from './utils/Convert'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';




export const Recent=()=>{

const {recent,userData}=useContext(Context)
    
return (

<>
{recent.length ? recent.reverse().map((row)=>(
<ListItem key={row.id} button component={ Link } to={'/view/' + row.id+'/'+0}>

<ListItemText style={{fontSize:'12px'}} primary={<Convert  text={row.title} language={userData.lang}/>}/></ListItem>



),recent.reverse() ) : <ListItemText primary='No results yet' />}
</>
)


}