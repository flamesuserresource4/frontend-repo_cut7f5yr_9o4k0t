export default function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#7f1734]">Aligned, performance-only pricing</h2>
          <p className="mt-4 text-lg text-[#7f1734]/80">We win when you win. No upfront costs. No monthly retainers. 100% performance based.</p>
        </div>

        <div className="mt-10">
          <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br from-purple-200 via-blue-200 to-orange-200 blur-3xl opacity-60" />
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-4 py-2 text-xs font-semibold">100% Performance • Zero Risk</div>
              <h3 className="mt-6 text-2xl sm:text-3xl font-semibold text-gray-900">Only pay for results</h3>
              <p className="mt-3 text-gray-600 max-w-2xl mx-auto">We handle the build, setup, and optimization. You only pay when our systems generate pipeline or revenue—no setup fees, no subscriptions, no long-term contracts.</p>

              <div className="mt-8 grid sm:grid-cols-3 gap-4 text-left max-w-3xl mx-auto">
                <div className="rounded-xl border border-gray-200 bg-white p-5">
                  <div className="text-sm font-semibold text-gray-900">No upfront cost</div>
                  <p className="mt-1 text-sm text-gray-600">We do the heavy lifting to launch fast with zero out-of-pocket.</p>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-5">
                  <div className="text-sm font-semibold text-gray-900">Pay per outcome</div>
                  <p className="mt-1 text-sm text-gray-600">Clear success metrics like qualified meetings, revenue, or reactivations.</p>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-5">
                  <div className="text-sm font-semibold text-gray-900">Cancel anytime</div>
                  <p className="mt-1 text-sm text-gray-600">No lock-ins—scale up or down based on results.</p>
                </div>
              </div>

              <div className="mt-10">
                <a href="#try" className="inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-semibold shadow hover:bg-gray-800">Try it first</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
