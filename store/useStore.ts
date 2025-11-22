import { create } from 'zustand'

interface DateRange {
  from: Date
  to: Date
}

interface AppState {
  // Theme
  theme: 'light' | 'dark'
  setTheme: (theme: 'light' | 'dark') => void
  toggleTheme: () => void

  // Dashboard filters
  dateRange: DateRange
  setDateRange: (range: DateRange) => void

  platform: 'all' | 'meta' | 'google'
  setPlatform: (platform: 'all' | 'meta' | 'google') => void

  breakdown: 'campaigns' | 'adsets' | 'ads'
  setBreakdown: (breakdown: 'campaigns' | 'adsets' | 'ads') => void

  // Sidebar state
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
  toggleSidebar: () => void
}

export const useStore = create<AppState>((set) => ({
  // Theme
  theme: 'light',
  setTheme: (theme) => set({ theme }),
  toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),

  // Dashboard filters
  dateRange: {
    from: new Date(new Date().setDate(new Date().getDate() - 30)),
    to: new Date(),
  },
  setDateRange: (range) => set({ dateRange: range }),

  platform: 'all',
  setPlatform: (platform) => set({ platform }),

  breakdown: 'campaigns',
  setBreakdown: (breakdown) => set({ breakdown }),

  // Sidebar
  sidebarOpen: true,
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
}))
