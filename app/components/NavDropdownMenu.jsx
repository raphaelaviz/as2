'use client'
import { useState } from "react";
import { NavLinks } from "./Navbar";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";



export function NavDropdownMenu() {

    const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <div className="md:hidden relative">
                <button 
                    className="text-2xl"
                    onBlur={()=> setDropdownVisible(false) }
                    onClick={() => setDropdownVisible(!dropdownVisible)}
                >
                    <RxHamburgerMenu/>
                </button>

                {dropdownVisible && (
                    <div className="absolute top-full right-0 mt-2 w-max rounded-md shadow-lg bg-gray-800 bg-opacity-50">
                        {NavLinks.map((link, index) => (
                            
                            <Link key={index} href={link.href} className="block px-4 py-2 text-gray-100 hover:text-blue-400">
                                {link.text}
                            </Link>
                            
                        ))}
                    </div>
                )}
                  
            </div>
  );
}