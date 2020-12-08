
import React, {useContext} from 'react';
import BarcodeScannerComponent from "react-webcam-barcode-scanner";
import {Context} from './context/dataObj'
import Grid from '@material-ui/core/Grid';


export const Reader=({setIsActive})=> {

  const {recent,setRecent,foodData,setReaderData}=useContext(Context)


return (
<>
    <Grid 
  container
  direction="column"
  alignItems="center"
  justify='space-between'
 
>
      <BarcodeScannerComponent style={{zIndex:99}}
      width="100%"
        onUpdate={(err, result) => {  
          if (result) {
          let res= foodData.find(item => item.barCode === result.text)
          let temp= recent.filter(item => item.id!== res.id)

          setRecent([...temp,res])
              setReaderData(result.text)
            setIsActive(false)   
          }
        }}
      />

      </Grid>
</>
  )

}
