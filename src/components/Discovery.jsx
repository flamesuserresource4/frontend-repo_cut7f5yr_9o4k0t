import { CalendarCheck, Mail, Building2, Goal } from 'lucide-react'

export default function Discovery() {
  return (
    <section id="discovery" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#7f1734]">Book a Discovery Call</h2>
          <p className="mt-3 text-[#7f1734]/80">We’ll map opportunities and build a personalised demo tailored to your business, industry, and pipeline goals.</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-8">
          <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-gradient-to-br from-purple-200 via-blue-200 to-orange-200 blur-3xl opacity-60" />
            </div>

            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full name</label>
                  <input type="text" name="name" placeholder="Jane Doe" className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-200" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Work email</label>
                  <input type="email" name="email" placeholder="jane@company.com" className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-200" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Company</label>
                  <input type="text" name="company" placeholder="Acme Co." className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-200" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Website</label>
                  <input type="url" name="website" placeholder="https://acme.com" className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-200" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">What outcome matters most?</label>
                <textarea name="goal" rows={4} placeholder="e.g., More qualified meetings, reactivations, faster speed-to-lead, inbound triage…" className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-200" />
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button type="button" className="group relative inline-flex items-center justify-center rounded-full p-[2px] bg-gradient-to-r from-purple-500 via-blue-500 to-orange-500 shadow-[0_0_30px_rgba(99,102,241,0.25)] hover:shadow-[0_0_50px_rgba(99,102,241,0.35)] transition-shadow">
                  <span className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-semibold">
                    <CalendarCheck className="h-5 w-5 text-white" />
                    Book my discovery call
                  </span>
                </button>
                <a href="#try" className="text-sm font-semibold text-gray-700 hover:text-gray-900">Or preview the demos first</a>
              </div>
            </form>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br from-purple-200 via-blue-200 to-orange-200 blur-3xl opacity-60" />
            </div>

            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-4 py-2 text-xs font-semibold">Personalised demo included</div>
              <h3 className="text-2xl font-semibold text-gray-900">What to expect</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-orange-500" />Rapid audit of your funnel and data sources</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-orange-500" />A tailored AI agent demo using your messaging</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-orange-500" />Clear performance metrics and pricing alignment</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-orange-500" />Next steps and launch plan (usually under 7 days)</li>
              </ul>
              <div className="pt-4">
                <a href="#pricing" className="inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-semibold shadow hover:bg-gray-800">See how pricing works</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
