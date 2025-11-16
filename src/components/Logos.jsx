export default function Logos() {
  const logos = [
    'Acme Dental',
    'Bright Home Services',
    'Prime Clinics',
    'Growth CPA',
    'Nova Wellness',
    'Atlas Legal'
  ]

  return (
    <section className="py-14 sm:py-16" aria-label="Trusted by">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/60 backdrop-blur p-6">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-500">Trusted by growth-focused service brands</p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {logos.map((name) => (
              <div key={name} className="flex items-center justify-center text-gray-700 text-sm font-medium bg-white rounded-lg py-3 border border-gray-100">
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
