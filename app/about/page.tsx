"use client";

import { useEffect } from "react";
import { useAppContext } from "../context";
import React from "react";
import Skillcard from "../components/skillcards";

const About = () => {
  const { page, setPage } = useAppContext();

  useEffect(() => {
    setPage("about");
    return () => {
      setPage("default");
    };
  }, [setPage]);

  return (
    <section
      className={page === "about" ? "about-section active" : "about-section"}
    >
      <div className="about">
        <div className="about-img-container">
          <button className="download-cv-btn">downlaod cv</button>
          <img src="/about.png" className="about-img" alt="" />
        </div>
        <p className="about-info">Lorem ipsum.....</p>
      </div>
      <div className="skill-section">
        <h1 className="heading">skills</h1>
        <div className="skills-container">
          <Skillcard
            tech="HTML"
            percentage={98}
            image="/html.png"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!"
            stroke="rgb(161, 51, 51)"
          />
          <Skillcard
            tech="CSS"
            percentage={98}
            image="/css.png"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!"
            stroke="rgb(79, 160, 255)"
          />
          <Skillcard
            tech="JS"
            percentage={92}
            image="/js.png"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!"
            stroke="rgb(158, 147, 46)"
          />
          <Skillcard
            tech="Express/Node"
            percentage={80}
            image="/nodejs-express.png"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!"
            stroke="rgb(82, 255, 79)"
          />
          <Skillcard
            tech="React.js"
            percentage={92}
            image="/react.png"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!"
            stroke="rgb(79, 223, 255)"
          />
          <Skillcard
            tech="TS"
            percentage={92}
            image="/ts.png"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!"
            stroke="rgb(0, 81, 173)"
          />
          <Skillcard
            tech="Tailwind"
            percentage={98}
            image="/tailwind.png"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!"
            stroke="rgb(79, 223, 255)"
          />
          <Skillcard
            tech="PostgreSQL"
            percentage={75}
            image="/postgres.png"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!"
            stroke="rgb(0, 81, 173)"
          />
          <Skillcard
            tech="RESTful APIs"
            percentage={90}
            image="/restfulapi.png"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!"
            stroke="rgb(236, 240, 241)"
          />
          <Skillcard
            tech="Docker"
            percentage={70}
            image="/docker.png"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!"
            stroke="rgb(79, 160, 255)"
          />
          <Skillcard
            tech="Next.js"
            percentage={88}
            image="/next.png"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!"
            stroke="rgb(102, 102, 102)"
          />
          <Skillcard
            tech="Git"
            percentage={95}
            image="/git.png"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!"
            stroke="rgb(69, 29, 134)"
          />
          <Skillcard
            tech="Linux"
            percentage={97}
            image="/linux.png"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!"
            stroke="rgb(236, 240, 241)"
          />
        </div>
      </div>
      <div className="timeline">
        <h1 className="heading">education and experience</h1>
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">2025-Present</h1>
            <p className="card-detail">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto sequi recusandae laborum ipsam dignissimos nostrum
              vitae provident officia, consectetur ab accusantium corrupti
              exercitationem temporibus repellat non magni cupiditate ea
              reprehenderit.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">2024-2025</h1>
            <p className="card-detail">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto sequi recusandae laborum ipsam dignissimos nostrum
              vitae provident officia, consectetur ab accusantium corrupti
              exercitationem temporibus repellat non magni cupiditate ea
              reprehenderit.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">2019-2024</h1>
            <p className="card-detail">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto sequi recusandae laborum ipsam dignissimos nostrum
              vitae provident officia, consectetur ab accusantium corrupti
              exercitationem temporibus repellat non magni cupiditate ea
              reprehenderit.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">2014-2019</h1>
            <p className="card-detail">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto sequi recusandae laborum ipsam dignissimos nostrum
              vitae provident officia, consectetur ab accusantium corrupti
              exercitationem temporibus repellat non magni cupiditate ea
              reprehenderit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
