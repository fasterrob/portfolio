"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="rounded-lg dark:bg-gray-900 overflow-hidden hover:shadow-xl transition duration-300">
      <div className="relative w-full h-48">
        {isLoading && (
          <div className="absolute inset-0 animate-pulse bg-gray-300 dark:bg-gray-700"></div>
        )}
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={250}
          className={`w-full h-48 object-cover transition-opacity duration-500 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoadingComplete={() => setIsLoading(false)}
        />
      </div>
      <div className="p-4 space-y-2">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          {title}
        </h2>
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
