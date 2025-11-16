import { Check, Database, Zap, Moon, PhoneCall, ShoppingCart, FileText, MessageSquare, Star, Settings } from 'lucide-react'

const services = [
  {
    title: 'Database Reactivation',
    description: 'Re-engage cold leads with targeted multi-channel sequences to unlock hidden pipeline in days, not months.',
    icon: Database,
  },
  {
    title: 'Speed-To-Lead Inbound Lead Nurturing',
    description: 'Instant responses and smart follow-ups so hot leads never go cold—boost connect and demo rates automatically.',
    icon: Zap,
  },
  {
    title: 'Out-Of-Hours',
    description: '24/7 coverage that books qualified meetings while your team sleeps—no missed opportunities.',
    icon: Moon,
  },
  {
    title: 'Voice AI (Inbound & Outbound)',
    description: 'Human-like voice agents that answer, qualify, and schedule—at scale and in real time.',
    icon: PhoneCall,
  },
  {
    title: 'E-commerce Abandoned Cart Recovery',
    description: 'Recover lost revenue with timely AI-driven nudges across SMS, email, and voice.',
    icon: ShoppingCart,
  },
  {
    title: 'Document Collection',
    description: 'Automate gathering and validating paperwork so deals move forward without back-and-forth.',
    icon: FileText,
  },
  {
    title: 'AI Web Chat',
    description: 'On-site chat that qualifies, answers FAQs, and books meetings—personalized to your brand.',
    icon: MessageSquare,
  },
  {
    title: 'Reviews AI',
    description: 'Capture, route, and publish 5-star reviews while resolving issues before they escalate.',
    icon: Star,
  },
  {
    title: 'Custom Automation Builds',
    description: 'Tailored workflows across your stack to eliminate manual tasks and accelerate throughput.',
    icon: Settings,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Services</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Plug-and-play revenue systems implemented for your team — built to capture, nurture, and convert more demand automatically.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white/90 backdrop-blur-sm p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br from-purple-200 via-blue-200 to-orange-200 blur-2xl" />
              </div>

              <div className="flex items-start gap-4">
                <div className="relative">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-md ring-1 ring-white/20">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="absolute -bottom-1 -right-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-50 text-green-600 ring-1 ring-green-100">
                    <Check className="h-3 w-3" />
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-6">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
