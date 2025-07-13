import React, { useEffect } from 'react'
import Home from './page/Home/Home'
import Login from './page/Login/Login'
import Player from './page/Player/Player'
import { Routes,Route, useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth' 
import { auth } from './firebase'
  import { ToastContainer, toast } from 'react-toastify';

const App = () => {

  const navigate = useNavigate();


  useEffect(()=>{
    onAuthStateChanged(auth, async(user)=>{
      if(user){
        console.log("User is logged in:", user);
        navigate("/");

      }else{
        console.log("No user is logged in");
        navigate("/login");
      }
    })
  },[]);

  return (
    <div>
      <ToastContainer theme='dark'/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/player/:id'element={<Player/>}/>
      </Routes>
      
    </div>
  )
}

export default App
