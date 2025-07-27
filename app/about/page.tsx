import React from "react";
import Skillcard from "../components/skillcards"

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
                    <Skillcard tech="HTML" percentage="98%" image="/html.png" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!" />
                    <Skillcard tech="CSS" percentage="98%" image="/css.png" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!" />
                    <Skillcard tech="JS" percentage="98%" image="/js.png" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!" />
                    <Skillcard tech="Express/Node" percentage="98%" image="/nodejs-express.png" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!" />
                    <Skillcard tech="React.js" percentage="98%" image="/react.png" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!" />
                    <Skillcard tech="TS" percentage="98%" image="/ts.png" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!" />
                    <Skillcard tech="Tailwind" percentage="98%" image="/tailwind.png" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!" />
                    <Skillcard tech="PostgreSQL" percentage="98%" image="/postgres.png" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!" />
                    <Skillcard tech="RESTful APIs" percentage="98%" image="/restfulapi.png" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!" />
                    <Skillcard tech="Docker" percentage="98%" image="/docker.png" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!" />
                    <Skillcard tech="Next.js" percentage="98%" image="/next.png" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!" />
                    <Skillcard tech="Git" percentage="98%" image="/git.png" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!" />
                    <Skillcard tech="Linux" percentage="98%" image="/linux.png" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!" />
                </div>
            </div>
            <div className="timeline">
                <h1 className="heading">education and experience</h1>
                <div className="card">
                    <div className="card-body">
                        <h1 className="card-title">2025-Present</h1>
                        <p className="card-detail">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto sequi recusandae laborum ipsam dignissimos nostrum vitae provident officia, consectetur ab accusantium corrupti exercitationem temporibus repellat non magni cupiditate ea reprehenderit.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h1 className="card-title">2024-2025</h1>
                        <p className="card-detail">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto sequi recusandae laborum ipsam dignissimos nostrum vitae provident officia, consectetur ab accusantium corrupti exercitationem temporibus repellat non magni cupiditate ea reprehenderit.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h1 className="card-title">2019-2024</h1>
                        <p className="card-detail">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto sequi recusandae laborum ipsam dignissimos nostrum vitae provident officia, consectetur ab accusantium corrupti exercitationem temporibus repellat non magni cupiditate ea reprehenderit.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h1 className="card-title">2014-2019</h1>
                        <p className="card-detail">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto sequi recusandae laborum ipsam dignissimos nostrum vitae provident officia, consectetur ab accusantium corrupti exercitationem temporibus repellat non magni cupiditate ea reprehenderit.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;