import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";

function Home() {
  return (
    <div className="home-container">
        <Nav />
        <Hero />
        <About />
        <Project />
        <Contact />
    </div>
  );
}

export default Home;
