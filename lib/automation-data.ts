import { Action, Rule, HistoryItem, AutomationStats } from '@/types/automation'

// Dummy Actions Data
export const actionsData: Action[] = [
  {
    id: 'act_001',
    title: 'Pause Underperforming Ad Sets',
    description: 'Automatically pause 3 ad sets with ROAS below 1.5 and spending over $100/day',
    type: 'pause',
    impact: 'high',
    level: 'adset',
    platform: 'meta',
    expectedLift: {
      spendPct: -15,
      roasPct: 8,
    },
    isRecommended: true,
    isAutoPilotEnabled: false,
    category: 'recommended',
    aiReasoning: [
      'These ad sets have consistently underperformed for 7 days',
      'Pausing will free up budget for better-performing campaigns',
      'Historical data shows similar pauses improved overall ROAS by 12%'
    ],
    affectedEntities: [
      {
        name: 'Summer Sale - Retargeting 1',
        id: 'adset_101',
        level: 'adset',
        platform: 'meta',
        currentMetrics: {
          spend: 145,
          revenue: 180,
          roas: 1.24,
          ctr: 1.8,
          conversions: 12
        },
        suggestedChange: [
          {
            field: 'status',
            from: 'Active',
            to: 'Paused',
            changeType: 'pause'
          }
        ]
      },
      {
        name: 'Q4 Promo - Cold Audience',
        id: 'adset_102',
        level: 'adset',
        platform: 'meta',
        currentMetrics: {
          spend: 220,
          revenue: 290,
          roas: 1.32,
          ctr: 2.1,
          conversions: 18
        },
        suggestedChange: [
          {
            field: 'status',
            from: 'Active',
            to: 'Paused',
            changeType: 'pause'
          }
        ]
      },
      {
        name: 'Black Friday - Lookalike 3%',
        id: 'adset_103',
        level: 'adset',
        platform: 'meta',
        currentMetrics: {
          spend: 180,
          revenue: 245,
          roas: 1.36,
          ctr: 1.9,
          conversions: 15
        },
        suggestedChange: [
          {
            field: 'status',
            from: 'Active',
            to: 'Paused',
            changeType: 'pause'
          }
        ]
      }
    ],
    risk: 'Low - Can be resumed anytime if needed',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'act_002',
    title: 'Increase Budget for Top Performers',
    description: 'Scale budget by 25% for 2 campaigns with ROAS > 4.0 and stable performance',
    type: 'budget',
    impact: 'high',
    level: 'campaign',
    platform: 'google',
    expectedLift: {
      roasPct: 5,
      spendPct: 25,
      revenuePct: 30,
    },
    isRecommended: true,
    isAutoPilotEnabled: true,
    category: 'active',
    lastRunAt: new Date(Date.now() - 3600000 * 24).toISOString(),
    aiReasoning: [
      'These campaigns maintain ROAS > 4.0 consistently',
      'Impression share has room to grow (currently 65%)',
      'Similar budget increases in past resulted in positive scaling'
    ],
    affectedEntities: [
      {
        name: 'Product Launch - Tech Accessories',
        id: 'camp_201',
        level: 'campaign',
        platform: 'google',
        currentMetrics: {
          spend: 850,
          revenue: 3740,
          roas: 4.4,
          ctr: 3.2,
          conversions: 68
        },
        suggestedChange: [
          {
            field: 'daily_budget',
            from: 850,
            to: 1062.5,
            changeType: 'increase'
          }
        ]
      },
      {
        name: 'Holiday Special - Electronics',
        id: 'camp_202',
        level: 'campaign',
        platform: 'google',
        currentMetrics: {
          spend: 1200,
          revenue: 5280,
          roas: 4.4,
          ctr: 2.9,
          conversions: 92
        },
        suggestedChange: [
          {
            field: 'daily_budget',
            from: 1200,
            to: 1500,
            changeType: 'increase'
          }
        ]
      }
    ],
    risk: 'Medium - Monitor for first 48h to ensure ROAS stability',
    createdAt: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: 'act_003',
    title: 'Adjust Bids for High-Intent Keywords',
    description: 'Increase bids by 15% on 8 keywords with high conversion rate but low impression share',
    type: 'bidding',
    impact: 'medium',
    level: 'keyword',
    platform: 'google',
    expectedLift: {
      ctrPct: 12,
      conversions: 24,
      roasPct: 3,
    },
    isRecommended: true,
    isAutoPilotEnabled: false,
    category: 'recommended',
    aiReasoning: [
      'These keywords have CVR > 8% but impression share < 40%',
      'Competitors are likely outbidding for these high-intent terms',
      'Small bid increases can capture significant additional volume'
    ],
    affectedEntities: [
      {
        name: '"buy wireless headphones"',
        id: 'kw_301',
        level: 'keyword',
        platform: 'google',
        currentMetrics: {
          cpc: 2.45,
          ctr: 4.2,
          conversions: 12
        },
        suggestedChange: [
          {
            field: 'max_cpc',
            from: 2.45,
            to: 2.82,
            changeType: 'increase'
          }
        ]
      },
      {
        name: '"best bluetooth speaker"',
        id: 'kw_302',
        level: 'keyword',
        platform: 'google',
        currentMetrics: {
          cpc: 1.85,
          ctr: 5.1,
          conversions: 18
        },
        suggestedChange: [
          {
            field: 'max_cpc',
            from: 1.85,
            to: 2.13,
            changeType: 'increase'
          }
        ]
      }
    ],
    risk: 'Low - Incremental bid changes with proven conversion rates',
    createdAt: new Date(Date.now() - 172800000).toISOString(),
  },
  {
    id: 'act_004',
    title: 'Reduce Frequency Cap on Retargeting',
    description: 'Lower frequency cap from 5 to 3 impressions/week to reduce ad fatigue',
    type: 'audience',
    impact: 'medium',
    level: 'adset',
    platform: 'meta',
    expectedLift: {
      ctrPct: 8,
      roasPct: 6,
    },
    isRecommended: false,
    isAutoPilotEnabled: false,
    category: 'experimental',
    aiReasoning: [
      'Current frequency of 4.8 shows declining CTR over time',
      'Users exposed 4+ times have 40% lower conversion rate',
      'Reducing frequency can improve relevance and reduce costs'
    ],
    affectedEntities: [
      {
        name: 'Retargeting - 30 Day Window',
        id: 'adset_401',
        level: 'adset',
        platform: 'meta',
        currentMetrics: {
          frequency: 4.8,
          ctr: 1.9,
          roas: 2.8
        },
        suggestedChange: [
          {
            field: 'frequency_cap',
            from: 5,
            to: 3,
            changeType: 'decrease'
          }
        ]
      }
    ],
    risk: 'Medium - May reduce reach temporarily',
    createdAt: new Date(Date.now() - 259200000).toISOString(),
  },
  {
    id: 'act_005',
    title: 'Anomaly: Sudden Spend Spike Detected',
    description: 'Campaign spend increased 380% in last 4 hours without proportional revenue increase',
    type: 'anomaly',
    impact: 'high',
    level: 'campaign',
    platform: 'meta',
    expectedLift: {
      spendPct: -70,
    },
    isRecommended: false,
    isAutoPilotEnabled: false,
    category: 'warning',
    aiReasoning: [
      'Spend increased from $120/day to $576 in 4 hours',
      'ROAS dropped from 3.2 to 0.8 during this period',
      'Likely caused by bid cap removal or budget limit increase'
    ],
    affectedEntities: [
      {
        name: 'Winter Collection - Apparel',
        id: 'camp_501',
        level: 'campaign',
        platform: 'meta',
        currentMetrics: {
          spend: 576,
          revenue: 460,
          roas: 0.8,
          ctr: 2.1
        },
        suggestedChange: [
          {
            field: 'daily_budget',
            from: 600,
            to: 180,
            changeType: 'decrease'
          }
        ]
      }
    ],
    risk: 'Critical - Immediate action recommended to prevent budget drain',
    createdAt: new Date(Date.now() - 3600000).toISOString(),
  },
  {
    id: 'act_006',
    title: 'Expand Lookalike Audience Size',
    description: 'Increase lookalike percentage from 1% to 2% for scalable performance',
    type: 'audience',
    impact: 'low',
    level: 'adset',
    platform: 'meta',
    expectedLift: {
      spendPct: 15,
      revenuePct: 12,
    },
    isRecommended: false,
    isAutoPilotEnabled: false,
    category: 'experimental',
    aiReasoning: [
      'Current 1% LAL is reaching audience saturation (frequency 3.8)',
      '2% LAL historically maintains 85% of conversion quality',
      'Provides room for continued growth without major efficiency loss'
    ],
    affectedEntities: [
      {
        name: 'LAL - Top 10% Purchasers',
        id: 'adset_601',
        level: 'adset',
        platform: 'meta',
        currentMetrics: {
          frequency: 3.8,
          roas: 3.5,
          spend: 420
        },
        suggestedChange: [
          {
            field: 'lookalike_percentage',
            from: '1%',
            to: '2%',
            changeType: 'update'
          }
        ]
      }
    ],
    risk: 'Low - Gradual scaling with proven audience',
    createdAt: new Date(Date.now() - 432000000).toISOString(),
  },
]

// Dummy Rules Data
export const rulesData: Rule[] = [
  {
    id: 'rule_001',
    name: 'Auto-pause low ROAS campaigns',
    actionId: 'act_001',
    actionTitle: 'Pause Underperforming Ad Sets',
    trigger: {
      metric: 'roas',
      operator: '<',
      value: 1.5,
      label: 'ROAS < 1.5'
    },
    frequency: 'daily',
    limits: {
      minDataPoints: 100,
      maxEntitiesAffected: 5
    },
    isActive: true,
    createdAt: new Date(Date.now() - 604800000).toISOString(),
    lastRunAt: new Date(Date.now() - 86400000).toISOString(),
    runsCount: 7
  },
  {
    id: 'rule_002',
    name: 'Scale top performers automatically',
    actionId: 'act_002',
    actionTitle: 'Increase Budget for Top Performers',
    trigger: {
      metric: 'roas',
      operator: '>',
      value: 4.0,
      label: 'ROAS > 4.0'
    },
    frequency: 'daily',
    limits: {
      maxDailyBudgetChangePct: 25,
      minDataPoints: 50
    },
    isActive: true,
    createdAt: new Date(Date.now() - 1209600000).toISOString(),
    lastRunAt: new Date(Date.now() - 86400000).toISOString(),
    runsCount: 14
  },
  {
    id: 'rule_003',
    name: 'Reduce high-frequency retargeting',
    actionId: 'act_004',
    actionTitle: 'Reduce Frequency Cap on Retargeting',
    trigger: {
      metric: 'frequency',
      operator: '>',
      value: 4.5,
      label: 'Frequency > 4.5'
    },
    frequency: 'weekly',
    limits: {
      maxEntitiesAffected: 3
    },
    isActive: false,
    createdAt: new Date(Date.now() - 259200000).toISOString(),
    runsCount: 0
  },
]

// Dummy History Data
export const historyData: HistoryItem[] = [
  {
    id: 'hist_001',
    actionId: 'act_002',
    actionTitle: 'Increase Budget for Top Performers',
    actionType: 'budget',
    platform: 'google',
    runAt: new Date(Date.now() - 86400000).toISOString(),
    status: 'success',
    summary: 'Successfully increased budget for 2 campaigns by 25%',
    deltaMetrics: {
      spend: 512,
      revenue: 2240,
      roas: 0.2,
      conversions: 38
    },
    entitiesAffected: 2,
    triggeredBy: 'rule',
    ruleId: 'rule_002'
  },
  {
    id: 'hist_002',
    actionId: 'act_001',
    actionTitle: 'Pause Underperforming Ad Sets',
    actionType: 'pause',
    platform: 'meta',
    runAt: new Date(Date.now() - 172800000).toISOString(),
    status: 'success',
    summary: 'Paused 3 ad sets with low ROAS, saved $545/day in wasted spend',
    deltaMetrics: {
      spend: -545,
      roas: 0.8
    },
    entitiesAffected: 3,
    triggeredBy: 'rule',
    ruleId: 'rule_001'
  },
  {
    id: 'hist_003',
    actionId: 'act_003',
    actionTitle: 'Adjust Bids for High-Intent Keywords',
    actionType: 'bidding',
    platform: 'google',
    runAt: new Date(Date.now() - 259200000).toISOString(),
    status: 'partial',
    summary: 'Increased bids for 6 out of 8 keywords (2 reached max CPC limit)',
    deltaMetrics: {
      ctr: 0.8,
      conversions: 14,
      roas: 0.15
    },
    entitiesAffected: 6,
    triggeredBy: 'manual'
  },
  {
    id: 'hist_004',
    actionId: 'act_005',
    actionTitle: 'Anomaly: Sudden Spend Spike Detected',
    actionType: 'anomaly',
    platform: 'meta',
    runAt: new Date(Date.now() - 345600000).toISOString(),
    status: 'success',
    summary: 'Reduced budget by 70% to prevent overspend, ROAS recovered to 2.4',
    deltaMetrics: {
      spend: -420,
      roas: 1.6
    },
    entitiesAffected: 1,
    triggeredBy: 'autopilot'
  },
  {
    id: 'hist_005',
    actionId: 'act_002',
    actionTitle: 'Increase Budget for Top Performers',
    actionType: 'budget',
    platform: 'google',
    runAt: new Date(Date.now() - 432000000).toISOString(),
    status: 'failed',
    summary: 'Failed to increase budget - campaigns reached account spending limit',
    deltaMetrics: {},
    entitiesAffected: 0,
    triggeredBy: 'rule',
    ruleId: 'rule_002'
  },
]

// Automation Stats
export const automationStats: AutomationStats = {
  todayActions: 3,
  todaySavings: 1240,
  roasImpact: 0.4,
  warnings: 1,
  totalRules: 3,
  activeRules: 2,
  totalHistoryItems: historyData.length
}
