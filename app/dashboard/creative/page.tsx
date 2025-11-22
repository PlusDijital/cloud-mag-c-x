import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Palette } from 'lucide-react'

export default function CreativeStudioPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Creative Studio</h1>
        <p className="text-muted-foreground">
          Analyze and optimize your ad creatives with AI-powered insights
        </p>
      </div>

      <Card className="glass-card">
        <CardContent className="flex flex-col items-center justify-center h-96">
          <Palette className="h-24 w-24 text-muted-foreground mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Creative Studio Coming Soon</h2>
          <p className="text-muted-foreground text-center max-w-md">
            Powerful creative insights and A/B testing features are being developed
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
