export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-secondary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-sm text-foreground/60">Ankit V © {currentYear}. All rights reserved.</p>
          </div>

          <nav className="flex gap-6">
            <a href="#" className="text-sm text-foreground/60 hover:text-primary transition-smooth">
              Privacy
            </a>
            <a href="#" className="text-sm text-foreground/60 hover:text-primary transition-smooth">
              Terms
            </a>
            <a href="#" className="text-sm text-foreground/60 hover:text-primary transition-smooth">
              Sitemap
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
