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
    <div>
      <section
        className={
          page === "projects" ? "project-section active" : "project-section"
        }
      >
        <h1 className="project-heading">some of my projects</h1>
        <div className="note">
          <em>
            Please note that I have listed both the vercel and self-hosted
            versions of my projects. The self-hosted versions are more optimized
            for speed and have better caching. They are running off of my intel
            NUC on ubuntu server LTS. I recommend accessing the self-hosted
            version especially for Demon Scape as it is more asset heavy.
            ZenCoin gets negligible benefits. Also please note that, while rare,
            if my internet goes down or I happen to be working on the server,
            the self-hosted sites may be down. The vercel versions will always
            be accessible.
          </em>
        </div>
        <div className="project-container">
          <div
            className={
              page === "projects" ? "project-card-active" : "project-card"
            }
          >
            <img
              src="crypto-app.png"
              className="project-img rounded-lg"
              alt=""
            />
            <div className="project-content">
              <h1 className="project-title">ZenCoin - Crypto Platform</h1>
              <p className="project-info">
                A full-featured Cryptocurrency platform, with access to over
                5,000 coins, coin conversion tools, a portfolio mechanism, real
                time price updates, and graphical representations. Made with{" "}
                <strong>Next.js</strong>, <strong>React</strong>,{" "}
                <strong>Redux</strong>, <strong>TypeScript</strong>, and{" "}
                <strong>Tailwind / CSS.</strong>
              </p>
              <div className="project-btn-grp items-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/SamCode-tech33/CryptoApp"
                  className="project-btn github"
                >
                  github repo
                </a>
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://zen-coin-crypto-app.vercel.app"
                    className="project-btn live"
                  >
                    See Live - Vercel
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://zencoin.zencode33.dev"
                    className="project-btn live"
                  >
                    See Live - Self-Hosted
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              page === "projects" ? "project-card-active" : "project-card"
            }
          >
            <img
              src="demon-scape.png"
              className="project-img rounded-lg"
              alt=""
            />
            <div className="project-content">
              <h1 className="project-title">Demon Scape - 2D Game</h1>
              <p className="project-info">
                Top-down adventure game using <strong>Phaser.js</strong> with{" "}
                <strong>Next.js (TypeScript / React) </strong>
                and save capabilities to be soon implemented using{" "}
                <strong>MongoDB</strong>. Fight scenes to be remade in 3D soon,
                using <strong>Three.js</strong> (A work in the early stages - PC
                ONLY).
              </p>
              <div className="project-btn-grp items-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/SamCode-tech33/DemonScape"
                  className="project-btn github"
                >
                  github repo
                </a>
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://demon-scape.vercel.app/"
                    className="project-btn live"
                  >
                    See Live - Vercel
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://demonscape.zencode33.dev"
                    className="project-btn live"
                  >
                    See Live - Self-Hosted
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
