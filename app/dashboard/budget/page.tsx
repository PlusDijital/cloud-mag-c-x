import { Card, CardContent } from '@/components/ui/card'
import { DollarSign } from 'lucide-react'

export default function BudgetPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Budget Optimizer</h1>
        <p className="text-muted-foreground">
          Smart budget allocation across campaigns based on performance
        </p>
      </div>

      <Card className="glass-card">
        <CardContent className="flex flex-col items-center justify-center h-96">
          <DollarSign className="h-24 w-24 text-muted-foreground mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Budget Optimizer Coming Soon</h2>
          <p className="text-muted-foreground text-center max-w-md">
            Intelligent budget distribution features are under development
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
