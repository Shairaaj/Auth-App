import React from 'react'
import { Home } from './Pages/Home'
import { About } from './Pages/About'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signin } from './Pages/Signin';
import { Signup } from './Pages/Signup';
import { Profile } from './Pages/Profile';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
      </Routes>
    </BrowserRouter>
  );
    
}
