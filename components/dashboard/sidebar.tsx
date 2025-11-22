'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  LayoutDashboard,
  Palette,
  Users,
  Zap,
  DollarSign,
  TrendingUp,
  FileText,
  Settings,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { useStore } from '@/store/useStore'
import { motion, AnimatePresence } from 'framer-motion'

const menuItems = [
  { icon: LayoutDashboard, label: 'Overview', href: '/dashboard' },
  { icon: Palette, label: 'Creative Studio', href: '/dashboard/creative' },
  { icon: Users, label: 'Audiences', href: '/dashboard/audiences' },
  { icon: Zap, label: 'Automation', href: '/dashboard/automation' },
  { icon: DollarSign, label: 'Budget Optimizer', href: '/dashboard/budget' },
  { icon: TrendingUp, label: 'Competitor Insights', href: '/dashboard/competitors' },
  { icon: FileText, label: 'Reports', href: '/dashboard/reports' },
  { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
]

export function Sidebar() {
  const pathname = usePathname()
  const { sidebarOpen, toggleSidebar } = useStore()

  return (
    <>
      <motion.aside
        initial={false}
        animate={{ width: sidebarOpen ? 256 : 80 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="relative border-r bg-white dark:bg-gray-900 flex flex-col"
      >
        {/* Logo */}
        <div className="flex h-16 items-center justify-between px-4 border-b">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent flex-shrink-0">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <AnimatePresence>
              {sidebarOpen && (
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent whitespace-nowrap overflow-hidden"
                >
                  AdMagic AI
                </motion.span>
              )}
            </AnimatePresence>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 p-4 overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={isActive ? 'secondary' : 'ghost'}
                  className={cn(
                    'w-full justify-start gap-3 transition-all',
                    isActive && 'bg-primary/10 text-primary hover:bg-primary/20',
                    !sidebarOpen && 'justify-center px-2'
                  )}
                >
                  <item.icon className={cn('h-5 w-5 flex-shrink-0', isActive && 'text-primary')} />
                  <AnimatePresence>
                    {sidebarOpen && (
                      <motion.span
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: 'auto' }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.2 }}
                        className="whitespace-nowrap overflow-hidden"
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Button>
              </Link>
            )
          })}
        </nav>

        {/* Collapse button */}
        <div className="p-4 border-t">
          <Button
            variant="ghost"
            onClick={toggleSidebar}
            className={cn('w-full justify-center', !sidebarOpen && 'px-2')}
          >
            {sidebarOpen ? (
              <ChevronLeft className="h-5 w-5" />
            ) : (
              <ChevronRight className="h-5 w-5" />
            )}
          </Button>
        </div>
      </motion.aside>
    </>
  )
}
