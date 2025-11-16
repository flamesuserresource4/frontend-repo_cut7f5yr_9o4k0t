export default function CTA() {
  return (
    <section id="cta" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-purple-600 via-fuchsia-500 to-orange-400 p-1">
          <div className="rounded-[calc(theme(borderRadius.3xl)-1px)] bg-white p-8 sm:p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Get a free AI revenue audit</h3>
                <p className="mt-2 text-gray-600">Well identify the top 3 automation opportunities in your funnel and outline a 60-day plan.</p>
              </div>
              <form className="grid sm:grid-cols-2 gap-3">
                <input type="text" placeholder="Full name" className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
                <input type="email" placeholder="Work email" className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
                <input type="text" placeholder="Company" className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 sm:col-span-2" />
                <button type="button" className="w-full rounded-xl bg-gray-900 text-white px-6 py-3 text-sm font-semibold hover:bg-black/85 sm:col-span-2">
                  Book Strategy Call
                </button>
                <p className="text-xs text-gray-500 sm:col-span-2">No obligation. Well respond within 24 hours.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
