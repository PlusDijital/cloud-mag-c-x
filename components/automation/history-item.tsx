'use client'

import { HistoryItem as HistoryItemType } from '@/types/automation'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import {
  CheckCircle2,
  XCircle,
  AlertCircle,
  TrendingUp,
  TrendingDown,
  Clock,
  Zap,
  Settings,
  User,
} from 'lucide-react'
import { formatCurrency } from '@/lib/utils'
import { cn } from '@/lib/utils'

interface HistoryItemProps {
  item: HistoryItemType
  index?: number
}

const statusConfig = {
  success: {
    icon: CheckCircle2,
    color: 'text-green-500',
    bg: 'bg-green-500/10',
    label: 'Success'
  },
  partial: {
    icon: AlertCircle,
    color: 'text-yellow-500',
    bg: 'bg-yellow-500/10',
    label: 'Partial'
  },
  failed: {
    icon: XCircle,
    color: 'text-red-500',
    bg: 'bg-red-500/10',
    label: 'Failed'
  }
}

const triggerIcons = {
  manual: User,
  rule: Settings,
  autopilot: Zap,
}

export function HistoryItem({ item, index = 0 }: HistoryItemProps) {
  const StatusIcon = statusConfig[item.status].icon
  const TriggerIcon = triggerIcons[item.triggeredBy]

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Card className="hover:shadow-md transition-shadow">
        <CardContent className="p-4">
          <div className="flex items-start gap-4">
            {/* Status Icon */}
            <div className={cn("p-2 rounded-lg", statusConfig[item.status].bg)}>
              <StatusIcon className={cn("h-5 w-5", statusConfig[item.status].color)} />
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="font-semibold mb-1">{item.actionTitle}</h4>
                  <p className="text-sm text-muted-foreground">{item.summary}</p>
                </div>
                <Badge variant="outline" className="ml-2">
                  {item.platform}
                </Badge>
              </div>

              {/* Metrics Delta */}
              {Object.keys(item.deltaMetrics).length > 0 && (
                <div className="flex flex-wrap gap-3 mb-3 text-sm">
                  {item.deltaMetrics.spend !== undefined && (
                    <div className="flex items-center gap-1">
                      {item.deltaMetrics.spend < 0 ? (
                        <TrendingDown className="h-4 w-4 text-green-500" />
                      ) : (
                        <TrendingUp className="h-4 w-4 text-blue-500" />
                      )}
                      <span className={cn(
                        "font-medium",
                        item.deltaMetrics.spend < 0 ? 'text-green-600' : 'text-blue-600'
                      )}>
                        Spend: {formatCurrency(Math.abs(item.deltaMetrics.spend))}
                      </span>
                    </div>
                  )}
                  {item.deltaMetrics.roas !== undefined && (
                    <div className="flex items-center gap-1">
                      <TrendingUp className="h-4 w-4 text-purple-500" />
                      <span className="font-medium text-purple-600">
                        ROAS: +{item.deltaMetrics.roas.toFixed(1)}x
                      </span>
                    </div>
                  )}
                  {item.deltaMetrics.conversions !== undefined && (
                    <div className="flex items-center gap-1">
                      <Zap className="h-4 w-4 text-orange-500" />
                      <span className="font-medium text-orange-600">
                        +{item.deltaMetrics.conversions} conversions
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Footer */}
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {new Date(item.runAt).toLocaleString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <TriggerIcon className="h-3 w-3" />
                    {item.triggeredBy}
                  </span>
                  <span>
                    {item.entitiesAffected} {item.entitiesAffected === 1 ? 'entity' : 'entities'}
                  </span>
                </div>
                <Badge variant="outline" className={statusConfig[item.status].bg}>
                  {statusConfig[item.status].label}
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
