'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Line } from 'react-chartjs-2'
import { clicksImpressionsData } from '@/lib/dummy-data'
import { useStore } from '@/store/useStore'

export function ClicksImpressionsChart() {
  const theme = useStore((state) => state.theme)
  const isDark = theme === 'dark'

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: isDark ? '#e5e7eb' : '#374151',
          usePointStyle: true,
          padding: 15,
        },
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
        backgroundColor: isDark ? '#1f2937' : '#ffffff',
        titleColor: isDark ? '#e5e7eb' : '#111827',
        bodyColor: isDark ? '#e5e7eb' : '#374151',
        borderColor: isDark ? '#374151' : '#e5e7eb',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: isDark ? '#9ca3af' : '#6b7280',
        },
      },
      y: {
        grid: {
          color: isDark ? '#374151' : '#f3f4f6',
        },
        ticks: {
          color: isDark ? '#9ca3af' : '#6b7280',
        },
      },
    },
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Clicks & Impressions Trend</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <Line data={clicksImpressionsData} options={options} />
        </div>
      </CardContent>
    </Card>
  )
}
