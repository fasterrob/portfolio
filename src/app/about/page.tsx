"use client";

import Image from "next/image";
import { Code, BrainCircuit, DatabaseZap } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-10 space-y-10">
      {/* Header + Profile */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <Image
          src="/images/profile.png" // 🔁 แก้เป็น path รูปโปรไฟล์คุณ
          alt="Thatchanin Moonphon"
          width={160}
          height={160}
          className="rounded-full shadow-lg"
        />
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            I’m an IT student passionate about building web apps and learning new technologies.
          </p>
          <p className="italic text-blue-600 dark:text-blue-400">
            “Keep learning. Keep sharing. Keep building.”
          </p>
        </div>
      </div>

      {/* About + Timeline */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* About Section */}
        <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
          <p>
            I’ve worked on CRM systems, dashboards, and AI-enhanced tools.
            I enjoy frontend design with Vue and backend logic using FastAPI.
          </p>
          <p>
            I also love teaching others, collaborating in teams, and turning ideas into impactful digital experiences.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Timeline</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>🎓 2021–2025: B.IT @ Thai-Nichi Institute of Technology</li>
              <li>🛠️ 2024: Full-stack Intern @ Lambda, Plaping Online</li>
              <li>☁️ 2025: Cloud Engineer (Co-op) @ A-HOST Co., Ltd.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow space-y-4">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Tech Stack</h3>
        <div className="flex flex-wrap gap-4 text-gray-700 dark:text-gray-300">
          <TechItem icon={<Code />} label="Vue 3 + Vuetify" />
          <TechItem icon={<BrainCircuit />} label="FastAPI + Gemini AI" />
          <TechItem icon={<DatabaseZap />} label="Oracle 19c" />
        </div>
      </div>
    </section>
  );
}

function TechItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-xl">
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}
