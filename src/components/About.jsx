import React from "react";

function About() {
  return (
    <main className="about-container" id="about">
      <section className="inner-container">
        <div className="title">
          <h1>About Me</h1>
          <span></span>
        </div>
        <div className="content">
          <div className="desc">
            <p>
              I started programming in 2012 and got my computer programming diploma in College, ever since then I have been fasinated in frontend web development and started my own journey as I self taught myself to futher enhance my skills.
            </p>
            <p>
              With a plethora of training, a great number of applications built,
              and an ineffable amount of hours dedicated, I've become confident
              in calling myself a frontend software developer. I'm excited to see what the future holds.
            </p>
          </div>
          <div className="skills">
            <h2>Skills</h2>
            <div className="skill-item">
              <div>
                <i className="fab fa-html5"></i>
                <p>HTML5</p>
              </div>
              <div>
                <i className="fab fa-css3-alt"></i>
                <p>CSS3</p>
              </div>
              <div>
                <i className="fab fa-react"></i>
                <p>ReactJS</p>
              </div>
              <div>
                <i className="fab fa-js-square"></i>
                <p>Javascript</p>
              </div>
              <div>
                <i className="fab fa-sass"></i>
                <p>Sass</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
