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
            <h1 className="project-title">ZenCoin - Crypto Platform</h1>
            <p className="project-info">
              A full-featured Cryptocurrency platform, with access to over 5,000
              coins, coin conversion tools, a portfolio mechanism, real time
              price updates, and graphical representations. (User data-base in
              progress)
            </p>
            <div className="project-btn-grp">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/SamCode-tech33/CryptoApp"
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
          <img src="demon-scape.png" className="project-img rounded-lg" alt="" />
          <div className="project-content">
            <h1 className="project-title">Demon Scape - 2D Top-Down Game</h1>
            <p className="project-info">
              You wake up in the middle of a horrid demonic ceremony and realize
              the entire human race has been possessed. Blend in with the demons
              around you and find a way to save the world! (A work in the early stages)
            </p>
            <div className="project-btn-grp">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/SamCode-tech33/demon-scape"
                  className="project-btn github"
                >
                  github repo
                </a>
              <button className="project-btn live line-through">see live</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
