import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Services from "@/components/services"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <div className="animated-bg animated-bg-dark">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        <div className="grid-pattern"></div>
      </div>

      <div className="content-wrapper">
        <main className="min-h-screen bg-background">
          <Header />
          <Hero />
          <About />
          <Skills />
          <Services />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  )
}
