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
      className="flex items-center space-x-4 text-blue-600 hover:underline"
    >
      <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full">
        {icon}
      </div>
      <div>
        <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </div>
        <div>{text}</div>
      </div>
    </a>
  );
}
