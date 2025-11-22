'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Play, TrendingUp, Zap, Target } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      {/* Animated background shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/2 -right-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
          >
            <Zap className="h-4 w-4" />
            <span>Trusted by 10,000+ marketers worldwide</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              AI-Powered Advertising
            </span>
            <br />
            <span className="text-foreground">
              Automation for High-Performance Marketers
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-10 text-lg text-muted-foreground sm:text-xl"
          >
            Transform your Meta and Google Ads campaigns with intelligent automation.
            Boost ROAS by up to 340% while saving 20+ hours per week.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button size="lg" asChild className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg h-12 px-8">
              <Link href="/signup">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg h-12 px-8">
              <Link href="/dashboard">
                <Play className="mr-2 h-5 w-5" />
                See Live Demo
              </Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div className="glass-card p-6">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="h-6 w-6 text-primary mr-2" />
                <div className="text-3xl font-bold text-primary">340%</div>
              </div>
              <p className="text-sm text-muted-foreground">Average ROAS Increase</p>
            </div>
            <div className="glass-card p-6">
              <div className="flex items-center justify-center mb-2">
                <Zap className="h-6 w-6 text-accent mr-2" />
                <div className="text-3xl font-bold text-accent">20+</div>
              </div>
              <p className="text-sm text-muted-foreground">Hours Saved Weekly</p>
            </div>
            <div className="glass-card p-6">
              <div className="flex items-center justify-center mb-2">
                <Target className="h-6 w-6 text-purple-500 mr-2" />
                <div className="text-3xl font-bold text-purple-500">98%</div>
              </div>
              <p className="text-sm text-muted-foreground">Customer Satisfaction</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
