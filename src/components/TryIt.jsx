import { MessageSquare, PhoneCall } from 'lucide-react'

export default function TryIt() {
  return (
    <section id="try" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Try It Out For Yourself</h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Experience our AI agents in action. No forms, no waiting—just tap a demo.</p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="group relative inline-flex items-center gap-2 rounded-full p-[2px] bg-gradient-to-r from-purple-500 via-blue-500 to-orange-500 shadow-[0_0_40px_rgba(99,102,241,0.25)] hover:shadow-[0_0_60px_rgba(99,102,241,0.35)] transition-shadow"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900">
              <MessageSquare className="h-5 w-5 text-purple-600" />
              Demo Our AI SMS Agent
            </span>
            <span className="pointer-events-none absolute -inset-0.5 rounded-full blur-2xl opacity-30 group-hover:opacity-50 bg-gradient-to-r from-purple-500 via-blue-500 to-orange-500" />
          </a>

          <a
            href="#"
            className="group relative inline-flex items-center gap-2 rounded-full p-[2px] bg-gradient-to-r from-purple-500 via-blue-500 to-orange-500 shadow-[0_0_40px_rgba(99,102,241,0.25)] hover:shadow-[0_0_60px_rgba(99,102,241,0.35)] transition-shadow"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900">
              <PhoneCall className="h-5 w-5 text-blue-600" />
              Demo Our AI Voice Agent
            </span>
            <span className="pointer-events-none absolute -inset-0.5 rounded-full blur-2xl opacity-30 group-hover:opacity-50 bg-gradient-to-r from-purple-500 via-blue-500 to-orange-500" />
          </a>
        </div>
      </div>
    </section>
  )
}
