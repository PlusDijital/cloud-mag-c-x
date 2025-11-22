import { Card, CardContent } from '@/components/ui/card'
import { Settings } from 'lucide-react'

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account, integrations, and preferences
        </p>
      </div>

      <Card className="glass-card">
        <CardContent className="flex flex-col items-center justify-center h-96">
          <Settings className="h-24 w-24 text-muted-foreground mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Settings Coming Soon</h2>
          <p className="text-muted-foreground text-center max-w-md">
            Configuration and account management features are being developed
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
