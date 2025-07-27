import React from "react";
import Link from "next/link";

export const Navbar = () => {
    return (
        <div className="flex w-full h-16 items-center bg-gray-800/50 justify-center">
            <div className="flex justify-between w-1/2 h-10 items-center p-4">
                <Link href="/">Home</Link>
                <Link href="/project-portfolio"> Projects</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </div>
    )
}