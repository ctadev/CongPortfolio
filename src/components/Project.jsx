import React from "react";
import { useNavigate } from "react-router-dom";

function Project() {
  const navigate = useNavigate();
  const viewProjects = () => {
    navigate("/projects");
  };


  return (
    <main className="project-container" id="project">
      <section className="inner-container">
        <div className="title">
          <h1>Projects</h1>
          <span></span>
        </div>
        <div className="projects">
          <div className="project-card">
            <h1>Games Search</h1>
            <div className="project-info">
              <p>
                This website let you search any game available on the rawg.io
                API database. It also has an add to favourite feature that will
                be saved on the user localStorage.
              </p>
            </div>
            <ul>
              <li>React</li>
              <li>Sass</li>
              <li>Redux</li>
              <li>RawgAPI</li>
            </ul>
            <div className="icons">
              <a
                href="https://github.com/ctadev/CongGameLibrary"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github-square"></i>
              </a>
              <a
                href="https://cong-game-library.vercel.app/"
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
                My Disney Clone created using Nextjs with SeverSideRendering and authentication
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
            <h1>Shopiies Ecommerces</h1>
            <div className="project-info">
              <p>
                An e-commerces site that will let you shop online with a modal
                cart feature, rest api to display list of products and
                localStorage database for the cart to persist on users website.
              </p>
            </div>
            <ul>
              <li>React</li>
              <li>Sass</li>
              <li>Redux</li>
              <li>REST-API</li>
            </ul>
            <div className="icons">
              <a
                href="https://github.com/ctadev/CongEcommerce"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github-square"></i>
              </a>
              <a
                href="https://cong-ecommerce.vercel.app/"
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
