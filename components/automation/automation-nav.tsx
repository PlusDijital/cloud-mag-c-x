'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Zap, Settings, History } from 'lucide-react'

const navItems = [
  { label: 'AI Actions', href: '/dashboard/automation/actions', icon: Zap },
  { label: 'Rules', href: '/dashboard/automation/rules', icon: Settings },
  { label: 'History', href: '/dashboard/automation/history', icon: History },
]

export function AutomationNav() {
  const pathname = usePathname()

  return (
    <div className="flex items-center gap-2 border-b pb-4 mb-6">
      {navItems.map((item) => {
        const isActive = pathname === item.href
        const Icon = item.icon
        return (
          <Button
            key={item.href}
            variant={isActive ? 'default' : 'ghost'}
            asChild
            className={cn(
              isActive && 'bg-primary text-primary-foreground'
            )}
          >
            <Link href={item.href}>
              <Icon className="h-4 w-4 mr-2" />
              {item.label}
            </Link>
          </Button>
        )
      })}
    </div>
  )
}
