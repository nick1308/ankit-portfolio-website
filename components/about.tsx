export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slideIn space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif font-bold">About Me</h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                I am Ankit V, a dedicated cybersecurity professional with deep expertise in protecting digital
                infrastructure. My career spans penetration testing, vulnerability assessment, secure software
                development, and ethical hacking.
              </p>
              <p>
                With a passion for building secure systems and educating organizations about cybersecurity best
                practices, I combine technical excellence with practical business insights to deliver comprehensive
                security solutions.
              </p>
              <p>
                I specialize in identifying vulnerabilities before attackers do, designing security architectures, and
                developing user-friendly security implementations that don't compromise usability.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "100+", desc: "Penetration Tests" },
              { label: "50+", desc: "Secure Applications" },
              { label: "15+", desc: "Years Experience" },
              { label: "1000+", desc: "Vulnerabilities Found" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-6 bg-card border border-border rounded-lg hover:border-primary transition-smooth"
              >
                <div className="text-3xl font-serif font-bold text-primary">{stat.label}</div>
                <div className="text-sm text-foreground/60 mt-2">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
