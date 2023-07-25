

import React from "react";
import { Route, Routes } from "react-router-dom"; 

import Navbar from "../Navbar/Navbar";
import Homepage from "../Homepage/Homepage";
import Footer from "../Footer/Footer";

function Routing() {
  return (
    
    
      <div>
        <Navbar/>
        <Routes>
         
          <Route path="/home" element={<Homepage />} />
         
        </Routes>
        <Footer/>
      </div>
    
    
  );
}

export default Routing;
