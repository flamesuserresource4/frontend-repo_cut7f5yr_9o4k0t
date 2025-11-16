export default function Results() {
  const metrics = [
    { label: 'Lead-to-Booking Rate', value: '2.3x', note: 'after 30 days' },
    { label: 'Revived Pipeline Revenue', value: '$187k', note: 'in 60 days' },
    { label: 'Response Time', value: '0.7s', note: 'avg across channels' },
  ]

  return (
    <section id="results" className="py-20 bg-gradient-to-b from-white to-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/60 backdrop-blur p-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Real revenue outcomes</h2>
              <p className="mt-3 text-gray-600">We design for measurable impact. Here are typical improvements within the first 60 days.</p>
              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                {metrics.map(m => (
                  <div key={m.label} className="rounded-2xl bg-white p-5 border border-gray-100 shadow-sm">
                    <div className="text-2xl font-bold text-gray-900">{m.value}</div>
                    <div className="text-xs text-gray-500">{m.label}</div>
                    <div className="mt-1 text-[11px] text-gray-400">{m.note}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-purple-600/10 via-fuchsia-500/10 to-orange-400/10 border border-purple-200/30 p-6">
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                <li>Dental group: 41% more bookings, $92k in reactivated revenue</li>
                <li>Home services: 63% faster lead response, 27% higher close rate</li>
                <li>Med spa: 3.1x ROI with AI voice scheduling + no-show recovery</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
