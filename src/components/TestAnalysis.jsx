import { Box, Typography } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';

export default function TestAnalysis() {
    const { optionData , score ,examDetails} = useSelector((store) => store.options);
    const logdata = useSelector((store) => store.logInData);
    console.log(examDetails);
  return (
   <>
   <Box
   sx={{width:"60%" , height:"400px" , boxShadow:"rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px", margin: "auto",marginTop:"50px",
   padding:"20px" , textAlign:"center"
}}
   >
    <Typography sx={{fontFamily:"revert" , marginBottom:"10px" , fontSize:"19px"}}> Result of {logdata.user.user.firstName} {logdata.user.user.lastName}</Typography>
    <Typography sx={{fontFamily:"revert" , marginBottom:"10px" , fontSize:"19px"}}> Examination type : {examDetails.exam}</Typography>
    <Typography sx={{fontFamily:"revert" , marginBottom:"10px" , fontSize:"19px"}}> Selected Paper : {examDetails.subject}</Typography>
    <Typography sx={{fontFamily:"revert" , marginBottom:"10px" , fontSize:"19px"}}> Final Score : {score} out of 10</Typography>

    <Typography>Practice more to improve yourself </Typography>
    <Typography>Happy Learning :) </Typography>
   </Box>
   </>
  )
}
