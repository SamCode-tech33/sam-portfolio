import React from "react";
import Link from "next/link";

export const Navbar = () => {
    return (
        <div>
            <Link href="./project-portfolio"> Projects </Link>
            <Link href="./about">About </Link>
            <Link href="./contact">Contact</Link>
        </div>
    )
}