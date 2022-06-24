import { Box, Typography } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';

export default function TestAnalysis() {
    const { optionData , score} = useSelector((store) => store.options);
    const logdata = useSelector((store) => store.logInData);
    console.log(optionData);
  return (
   <>
   <Box
   sx={{width:"60%" , height:"400px" , boxShadow:"rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px", margin: "auto",marginTop:"50px",
   padding:"20px" , textAlign:"center"
}}
   >
    <Typography> Final Score : {score} out of 10</Typography>

   </Box>
   </>
  )
}
