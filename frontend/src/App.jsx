import React from "react";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Footer5 from "./components/Footer/Footer5.jsx";
import Home from "./pages/home.jsx";
import Infographs from "./pages/Infographs.jsx";
import Solar from "./pages/Solar.jsx";  // Make sure Solar component is imported
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   
      <div className="App">
        <Navbar />
        <div className="content mt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Solar" element={<Solar />} />
            <Route path="/notes" element={<Infographs />} />
            <Route path="/Infographs" element={<Infographs />} />
          </Routes>
        </div>
        {/* <Footer5 /> */}
      </div>
  );
}

export default App;
