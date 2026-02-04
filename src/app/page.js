'use client'

import { useEffect } from 'react'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import SkillsSection from '@/components/SkillsSection'
import ProcessSection from '@/components/ProcessSection'
import ProjectSection from '@/components/ProjectSection'
import VisionSection from '@/components/VisionSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

export default function Home() {
  useEffect(() => {
    // Theme Logic
    const themeToggle = document.getElementById('theme-toggle')
    const themeIcon = document.getElementById('theme-icon')
    const html = document.documentElement

    // Safely check localStorage and system preference
    try {
      if (typeof window !== 'undefined') {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          html.classList.add('dark')
          if (themeIcon) themeIcon.classList.replace('fa-moon', 'fa-sun')
        }
      }
    } catch (error) {
      console.log('Theme initialization error:', error)
    }

    const handleThemeToggle = () => {
      html.classList.toggle('dark')
      const isDark = html.classList.contains('dark')
      if (themeIcon) {
        themeIcon.classList.replace(isDark ? 'fa-moon' : 'fa-sun', isDark ? 'fa-sun' : 'fa-moon')
      }
      try {
        if (typeof window !== 'undefined') {
          localStorage.theme = isDark ? 'dark' : 'light'
        }
      } catch (error) {
        console.log('Theme save error:', error)
      }
    }

    if (themeToggle) {
      themeToggle.addEventListener('click', handleThemeToggle)
    }

    // Scroll Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { 
        if (entry.isIntersecting) entry.target.classList.add('active') 
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

    return () => {
      if (themeToggle) {
        themeToggle.removeEventListener('click', handleThemeToggle)
      }
    }
  }, [])

  return (
    <main>
      <BackToTop />
      <Navigation />
      <HeroSection />
      <SkillsSection />
      <ProcessSection />
      <ProjectSection />
      <VisionSection />
      <CTASection />
      <Footer />
    </main>
  )
}