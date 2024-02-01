import React from 'react'
import Navbar from './Components/navbar/Navbar'
import Home from './Components/home/Home'
import Footer from './Components/footer/Footer'
import About from './Components/about/About'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignUp from './Components/signup/SignUp'
import SignIn from './Components/signup/SignIn'
import Note from './Components/note/Note'
import { useDispatch } from "react-redux";
import { authActions } from "./store";
import { useEffect } from 'react'


const App = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
  const id= sessionStorage.getItem("id");
   if(id){
   dispatch(authActions.login());
  }
  },[])
  return(
    <div>
      <Router>
      <Navbar/>
        <Routes>
          <Route exact path="/"element={<Home/>}/>
          <Route  path="/about"element={<About/>}/>
          <Route  path="/signin"element={<SignIn/>}/>
          <Route  path="/signup"element={<SignUp/>}/>
          <Route  path="/note"element={<Note/>}/>
          <Route  path="/logout"element={<About/>}/>
        </Routes>
      </Router>


      
      
      
      <Footer />
  </div>
  ) ;
  
};

export default App
