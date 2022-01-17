import React, { useState } from "react";
import logo from "../img/logo.jpg";

function Nav() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav>
      <main className="nav-container">
        <section className="logo-container">
          <a href="#home">
            <img src={logo} alt="logo" />
          </a>
        </section>

        <section className={toggle ? "nav-menu open" : "nav-menu"}>
          <a href="#about">
            <h2 onClick={() => setToggle(!toggle)} className="about">
              About
            </h2>
          </a>
          <a href="#project">
            <h2 onClick={() => setToggle(!toggle)} className="project">
              Projects
            </h2>
          </a>
          <a href="#contact">
            <h2 onClick={() => setToggle(!toggle)} className="contact">
              Contacts
            </h2>
          </a>
          <a
            href="https://docs.google.com/document/d/1yQXkfRsHRm6XBuoPG0Ota3d23bFp3VxFpMe5XvHBEP8"
            target="_blank"
            rel="noreferrer"
          >
            <h2 onClick={() => setToggle(!toggle)} className="resume">
              Resume
            </h2>
          </a>
        </section>

        <section
          className="hamburger-container"
          onClick={() => setToggle(!toggle)}
        >
          <span className={toggle ? "top open" : "top"}></span>
          <span className={toggle ? "middle open" : "middle"}></span>
          <span className={toggle ? "bottom open" : "bottom"}></span>
        </section>
      </main>
    </nav>
  );
}

export default Nav;
