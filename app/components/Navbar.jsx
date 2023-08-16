'use client'

import Image from "next/image";
import logo from '../../public/logo.png';
import Link from "next/link";

import { NavDropdownMenu } from "./NavDropdownMenu";


export const NavLinks = [
    { href: '/1', text: 'Link to 1' },
    { href: '/2', text: 'Link to 2' },
    { href: '/3', text: 'Link to 3' },
    { href: '/4', text: 'Link to 4' },
];

export function Navbar() {


    return (
        <nav className="w-full h-16 flex items-center px-6 md:px-8 justify-between">
            <div className="relative">
                <Link href={'/'}>
                    <Image
                        width={120}
                        height={50}
                        src={logo}
                        alt="Website Logo"
                        priority={true}
                     />
                </Link>
            </div>

            <div className="space-x-4 hidden md:block">
                {NavLinks.map((link, index) => (
                    <Link key={index} href={link.href} className="text-gray-600 rounded focus:ring-2 p-3 ring-emerald-400 hover:text-blue-400 font-bold">{link.text}</Link>
                ))}
            </div>

            <NavDropdownMenu/>

        </nav>
    );
}
