"use client"

import { useAppContext } from "../../context";
import Link from "next/link";

const Navbar = () => {
  const { page } = useAppContext();

  const links = [
    { name: "home", href: "/" },
    { name: "projects", href: "/project-portfolio" },
    { name: "about", href: "/about" },
    { name: "contact", href: "/contact" },
  ];

  return (
    <div className="nav flex items-center justify-center">
      <div className="nav-links flex justify-between h-16 items-center">
        {links.map((link, i) => (
          <Link
            key={i}
            href={link.href}
            className={page === link.name ? "link active" : "link"}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
