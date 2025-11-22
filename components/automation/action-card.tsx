'use client'

import { Action } from '@/types/automation'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import {
  DollarSign,
  Zap,
  Users,
  TrendingUp,
  PauseCircle,
  AlertTriangle,
  Play,
  Eye,
  Settings,
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const typeIcons = {
  budget: DollarSign,
  creative: Zap,
  audience: Users,
  bidding: TrendingUp,
  pause: PauseCircle,
  anomaly: AlertTriangle,
}

const impactColors = {
  high: 'bg-red-500/10 text-red-600 dark:text-red-400',
  medium: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400',
  low: 'bg-green-500/10 text-green-600 dark:text-green-400',
}

interface ActionCardProps {
  action: Action
  index?: number
  onToggleAutoPilot?: (actionId: string, enabled: boolean) => void
  onRunNow?: (actionId: string) => void
}

export function ActionCard({ action, index = 0, onToggleAutoPilot, onRunNow }: ActionCardProps) {
  const Icon = typeIcons[action.type]

  const formatLift = (lift: number, metric: string) => {
    const sign = lift > 0 ? '+' : ''
    return `${sign}${lift}% ${metric}`
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Card className={cn(
        "group hover:shadow-lg transition-all duration-300",
        action.category === 'warning' && "border-red-500/50"
      )}>
        <CardContent className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-start gap-3 flex-1">
              <div className={cn(
                "p-2 rounded-lg",
                action.type === 'anomaly' ? 'bg-red-500/10' : 'bg-primary/10'
              )}>
                <Icon className={cn(
                  "h-5 w-5",
                  action.type === 'anomaly' ? 'text-red-500' : 'text-primary'
                )} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-1">{action.title}</h3>
                <p className="text-sm text-muted-foreground">{action.description}</p>
              </div>
            </div>
            <Badge className={cn(impactColors[action.impact], "ml-2")}>
              {action.impact.toUpperCase()}
            </Badge>
          </div>

          {/* Expected Lift */}
          <div className="flex flex-wrap gap-3 mb-4 pb-4 border-b">
            {action.expectedLift.roasPct && (
              <div className="flex items-center gap-1 text-sm">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span className="font-medium text-green-600 dark:text-green-400">
                  {formatLift(action.expectedLift.roasPct, 'ROAS')}
                </span>
              </div>
            )}
            {action.expectedLift.spendPct && (
              <div className="flex items-center gap-1 text-sm">
                <DollarSign className="h-4 w-4 text-blue-500" />
                <span className={cn(
                  "font-medium",
                  action.expectedLift.spendPct < 0 ? 'text-green-600 dark:text-green-400' : 'text-blue-600 dark:text-blue-400'
                )}>
                  {formatLift(action.expectedLift.spendPct, 'Spend')}
                </span>
              </div>
            )}
            {action.expectedLift.revenuePct && (
              <div className="flex items-center gap-1 text-sm">
                <TrendingUp className="h-4 w-4 text-purple-500" />
                <span className="font-medium text-purple-600 dark:text-purple-400">
                  {formatLift(action.expectedLift.revenuePct, 'Revenue')}
                </span>
              </div>
            )}
            {action.expectedLift.conversions && (
              <div className="flex items-center gap-1 text-sm">
                <Zap className="h-4 w-4 text-orange-500" />
                <span className="font-medium text-orange-600 dark:text-orange-400">
                  +{action.expectedLift.conversions} conversions
                </span>
              </div>
            )}
          </div>

          {/* Metadata */}
          <div className="flex items-center justify-between mb-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <span className="font-medium">Level:</span> {action.level}
              </span>
              <span className="flex items-center gap-1">
                <span className="font-medium">Platform:</span> {action.platform}
              </span>
              <span className="flex items-center gap-1">
                <span className="font-medium">Affects:</span> {action.affectedEntities.length} {action.level}(s)
              </span>
            </div>
            {action.lastRunAt && (
              <span>
                Last run: {new Date(action.lastRunAt).toLocaleDateString()}
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link href={`/dashboard/automation/action/${action.id}`}>
                <Eye className="h-4 w-4 mr-2" />
                View Details
              </Link>
            </Button>

            <Button
              size="sm"
              variant="default"
              onClick={() => onRunNow?.(action.id)}
            >
              <Play className="h-4 w-4 mr-2" />
              Run Now
            </Button>

            <div className="ml-auto flex items-center gap-2">
              <span className="text-xs text-muted-foreground">Auto-Pilot</span>
              <button
                onClick={() => onToggleAutoPilot?.(action.id, !action.isAutoPilotEnabled)}
                className={cn(
                  "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
                  action.isAutoPilotEnabled ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-700'
                )}
              >
                <span
                  className={cn(
                    "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                    action.isAutoPilotEnabled ? 'translate-x-6' : 'translate-x-1'
                  )}
                />
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
