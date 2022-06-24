import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useSelector} from "react-redux"
export default function Home() {
    const {optionData} =useSelector((store)=>store.options)
    const [test,setTest]=useState({})
    const [question,setQuestion]=useState([])
   // console.log(test.examination?.JEE_MAIN?.subject?.physics?.easy)
     if(optionData.exam && optionData.subject){
      if(optionData.exam=="JEE_MAIN" && optionData.subject=="physics"){
       // setQuestion([...test.examination.JEE_MAIN.subject.physics.easy])
     }
     else if(optionData.exam=="JEE_MAIN" && optionData.subject=="chemistry"){
       //setQuestion([...test.examination.JEE_MAIN.subject.chemistry.easy])
    }
    else if(optionData.exam=="NEET" && optionData.subject=="physics"){
     //setQuestion([...test.examination.NEET.subject.physics.easy])
  }
    else if(optionData.exam=="NEET" && optionData.subject=="chemistry"){
     //setQuestion([...test.examination.NEET.subject.chemistry.easy])
  }
     }

       console.log(question)
     useEffect(()=>{
        axios.get("http://localhost:8888/examinations").then((res)=>{
           setTest({...test, ...res.data[0]})
        }).catch((err)=>{
           console.log(err.message);
        })
     },[])
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
