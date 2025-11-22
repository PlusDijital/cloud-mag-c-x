'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { campaignData } from '@/lib/dummy-data'
import { formatCurrency, formatNumber } from '@/lib/utils'

export function CampaignTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Campaign Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-medium text-sm">Campaign</th>
                <th className="text-left py-3 px-4 font-medium text-sm">Platform</th>
                <th className="text-left py-3 px-4 font-medium text-sm">Status</th>
                <th className="text-right py-3 px-4 font-medium text-sm">Spend</th>
                <th className="text-right py-3 px-4 font-medium text-sm">Revenue</th>
                <th className="text-right py-3 px-4 font-medium text-sm">ROAS</th>
                <th className="text-right py-3 px-4 font-medium text-sm">Clicks</th>
                <th className="text-right py-3 px-4 font-medium text-sm">CTR</th>
                <th className="text-right py-3 px-4 font-medium text-sm">CPC</th>
              </tr>
            </thead>
            <tbody>
              {campaignData.map((campaign) => (
                <tr key={campaign.id} className="border-b hover:bg-muted/50 transition-colors">
                  <td className="py-3 px-4 font-medium">{campaign.name}</td>
                  <td className="py-3 px-4">
                    <Badge variant="outline">{campaign.platform}</Badge>
                  </td>
                  <td className="py-3 px-4">
                    <Badge variant={campaign.status === 'Active' ? 'default' : 'secondary'}>
                      {campaign.status}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-right">{formatCurrency(campaign.spend)}</td>
                  <td className="py-3 px-4 text-right font-medium text-green-600">
                    {formatCurrency(campaign.revenue)}
                  </td>
                  <td className="py-3 px-4 text-right font-medium">{campaign.roas.toFixed(1)}x</td>
                  <td className="py-3 px-4 text-right">{formatNumber(campaign.clicks)}</td>
                  <td className="py-3 px-4 text-right">{campaign.ctr.toFixed(2)}%</td>
                  <td className="py-3 px-4 text-right">{formatCurrency(campaign.cpc)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
