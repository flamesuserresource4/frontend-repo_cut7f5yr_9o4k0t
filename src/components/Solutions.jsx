import { CheckCircle2 } from 'lucide-react'

const solutions = [
  {
    title: 'AI Lead Capture',
    desc: 'Turn website visitors into booked appointments with conversational chat + voice agents that qualify in real-time.',
    points: [
      'Instant lead response under 1s',
      'Smart qualification and routing',
      'CRM + calendar integration'
    ]
  },
  {
    title: 'Follow-Up Automation',
    desc: 'Revive old, cold, and missed leads with multi-channel sequences that feel human — without your team lifting a finger.',
    points: [
      '2-way SMS + email + voice',
      'No-show recovery flows',
      'Revenue reactivation campaigns'
    ]
  },
  {
    title: 'Sales Optimization',
    desc: 'Plug revenue leaks with pipeline insights, objection handling, and AI coaching that improves close rates.',
    points: [
      'Call summaries + action items',
      'Objection-aware scripts',
      'Deal acceleration playbooks'
    ]
  }
]

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 bg-gradient-to-b from-white to-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Solutions that drive revenue</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">We implement complete systems that capture, qualify, and convert more of your inbound demand — then create new demand from your existing list.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {solutions.map((s) => (
            <div key={s.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
              <ul className="mt-4 space-y-2">
                {s.points.map(p => (
                  <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
