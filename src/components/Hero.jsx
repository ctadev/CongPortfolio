import React from "react";
import hero from "../img/hero.svg";

function Hero() {
  return (
    <main className="hero-container" id="home">
      <section className="inner-container">
        <div className="hero-info">
          <h2 data-text="Hello, World!">Hello, World!</h2>
          <h1>I'm, Cong Ta</h1>
          <h3>And I build web apps</h3>
          <p>
            Frontend web developer who specialized in building beautiful and
            responsive web applications.
          </p>
          <a
            href="https://docs.google.com/document/d/1yQXkfRsHRm6XBuoPG0Ota3d23bFp3VxFpMe5XvHBEP8"
            target="_blank"
            rel="noreferrer"
          >
            <button>Resume</button>
          </a>
          <a href="#project">
            <button className="project-btn">Projects</button>
          </a>
        </div>
        <div className="hero-img">
          <img src={hero} alt="a boy" />
        </div>
      </section>
    </main>
  );
}

export default Hero;
