import React from "react";
import Hero from "./fragments/Hero";
import Projects from "./fragments/Projects";
import Investors from "./fragments/Investors";

const Index = () => {
  return (
    <div className="w-full">
      <Hero />
      <Projects />
      <Investors />
    </div>
  );
};

export default Index;
