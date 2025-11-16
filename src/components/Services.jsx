import { Check } from 'lucide-react'

const services = [
  'Database Reactivation',
  'Speed-To-Lead Inbound Lead Nurturing',
  'Out-Of-Hours',
  'Voice AI (Inbound & Outbound)',
  'E-commerce Abandoned Cart Recovery'
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Services</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Plug-and-play revenue systems implemented for your team — built to capture, nurture, and convert more demand automatically.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((item) => (
            <div key={item} className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-purple-50 text-purple-600 ring-1 ring-purple-100">
                  <Check className="h-4 w-4" />
                </span>
                <h3 className="text-base font-semibold text-gray-900">{item}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
