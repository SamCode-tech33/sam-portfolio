"use client";

import { useEffect, useRef } from "react";
import { useAppContext } from "../context";
import React from "react";
import Skillcard from "../components/skillcards";
import Image from "next/image";

const About = () => {
  const { page, setPage } = useAppContext();
  const textRef = useRef<HTMLParagraphElement>(null);
  const originalHTMLRef = useRef<string>("");

  useEffect(() => {
    setPage("about");
    return () => {
      setPage("default");
    };
  }, [setPage]);

  useEffect(() => {
    if (!textRef.current) return;
    const originalHTML = textRef.current.innerHTML;
    if (!originalHTMLRef.current) {
      originalHTMLRef.current = textRef.current.innerHTML.replace(
        /<!--.*?-->/g,
        "",
      );
    }
    textRef.current.innerHTML = originalHTMLRef.current;
    const cleanHTML = originalHTMLRef.current;
    textRef.current.innerHTML = "";
    let delay = 0;
    cleanHTML.split(/(<strong>.*?<\/strong>)/g).forEach((chunk) => {
      if (chunk.startsWith("<strong>")) {
        const boldText = chunk.replace(/<\/?strong>/g, "");
        boldText.split("").forEach((char) => {
          const span = document.createElement("span");
          span.textContent = char;
          span.classList.add("highlight");
          span.style.animation = `fadeIn 0.005s forwards`;
          span.style.animationDelay = `${delay * 0.005}s`;
          delay++;
          textRef.current?.appendChild(span);
        });
      } else {
        chunk.split("").forEach((char) => {
          const span = document.createElement("span");
          span.textContent = char;
          span.style.animation = `fadeIn 0.005s forwards`;
          span.style.animationDelay = `${delay * 0.005}s`;
          delay++;
          textRef.current?.appendChild(span);
        });
      }
    });
  }, []);

  return (
    <section
      className={page === "about" ? "about-section active" : "about-section"}
    >
      <div className="about">
        <div className="about-img-container">
          <a
            href="/_Samuel-Haraway-CV-English-2026.pdf"
            download
            className="download-cv-btn-en"
          >
            <button
              type="button"
              className="flex items-center justify-around w-24"
            >
              <span>English CV</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <title>Download Icon</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </button>
          </a>
          <a
            href="/履歴書ハラウェイ・サミュエル.pdf"
            download
            className="download-cv-btn-jp-ri"
          >
            <button
              type="button"
              className="flex items-center justify-around w-24"
            >
              <span>履歴書</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <title>Download Icon</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </button>
          </a>
          <a
            href="/_Samuel-Haraway-CV-Japanese-2026.pdf"
            download
            className="download-cv-btn-jp"
          >
            <button
              type="button"
              className="flex items-center justify-around w-24"
            >
              <span>Japanese CV</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <title>Download Icon</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </button>
          </a>
          <Image
            src="/about.png"
            className="about-img"
            alt="missing"
            width={400}
            height={1200}
          />
        </div>
        <p ref={textRef} className="about-info">
          Full Stack Web Developer about 2 years building production-ready
          applications in{" "}
          <strong>React, Next.js, PostgreSQL (Docker), and MongoDB, </strong>
          including a full <strong>cryptocurrency platform</strong> and an{" "}
          <strong>RPG adventure game</strong> with save functionality, using{" "}
          <strong>Phaser.js </strong>with <strong>Next.js </strong> and{" "}
          <strong>MongoDB. </strong>
          Former executive recruiter with 5 years of experience sourcing and
          evaluating top talent for global companies — bringing sharp
          communication skills, business insight, and the ability to deliver
          technical solutions that align with client needs.{" "}
          <strong>Bilingual English/Japanese</strong> and experienced in both US
          and Japan business environments.
        </p>
      </div>
      <div className="skill-section">
        <h1 className="heading">skills</h1>
        <div className="skills-container">
          <Skillcard
            tech="HTML"
            image="/html.png"
            description="Highly proficient in semantic HTML, accessibility, and performance-oriented markup, capable of building clean, maintainable, SEO-optimized structures for complex layouts."
            stroke="rgb(161, 51, 51)"
          />
          <Skillcard
            tech="CSS"
            image="/css.png"
            description="Expert in responsive design, Flexbox, Grid, animations, and modern styling techniques, creating visually appealing and adaptive UIs across all screen sizes."
            stroke="rgb(79, 160, 255)"
          />
          <Skillcard
            tech="JS"
            image="/js.png"
            description="Strong command of core JavaScript concepts, ES6+, and DOM manipulation, enabling dynamic, interactive web experiences and robust frontend logic."
            stroke="rgb(158, 147, 46)"
          />
          <Skillcard
            tech="Express/Node"
            image="/nodejs-express.png"
            description="Competent in building RESTful APIs and server-side logic using Express, handling routing, middleware, and basic authentication in full-stack projects."
            stroke="rgb(82, 255, 79)"
          />
          <Skillcard
            tech="React.js"
            image="/react.png"
            description="Advanced understanding of React components, hooks, and state management, enabling scalable and performant SPA development with clean architecture and reusable logic."
            stroke="rgb(79, 223, 255)"
          />
          <Skillcard
            tech="TS"
            image="/ts.png"
            description="Skilled in applying TypeScript to React and Node projects, ensuring type safety, better tooling, and reducing runtime errors in production codebases."
            stroke="rgb(0, 81, 173)"
          />
          <Skillcard
            tech="Tailwind"
            image="/tailwind.png"
            description="Highly efficient using utility-first Tailwind framework to rapidly build responsive, consistent UI designs with minimal custom CSS overhead."
            stroke="rgb(79, 223, 255)"
          />
          <Skillcard
            tech="PostgreSQL"
            image="/postgres.png"
            description="Solid understanding of relational database design, writing performant SQL queries, and managing structured data for web apps with logical data relationships."
            stroke="rgb(0, 81, 173)"
          />
          <Skillcard
            tech="RESTful APIs"
            image="/restfulapi.png"
            description="Experienced in consuming and designing RESTful APIs with clear separation of concerns, following best practices for HTTP verbs and status codes."
            stroke="rgb(236, 240, 241)"
          />
          <Skillcard
            tech="Docker"
            image="/docker.png"
            description="Proficient in containerizing full-stack applications, writing Dockerfiles, and managing development environments with Docker Compose for smoother deployment workflows."
            stroke="rgb(79, 160, 255)"
          />
          <Skillcard
            tech="Next.js"
            image="/next.png"
            description="Capable of building performant SSR and SSG applications with Next.js, using API routes, dynamic routing, and advanced optimization features effectively."
            stroke="rgb(102, 102, 102)"
          />
          <Skillcard
            tech="Git"
            image="/git.png"
            description="Very comfortable with Git version control, including branching strategies, rebasing, resolving conflicts, and collaborating efficiently using GitHub workflows."
            stroke="rgb(69, 29, 134)"
          />
        </div>
        <div className="skill-last">
          <Image
            src="/linux.png"
            className="skill-img"
            alt="Linux"
            width={200}
            height={100}
          />
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
              Angolon - Full Stack Developer
              <br /> <br />
              A continuation of my contract and contributor our new client's
              start up environment.
              <br /> <br />
              TypeScript/React frontend with GO/express.js backend and
              postgreSQL DB
              <br />
              contribution to agentic AI service
              <br />
              RPC services with gRPC and protobuf
              <br />
              Database and Query optimization
              <br />
              Product and client research with customers
              <br />
              Working with live deployments
              <br />
              enterprise-grade monorepo
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">2024-2025</h1>
            <p className="card-detail">
              Angolon - Junior Developer
              <br /> <br />
              Contract based work with a timeline of 3 months renewed 5 times -
              working as a junior fullstack developer, frontend focused (80/20)
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
