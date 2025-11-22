export type ActionType = "budget" | "creative" | "audience" | "bidding" | "pause" | "anomaly"
export type ImpactLevel = "high" | "medium" | "low"
export type EntityLevel = "campaign" | "adset" | "ad" | "keyword"
export type ActionStatus = "success" | "partial" | "failed"
export type Frequency = "hourly" | "daily" | "weekly"
export type Platform = "google" | "meta" | "all"

export interface ExpectedLift {
  roasPct?: number
  spendPct?: number
  revenuePct?: number
  ctrPct?: number
  cpcPct?: number
  conversions?: number
}

export interface AffectedEntity {
  name: string
  id: string
  level: EntityLevel
  platform: Platform
  currentMetrics: {
    spend?: number
    revenue?: number
    roas?: number
    ctr?: number
    cpc?: number
    conversions?: number
    frequency?: number
  }
  suggestedChange: {
    field: string
    from: number | string
    to: number | string
    changeType: "increase" | "decrease" | "pause" | "resume" | "update"
  }[]
}

export interface Action {
  id: string
  title: string
  description: string
  type: ActionType
  impact: ImpactLevel
  level: EntityLevel
  platform: Platform
  expectedLift: ExpectedLift
  lastRunAt?: string
  isRecommended: boolean
  isAutoPilotEnabled: boolean
  aiReasoning: string[]
  affectedEntities: AffectedEntity[]
  risk: string
  category: "recommended" | "active" | "experimental" | "warning"
  createdAt: string
}

export interface Trigger {
  metric: string
  operator: ">" | "<" | ">=" | "<=" | "=="
  value: number
  label: string
}

export interface Rule {
  id: string
  name: string
  actionId: string
  actionTitle: string
  trigger: Trigger
  frequency: Frequency
  limits: {
    maxDailyBudgetChangePct?: number
    maxBidChangePct?: number
    minDataPoints?: number
    maxEntitiesAffected?: number
  }
  isActive: boolean
  createdAt: string
  lastRunAt?: string
  runsCount: number
}

export interface HistoryItem {
  id: string
  actionId: string
  actionTitle: string
  actionType: ActionType
  platform: Platform
  runAt: string
  status: ActionStatus
  summary: string
  deltaMetrics: {
    spend?: number
    revenue?: number
    roas?: number
    ctr?: number
    conversions?: number
  }
  entitiesAffected: number
  triggeredBy: "manual" | "rule" | "autopilot"
  ruleId?: string
}

export interface AutomationStats {
  todayActions: number
  todaySavings: number
  roasImpact: number
  warnings: number
  totalRules: number
  activeRules: number
  totalHistoryItems: number
}
