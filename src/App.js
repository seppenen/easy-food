import React, { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";

import {Context} from './context/dataObj'
import Grid from '@material-ui/core/Grid';
import DrawerMUI from './nav/DrawerMUI'
import DrawerMUIBottom from './nav/DrawerMUIBottom'

import Vegan from './vegan'
import Allergic from './allergic'
import Lang from './lang'
import Preg from './preg'
import Recomended from './recomended'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import lightBlue from '@material-ui/core/colors/lightBlue';
import {Item} from './item'
import {RecentItem} from './recentItem'
import {Reader} from './reader'
import ServerModal from './modal'

function App() {
   const [foodData ]=useState([
    {
      id:0,
      barCode:'77708282',
      title:'Shrimps and Chorizo Paella',
      url:'./images/paella.jpg',
      supplier:'El Biance' ,
      headline:'Paella 72 % (durumvehnä), palmurasva, riisijauho, juustojauhe 3,5 % (juusto, emulgointiaine (E339)), suola, herajauhe (maito), perunatärkkelys, maitosokeri, glukoosisiirappi, maitoproteiini, hiivauute, maltodekstriini, valkosipuli, mausteyrtit ja mausteet (mm. persilja), aromi, dekstroosi, sokeri, sipuli, väri (E160).  Saattaa sisältää pieniä määriä kananmunaa, soijaa, selleriä, kalaa, äyriäisiä, ja nilviäisiä.',
      vegan:false,
      healthy:true,
      preg:true,
      category:['sea'],
      sponsored:true,
      nutrition :[
        {
              key:"Calories",
              value: "150"
      },
        {
              key:"Sugar",
              value: "100" 
  },
          {
            key:"Protein",
            value: "180"
}]
    },
    {
      id:1,
      barCode:'77708287',
      title:'Spinat pasta ',
      url:'./images/maito.jpg',
      supplier:'Barilla' ,
      headline:'Pasta 72 % (durumvehnä), palmurasva, riisijauho, juustojauhe 3,5 % (juusto, emulgointiaine (E339)), suola, herajauhe (maito), perunatärkkelys, maitosokeri, glukoosisiirappi, maitoproteiini, hiivauute, maltodekstriini, valkosipuli, mausteyrtit ja mausteet (mm. persilja), aromi, dekstroosi, sokeri, sipuli, väri (E160).  Saattaa sisältää pieniä määriä kananmunaa, soijaa, selleriä, kalaa, äyriäisiä, ja nilviäisiä.',
      vegan:true,
      healthy:true,
      preg:true,
      category:['vege','pasta'],
      sponsored:true,
      nutrition :[
        {
              key:"Calories",
              value: "150"
      },
        {
              key:"Sugar",
              value: "100" 
  },
          {
            key:"Protein",
            value: "180"
}]
    },
    {
      id:3,
      barCode:'77216230',
      title:'Rosemary beef ',
      url:'./images/beef.jpg',
      supplier:'Tamminen' ,
      headline:'Naudan sisäfilee, palmurasva, riisijauho, juustojauhe suola, maitoproteiini, hiivauute, maltodekstriini, valkosipuli, mausteyrtit ja mausteet (mm. persilja), aromi, dekstroosi, sokeri, ja nilviäisiä.',
      vegan:false,
      healthy:false,
      preg:true,
      category:['meat','beef'],
      sponsored:true,
      nutrition :[
        {
              key:"Calories",
              value: "150"
      },
        {
              key:"Sugar",
              value: "100" 
  },
          {
            key:"Protein",
            value: "180"
}]
    },
    {
      id:4,
      barCode:'772162390',
      title:'Salad ',
      url:'./images/salad.jpg',
      supplier:'HK' ,
      headline:'Pasta 72 % (durumvehnä), palmurasva, riisijauho, juustojauhe 3,5 % (juusto, emulgointiaine (E339)), suola, herajauhe (maito), perunatärkkelys, maitosokeri, glukoosisiirappi, maitoproteiini, hiivauute, maltodekstriini, valkosipuli, mausteyrtit ja mausteet (mm. persilja), aromi, dekstroosi, sokeri, sipuli, väri (E160).  Saattaa sisältää pieniä määriä kananmunaa, soijaa, selleriä, kalaa, äyriäisiä, ja nilviäisiä.',
      vegan:true,
      healthy:true,
      preg:true,
      category:['vege','healthy'],
      sponsored:true,
      nutrition :[
        {
              key:"Calories",
              value: "150"
      },
        {
              key:"Sugar",
              value: "100" 
  },
          {
            key:"Protein",
            value: "180"
}]
    },{
      id:5,
      barCode:'77216234',
      title:'Sushi box',
      url:'./images/sushi.png',
      supplier:'S-Ryhmä' ,
      headline:'10шт – Филадельфия лосось, крем сыр, огурец, авокадо и кунжут 10шт – Кутчаро приготовленный на пару лосось, огурец, крем сыр, кунжут с соусом терияки  10шт – Темпура c лососем лосось, лук порей, крем сыр и соус терияки   10шт – Темпура с курицей гриль курица в соусе терияки, морковь, крем сыр с чесночно-имбирным соусом чили',
      vegan:false,
      healthy:true,
      preg:false,
      category:['healthy','vege','sushi'],
      sponsored:true,
      nutrition :[
        {
              key:"Calories",
              value: "150"
      },
        {
              key:"Sugar",
              value: "100" 
  },
          {
            key:"Protein",
            value: "180"
}]
    }

  ]);
  const [readerData, setReaderData] = useState(false);
  const [recent, setRecent]=useState([
    
  ]);
  const [isActive, setIsActive] = useState(false);
  const [items, setItems] = useState();
  const [recomended, setRecomended] = useState([]);
  const [userData, setUserData] = useState({
    vegan: null, 
    healthy: null, 
    preg: null, 
    lang:null
  });

  const theme = createMuiTheme({
    spacing: 4,
    typography: {
      fontFamily: ['Roboto'],
      },
    palette: {
      primary:{
        main: lightBlue[700], 
      },
      secondary: {
        main: '#11cb5f',
        second: 'red',
      },
      type: 'light',
      } 
    });

   
    const getItem=(val)=>{
      if(!!readerData){
        let result=foodData.find(item => item.barCode === val)
        return result;       
}
    }

    const filterItems=()=>{
    let result=foodData
   

    if(recomended){ 

    recomended.map(row=>{  
     return result=result.filter(item => item.id!== row.id)

    })

    
  }

  

    if(userData.preg){ 
      result=result.filter((row) => row.preg===userData.preg)
    }
    if(userData.healthy ){ 
      result=result.filter((row) => row.healthy===userData.healthy)
    }
    if(userData.vegan ){ 
    result=result.filter((row) => row.vegan===userData.vegan )
    }

    

    return result
    }

    const sortRecomended=()=>{
      let result=[];
      let temp;
    
      if(!!recent){
        recent.map((row=>{
          if(row.category.map((el=>{
             foodData.filter(row=>(
              row.category.find(row=>row===el)))
              temp=foodData.filter(row=>row.category.find(row=>row===el))
              temp.map((row=>{               
              result=result.filter(item => item.id!== row.id)
              result.push(row)  
              return null

            }))
          return null
        })));   
          return null
        }
        ))
        
      }
      return result
      }


useEffect(()=>{
  setRecomended(sortRecomended());
  // eslint-disable-next-line react-hooks/exhaustive-deps
},[recent,userData])

useEffect(()=>{ 
  setItems(filterItems());
  // eslint-disable-next-line react-hooks/exhaustive-deps
},[recomended,userData])


  return (
  <>
    <BrowserRouter> 
    <MuiThemeProvider theme={ theme }> 
    {!!readerData ? <Redirect to='/item' />:<></>}
    <CssBaseline />
    <Context.Provider value={{
      userData, 
      recent, 
      setRecent,
      readerData,
      Reader, 
      setReaderData,
      foodData,
      setUserData,
      recomended
      }}> 
    <Switch> 
    <Route path='/item'  render={ () => <Item item={getItem(readerData)}/>  } />
    <Route path='/Varaa'  render={ () => <Allergic/>  } />
    <Route path='/view/:id/:key?' component={ RecentItem } />
    {userData.lang==null ? <Lang/>:  userData.vegan==null ? <Vegan/> : userData.healthy==null ? <Allergic/> : userData.preg==null ? <Preg/>
      : 
      <> 
    <DrawerMUI /> 
    {isActive ?
   <ServerModal isActive={isActive} setIsActive={setIsActive}/> 
      : 
      typeof recomended!='undefined' ?
      recomended.map((row)=>( 
      <Recomended key={row.id} row={row}/>  
       )) 
       :<></>}
     {typeof items!='undefined' ?
      items.map((row)=>( 
      <Recomended key={row.id} row={row}/>  
       )) 
    :<></>}
    <div style={{marginBottom:'20%'}}></div>
    <Grid container direction="row" alignItems="center"  justify='space-between' style={{ position:'fixed', bottom:'0px'}}>
    <Grid  xs={12} item>  
    <DrawerMUIBottom isActive={isActive} setIsActive={setIsActive} />
    </Grid>
    </Grid>
        </> 
        }
    </Switch>
    </Context.Provider>
    </MuiThemeProvider>
    </BrowserRouter>
    </>
  );
}


export default App;