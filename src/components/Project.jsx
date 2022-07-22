import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

function Project() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const navigate = useNavigate();
  const viewProjects = () => {
    navigate("/projects");
  };

  return (
    <main className="project-container" id="project" data-aos="zoom-in-down">
      <section className="inner-container">
        <div className="title">
          <h1>Projects</h1>
          <span></span>
        </div>
        <div className="projects">
          <div className="project-card">
            <h1>LinkedIn Clone</h1>
            <div className="project-info">
              <p>
                LinkedIn Clone fullstack build using Nextjs framework with
                mongoDatabase and google Login. This build has tweet and
                comments features.
              </p>
            </div>
            <ul>
              <li>Nextjs</li>
              <li>Sass</li>
              <li>Redux</li>
              <li>MongoDB</li>
            </ul>
            <div className="icons">
              <a
                href="https://github.com/ctadev/CongLinkedIn-Clone"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github-square"></i>
              </a>
              <a
                href="https://cong-linked-in-clone.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-chrome"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="projects second">
          <div className="project-card">
            <h1>Disney Clone</h1>
            <div className="project-info">
              <p>
                My Disney Clone created using Nextjs with SeverSideRendering and
                authentication
              </p>
            </div>
            <ul>
              <li>NextJs</li>
              <li>Sass</li>
            </ul>
            <div className="icons">
              <a
                href="https://github.com/ctadev/CongDisneyClone"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github-square"></i>
              </a>
              <a
                href="https://cong-disney-clone.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-chrome"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="projects third">
          <div className="project-card">
            <h1>Eevee's Clone by Cong</h1>
            <div className="project-info">
              <p>
                A complete e-commerce site clone that I did build on nextjs
                frontend and CMS sanity io backend and stripe payments.
              </p>
            </div>
            <ul>
              <li>React/NextJs</li>
              <li>Sass</li>
              <li>Redux</li>
              <li>Sanity Io</li>
            </ul>
            <div className="icons">
              <a
                href="https://github.com/ctadev/CongEeveeClone"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github-square"></i>
              </a>
              <a
                href="https://cong-eevee-clone.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-chrome"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="more">
          <h2 onClick={() => viewProjects()}>View More Projects...</h2>
        </div>
      </section>
    </main>
  );
}

export default Project;
