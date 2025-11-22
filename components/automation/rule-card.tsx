'use client'

import { Rule } from '@/types/automation'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Settings, Trash2, Calendar, Play } from 'lucide-react'
import { cn } from '@/lib/utils'

interface RuleCardProps {
  rule: Rule
  index?: number
  onToggle?: (ruleId: string, enabled: boolean) => void
  onDelete?: (ruleId: string) => void
  onEdit?: (ruleId: string) => void
}

export function RuleCard({ rule, index = 0, onToggle, onDelete, onEdit }: RuleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Card className={cn(
        "group hover:shadow-lg transition-all duration-300",
        !rule.isActive && "opacity-60"
      )}>
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-semibold text-lg">{rule.name}</h3>
                <Badge variant={rule.isActive ? "default" : "secondary"}>
                  {rule.isActive ? 'Active' : 'Paused'}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{rule.actionTitle}</p>

              {/* Trigger Info */}
              <div className="flex flex-wrap gap-3 text-sm">
                <div className="flex items-center gap-1">
                  <span className="text-muted-foreground">Trigger:</span>
                  <Badge variant="outline">{rule.trigger.label}</Badge>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-muted-foreground">Runs:</span>
                  <span className="font-medium">{rule.frequency}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3 text-muted-foreground" />
                  <span className="text-muted-foreground">
                    {rule.runsCount} times
                  </span>
                </div>
              </div>
            </div>

            {/* Toggle Switch */}
            <button
              onClick={() => onToggle?.(rule.id, !rule.isActive)}
              className={cn(
                "relative inline-flex h-6 w-11 items-center rounded-full transition-colors ml-4",
                rule.isActive ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-700'
              )}
            >
              <span
                className={cn(
                  "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                  rule.isActive ? 'translate-x-6' : 'translate-x-1'
                )}
              />
            </button>
          </div>

          {/* Limits */}
          {Object.keys(rule.limits).length > 0 && (
            <div className="mb-4 p-3 rounded-lg bg-muted/50">
              <p className="text-xs font-medium mb-2">Limits & Safety:</p>
              <div className="flex flex-wrap gap-2 text-xs">
                {rule.limits.maxDailyBudgetChangePct && (
                  <span>Max Budget Change: {rule.limits.maxDailyBudgetChangePct}%</span>
                )}
                {rule.limits.maxBidChangePct && (
                  <span>Max Bid Change: {rule.limits.maxBidChangePct}%</span>
                )}
                {rule.limits.minDataPoints && (
                  <span>Min Data: {rule.limits.minDataPoints} events</span>
                )}
                {rule.limits.maxEntitiesAffected && (
                  <span>Max Entities: {rule.limits.maxEntitiesAffected}</span>
                )}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => onEdit?.(rule.id)}>
              <Settings className="h-4 w-4 mr-2" />
              Edit
            </Button>
            <Button variant="ghost" size="sm" onClick={() => onDelete?.(rule.id)}>
              <Trash2 className="h-4 w-4 mr-2 text-red-500" />
              Delete
            </Button>
            {rule.lastRunAt && (
              <span className="ml-auto text-xs text-muted-foreground">
                Last: {new Date(rule.lastRunAt).toLocaleDateString()}
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
