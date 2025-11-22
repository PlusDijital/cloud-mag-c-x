import { Card, CardContent } from '@/components/ui/card'
import { TrendingUp } from 'lucide-react'

export default function CompetitorsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Competitor Insights</h1>
        <p className="text-muted-foreground">
          Analyze competitor strategies and benchmark your performance
        </p>
      </div>

      <Card className="glass-card">
        <CardContent className="flex flex-col items-center justify-center h-96">
          <TrendingUp className="h-24 w-24 text-muted-foreground mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Competitor Insights Coming Soon</h2>
          <p className="text-muted-foreground text-center max-w-md">
            Competitive analysis and benchmarking tools are being created
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
