"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX, FiHome, FiUser, FiFolder, FiMail } from "react-icons/fi";

const navItems = [
  { icon: <FiHome />, href: "/", label: "Home" },
  { icon: <FiUser />, href: "/about", label: "About Me" },
  { icon: <FiFolder />, href: "/projects", label: "Projects" },
  { icon: <FiMail />, href: "/contact", label: "Contact" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 right-4 z-50 text-white lg:hidden"
      >
        {isOpen ? <FiX size={32} /> : <FiMenu size={32} />}
      </button>

      {/* Overlay for mobile when open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-screen w-55 bg-[#0f172a] border-l border-[#1f2937] backdrop-blur-md text-white z-50 transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "translate-x-full"} 
        lg:translate-x-0 lg:static lg:flex lg:flex-col`}
      >
        <nav className="flex flex-col gap-4 p-5 h-full">
          {navItems.map(({ icon, href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={closeSidebar}
              className={`inline-flex items-center gap-4 text-xl font-semibold hover:text-blue-400 transition ${
                pathname === href ? "text-blue-400 font-bold" : ""
              }`}
            >
              {icon}
              {label}
            </Link>
          ))}
        </nav>
        <div className="p-6 text-xl font-bold border-t border-[#1f2937] uppercase">
          Thatchanin Moonphon
        </div>
      </aside>
    </>
  );
}
