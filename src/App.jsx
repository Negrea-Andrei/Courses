import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Support from "./components/Support.jsx";
import Pricing from "./components/Pricing.jsx";
import Platform from "./components/Platform.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About />}/>
        <Route path="/support" element={<Support />}/>
        <Route path="/platform" element={<Platform />}/>
        <Route path="/pricing" element={<Pricing />}/>
      </Routes>
    </Router>
  );
};

export default App;
