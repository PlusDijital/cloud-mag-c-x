'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Calendar } from 'lucide-react'
import { useStore } from '@/store/useStore'

export function DashboardFilters() {
  const { platform, setPlatform, breakdown, setBreakdown } = useStore()

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex flex-wrap gap-4 items-center">
          {/* Date Range */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Date Range:</span>
            <Button variant="outline" className="justify-start">
              <Calendar className="mr-2 h-4 w-4" />
              Last 30 days
            </Button>
          </div>

          {/* Platform */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Platform:</span>
            <Select value={platform} onValueChange={(value: any) => setPlatform(value)}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Platforms</SelectItem>
                <SelectItem value="meta">Meta Ads</SelectItem>
                <SelectItem value="google">Google Ads</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Breakdown */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Breakdown:</span>
            <Select value={breakdown} onValueChange={(value: any) => setBreakdown(value)}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="campaigns">Campaigns</SelectItem>
                <SelectItem value="adsets">Ad Sets</SelectItem>
                <SelectItem value="ads">Ads</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Reset */}
          <Button variant="ghost" size="sm" className="ml-auto">
            Reset Filters
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
