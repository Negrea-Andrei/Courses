import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import Courses from "./components/Courses";
import Achievement from "./components/Achievement.jsx"
import Feedback from "./components/Feedback.jsx";
import Register from "./components/Register.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Companies />
      <Courses />
      <Achievement />
      <Feedback />
      <Register />
      <Footer />
    </>
  );
};

export default App;
