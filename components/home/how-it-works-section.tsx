'use client'

import { motion } from 'framer-motion'
import { Link2, Brain, Rocket } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Link2,
    title: 'Connect Ads Accounts',
    description: 'Seamlessly integrate your Meta and Google Ads accounts with one-click authentication. No complex setup required.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    number: '02',
    icon: Brain,
    title: 'AI Engine Analyzes Data',
    description: 'Our advanced AI engine processes all your campaign data in real-time, identifying patterns and optimization opportunities.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Automated Actions Drive Results',
    description: 'Smart automated actions continuously optimize your campaigns, improving performance while you focus on strategy.',
    gradient: 'from-green-500 to-emerald-500',
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 sm:py-32 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            How It{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started in minutes and see results in days. Our simple 3-step process gets you up and running fast.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connection line - desktop only */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-20" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <div className="glass-card p-8 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  {/* Step number badge */}
                  <div className={`absolute -top-6 left-8 h-12 w-12 flex items-center justify-center rounded-full bg-gradient-to-r ${step.gradient} text-white font-bold text-lg shadow-lg`}>
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${step.gradient} mb-6 mt-4`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
