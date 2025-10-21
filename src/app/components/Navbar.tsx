'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav
      aria-label="Main navigation"
      className="font-semibold fixed top-6 left-1/2 transform -translate-x-1/2 w-[calc(100%-3rem)] max-w-3xl 
        flex justify-between items-center px-4 py-2 rounded-xl z-50 bg-white/20 backdrop-blur-md 
        border border-white/10 shadow-md text-black"
    >
      {/* Logo */}
      <div className="flex gap-6 text-lg font-medium">
        <Image
          src="/logo.png"
          alt="Logo"
          width={60}
          height={60}
          className="rounded-full"
        />
      </div>

      {/* Navigation Links */}
      <div className="flex gap-8 text-lg font-medium">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/projects" className="hover:underline">
          Projects
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
      </div>
    
  </nav>
  );
}

