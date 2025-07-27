import React from "react";

const Projects = () => {
    return (
        <section className="project-section active">
            <h1 className="project-heading">some of my projects</h1>
            <div className="project-container">
                <div className="project-card">
                    <img src="img/project-1.png" className="project-img" alt="" />
                    <div className="project-content">
                        <h1 className="project-title">project 01</h1>
                        <p className="project-info">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit vitae delectus cumque repudiandae aliquam optio accusamus natus nobis! Nam, sunt?
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