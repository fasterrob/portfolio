"use client";

import Image from "next/image";
import { FileCode } from "lucide-react";
import { FaReact, FaVuejs } from "react-icons/fa";
import { SiPython, SiJavascript, SiPostgresql, SiOdoo } from "react-icons/si";
import TimelineSection from "@/app/about/components/TimelineSection";
import TechItem from "@/app/about/components/TechItem";

export default function AboutPage() {
  const techStack = [
    { icon: <SiOdoo size={20} />, label: "Odoo ERP" },
    { icon: <SiPython size={20} />, label: "Python" },
    { icon: <SiJavascript size={20} />, label: "JavaScript" },
    { icon: <SiPostgresql size={20} />, label: "PostgreSQL" },
    { icon: <FileCode size={20} />, label: "XML" },
    { icon: <FaVuejs size={20} />, label: "Vue 3" },
    { icon: <FaReact size={20} />, label: "React" },
  ];

  const timelineWorkItems = [
    {
      year: "2025 (Now)",
      text: "Team Lead Odoo Full Stack Developer @ 365Infotech Co. Ltd",
      emoji: "🚀",
    },
    {
      year: "2025 (4 months)",
      text: "Cloud Engineer (Internship) @ A-HOST Co. Ltd.",
      emoji: "☁️",
    },
    {
      year: "2024 (4 months)",
      text: "Full-stack Developer @ Lambda",
      emoji: "💻",
    },
    {
      year: "2024 (9 months)",
      text: "Front-End Developer @ Plaping Online Co. Ltd.",
      emoji: "🎨",
    },
  ];

  const timelineEducationItems = [
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
  ];

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
            Team Lead Odoo Full Stack Developer specializing in ERP solutions
            and business process optimization.
          </p>
          <p className="italic">
            “Translating complex business needs into efficient Odoo solutions.”
          </p>
        </div>
      </div>

      {/* About + Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* About Section */}
        <div className="p-5 rounded-xl shadow-lg leading-relaxed space-y-4">
          <p>
            As a <strong>Team Lead Odoo Full Stack Developer</strong>, I specialize in
            architecting and delivering comprehensive ERP solutions. I possess
            strong proficiency in the <strong>Sales, Purchase, and Inventory</strong> modules,
            along with solid experience in <strong>Accounting</strong> workflows. My role
            involves not only resolving complex user issues but also engineering
            custom modules that align perfectly with specific business requirements.
          </p>
          <p>
            I bring a leadership perspective to development, managing teams to
            ensure project milestones are met with high quality. My technical
            expertise spans the full Odoo stack—<strong>Python, JavaScript, XML, and
            PostgreSQL</strong>—allowing me to drive process improvements and deliver
            high-quality results. I am driven by problem-solving and have a track
            record of quantifiable achievements in process improvements and successful
            project deliveries.
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
