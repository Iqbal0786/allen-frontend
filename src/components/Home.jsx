import { CleaningServicesOutlined } from '@mui/icons-material'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useSelector} from "react-redux"
export default function Home() {
    const {optionData} =useSelector((store)=>store.options)
    console.log(optionData);
  
  return (
   <>
   <AppBar>
    <Toolbar>
        <Typography>Online Test</Typography>
    </Toolbar>
   </AppBar>
   <Box>


   </Box>
   
   </>
  )
}
