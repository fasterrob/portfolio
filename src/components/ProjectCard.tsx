"use client";

import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  projectUrl,
}: ProjectCardProps) {
  return (
    <div className="rounded-2xl shadow-lg bg-white dark:bg-gray-900 overflow-hidden hover:shadow-xl transition duration-300">
      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={250}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 space-y-2">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h2>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
        <Link
          href={projectUrl}
          className="inline-block mt-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          View Project →
        </Link>
      </div>
    </div>
  );
}
