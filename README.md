# 🚀 AdMagic AI - AI-Powered Advertising Automation Platform

> Transform your advertising campaigns with intelligent automation and real-time analytics

A modern, high-performance AI-driven advertising optimization platform built with Next.js 14, inspired by Madgicx.com. This platform helps marketers achieve exceptional results with automated campaign optimization, creative insights, and comprehensive analytics.

![AdMagic AI](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## ✨ Features

### 🏠 Home Page
- **Hero Section** - Engaging introduction with animated backgrounds and compelling CTAs
- **Features Showcase** - 6 feature cards highlighting core capabilities
- **How It Works** - 3-step process explanation with beautiful animations
- **Dashboard Preview** - KPI cards showing platform capabilities
- **Testimonials** - Social proof from satisfied customers
- **Responsive Footer** - Complete site navigation and social links

### 📊 Dashboard
- **Overview Page** - Complete analytics dashboard with:
  - 7 KPI cards (ROAS, Revenue, Spend, CTR, CPM, CPC, Clicks)
  - Daily Performance line chart
  - Spend vs ROAS bar chart
  - Clicks & Impressions area chart
  - Campaign performance table
  - Real-time filters (date range, platform, breakdown)
- **Sidebar Navigation** - Animated collapsible sidebar with 8 menu items
- **Topbar** - Search, notifications, theme toggle, and user menu
- **Additional Pages** - Placeholder pages for:
  - Creative Studio
  - Audiences
  - Automation
  - Budget Optimizer
  - Competitor Insights
  - Reports
  - Settings

### 🎨 Design Features
- **Modern UI** - Glassmorphism, soft gradients, and neumorphism-inspired cards
- **Dark Mode** - Complete light/dark theme support with smooth transitions
- **Animations** - Framer Motion animations throughout
- **Responsive** - Mobile-first design, fully responsive on all devices
- **Performance** - Optimized for speed with lazy loading and code splitting

## 🛠️ Tech Stack

### Core
- **Next.js 14** - React framework with App Router and Server Components
- **React 18** - UI library
- **TypeScript** - Type safety and better DX

### Styling
- **TailwindCSS** - Utility-first CSS framework
- **ShadCN UI** - Beautifully designed components
- **Framer Motion** - Animation library

### Data Visualization
- **Chart.js** - Powerful charting library
- **React Chart.js 2** - React wrapper for Chart.js

### State Management
- **Zustand** - Lightweight state management

### UI Components
- **Radix UI** - Unstyled, accessible components
- **Lucide React** - Beautiful icon set

## 📁 Project Structure

```
cloud-mag-c-x/
├── app/
│   ├── dashboard/
│   │   ├── audiences/
│   │   ├── automation/
│   │   ├── budget/
│   │   ├── competitors/
│   │   ├── creative/
│   │   ├── reports/
│   │   ├── settings/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── dashboard/
│   │   ├── campaign-table.tsx
│   │   ├── clicks-impressions-chart.tsx
│   │   ├── dashboard-filters.tsx
│   │   ├── kpi-cards.tsx
│   │   ├── performance-chart.tsx
│   │   ├── sidebar.tsx
│   │   ├── spend-roas-chart.tsx
│   │   └── topbar.tsx
│   ├── home/
│   │   ├── dashboard-preview-section.tsx
│   │   ├── features-section.tsx
│   │   ├── footer.tsx
│   │   ├── hero-section.tsx
│   │   ├── how-it-works-section.tsx
│   │   ├── navbar.tsx
│   │   └── testimonials-section.tsx
│   ├── providers/
│   │   └── theme-provider.tsx
│   ├── ui/
│   │   ├── avatar.tsx
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── input.tsx
│   │   ├── select.tsx
│   │   └── separator.tsx
│   └── theme-toggle.tsx
├── lib/
│   ├── dummy-data.ts
│   └── utils.ts
├── store/
│   └── useStore.ts
├── next.config.js
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/cloud-mag-c-x.git
   cd cloud-mag-c-x
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Key Pages

- **Home Page**: `/` - Marketing landing page with all sections
- **Dashboard**: `/dashboard` - Main analytics dashboard
- **Creative Studio**: `/dashboard/creative` - Ad creative insights (placeholder)
- **Audiences**: `/dashboard/audiences` - Audience intelligence (placeholder)
- **Automation**: `/dashboard/automation` - Automation rules (placeholder)
- **Budget Optimizer**: `/dashboard/budget` - Budget allocation (placeholder)
- **Competitors**: `/dashboard/competitors` - Competitive analysis (placeholder)
- **Reports**: `/dashboard/reports` - Report generation (placeholder)
- **Settings**: `/dashboard/settings` - Account settings (placeholder)

## 🎨 Customization

### Theme Colors
Edit `tailwind.config.ts` to customize the color scheme:
```typescript
colors: {
  primary: "hsl(243 75% 59%)", // #6366F1
  accent: "hsl(187 85% 53%)",  // #22D3EE
}
```

### Update Dummy Data
Modify `lib/dummy-data.ts` to change charts and KPI data.

### Add New Routes
Create new pages in `app/dashboard/` following the existing structure.

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file:
```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### SEO Configuration
Update metadata in `app/layout.tsx` for SEO optimization.

## 🌟 Features in Detail

### State Management
The app uses Zustand for lightweight state management:
- Theme (light/dark mode)
- Dashboard filters (date range, platform, breakdown)
- Sidebar state (open/collapsed)

### Performance Optimizations
- Server Components for faster initial load
- Dynamic imports for heavy components
- Optimized images with next/image
- Code splitting at route level
- CSS optimization

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Collapsible sidebar on mobile
- Responsive charts and tables

## 🐛 Known Issues & Future Enhancements

### Current Limitations
- Dummy data only (no backend integration)
- Placeholder pages for some dashboard sections
- No user authentication yet

### Planned Features
- [ ] Backend API integration
- [ ] Real-time data updates
- [ ] User authentication with NextAuth
- [ ] Database integration with Prisma + PostgreSQL
- [ ] Advanced filtering and date range picker
- [ ] Export functionality for reports
- [ ] Email notifications
- [ ] Multi-language support
- [ ] Advanced automation rules builder

## 📝 License

This project is licensed under the MIT License.

## 👨‍💻 Developer

Built with ❤️ using Next.js 14, TypeScript, and TailwindCSS.

---

## 📞 Support

For issues and questions:
- Create an issue in the repository
- Contact: support@admagic.ai

## 🙏 Acknowledgments

- Design inspiration from [Madgicx](https://madgicx.com)
- UI components from [ShadCN UI](https://ui.shadcn.com)
- Icons from [Lucide](https://lucide.dev)
- Charts powered by [Chart.js](https://www.chartjs.org)

---

**Made with Next.js 14 🚀**
