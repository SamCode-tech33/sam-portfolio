import React from "react";
import Link from "next/link";

export const Navbar = () => {
    return (
        <div className="flex w-full h-16 items-center bg-gray-800/50 justify-center">
            <div className="flex justify-between w-1/2 h-10 items-center p-4">
                <Link href="/">home</Link>
                <Link href="/project-portfolio">projects</Link>
                <Link href="/about">about</Link>
                <Link href="/contact">contact</Link>
            </div>
        </div>
    )
}