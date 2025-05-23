"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Me" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex flex-col border-l-1 text-white w-50 h-screen fixed top-0 right-0 z-50 shadow-lg backdrop-blur-md">
      <div className="p-6 text-xl font-bold border-b border-b-1 uppercase">
        Thatchanin Moonphon
      </div>
      <nav className="flex flex-col items-center justify-around gap-4 p-10 h-full">
        {navItems.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`hover:text-blue-400 transition ${
              pathname === href ? "text-blue-400 font-semibold" : ""
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
