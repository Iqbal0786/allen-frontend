import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../components/Home'
import Options from '../components/Options'
import { SignIn} from '../components/SignIn'
import { SignUp } from '../components/SignUp'
import TestAnalysis from '../components/TestAnalysis'
export default function AllRoutes() {
  return (
   <>
   <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/Login' element={<SignIn/>}/>
    <Route path='/register' element={<SignUp/>}/>
    <Route path='/' element={<Options/>}/>
    <Route path='/submission' element={<TestAnalysis/>}/>
   </Routes>
   </>
  )
}
