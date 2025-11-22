'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TrendingUp, TrendingDown, DollarSign, MousePointer, Eye } from 'lucide-react'
import { formatCurrency, formatNumber, formatPercentage } from '@/lib/utils'

const kpiCards = [
  { title: 'ROAS', value: '4.2x', change: '+12.5%', trend: 'up', icon: TrendingUp, color: 'text-green-500' },
  { title: 'Revenue', value: '$48,340', change: '+18.2%', trend: 'up', icon: DollarSign, color: 'text-blue-500' },
  { title: 'CTR', value: '2.89%', change: '+8.1%', trend: 'up', icon: MousePointer, color: 'text-purple-500' },
  { title: 'CPC', value: '$1.82', change: '-5.8%', trend: 'down', icon: TrendingDown, color: 'text-cyan-500' },
  { title: 'Spend', value: '$11,500', change: '+5.3%', trend: 'up', icon: DollarSign, color: 'text-orange-500' },
  { title: 'Impressions', value: '2.1M', change: '+15.4%', trend: 'up', icon: Eye, color: 'text-pink-500' },
]

export function DashboardPreviewSection() {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Real-Time Analytics{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Dashboard
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Monitor all your key metrics in one beautiful, intuitive dashboard. Make data-driven decisions with confidence.
          </p>
        </motion.div>

        {/* KPI Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {kpiCards.map((kpi, index) => (
            <motion.div
              key={kpi.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-muted-foreground">{kpi.title}</span>
                    <kpi.icon className={`h-5 w-5 ${kpi.color}`} />
                  </div>
                  <div className="flex items-end justify-between">
                    <div className="text-3xl font-bold">{kpi.value}</div>
                    <div className={`text-sm font-medium ${kpi.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                      {kpi.change}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mock Chart Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-xl">Campaign Performance Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 rounded-lg bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📊</div>
                  <p className="text-muted-foreground">Interactive charts and analytics</p>
                  <p className="text-sm text-muted-foreground">Available in the full dashboard</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
