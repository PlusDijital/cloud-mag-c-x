'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { RuleCard } from '@/components/automation/rule-card'
import { AutomationNav } from '@/components/automation/automation-nav'
import { rulesData, automationStats } from '@/lib/automation-data'
import { Plus } from 'lucide-react'
import { motion } from 'framer-motion'

export default function RulesPage() {
  const [rules, setRules] = useState(rulesData)

  const handleToggleRule = (ruleId: string, enabled: boolean) => {
    setRules(rules.map(rule =>
      rule.id === ruleId ? { ...rule, isActive: enabled } : rule
    ))
  }

  const handleDeleteRule = (ruleId: string) => {
    if (confirm('Are you sure you want to delete this rule?')) {
      setRules(rules.filter(rule => rule.id !== ruleId))
    }
  }

  const handleEditRule = (ruleId: string) => {
    console.log('Edit rule:', ruleId)
    // Open edit modal
  }

  const activeRules = rules.filter(r => r.isActive)
  const inactiveRules = rules.filter(r => !r.isActive)

  return (
    <div className="space-y-6">
      {/* Navigation */}
      <AutomationNav />

      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Automation Rules</h1>
          <p className="text-muted-foreground mt-1">
            Create and manage rules to automate AI actions based on performance triggers
          </p>
        </div>

        <Button size="lg">
          <Plus className="h-4 w-4 mr-2" />
          Create New Rule
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-muted-foreground mb-1">Total Rules</div>
            <div className="text-3xl font-bold">{rules.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-muted-foreground mb-1">Active Rules</div>
            <div className="text-3xl font-bold text-green-600">{activeRules.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-muted-foreground mb-1">Total Runs</div>
            <div className="text-3xl font-bold text-primary">
              {rules.reduce((sum, rule) => sum + rule.runsCount, 0)}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Rules */}
      {activeRules.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Active Rules ({activeRules.length})</h2>
          {activeRules.map((rule, index) => (
            <RuleCard
              key={rule.id}
              rule={rule}
              index={index}
              onToggle={handleToggleRule}
              onDelete={handleDeleteRule}
              onEdit={handleEditRule}
            />
          ))}
        </div>
      )}

      {/* Inactive Rules */}
      {inactiveRules.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-muted-foreground">
            Paused Rules ({inactiveRules.length})
          </h2>
          {inactiveRules.map((rule, index) => (
            <RuleCard
              key={rule.id}
              rule={rule}
              index={index}
              onToggle={handleToggleRule}
              onDelete={handleDeleteRule}
              onEdit={handleEditRule}
            />
          ))}
        </div>
      )}

      {/* Empty State */}
      {rules.length === 0 && (
        <Card>
          <CardContent className="py-16 text-center">
            <div className="text-6xl mb-4">⚙️</div>
            <h3 className="text-xl font-semibold mb-2">No Rules Created Yet</h3>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">
              Create automation rules to let AI automatically optimize your campaigns based on performance triggers.
            </p>
            <Button size="lg">
              <Plus className="h-4 w-4 mr-2" />
              Create Your First Rule
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
