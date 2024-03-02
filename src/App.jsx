import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import Courses from "./components/Courses";
import Achievement from "./components/Achievement.jsx"

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Companies />
      <Courses />
      <Achievement />
    </>
  );
};

export default App;
