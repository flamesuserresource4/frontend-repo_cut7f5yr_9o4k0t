import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32" id="home">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(124,58,237,0.15),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-gray-700"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-orange-400" />
              AI Sales Systems for Service Businesses
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900"
            >
              Convert more leads and unlock hidden revenue with automation
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 text-base sm:text-lg text-gray-600 max-w-xl"
            >
              We implement AI voice and chat agents that qualify, nurture, and follow-up 24/7, so you book more appointments and close more deals without hiring.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-6 py-3 text-white text-sm font-semibold shadow-sm hover:bg-black/85 transition-colors">
                Book a Strategy Call
              </a>
              <a href="#results" className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50">
                See Results
              </a>
            </motion.div>

            <div className="mt-10 grid grid-cols-2 gap-6 text-sm text-gray-700">
              <div className="space-y-1">
                <p className="font-semibold">3-6x ROI in 60 days</p>
                <p className="text-gray-500">Pay-for-performance options</p>
              </div>
              <div className="space-y-1">
                <p className="font-semibold">24/7 lead capture</p>
                <p className="text-gray-500">Instant qualification and routing</p>
              </div>
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[520px] lg:h-[620px]">
            <div className="absolute inset-0 rounded-3xl border border-white/10 bg-white/50 backdrop-blur overflow-hidden shadow-xl">
              <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
