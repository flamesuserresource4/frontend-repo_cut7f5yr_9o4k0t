export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Simple, aligned pricing</h2>
          <p className="mt-3 text-gray-600">Launch fast on a fixed setup, then scale with performance-based options tied to outcomes.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">Launch</h3>
            <p className="mt-1 text-sm text-gray-600">Best for getting your first AI revenue system live in 2-3 weeks.</p>
            <ul className="mt-5 space-y-2 text-sm text-gray-700">
              <li>• Strategy + integration</li>
              <li>• AI chat + voice agent</li>
              <li>• CRM + calendar + tracking</li>
              <li>• 30-day optimization sprint</li>
            </ul>
            <div className="mt-6 text-3xl font-bold">$4,800</div>
          </div>

          <div className="relative rounded-3xl border-2 border-gray-900 bg-gray-900 text-white p-8 shadow-sm">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full bg-white text-gray-900 px-3 py-1 text-xs font-semibold">Most Popular</div>
            <h3 className="text-xl font-semibold">Scale</h3>
            <p className="mt-1 text-sm text-white/70">Best for ongoing growth with revenue reactivation and optimization.</p>
            <ul className="mt-5 space-y-2 text-sm text-white">
              <li>• Everything in Launch</li>
              <li>• Multi-channel follow-up</li>
              <li>• Revenue reactivation campaigns</li>
              <li>• Weekly CRO + sales experiments</li>
            </ul>
            <div className="mt-6 text-3xl font-bold">$3k/mo + performance</div>
          </div>
        </div>
      </div>
    </section>
  )
}
