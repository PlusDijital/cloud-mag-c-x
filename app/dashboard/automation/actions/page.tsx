'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent } from '@/components/ui/card'
import { AutomationKPICards } from '@/components/automation/automation-kpi-cards'
import { ActionCard } from '@/components/automation/action-card'
import { AutomationNav } from '@/components/automation/automation-nav'
import { actionsData, automationStats } from '@/lib/automation-data'
import { Calendar, Filter } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Platform } from '@/types/automation'

export default function ActionsPage() {
  const [selectedTab, setSelectedTab] = useState<'recommended' | 'active' | 'experimental' | 'warning'>('recommended')
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>('all')
  const [autoPilotGlobal, setAutoPilotGlobal] = useState(false)

  const filteredActions = actionsData.filter(action => {
    if (selectedPlatform !== 'all' && action.platform !== selectedPlatform) return false
    return action.category === selectedTab
  })

  const tabs = [
    { value: 'recommended' as const, label: 'Recommended', count: actionsData.filter(a => a.category === 'recommended').length },
    { value: 'active' as const, label: 'Active Rules', count: actionsData.filter(a => a.category === 'active').length },
    { value: 'experimental' as const, label: 'Experimental', count: actionsData.filter(a => a.category === 'experimental').length },
    { value: 'warning' as const, label: 'Warnings', count: actionsData.filter(a => a.category === 'warning').length },
  ]

  return (
    <div className="space-y-6">
      {/* Navigation */}
      <AutomationNav />

      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">AI Actions</h1>
          <p className="text-muted-foreground mt-1">
            AI-powered automation recommendations to optimize your campaigns
          </p>
        </div>

        {/* Header Controls */}
        <div className="flex items-center gap-3">
          {/* Platform Selector */}
          <Select value={selectedPlatform} onValueChange={(value: Platform) => setSelectedPlatform(value)}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Platforms</SelectItem>
              <SelectItem value="meta">Meta Ads</SelectItem>
              <SelectItem value="google">Google Ads</SelectItem>
            </SelectContent>
          </Select>

          {/* Date Range */}
          <Button variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            Last 30 days
          </Button>

          {/* Auto-Pilot Global Toggle */}
          <Card>
            <CardContent className="p-3 flex items-center gap-3">
              <span className="text-sm font-medium">Auto-Pilot</span>
              <button
                onClick={() => setAutoPilotGlobal(!autoPilotGlobal)}
                className={cn(
                  "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
                  autoPilotGlobal ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-700'
                )}
              >
                <span
                  className={cn(
                    "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                    autoPilotGlobal ? 'translate-x-6' : 'translate-x-1'
                  )}
                />
              </button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* KPI Cards */}
      <AutomationKPICards stats={automationStats} />

      {/* Tabs */}
      <Card>
        <CardContent className="p-0">
          <div className="flex border-b">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setSelectedTab(tab.value)}
                className={cn(
                  "flex-1 px-6 py-4 text-sm font-medium transition-colors relative",
                  selectedTab === tab.value
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {tab.label}
                <span className={cn(
                  "ml-2 px-2 py-0.5 rounded-full text-xs",
                  selectedTab === tab.value
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                )}>
                  {tab.count}
                </span>
                {selectedTab === tab.value && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Actions List */}
      <div className="space-y-4">
        {filteredActions.length === 0 ? (
          <Card>
            <CardContent className="py-16 text-center">
              <div className="text-6xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-2">No Actions Available</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                {selectedTab === 'recommended'
                  ? 'No recommendations at the moment. Your campaigns are performing well!'
                  : `No ${selectedTab} actions found. Check back later.`
                }
              </p>
            </CardContent>
          </Card>
        ) : (
          filteredActions.map((action, index) => (
            <ActionCard
              key={action.id}
              action={action}
              index={index}
              onToggleAutoPilot={(id, enabled) => {
                console.log('Toggle auto-pilot:', id, enabled)
              }}
              onRunNow={(id) => {
                console.log('Run action now:', id)
              }}
            />
          ))
        )}
      </div>
    </div>
  )
}
