// Dummy data for charts and dashboard

export const dailyPerformanceData = {
  labels: Array.from({ length: 30 }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() - (29 - i))
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }),
  datasets: [
    {
      label: 'Revenue',
      data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 5000) + 3000),
      borderColor: 'rgb(99, 102, 241)',
      backgroundColor: 'rgba(99, 102, 241, 0.1)',
      tension: 0.4,
    },
    {
      label: 'Ad Spend',
      data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 2000) + 1000),
      borderColor: 'rgb(34, 211, 238)',
      backgroundColor: 'rgba(34, 211, 238, 0.1)',
      tension: 0.4,
    },
  ],
}

export const spendVsRoasData = {
  labels: ['Campaign 1', 'Campaign 2', 'Campaign 3', 'Campaign 4', 'Campaign 5', 'Campaign 6'],
  datasets: [
    {
      label: 'Ad Spend',
      data: [2400, 1800, 3200, 2100, 2800, 1500],
      backgroundColor: 'rgba(99, 102, 241, 0.8)',
    },
    {
      label: 'ROAS',
      data: [3.2, 2.8, 4.1, 2.5, 3.7, 2.2],
      backgroundColor: 'rgba(34, 211, 238, 0.8)',
    },
  ],
}

export const clicksImpressionsData = {
  labels: Array.from({ length: 14 }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() - (13 - i))
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }),
  datasets: [
    {
      label: 'Impressions',
      data: Array.from({ length: 14 }, () => Math.floor(Math.random() * 50000) + 30000),
      borderColor: 'rgb(168, 85, 247)',
      backgroundColor: 'rgba(168, 85, 247, 0.2)',
      fill: true,
      tension: 0.4,
    },
    {
      label: 'Clicks',
      data: Array.from({ length: 14 }, () => Math.floor(Math.random() * 2000) + 1000),
      borderColor: 'rgb(236, 72, 153)',
      backgroundColor: 'rgba(236, 72, 153, 0.2)',
      fill: true,
      tension: 0.4,
    },
  ],
}

export const campaignData = [
  {
    id: 1,
    name: 'Summer Sale Campaign',
    platform: 'Meta',
    status: 'Active',
    spend: 2450.00,
    revenue: 9800.00,
    roas: 4.0,
    clicks: 1234,
    impressions: 45678,
    ctr: 2.7,
    cpc: 1.99,
  },
  {
    id: 2,
    name: 'Product Launch - Tech',
    platform: 'Google',
    status: 'Active',
    spend: 3200.00,
    revenue: 12800.00,
    roas: 4.0,
    clicks: 2100,
    impressions: 68900,
    ctr: 3.05,
    cpc: 1.52,
  },
  {
    id: 3,
    name: 'Brand Awareness Q4',
    platform: 'Meta',
    status: 'Paused',
    spend: 1850.00,
    revenue: 5180.00,
    roas: 2.8,
    clicks: 890,
    impressions: 38200,
    ctr: 2.33,
    cpc: 2.08,
  },
  {
    id: 4,
    name: 'Retargeting - Cart Abandoners',
    platform: 'Meta',
    status: 'Active',
    spend: 1200.00,
    revenue: 7200.00,
    roas: 6.0,
    clicks: 650,
    impressions: 21400,
    ctr: 3.04,
    cpc: 1.85,
  },
  {
    id: 5,
    name: 'Holiday Special Offers',
    platform: 'Google',
    status: 'Active',
    spend: 2800.00,
    revenue: 10360.00,
    roas: 3.7,
    clicks: 1580,
    impressions: 52000,
    ctr: 3.04,
    cpc: 1.77,
  },
]

export const kpiData = {
  roas: {
    value: 4.2,
    change: 12.5,
    trend: 'up' as const,
  },
  revenue: {
    value: 48340,
    change: 18.2,
    trend: 'up' as const,
  },
  spend: {
    value: 11500,
    change: 5.3,
    trend: 'up' as const,
  },
  ctr: {
    value: 2.89,
    change: 8.1,
    trend: 'up' as const,
  },
  cpm: {
    value: 12.45,
    change: -3.2,
    trend: 'down' as const,
  },
  cpc: {
    value: 1.82,
    change: -5.8,
    trend: 'down' as const,
  },
  clicks: {
    value: 6454,
    change: 15.4,
    trend: 'up' as const,
  },
}

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Marketing Director at TechFlow',
    image: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=6366f1&color=fff',
    text: 'AdMagic AI transformed our advertising strategy. We saw a 340% increase in ROAS within the first 3 months. The AI-driven insights are incredible!',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CEO at GrowthLabs',
    image: 'https://ui-avatars.com/api/?name=Michael+Chen&background=22d3ee&color=fff',
    text: 'The automation features saved us over 20 hours per week. Our team can now focus on strategy instead of manual optimization. Absolutely game-changing!',
  },
  {
    id: 3,
    name: 'Emma Williams',
    role: 'Performance Marketing Manager',
    image: 'https://ui-avatars.com/api/?name=Emma+Williams&background=a855f7&color=fff',
    text: 'Best advertising platform we\'ve ever used. The creative insights helped us improve our ad performance by 250%. Highly recommend to any serious marketer!',
  },
]
