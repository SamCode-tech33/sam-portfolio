import React from "react";

const About = () => {
    return (
        <section className="about-section active">
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
                    <div className="skill-card">
                        <img src="img/html.png" className="skill-img" alt="" />
                        <div className="skill-level">98%</div>
                        <h1 className="skill-name">HTML</h1>
                        <p className="skill-info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!</p>
                    </div>
        // +4 more cards
                </div>
            </div>
        </section>
    )
}

export default About;