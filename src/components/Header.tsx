"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 shadow">
      <div className="max-w-6xl mx-auto px-3 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Thatchanin Moonphon</h1>
        <nav className="flex gap-6">
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
      </div>
    </header>
  );
}
