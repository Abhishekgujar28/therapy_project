"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  
  // Determine background color based on route
  const getNavbarBackground = () => {
    if (pathname === '/contact') {
      return 'bg-[#c2bfcb]'; // Lilac color matching the contact page design
    }
    else if (pathname === '/blog') {
      return 'bg-[#fbf6f1]'; // Default to white for home and other pages
    }
    else if (pathname?.startsWith('/blog/') && pathname !== '/blog') {
      return 'bg-[#e5e0da]';
    }
    return 'bg-[#fbf6f1]'; // Default to white for home and other pages
  };

  return (
    <nav className={` top-0 z-50 w-full ${getNavbarBackground()} backdrop-blur-sm py-5 px-6 md:px-12 lg:px-15 lg:py-3 flex items-center justify-between transition-colors duration-300`}>
      <div className="text-[34.432px] font-[500] leading-[41.3184px] text-[#223614] font-['gopher'] tracking-tight">
        <Link href="/">Lilac Template</Link>
      </div>
      <div className="flex gap-8 md:gap-12 text-sm md:text-base font-medium tracking-wide text-gray-500">
        <Link href="/blog" className=" text-[#223614] transition-colors duration-200  text-xl font-bold ">Blog</Link>
        <Link href="/contact" className="text-[#223614] hover:text-opacity-80 font-sans transition-colors duration-200 text-xl font-bold">Contact</Link>
      </div>
    </nav>
  );
}
