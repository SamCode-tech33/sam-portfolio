"use client";

import { useEffect } from "react";
import { useAppContext } from "../context";

const Projects = () => {
  const { page, setPage } = useAppContext();

  useEffect(() => {
    setPage("projects");
    return () => {
      setPage("default");
    };
  }, [setPage]);

  return (
    <section
      className={
        page === "projects" ? "project-section active" : "project-section"
      }
    >
      <h1 className="project-heading">some of my projects</h1>
      <div className="project-container">
        <div
          className={
            page === "projects" ? "project-card-active" : "project-card"
          }
        >
          <img src="crypto-app.png" className="project-img rounded-lg" alt="" />
          <div className="project-content">
            <h1 className="project-title">ZenCoin - Cryptocurrency Platform</h1>
            <p className="project-info">
              ZenCoin's functionality and aesthetic is at the same level as most
              major crypto-currency platforms. (user database in progress)
            </p>
            <div className="project-btn-grp">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/sam-tech-33/CryptoApp"
                className="project-btn github"
              >
                github repo
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://zen-coin-crypto-app.vercel.app"
                className="project-btn live"
              >
                see live
              </a>
            </div>
          </div>
        </div>
        <div
          className={
            page === "projects" ? "project-card-active" : "project-card"
          }
        >
          <img src="tech.jpg" className="project-img rounded-lg" alt="" />
          <div className="project-content">
            <h1 className="project-title">To be Added</h1>
            <p className="project-info">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit.
            </p>
            <div className="project-btn-grp">
              <button className="project-btn github">github repo</button>
              <button className="project-btn live">see live</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
