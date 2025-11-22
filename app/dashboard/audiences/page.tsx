import { Card, CardContent } from '@/components/ui/card'
import { Users } from 'lucide-react'

export default function AudiencesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Audience Intelligence</h1>
        <p className="text-muted-foreground">
          Deep insights into your target audiences and segmentation
        </p>
      </div>

      <Card className="glass-card">
        <CardContent className="flex flex-col items-center justify-center h-96">
          <Users className="h-24 w-24 text-muted-foreground mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Audience Intelligence Coming Soon</h2>
          <p className="text-muted-foreground text-center max-w-md">
            Advanced audience targeting and segmentation features in development
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
