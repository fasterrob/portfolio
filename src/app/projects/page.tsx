import ProjectCard from "@/components/ProjectCard";

type Project = {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
};

const projects: Project[] = [
  {
    title: "TimeWash",
    description: "A service ",
    link: ":",
    imageUrl: "/images/project1.jpg",
  },
  {
    title: "System Health Dashboard",
    description:
      "A monitoring system using FastAPI + Vue.js for real-time server health.",
    link: "https://github.com/fasterrob/system-health",
    imageUrl: "/images/project1.jpg",
  },
  {
    title: "System Health Dashboar",
    description:
      "A monitoring system using FastAPI + Vue.js for real-time server health.",
    link: "https://github.com/fasterrob/system-health",
    imageUrl: "/images/project1.jpg",
  },
  {
    title: "Dashboard My Life",
    description:
      "A personal dashboard using FastAPI + Vue.js for real-time server health.",
    link: "https://github.com/fasterrob/system-health",
    imageUrl: "/images/project1.jpg",
  },
  {
    title: "Dashboard  My Life",
    description:
      "A personal dashboard using FastAPI + Vue.js for real-time server health.",
    link: "https://github.com/fasterrob/system-health",
    imageUrl: "/images/project1.jpg",
  },
];

export default function ProjectsPage() {
  return (
    <section className="space-y-6 p-5 overflow-y-auto max-h-[100vh]">
      <h2 className="text-center uppercase text-3xl font-semibold">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            projectUrl={project.link}
          />
        ))}
      </div>
    </section>
  );
}
