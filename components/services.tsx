import { Lock, Target, BarChart3 } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Lock,
      name: "Security Assessments",
      description:
        "Comprehensive penetration testing and vulnerability assessments to identify security gaps in your infrastructure and applications.",
    },
    {
      icon: Target,
      name: "Secure Development",
      description:
        "Build secure applications from the ground up with secure coding practices, threat modeling, and security architecture design.",
    },
    {
      icon: BarChart3,
      name: "Security Consulting",
      description:
        "Strategic guidance on implementing security best practices, compliance requirements, and building a security-first culture.",
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16 text-center">Services</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.name}
                className="p-8 bg-card border border-border rounded-lg hover:border-primary hover:shadow-lg transition-smooth group"
              >
                <Icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-smooth" />
                <h3 className="text-xl font-serif font-bold mb-3">{service.name}</h3>
                <p className="text-foreground/70 leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
