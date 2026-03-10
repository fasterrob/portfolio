"use client";

import React from "react";

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  link: string;
  text: string;
}

export default function ContactItem({
  icon,
  label,
  link,
  text,
}: ContactItemProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full sm:w-60 min-h-[160px] flex rounded-lg flex-col justify-center p-4 gap-2 border border-gray-200 dark:border-gray-700 items-center text-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    >
      {icon}
      <div className="w-full overflow-hidden">
        <div className="text-xl font-bold mb-1">
          {label}
        </div>
        <div className="text-sm break-all">{text}</div>
      </div>
    </a>
  );
}
