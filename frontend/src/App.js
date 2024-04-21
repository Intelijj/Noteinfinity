import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";


import Notesstate from "./context/notes/Notesstate";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Alert from "./components/Alert";


function App() {
  const [alert, setalert] = useState("")
  const showalert=(message,type)=>{
    setalert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setalert("")
    }, 1500);
  }
  return (
    <>
    <Notesstate>
   
  
    <Router>
      <Navbar></Navbar>
      <Alert alert={alert}></Alert>
    
      <div className="container">
      <Routes>
        <Route  exact path="/" element={ <Home showalert={showalert}/>}>
           
        </Route> 
        <Route  exact path="/about" element={ <About />}>
           
        </Route> 
        <Route  exact path="/login" element={ <Login showalert={showalert}/>}>
           
           </Route> 
           <Route  exact path="/signup" element={ <Signup showalert={showalert} />}>
           
           </Route> 
      </Routes>
      </div>
     
    </Router> 
    </Notesstate>
    </>
  );
}

export default App;
