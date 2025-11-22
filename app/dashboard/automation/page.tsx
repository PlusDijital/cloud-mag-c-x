import { Card, CardContent } from '@/components/ui/card'
import { Zap } from 'lucide-react'

export default function AutomationPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Automation Rules</h1>
        <p className="text-muted-foreground">
          Set up intelligent automation rules to optimize campaigns automatically
        </p>
      </div>

      <Card className="glass-card">
        <CardContent className="flex flex-col items-center justify-center h-96">
          <Zap className="h-24 w-24 text-muted-foreground mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Automation Coming Soon</h2>
          <p className="text-muted-foreground text-center max-w-md">
            Smart automation rules and AI-driven optimizations are being built
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
