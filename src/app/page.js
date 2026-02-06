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

    // Initialize theme on page load
    try {
      if (typeof window !== 'undefined' && localStorage) {
        const savedTheme = localStorage.getItem('theme')
        const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        
        if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
          html.classList.add('dark')
          if (themeIcon) {
            themeIcon.classList.remove('fa-moon')
            themeIcon.classList.add('fa-sun')
          }
        } else {
          html.classList.remove('dark')
          if (themeIcon) {
            themeIcon.classList.remove('fa-sun')
            themeIcon.classList.add('fa-moon')
          }
        }
      }
    } catch (error) {
      console.warn('Theme initialization error:', error)
    }

    // Theme toggle handler
    const handleThemeToggle = () => {
      try {
        html.classList.toggle('dark')
        const isDark = html.classList.contains('dark')
        
        if (themeIcon) {
          if (isDark) {
            themeIcon.classList.remove('fa-moon')
            themeIcon.classList.add('fa-sun')
          } else {
            themeIcon.classList.remove('fa-sun')
            themeIcon.classList.add('fa-moon')
          }
        }
        
        if (typeof window !== 'undefined' && localStorage) {
          localStorage.setItem('theme', isDark ? 'dark' : 'light')
        }
      } catch (error) {
        console.warn('Theme toggle error:', error)
      }
    }

    if (themeToggle) {
      themeToggle.addEventListener('click', handleThemeToggle)
    }

    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { 
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, { threshold: 0.1 })

    const revealElements = document.querySelectorAll('.reveal')
    revealElements.forEach(el => observer.observe(el))

    // Cleanup
    return () => {
      if (themeToggle) {
        themeToggle.removeEventListener('click', handleThemeToggle)
      }
      observer.disconnect()
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