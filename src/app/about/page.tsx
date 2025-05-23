"use client";

import Image from "next/image";
import { BrainCircuit } from "lucide-react";
import { FaReact, FaVuejs } from "react-icons/fa";
import { GrOracle } from "react-icons/gr";
import TimelineSection from "@/app/about/components/TimelineSection";
import TechItem from "@/app/about/components/TechItem";

export default function AboutPage() {
  const techStack = [
    { icon: <FaVuejs size={20} />, label: "Vue 3 + Vuetify" },
    { icon: <BrainCircuit size={20} />, label: "FastAPI + Gemini AI" },
    { icon: <GrOracle size={20} />, label: "Oracle 19c" },
    { icon: <FaReact size={20} />, label: "React + tailwinds" },
  ];

  return (
    <section className="max-w-5xl mx-auto space-y-10">
      {/* Header + Profile */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <Image
          src="/images/profile.png"
          alt="Thatchanin Moonphon"
          width={160}
          height={160}
          className="rounded-full shadow-lg"
        />
        <div className="text-center md:text-left space-y-3">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            I’m an IT student passionate about building web apps and exploring
            new technologies.
          </p>
          <p className="italic text-blue-600 dark:text-blue-400">
            “Keep learning. Keep sharing. Keep building.”
          </p>
        </div>
      </div>

      {/* About + Timeline */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* About Section */}
        <div className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            Full-stack web developer with a strong interest in technology and
            innovation. Experienced in building CRM systems, dashboards, and
            AI-integrated tools.
          </p>
          <p>
            Skilled in frontend development with Vue and backend API development
            using FastAPI. Passionate about problem-solving, collaboration, and
            turning ideas into impactful digital solutions.
          </p>
        </div>

        {/* Timeline Section */}
        <div className="space-y-6">
          <TimelineSection
            title="Work Experience"
            items={[
              {
                year: "2025 (4 months)",
                text: "Cloud Engineer (Internship) @ A-HOST Co. Ltd.",
                emoji: "☁️",
              },
              {
                year: "2024 (4 months)",
                text: "Full-stack Developer @ Lambda",
                emoji: "🛠️",
              },
              {
                year: "2024 (9 months)",
                text: "Full-stack Developer @ Plaping Online Co. Ltd.",
                emoji: "🛠️",
              },
            ]}
          />
          <TimelineSection
            title="Education"
            items={[
              {
                year: "2021–2025",
                text: "B.IT, Thai-Nichi Institute of Technology",
                emoji: "🎓",
              },
              {
                year: "2018–2021",
                text: "High School, Srinakharinwirot University Prasarnmit Demonstration school, Computer Program",
                emoji: "🏫",
              },
            ]}
          />
        </div>
      </div>

      {/* Tech Stack */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow space-y-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
          Tech Stack
        </h3>
        <div className="flex flex-wrap gap-4">
          {techStack.map((tech, index) => (
            <TechItem key={index} icon={tech.icon} label={tech.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
