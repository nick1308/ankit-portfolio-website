export default function Skills() {
  const skillCategories = [
    {
      category: "Security Testing",
      skills: ["Penetration Testing", "Vulnerability Assessment", "Security Audits", "Threat Modeling"],
    },
    {
      category: "Web Security",
      skills: ["OWASP Top 10", "XSS/CSRF Prevention", "SQL Injection Testing", "API Security"],
    },
    {
      category: "Development",
      skills: ["Secure Coding", "React", "Node.js", "Python", "TypeScript"],
    },
    {
      category: "Tools & Platforms",
      skills: ["Burp Suite", "Metasploit", "Docker", "AWS Security", "Git"],
    },
  ]

  return (
    <section className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16 text-center">Skills & Expertise</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="p-6 bg-card border border-border rounded-lg hover:border-primary transition-smooth"
            >
              <h3 className="text-xl font-serif font-bold mb-4 text-primary">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
