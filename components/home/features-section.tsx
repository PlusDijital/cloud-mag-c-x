'use client'

import { motion } from 'framer-motion'
import {
  Zap,
  Lightbulb,
  DollarSign,
  Users,
  BarChart3,
  TrendingUp,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const features = [
  {
    icon: Zap,
    title: 'Ads Optimization',
    description: 'AI-powered real-time optimization of your ad campaigns for maximum performance and ROI.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Lightbulb,
    title: 'Creative Insights',
    description: 'Deep analysis of ad creatives with actionable recommendations to improve engagement.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: DollarSign,
    title: 'Budget Automation',
    description: 'Smart budget allocation across campaigns based on performance and conversion data.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Users,
    title: 'Audience Intelligence',
    description: 'Advanced audience insights and segmentation for laser-focused targeting.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: BarChart3,
    title: 'Performance Monitoring',
    description: 'Real-time dashboards with comprehensive metrics and KPI tracking.',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    icon: TrendingUp,
    title: 'Competitor Benchmarks',
    description: 'Stay ahead with competitive analysis and industry benchmark comparisons.',
    gradient: 'from-pink-500 to-rose-500',
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Powerful Features Built for{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Growth
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to run high-performing advertising campaigns with AI-driven automation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-card h-full group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${feature.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
