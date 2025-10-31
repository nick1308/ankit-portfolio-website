import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fadeIn space-y-8">
          <div className="space-y-4">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider">Welcome to my portfolio</p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground text-balance">
              Cybersecurity Student &amp; Aspiring Security Engineer
            </h1>
            <p className="text-xl text-foreground/80 max-w-2xl leading-relaxed text-pretty">
              Passionate about penetration testing, secure development practices, and ethical hacking. Building skills
              to protect digital assets and secure organizations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-gold inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold transition-smooth hover:scale-105 active:scale-95"
            >
              Connect on LinkedIn
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/nick1308"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-gold inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg font-semibold transition-smooth hover:bg-primary hover:text-primary-foreground"
            >
              View GitHub
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Subtle background accent */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  )
}
