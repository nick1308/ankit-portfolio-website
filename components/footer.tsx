export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-secondary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-sm text-foreground/60">Ankit V © {currentYear}. All rights reserved.</p>
            <p className="text-xs text-foreground/50 mt-2">Built with React, Tailwind CSS, and Vite.</p>
          </div>

          <nav className="flex gap-6 sm:justify-start md:justify-end">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-gold text-sm text-foreground/60 hover:text-primary transition-smooth"
            >
              Privacy
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-gold text-sm text-foreground/60 hover:text-primary transition-smooth"
            >
              Terms
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-gold text-sm text-foreground/60 hover:text-primary transition-smooth"
            >
              Sitemap
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
