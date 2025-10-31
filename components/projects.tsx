import { Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      name: "FinSecure",
      description: "Financial application security platform with threat detection.",
      tags: ["Security", "React", "Node.js"],
      github: "https://github.com/ankit-v/finsecure",
    },
    {
      name: "SafeLogin",
      description: "Advanced authentication framework with biometric security and 2FA.",
      tags: ["Authentication", "TypeScript", "Security"],
      github: "https://github.com/ankit-v/safelogin",
    },
    {
      name: "EthicalHunt",
      description: "Bug bounty platform connecting ethical hackers with organizations.",
      tags: ["Bug Bounty", "React", "Community"],
      github: "https://github.com/ankit-v/ethicalhunt",
    },
  ]

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-center">Featured Projects</h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group h-full flex flex-col p-6 bg-card border border-border rounded-lg hover:border-primary transition-smooth focus-gold"
            >
              <h3 className="text-xl font-serif font-bold mb-2">{project.name}</h3>
              <p className="text-foreground/70 mb-4 flex-grow leading-relaxed text-sm">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 pt-4 border-t border-border">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-gold flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-primary transition-smooth"
                  aria-label={`View ${project.name} source code on GitHub`}
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
                <span className="flex items-center gap-2 text-sm font-medium text-foreground/40">Demo coming soon</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
