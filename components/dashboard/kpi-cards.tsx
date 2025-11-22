'use client'

import { Card, CardContent } from '@/components/ui/card'
import { TrendingUp, TrendingDown, DollarSign, MousePointer, Eye, BarChart2, Target } from 'lucide-react'
import { kpiData } from '@/lib/dummy-data'
import { formatCurrency, formatNumber, formatPercentage } from '@/lib/utils'
import { motion } from 'framer-motion'

const kpis = [
  {
    key: 'roas',
    title: 'ROAS',
    icon: TrendingUp,
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    format: (val: number) => `${val.toFixed(1)}x`,
  },
  {
    key: 'revenue',
    title: 'Revenue',
    icon: DollarSign,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    format: formatCurrency,
  },
  {
    key: 'spend',
    title: 'Ad Spend',
    icon: DollarSign,
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    format: formatCurrency,
  },
  {
    key: 'ctr',
    title: 'CTR',
    icon: MousePointer,
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    format: (val: number) => `${val.toFixed(2)}%`,
  },
  {
    key: 'cpm',
    title: 'CPM',
    icon: BarChart2,
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-500/10',
    format: formatCurrency,
  },
  {
    key: 'cpc',
    title: 'CPC',
    icon: Target,
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10',
    format: formatCurrency,
  },
  {
    key: 'clicks',
    title: 'Link Clicks',
    icon: Eye,
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-500/10',
    format: formatNumber,
  },
]

export function KPICards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {kpis.map((kpi, index) => {
        const data = kpiData[kpi.key as keyof typeof kpiData]
        const isPositive = data.trend === 'up'

        return (
          <motion.div
            key={kpi.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-muted-foreground">
                    {kpi.title}
                  </span>
                  <div className={`p-2 rounded-lg ${kpi.bgColor}`}>
                    <kpi.icon className={`h-4 w-4 ${kpi.color}`} />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold">
                    {kpi.format(data.value)}
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    {isPositive ? (
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-500" />
                    )}
                    <span className={isPositive ? 'text-green-500' : 'text-red-500'}>
                      {data.change > 0 ? '+' : ''}{data.change}%
                    </span>
                    <span className="text-muted-foreground">vs last period</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )
      })}
    </div>
  )
}
