import React from "react";
import Link from "next/link";
// import { useRouter } from "next/router";

const NavBar: React.FC = () => {
    // const router = useRouter(); // Initialize useRouter

    // Get the current path
    // const currentPath = router.pathname;
    return(
        <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo or App Name */}
          <div className="text-white text-lg font-bold">
            <Link href="/">Blackjack App</Link>
          </div>
  
          {/* Navigation Links */}
          <div className="flex space-x-4">
            <Link href="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <Link href="/game" className="text-gray-300 hover:text-white">
              Game
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white">
              About
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    )

}

export default NavBar;