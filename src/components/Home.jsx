import { CleaningServicesOutlined } from '@mui/icons-material'
import { AppBar, Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Toolbar, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useSelector} from "react-redux"
import { SignIn } from './SignIn'
export default function Home() {
    const {optionData} =useSelector((store)=>store.options)
    const logdata= useSelector((store)=>store.logInData)
    const [value, setValue] = React.useState('');
    const [score,setScore]=useState(0);

    const handleChange = (event) => {
      setValue(event.target.value);
    };
  console.log(value)
  console.log(score)
  return (
    logdata.token? <>
   <AppBar>
    <Toolbar>
        <Typography>Online Test</Typography>
    </Toolbar>
   </AppBar>
   <Box
    sx={{width:"70%" ,margin:"auto",marginTop:"100px"}}
    
    >
     {optionData.easy.map((e,i)=>{
      
      return (
        <Box>
        <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group" 
        sx={{fontFamily:"revert",fontSize:"19px" , color:"black"}}
        >{i+1} : {e.question}</FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
         {e.answers.map((q)=>{
          return (
            <FormControlLabel value={q} control={<Radio />} label={q} />
          )
         
         })}
         
        </RadioGroup>
      </FormControl>
    

      
        </Box>
        
      )
     
     })}
  

   </Box>
   
   </>:<SignIn/>
  )
}
