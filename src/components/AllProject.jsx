import React from "react";
import eccomerces from "../img/ecomms.png";
import fylo from "../img/fylo.png";
import games from "../img/games.png";
import music from "../img/music.png";
import starbucks from "../img/starbucks.png";
import weather from "../img/weather.png";
import yonder from "../img/yonder.png";
import netflix from '../img/netflix.png';
import { useNavigate } from "react-router-dom";
import disney from '../img/disneyClone.png'

function AllProject() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };

  const data = [
    {
      id: 1,
      title: "Ecommerces",
      image: eccomerces,
      desc: "An Ecommerce site that will let you shop online",
      link: "https://cong-ecommerce.vercel.app/",
      github: "https://github.com/ctadev/CongEcommerce",
    },
    {
      id: 2,
      title: "Fylo Clone",
      image: fylo,
      desc: "Frontend mentor landing page challenge that I completed",
      link: "https://cong-fylo-clone.vercel.app/",
      github: "https://github.com/ctadev/CongFyloClone",
    },
    {
      id: 3,
      title: "Games Search",
      image: games,
      desc: "A game searching website that let you lookup the details of a game",
      link: "https://cong-game-library.vercel.app/",
      github: "https://github.com/ctadev/CongGameLibrary",
    },
    {
      id: 4,
      title: "Music App",
      image: music,
      desc: "Music App that play songs with the provided songs from database",
      link: "https://cong-music-apps.vercel.app/",
      github: "https://github.com/ctadev/CongMusicApps",
    },
    {
      id: 5,
      title: "Starbucks Clone",
      image: starbucks,
      desc: "A starbucks clone website that I build",
      link: "https://cong-starbucks.vercel.app/",
      github: "https://github.com/ctadev/CongStarbucks",
    },
    {
      id: 6,
      title: "Weather App",
      image: weather,
      desc: "A basic weather app that uses API to get current weather information",
      link: "https://cong-weather-apps.vercel.app/",
      github: "https://github.com/ctadev/CongWeatherApps",
    },
    {
      id: 7,
      title: "Yonder clone",
      image: yonder,
      desc: "A landing page clone challenge that I completed",
      link: "https://cong-travel-guide.vercel.app/",
      github: "https://github.com/ctadev/CongTravelGuide",
    },
    {
      id: 8,
      title: "Netflix Clone",
      image: netflix,
      desc: "Netflix clone with login feature",
      link: "https://cong-netflix-clone.vercel.app/",
      github: "https://github.com/ctadev/CongNetflixClone",
    },
    {
      id: 9,
      title: "Disney Clone",
      image: disney,
      desc: "Disney clone with login and trailer feature",
      link: "https://cong-disney-clone.vercel.app/",
      github: "https://github.com/ctadev/CongDisneyClone",
    },
  ];
  return (
    <main className="allproject-container">
      <section className="inner-container">
        <button onClick={() => goBack()}>
          <i className="fas fa-arrow-left"></i> Go Back
        </button>
        <h1>Cong's Projects</h1>
        <div className="card-container">
          {data.map((item) => (
            <div className="cards" key={item.id}>
              <section className="img-container">
                <img src={item.image} alt={item.title} />
              </section>
              <section className="info-container">
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <div>
                  <a href={item.github} target="_blank" rel="noreferrer">
                    <i className="fab fa-github-square"></i>
                  </a>
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <i className="fab fa-chrome"></i>
                  </a>
                </div>
              </section>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default AllProject;
