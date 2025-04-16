export default function ContactPage() {
    return (
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Contact</h2>
        <p className="text-gray-700">
          Got a question or want to collaborate? Feel free to reach out.
        </p>
        <ul className="space-y-2 text-blue-600">
          <li>Email: <a href="mailto:titee@example.com" className="underline">titee@example.com</a></li>
          <li>GitHub: <a href="https://github.com/your-github" className="underline">github.com/your-github</a></li>
          <li>LinkedIn: <a href="https://linkedin.com/in/your-profile" className="underline">linkedin.com/in/your-profile</a></li>
        </ul>
      </section>
    )
  }
  