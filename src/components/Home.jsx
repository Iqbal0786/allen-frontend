import { CleaningServicesOutlined } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Toolbar,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { get_score } from "../Redux/OptionsRedux/optionsConstant";
import { SignIn } from "./SignIn";
export default function Home() {
  const { optionData } = useSelector((store) => store.options);
  const logdata = useSelector((store) => store.logInData);
  const dispatch=useDispatch();
  const navigate=useNavigate()
  const [value, setValue] = React.useState("");
 // const [score, setScore] = useState(0);
  let answer = [];
let score=0
  const handleAnswer = (index) => {
    console.log(index)

  };
 const getScore =()=>{
   for(let i=0;i<optionData.easy.length;i++){
     for(let j=0;j<answer.length;j++){
      if(i==answer[j].questionId){
        let temp=optionData.easy[i].correctIndex
      if(optionData.easy[i].answers[temp]==answer[j].answervalue){
        score++
      }
        
      }
     }
   }
   dispatch(get_score(score))
   navigate("/submission")
 }
  console.log(value);
  console.log(optionData);
  return logdata.token ? (
    <>
      <AppBar>
        <Toolbar>
          <Typography>Online Test</Typography>
        </Toolbar>
      </AppBar>

      <Box sx={{ width: "70%", margin: "auto", marginTop: "100px" }}>
        {optionData.easy.map((e, i) => {
          return <SingleOption data={e} i={i} answer={answer} />;
        })}
        <Button variant="contained" onClick={getScore} sx={{width:"40%" , marginLeft:"35%",
      marginTop:"20px" , marginBottom:"100px"
      }}>Submit</Button>
      </Box>
    </>
  ) : (
    <SignIn />
  );
}

export const SingleOption = ({ data, i, answer }) => {
  const [selected, setSelected] = useState("");
  
    const handleSelect=(e)=>{
       setSelected(e.target.value)
          for(let j=0;j<answer.length;j++){
             if(answer[j].questionId==i){
              if(answer[j].answervalue==e.target.value){
                answer.splice(j, 1);
              }
              else{
                answer[j].answervalue=e.target.value
              }
              console.log(answer)
              return 
             }
          }
          answer.push({
            questionId:i,
            answervalue:e.target.value
          })
         console.log(answer)
    }
  return (
    <>
      <Box>
        <FormControl>
          <FormLabel
            id="demo-controlled-radio-buttons-group"
            sx={{ fontFamily: "revert", fontSize: "19px", color: "black" }}
          >
            {i + 1} : {data.question}
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={selected}
            onChange={handleSelect}
          >
            {data.answers.map((q) => {
              return (
                <FormControlLabel value={q} control={<Radio />} label={q} />
              );
            })}
          </RadioGroup>
        </FormControl>
      </Box>
    </>
  );
};
