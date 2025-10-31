import { Mail, Linkedin, Github } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold">Let's Connect</h2>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Interested in discussing security challenges or exploring collaboration opportunities?
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="mailto:ankit.v@example.com"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold transition-smooth hover:scale-105 active:scale-95"
            >
              <Mail className="w-5 h-5" />
              Send Email
            </a>
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 border border-primary text-primary rounded-lg font-semibold transition-smooth hover:bg-primary hover:text-primary-foreground"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://github.com/nick1308"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 border border-border text-foreground rounded-lg font-semibold transition-smooth hover:border-primary hover:text-primary"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
