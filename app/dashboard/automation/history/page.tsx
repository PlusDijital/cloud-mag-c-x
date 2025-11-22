'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent } from '@/components/ui/card'
import { HistoryItem } from '@/components/automation/history-item'
import { AutomationNav } from '@/components/automation/automation-nav'
import { historyData } from '@/lib/automation-data'
import { Calendar, Download, Filter } from 'lucide-react'
import { ActionStatus, ActionType, Platform } from '@/types/automation'

export default function HistoryPage() {
  const [statusFilter, setStatusFilter] = useState<ActionStatus | 'all'>('all')
  const [typeFilter, setTypeFilter] = useState<ActionType | 'all'>('all')
  const [platformFilter, setPlatformFilter] = useState<Platform | 'all'>('all')

  const filteredHistory = historyData.filter(item => {
    if (statusFilter !== 'all' && item.status !== statusFilter) return false
    if (typeFilter !== 'all' && item.actionType !== typeFilter) return false
    if (platformFilter !== 'all' && item.platform !== platformFilter) return false
    return true
  })

  // Calculate stats
  const successCount = historyData.filter(h => h.status === 'success').length
  const failedCount = historyData.filter(h => h.status === 'failed').length
  const totalSavings = historyData.reduce((sum, h) => {
    return sum + (h.deltaMetrics.spend ? Math.abs(h.deltaMetrics.spend) : 0)
  }, 0)

  return (
    <div className="space-y-6">
      {/* Navigation */}
      <AutomationNav />

      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Action History</h1>
          <p className="text-muted-foreground mt-1">
            View all executed automation actions and their results
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            Last 30 days
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-muted-foreground mb-1">Total Actions</div>
            <div className="text-3xl font-bold">{historyData.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-muted-foreground mb-1">Successful</div>
            <div className="text-3xl font-bold text-green-600">{successCount}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-muted-foreground mb-1">Failed</div>
            <div className="text-3xl font-bold text-red-600">{failedCount}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-muted-foreground mb-1">Total Savings</div>
            <div className="text-3xl font-bold text-purple-600">${totalSavings.toFixed(0)}</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <Filter className="h-4 w-4 text-muted-foreground" />

            <Select value={statusFilter} onValueChange={(value: any) => setStatusFilter(value)}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="success">Success</SelectItem>
                <SelectItem value="partial">Partial</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>

            <Select value={typeFilter} onValueChange={(value: any) => setTypeFilter(value)}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="budget">Budget</SelectItem>
                <SelectItem value="bidding">Bidding</SelectItem>
                <SelectItem value="pause">Pause</SelectItem>
                <SelectItem value="audience">Audience</SelectItem>
                <SelectItem value="anomaly">Anomaly</SelectItem>
              </SelectContent>
            </Select>

            <Select value={platformFilter} onValueChange={(value: any) => setPlatformFilter(value)}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Platform" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Platforms</SelectItem>
                <SelectItem value="google">Google Ads</SelectItem>
                <SelectItem value="meta">Meta Ads</SelectItem>
              </SelectContent>
            </Select>

            {(statusFilter !== 'all' || typeFilter !== 'all' || platformFilter !== 'all') && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setStatusFilter('all')
                  setTypeFilter('all')
                  setPlatformFilter('all')
                }}
              >
                Clear Filters
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* History List */}
      <div className="space-y-4">
        {filteredHistory.length === 0 ? (
          <Card>
            <CardContent className="py-16 text-center">
              <div className="text-6xl mb-4">📋</div>
              <h3 className="text-xl font-semibold mb-2">No History Found</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                {historyData.length === 0
                  ? 'No actions have been executed yet. Run an action or enable automation rules to see history.'
                  : 'No actions match your current filters. Try adjusting the filters above.'}
              </p>
            </CardContent>
          </Card>
        ) : (
          filteredHistory.map((item, index) => (
            <HistoryItem key={item.id} item={item} index={index} />
          ))
        )}
      </div>
    </div>
  )
}
