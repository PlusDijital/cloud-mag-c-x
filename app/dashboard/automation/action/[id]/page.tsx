'use client'

import { use } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { actionsData } from '@/lib/automation-data'
import {
  ArrowLeft,
  Play,
  Settings,
  AlertTriangle,
  TrendingUp,
  CheckCircle,
} from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { formatCurrency } from '@/lib/utils'

export default function ActionDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const action = actionsData.find(a => a.id === id)

  if (!action) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Action Not Found</h2>
          <p className="text-muted-foreground mb-4">The requested action could not be found.</p>
          <Button asChild>
            <Link href="/dashboard/automation/actions">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Actions
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  const impactColors = {
    high: 'bg-red-500/10 text-red-600',
    medium: 'bg-yellow-500/10 text-yellow-600',
    low: 'bg-green-500/10 text-green-600',
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <Button variant="ghost" asChild className="mb-4">
          <Link href="/dashboard/automation/actions">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Actions
          </Link>
        </Button>

        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold">{action.title}</h1>
              <Badge className={impactColors[action.impact]}>
                {action.impact.toUpperCase()} IMPACT
              </Badge>
            </div>
            <p className="text-muted-foreground">{action.description}</p>
          </div>

          <div className="flex items-center gap-2">
            <Button size="lg" variant="outline">
              <Settings className="h-4 w-4 mr-2" />
              Create Rule
            </Button>
            <Button size="lg">
              <Play className="h-4 w-4 mr-2" />
              Run Now
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* What's Changing */}
          <Card>
            <CardHeader>
              <CardTitle>What's Changing?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {action.affectedEntities.map((entity, index) => (
                <motion.div
                  key={entity.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-lg border"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold">{entity.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {entity.level} · {entity.platform}
                      </p>
                    </div>
                  </div>

                  {/* Before/After Comparison */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground mb-2">BEFORE</p>
                      <div className="space-y-1 text-sm">
                        {entity.currentMetrics.spend && (
                          <div>Spend: {formatCurrency(entity.currentMetrics.spend)}</div>
                        )}
                        {entity.currentMetrics.roas && (
                          <div>ROAS: {entity.currentMetrics.roas.toFixed(2)}x</div>
                        )}
                        {entity.currentMetrics.ctr && (
                          <div>CTR: {entity.currentMetrics.ctr.toFixed(2)}%</div>
                        )}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-2">AFTER (Expected)</p>
                      <div className="space-y-1 text-sm font-medium text-primary">
                        {entity.suggestedChange.map((change, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <span>{change.field}:</span>
                            <span className="font-bold">
                              {typeof change.to === 'number' ? formatCurrency(change.to) : change.to}
                            </span>
                            <Badge variant="outline" className="text-xs">
                              {change.changeType}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>

          {/* AI Reasoning */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                AI Reasoning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {action.aiReasoning.map((reason, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-3"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary">
                      {index + 1}
                    </span>
                    <span className="text-sm">{reason}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Risk Assessment */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-orange-500" />
                Risk Assessment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">{action.risk}</p>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Expected Impact */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Expected Impact
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {action.expectedLift.roasPct && (
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-muted-foreground">ROAS</span>
                    <span className="text-lg font-bold text-green-600">
                      +{action.expectedLift.roasPct}%
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-500"
                      style={{ width: `${Math.min(action.expectedLift.roasPct, 100)}%` }}
                    />
                  </div>
                </div>
              )}

              {action.expectedLift.spendPct && (
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-muted-foreground">Spend</span>
                    <span className={cn(
                      "text-lg font-bold",
                      action.expectedLift.spendPct < 0 ? 'text-green-600' : 'text-blue-600'
                    )}>
                      {action.expectedLift.spendPct > 0 ? '+' : ''}{action.expectedLift.spendPct}%
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className={cn(
                        "h-full",
                        action.expectedLift.spendPct < 0 ? 'bg-green-500' : 'bg-blue-500'
                      )}
                      style={{ width: `${Math.min(Math.abs(action.expectedLift.spendPct), 100)}%` }}
                    />
                  </div>
                </div>
              )}

              {action.expectedLift.revenuePct && (
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-muted-foreground">Revenue</span>
                    <span className="text-lg font-bold text-purple-600">
                      +{action.expectedLift.revenuePct}%
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-purple-500"
                      style={{ width: `${Math.min(action.expectedLift.revenuePct, 100)}%` }}
                    />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Action Details */}
          <Card>
            <CardHeader>
              <CardTitle>Action Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Type</span>
                <Badge variant="outline">{action.type}</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Level</span>
                <span className="font-medium">{action.level}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Platform</span>
                <span className="font-medium">{action.platform}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Entities Affected</span>
                <span className="font-medium">{action.affectedEntities.length}</span>
              </div>
              {action.lastRunAt && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Last Run</span>
                  <span className="font-medium">
                    {new Date(action.lastRunAt).toLocaleDateString()}
                  </span>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
