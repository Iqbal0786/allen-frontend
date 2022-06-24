import * as React from 'react';

import { styled } from '@mui/system';
import { AppBar, Box, Button, FormControl, InputLabel, MenuItem, Select, Toolbar, Typography } from '@mui/material';
import {useNavigate } from "react-router-dom"
import {useDispatch } from "react-redux"
import { get_options } from '../Redux/OptionsRedux/optionsConstant';
import {useSelector} from "react-redux"
export default function Options() {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const data2 =useSelector((store)=>store.options)

  const [data, setData] = React.useState({
    exam:"",
    subject:""
  });
  console.log(data2)
  return (
    <>
    <AppBar sx={{marginBottom:"100px"}}>
        <Toolbar>
            <Typography>Welcome to Allen</Typography>
        </Toolbar>
    </AppBar>

    <Box sx={{ width: "400px"  ,height:"400px",margin:"auto", marginTop:"100px" , boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px " ,padding:"20px" ,textAlign:"center"}}>
      <FormControl sx={{width:"80%" ,marginTop:"40px"}}>
        <InputLabel id="demo-simple-select-label">Select Examination</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={data.exam}
          label="Age"
          onChange={(e)=>{
              setData({...data,exam:e.target.value})
          }}
        >
          <MenuItem value={"JEE_MAIN"}>JEE Main</MenuItem>
          <MenuItem value={"NEET"}>NEET</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{width:"80%" , marginTop:"40px"}}>
        <InputLabel id="demo-simple-select-label">Select Subject</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={data.subject}
          label="Age"
          onChange={(e)=>{
              setData({...data,subject:e.target.value})
          }}
        >
          <MenuItem value={"physics"}>Physics</MenuItem>
          <MenuItem value={"chemistry"}>Chemistry</MenuItem>
        </Select>
      </FormControl>
      <Box>
      <Button variant='outlined' sx={{width:"80%" ,heigth:"150px" , marginTop:"40px"}}
      
       onClick={()=>{
              dispatch(get_options(data))
           navigate("/")
       }}>Next</Button>
      </Box>
    </Box>
   
    </>
  );
}
