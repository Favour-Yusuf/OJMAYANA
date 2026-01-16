const steps = [
  {
    title: "Send an enquiry",
    description:
      "Share details about your project, timeline, and goals using the form below.",
  },
  {
    title: "We review",
    description:
      "We’ll review your request and respond if it aligns with our current focus.",
  },
  {
    title: "Next steps",
    description:
      "If it’s a fit, we’ll schedule a call to discuss scope, direction, and timelines.",
  },
]

export default function HowItWorksContact() {
  return (
    <section className="bg-black text-white px-6 md:px-20 py-32 border-t border-white/10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-16">
        {steps.map((step, i) => (
          <div key={i} className="space-y-4">
            <p className="text-xs uppercase tracking-widest text-white/50">
              Step {i + 1}
            </p>

            <h3 className="text-xl font-bold">
              {step.title}
            </h3>

            <p className="text-white/70 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
