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
    <div className="nav flex w-full items-center justify-center">
      <div className="flex justify-between w-1/2 h-16 items-center p-4">
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
