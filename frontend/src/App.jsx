import React from "react";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
//import Footer5 from "./components/Footer/Footer5.jsx";
import Home from "./pages/home.jsx";
import Infographs from "./pages/Infographs.jsx";
import Note from "./pages/notes.jsx";
import Solar from "./pages/Solar.jsx";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      console.log("hii")
      <Navbar />
      <div className="content content-margin-top">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="http://localhost:5173/" element={<Solar />} />
          <Route path="/notes" element={<Note />} />
          <Route path="/Infographs" element={<Infographs />} />
        </Routes>
      </div>
      {/* <Footer5 /> */}
    </div>
  ); 
}

export default App;
