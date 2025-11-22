import { KPICards } from '@/components/dashboard/kpi-cards'
import { DashboardFilters } from '@/components/dashboard/dashboard-filters'
import { PerformanceChart } from '@/components/dashboard/performance-chart'
import { SpendRoasChart } from '@/components/dashboard/spend-roas-chart'
import { ClicksImpressionsChart } from '@/components/dashboard/clicks-impressions-chart'
import { CampaignTable } from '@/components/dashboard/campaign-table'

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
        <p className="text-muted-foreground">
          Monitor your advertising performance and key metrics in real-time
        </p>
      </div>

      {/* Filters */}
      <DashboardFilters />

      {/* KPI Cards */}
      <KPICards />

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PerformanceChart />
        <SpendRoasChart />
      </div>

      {/* Full Width Chart */}
      <ClicksImpressionsChart />

      {/* Campaign Table */}
      <CampaignTable />
    </div>
  )
}
