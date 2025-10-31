import { Github, ExternalLink, Shield } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      name: "FinSecure",
      description:
        "Enterprise financial application security platform with real-time threat detection and automated response capabilities.",
      icon: Shield,
      tags: ["Security", "React", "Node.js", "Real-time"],
      github: "https://github.com/ankit-v/finsecure",
      link: "https://finsecure.example.com",
    },
    {
      name: "SafeLogin",
      description:
        "Advanced authentication framework combining biometric security, 2FA, and behavioral analysis for zero-trust authentication.",
      icon: Shield,
      tags: ["Authentication", "TypeScript", "Security", "API"],
      github: "https://github.com/ankit-v/safelogin",
      link: "https://safelogin.example.com",
    },
    {
      name: "EthicalHunt",
      description:
        "Bug bounty and vulnerability disclosure platform connecting ethical hackers with organizations seeking security research.",
      icon: Shield,
      tags: ["Bug Bounty", "React", "Community", "Security"],
      github: "https://github.com/ankit-v/ethicalhunt",
      link: "https://ethicalhunt.example.com",
    },
  ]

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16 text-center">Featured Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => {
            const Icon = project.icon
            return (
              <div
                key={project.name}
                className="group h-full flex flex-col p-6 bg-card border border-border rounded-lg hover:border-primary transition-smooth"
              >
                <Icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-serif font-bold mb-2">{project.name}</h3>
                <p className="text-foreground/70 mb-4 flex-grow leading-relaxed">{project.description}</p>

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
                    className="flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-primary transition-smooth"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-primary transition-smooth"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
