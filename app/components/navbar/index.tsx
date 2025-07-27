"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(0);

  const links = [
    { name: "home", href: "/" },
    { name: "projects", href: "/project-portfolio" },
    { name: "about", href: "/about" },
    { name: "contact", href: "/contact" },
  ];

  const handleLinkClick = (index: number) => {
    setActiveLink(index);
  };

  return (
    <div className="flex w-full h-16 items-center bg-gray-800/50 justify-center">
      <div className="flex justify-between w-1/2 h-10 items-center p-4">
        {links.map((link, i) => (
          <Link
            key={i}
            href={link.href}
            className={`link ${activeLink === i ? "active" : ""}`}
            onClick={() => handleLinkClick(i)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
