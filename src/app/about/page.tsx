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

  const timelineWorkItems = ([] = [
    {
      year: "2025 (Now)",
      text: "Odoo Full stack developer @ 365Infotech Co. Ltd",
      emoji: "🛠️",
    },
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
      text: "Front-End Developer @ Plaping Online Co. Ltd.",
      emoji: "🛠️",
    },
  ]);

  const timelineEducationItems = ([] = [
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
  ]);

  return (
    <section className="p-5 mx-auto space-y-5">
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
          <h2 className="text-4xl font-bold">About Me</h2>
          <p className="text-lg">
            I’m an IT student passionate about building web apps and exploring
            new technologies.
          </p>
          <p className="italic">
            “Keep learning. Keep sharing. Keep building.”
          </p>
        </div>
      </div>

      {/* About + Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* About Section */}
        <div className="p-5 rounded-xl shadow-lg leading-relaxed">
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
          <TimelineSection title="Work Experience" items={timelineWorkItems} />
          <TimelineSection title="Education" items={timelineEducationItems} />
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
