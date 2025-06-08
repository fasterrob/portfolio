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
      className="h-40 w-60 flex rounded-lg flex-col justify-center p-3 gap-2 border-1 items-center text-center hover:bg-gray-400"
    >
      {icon}
      <div>
        <div className="text-xl font-bold">
          {label}
        </div>
        <div>{text}</div>
      </div>
    </a>
  );
}
