import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
// import About from './Components/About';
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  };

  return (
    <React.Fragment>
    {/* //   <Router>
       
        

        // <Routes>
          // <Route exact path="/about" element={<About />} />
          
         // <Route path="/home" element={<Textform heading="Enter Text Here" />} />
         //   </Routes>
          // </Router> */}
         <Navbar title="Azino" register="Register" mode={mode} toggleMode={toggleMode} />
         <Textform heading="Enter Text Here" />
      
     
    </React.Fragment>
  );
}

export default App;
