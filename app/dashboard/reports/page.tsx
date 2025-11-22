import { Card, CardContent } from '@/components/ui/card'
import { FileText } from 'lucide-react'

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
        <p className="text-muted-foreground">
          Generate comprehensive reports and export your data
        </p>
      </div>

      <Card className="glass-card">
        <CardContent className="flex flex-col items-center justify-center h-96">
          <FileText className="h-24 w-24 text-muted-foreground mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Reports Coming Soon</h2>
          <p className="text-muted-foreground text-center max-w-md">
            Advanced reporting and data export features are in the works
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
