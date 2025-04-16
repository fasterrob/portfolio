type Project = {
    title: string
    description: string
    link: string
  }
  
  const projects: Project[] = [
    {
      title: 'System Health AI Report',
      description: 'Analyzes server health check data with AI and generates reports.',
      link: '#'
    },
    {
      title: 'LINE CRM Bot',
      description: 'A chatbot integrated with LINE that helps teams manage leads and notes.',
      link: '#'
    },
  ]
  
  export default function ProjectsPage() {
    return (
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              className="border p-4 rounded-lg hover:shadow-md transition"
              target="_blank"
            >
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </a>
          ))}
        </div>
      </section>
    )
  }
  