import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../components/Home'
import { SignIn} from '../components/SignIn'
import { SignUp } from '../components/SignUp'
export default function AllRoutes() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Login' element={<SignIn/>}/>
    <Route path='/register' element={<SignUp/>}/>
   </Routes>
   </>
  )
}
