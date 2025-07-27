"use client"

import { useEffect } from "react";
import { useAppContext } from "./context";

export default function Home() {
  const { page, setPage } = useAppContext();

    useEffect(() => {
        setPage("home");
        return () => {
            setPage("default");
        };
    }, [setPage]);

  return (
    <section className={page === "home" ? "home-section active" : "home-section"}>
      <h1 className="hero-heading">hello, i am <br /> samuel</h1>
      <img src="/home.png" className="home-img" alt="image missing" />
    </section>
  );
}
