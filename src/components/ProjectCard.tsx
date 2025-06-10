"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  details: string;
  imageUrl: string;
  projectUrl: string;
}

export default function ProjectCard({
  title,
  description,
  details,
  imageUrl,
  projectUrl,
}: ProjectCardProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const openProjectDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDialog();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      <div
        onClick={openProjectDialog}
        className="cursor-pointer rounded-lg dark:bg-gray-900 overflow-hidden hover:bg-gray-700 transition duration-300"
      >
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
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000080]"
          onClick={closeDialog}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full relative transform transition-all duration-300 ease-out animate-fade-in"
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:hover:text-white"
              onClick={closeDialog}
            >
              ✕
            </button>
            <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
              {title}
            </h2>
            <Image
              src={imageUrl}
              alt={title}
              width={400}
              height={250}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <p className="text-gray-700 dark:text-gray-300 mb-4">{details}</p>
            <Link
              href={projectUrl}
              target="_blank"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Go to project →
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
