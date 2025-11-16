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
              className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-orange-400 drop-shadow-[0_2px_12px_rgba(99,102,241,0.25)]">
                Your 24/7 Sales System - Powered by AI, Built for Growth.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 text-base sm:text-lg text-gray-600 max-w-xl"
            >
              24/7 AI agents that reactivate, qualify, nurture, and follow up with your leads - so you book more appointments, close more deals, and scale without increasing headcount.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-6 py-3 text-white text-sm font-semibold shadow-sm hover:bg-black/85 transition-colors">
                Book a Call
              </a>
              <a href="#results" className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50">
                See Results
              </a>
            </motion.div>

            {/* Replaced the feature points with a standout visual headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8"
            >
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-blue-500 to-orange-400 rounded-2xl blur opacity-30" />
                <div className="relative rounded-2xl border border-white/20 bg-white/70 backdrop-blur px-4 py-3">
                  <p className="text-center text-sm sm:text-base font-semibold text-gray-800">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-blue-600 to-orange-500">
                      100% Performance Based Pricing. No Upfront Cost. No Monthly Fees. Just Results
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>
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
