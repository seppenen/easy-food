import React, {useContext } from 'react';
import './nutrition.css';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Convert from './utils/Convert'
import {Context} from './context/dataObj'

const useStyles = makeStyles({
    table: {
      width: '100%',
      border: '0px !important',
    },
  });
  
  /* function createData(name, val, ) {
    return { name, val };
  } */
  
  

  
export const Nutrition=(props)=>{
    const {userData}=useContext(Context)

    const classes = useStyles();
    console.log(props)
return (
<>
<section className="performance-facts">
  <header className="performance-facts__header">
    <h1 className="performance-facts__title">Ainekset</h1>
    <p>Serving Size 1/2 cup (about 82g)</p>
      <p>Serving Per Container 8</p>
  </header>
  <table className="performance-facts__table">
    <thead>
      <tr>
        <th colSpan="3" className="small-info">
          Amount Per Serving
        </th>
      </tr>
    </thead>
    <TableContainer >
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow >
            <TableCell> 100g meal</TableCell>
            <TableCell align="right"></TableCell>
   
          </TableRow>
        </TableHead>
        <TableBody>
  
          {props.row.nutrition.map((el) => (
              
            <TableRow key={el.key}>
              <TableCell component="th" scope="row">
            {/* <Convert  text={el.find(el => el.key === "Calories")["key"]} language={userData.lang}/> */}
            
                <Convert  text={el["key"]} language={userData.lang}/>

              </TableCell>
              <TableCell align="right">{el.value}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
 
  </table>

  <table className="performance-facts__table--grid">
    <tbody>
      <tr>
        <td colSpan="2">
          Vitamin A
          10%
        </td>
        <td>
          Vitamin C
          0%
        </td>
      </tr>
      <tr className="thin-end">
        <td colSpan="2">
          Calcium
          10%
        </td>
        <td>
          Iron
          6%
        </td>
      </tr>
    </tbody>
  </table>

  <p className="small-info">* Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or lower depending on your calorie needs:</p>


</section>

</>
);

}