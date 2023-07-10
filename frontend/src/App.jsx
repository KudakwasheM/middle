import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Opportunities from "./components/Opportunities";
import NewsLetter from "./components/NewsLetter";
import Cards from "./components/Cards";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <About />
      <Opportunities />
      {/* <Contact /> */}
      <Footer />
      {/* <NewsLetter /> */}
      {/* <Cards /> */}
    </div>
  );
};

export default App;
