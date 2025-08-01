"use client";

import { useEffect, useRef } from "react";
import { useAppContext } from "../context";
import React from "react";
import Skillcard from "../components/skillcards";

const About = () => {
  const { page, setPage } = useAppContext();
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    setPage("about");
    return () => {
      setPage("default");
    };
  }, [setPage]);

  useEffect(() => {
    const textEl = textRef.current;

    if (textEl) {
      const characters = textEl.textContent?.split("") ?? [];
      textEl.textContent = "";
      characters.forEach((char, i) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.animation = `fadeIn 0.005s forwards`;
        span.style.animationDelay = `${i * 0.005}s`;
        textEl.appendChild(span);
      });
      console.log(textEl.textContent);
    }
  }, []);

  return (
    <section
      className={page === "about" ? "about-section active" : "about-section"}
    >
      <div className="about">
        <div className="about-img-container">
          <a
            href="/_Samuel-Haraway-CV-2025.pdf"
            download
            className="download-cv-btn"
          >
            <button>Download CV</button>
          </a>
          <img src="/home.png" className="about-img" alt="" />
        </div>
        <p ref={textRef} className="about-info">
          I'm a bilingual full stack developer with hands-on experience building
          scalable, user-focused web applications using technologies like React,
          Next.js, TypeScript, Node.js, PostgreSQL, and Docker. My work has
          ranged from designing and deploying RESTful APIs to building
          responsive interfaces, implementing advanced UI features like
          drag-and-drop layouts, and collaborating with UX designers to deliver
          intuitive user experiences. I'm comfortable working across the full
          development lifecycle—from planning and prototyping to deployment and
          maintenance—and I care deeply about writing clean, maintainable code
          that performs well in real-world environments. Before transitioning
          into software development, I worked in executive recruitment within
          the pharmaceutical industry. That experience sharpened my
          communication and product-sense skills, especially when working with
          commercial teams and understanding the business impact of technology
          decisions. I bring a practical, team-oriented approach to engineering
          and enjoy collaborating closely with designers, product managers, and
          end users to build things that actually solve problems. I hold a B.A.
          in Japanese Language and Literature from the University of Kansas,
          studied abroad in Japan, and hold JLPT N2 certification. I'm a native
          English speaker and speak business-level Japanese.
        </p>
      </div>
      <div className="skill-section">
        <h1 className="heading">skills</h1>
        <div className="skills-container">
          <Skillcard
            tech="HTML"
            percentage={98}
            image="/html.png"
            description="Highly proficient in semantic HTML, accessibility, and performance-oriented markup, capable of building clean, maintainable, SEO-optimized structures for complex layouts."
            stroke="rgb(161, 51, 51)"
          />
          <Skillcard
            tech="CSS"
            percentage={98}
            image="/css.png"
            description="Expert in responsive design, Flexbox, Grid, animations, and modern styling techniques, creating visually appealing and adaptive UIs across all screen sizes."
            stroke="rgb(79, 160, 255)"
          />
          <Skillcard
            tech="JS"
            percentage={92}
            image="/js.png"
            description="Strong command of core JavaScript concepts, ES6+, and DOM manipulation, enabling dynamic, interactive web experiences and robust frontend logic."
            stroke="rgb(158, 147, 46)"
          />
          <Skillcard
            tech="Express/Node"
            percentage={80}
            image="/nodejs-express.png"
            description="Competent in building RESTful APIs and server-side logic using Express, handling routing, middleware, and basic authentication in full-stack projects."
            stroke="rgb(82, 255, 79)"
          />
          <Skillcard
            tech="React.js"
            percentage={92}
            image="/react.png"
            description="Advanced understanding of React components, hooks, and state management, enabling scalable and performant SPA development with clean architecture and reusable logic."
            stroke="rgb(79, 223, 255)"
          />
          <Skillcard
            tech="TS"
            percentage={92}
            image="/ts.png"
            description="Skilled in applying TypeScript to React and Node projects, ensuring type safety, better tooling, and reducing runtime errors in production codebases."
            stroke="rgb(0, 81, 173)"
          />
          <Skillcard
            tech="Tailwind"
            percentage={98}
            image="/tailwind.png"
            description="Highly efficient using utility-first Tailwind framework to rapidly build responsive, consistent UI designs with minimal custom CSS overhead."
            stroke="rgb(79, 223, 255)"
          />
          <Skillcard
            tech="PostgreSQL"
            percentage={75}
            image="/postgres.png"
            description="Solid understanding of relational database design, writing performant SQL queries, and managing structured data for web apps with logical data relationships."
            stroke="rgb(0, 81, 173)"
          />
          <Skillcard
            tech="RESTful APIs"
            percentage={90}
            image="/restfulapi.png"
            description="Experienced in consuming and designing RESTful APIs with clear separation of concerns, following best practices for HTTP verbs and status codes."
            stroke="rgb(236, 240, 241)"
          />
          <Skillcard
            tech="Docker"
            percentage={70}
            image="/docker.png"
            description="Proficient in containerizing full-stack applications, writing Dockerfiles, and managing development environments with Docker Compose for smoother deployment workflows."
            stroke="rgb(79, 160, 255)"
          />
          <Skillcard
            tech="Next.js"
            percentage={88}
            image="/next.png"
            description="Capable of building performant SSR and SSG applications with Next.js, using API routes, dynamic routing, and advanced optimization features effectively."
            stroke="rgb(102, 102, 102)"
          />
          <Skillcard
            tech="Git"
            percentage={95}
            image="/git.png"
            description="Very comfortable with Git version control, including branching strategies, rebasing, resolving conflicts, and collaborating efficiently using GitHub workflows."
            stroke="rgb(69, 29, 134)"
          />
        </div>
        <div className="skill-last">
          <div className="skill-level-container">{97}%</div>
          <svg width="100" height="100" className="skill-wheel">
            <circle
              cx="80"
              cy="80"
              r={70}
              stroke="rgb(236, 240, 241)"
              strokeWidth="10"
              fill="none"
              strokeDasharray={2 * Math.PI * 70}
              strokeDashoffset={
                2 * Math.PI * 70 - (97 / 100) * (2 * Math.PI * 70)
              }
              className="skill-wheel"
              style={{
                transform: "rotate(-90deg)",
                transformOrigin: "50% 53%",
                transition: "stroke-dashoffset 0.5s ease",
              }}
            />
          </svg>
          <img src="linux.png" className="skill-img" alt="Linux" />
          <h1 className="skill-name">Linux</h1>
          <p className="skill-info">
            Strong command-line skills and server management in Linux
            environments, essential for deploying, debugging, and maintaining
            scalable web infrastructure securely.
          </p>
        </div>
      </div>
      <div className="timeline">
        <h1 className="heading">education and experience</h1>
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">2025-Present</h1>
            <p className="card-detail">
              Squared - Full Stack Developer
              <br /> <br />
              Internship program at a start-up building a B2B efficiency
              enhancement product, based on scrum principals.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">2024-2025</h1>
            <p className="card-detail">
              Angolon - Junior Software Engineer
              <br /> <br />
              One year contract, working as a junior fullstack developer,
              frontend focused (80/20)
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">2021-2024</h1>
            <p className="card-detail">
              Self-Teaching + Mentor Phase
              <br /> <br />
              In this period I was teaching myself web development, starting
              with gaining a strong foundation in vanilla JS. I used Harvard's
              free online CS courses, including CS50/Intro, CS50/WebDev, and
              CS50/Databases/SQL. I also hired a mentor who was a previous
              senior developer at Novartis for one on one coaching as well as a
              guide of what projects to create to enhance and speed along my
              learning.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">2019-2024</h1>
            <p className="card-detail">
              Executive Recruitment Consultant - Pharmaceutical Industry Tokyo
              <br /> <br />I worked for two different companies during this time
              period and billed an average of 250K USD a year in placement
              sales. Essentially, we recruited talented Japanese Doctors,
              Pharmacists, and Clinicians for western or global pharmaceutical
              companies. This position gave me a full understanding of most
              business structures, product management knowledge, and strong
              sales skills.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">2014-2019</h1>
            <p className="card-detail">
              University of Kansas + Kanagawa University (Hiratsuka)
              <br /> <br />
              Obtained a degree in Japanese Language and International Business.
              Also participated in the Kansas University track team as a
              pole-vaulter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
