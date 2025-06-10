import ProjectCard from "@/components/ProjectCard";

type Project = {
  title: string;
  description: string;
  details: string;
  link: string;
  imageUrl: string;
};

const projects: Project[] = [
  {
    title: "Timewash",
    description:
      "A dashboard to visualize and analyze server health data using FastAPI, Vue 3, and Gemini AI.",
    details:
      "Developed a dashboard web app to visualize server health metrics. Integrated AI analysis using Gemini to generate monthly reports with recommendations.",
    link: "https://github.com/fasterrob/system-health",
    imageUrl: "/images/project-system-health.jpg",
  },
  {
    title: "Customer Service Line Bot",
    description: "A chatbot system built using LINE API, Vue.js, and Express.",
    details:
      "Built a LINE chatbot with custom chat UI for sending broadcast and greeting messages. Integrated MongoDB for message management and user tracking.",
    link: "https://github.com/yourusername/linebot-customer-service", // Replace with real link
    imageUrl: "/images/project-linebot.jpg",
  },
  {
    title: "Survey Web Application",
    description: "Responsive web survey app built using Vue.js.",
    details:
      "Designed and implemented the frontend for a survey platform focused on clean UI/UX and integration readiness with backend APIs.",
    link: "https://github.com/yourusername/survey-app", // Replace with real link
    imageUrl: "/images/project-survey.jpg",
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
            details={project.details}
            imageUrl={project.imageUrl}
            projectUrl={project.link}
          />
        ))}
      </div>
    </section>
  );
}
