const steps = [
  {
    step: '01',
    title: 'Audit & Strategy',
    desc: 'We map your funnel, CRM, and sales process to identify quick wins and build a 90-day revenue plan.'
  },
  {
    step: '02',
    title: 'Implement & Integrate',
    desc: 'We deploy AI agents, plug into your systems, and set up tracking across calls, SMS, email, and bookings.'
  },
  {
    step: '03',
    title: 'Optimize & Scale',
    desc: 'Weekly experiments to improve conversion, reactivate revenue, and scale what works with performance options.'
  }
]

export default function Process() {
  return (
    <section id="process" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gray-900 text-white p-8 sm:p-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">A simple, ROI-first process</h2>
            <p className="mt-3 text-white/70">We prioritize speed to value. Youll see outcomes in weeks, not quarters.</p>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="rounded-2xl bg-white/5 p-6">
                <div className="text-sm font-mono text-white/60">{s.step}</div>
                <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-white/70">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
