"use client"

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
        <section className={page === "projects" ? "project-section active" : "project-section"}>
            <h1 className="project-heading">some of my projects</h1>
            <div className="project-container">
                <div className="project-card">
                    <img src="crypto-app.png" className="project-img rounded-lg" alt="" />
                    <div className="project-content">
                        <h1 className="project-title">ZenCoin - Crypto Market Platform</h1>
                        <p className="project-info">
                            ZenCoin's functionality and aesthetic is at the same level as most major crypto-currency platforms. (user database in progress)
                        </p>
                        <div className="project-btn-grp">
                            <button className="project-btn github">github repo</button>
                            <button className="project-btn live">see live</button>
                        </div>
                    </div>
                </div>
                <div className="project-card">
                    <img src="crypto-app.png" className="project-img rounded-lg" alt="" />
                    <div className="project-content">
                        <h1 className="project-title">ZenCoin - Crypto Market Platform</h1>
                        <p className="project-info">
                            ZenCoin's functionality and aesthetic is at the same level as most major crypto-currency platforms. (user database in progress)
                        </p>
                        <div className="project-btn-grp">
                            <button className="project-btn github">github repo</button>
                            <button className="project-btn live">see live</button>
                        </div>
                    </div>
                </div>
                <div className="project-card">
                    <img src="crypto-app.png" className="project-img rounded-lg" alt="" />
                    <div className="project-content">
                        <h1 className="project-title">ZenCoin - Crypto Market Platform</h1>
                        <p className="project-info">
                            ZenCoin's functionality and aesthetic is at the same level as most major crypto-currency platforms. (user database in progress)
                        </p>
                        <div className="project-btn-grp">
                            <button className="project-btn github">github repo</button>
                            <button className="project-btn live">see live</button>
                        </div>
                    </div>
                </div>
                <div className="project-card">
                    <img src="crypto-app.png" className="project-img rounded-lg" alt="" />
                    <div className="project-content">
                        <h1 className="project-title">ZenCoin - Crypto Market Platform</h1>
                        <p className="project-info">
                            ZenCoin's functionality and aesthetic is at the same level as most major crypto-currency platforms. (user database in progress)
                        </p>
                        <div className="project-btn-grp">
                            <button className="project-btn github">github repo</button>
                            <button className="project-btn live">see live</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;