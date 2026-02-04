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
    // Simplified theme logic with better error handling
    const initializeTheme = () => {
      try {
        const themeToggle = document.getElementById('theme-toggle')
        const themeIcon = document.getElementById('theme-icon')
        const html = document.documentElement

        // Check for saved theme or default to system preference
        if (typeof window !== 'undefined' && localStorage) {
          const savedTheme = localStorage.getItem('theme')
          const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
          
          if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
            html.classList.add('dark')
            if (themeIcon) themeIcon.classList.replace('fa-moon', 'fa-sun')
          }
        }

        // Theme toggle handler
        const handleThemeToggle = () => {
          try {
            html.classList.toggle('dark')
            const isDark = html.classList.contains('dark')
            
            if (themeIcon) {
              themeIcon.classList.replace(
                isDark ? 'fa-moon' : 'fa-sun', 
                isDark ? 'fa-sun' : 'fa-moon'
              )
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
          
          // Cleanup function
          return () => {
            themeToggle.removeEventListener('click', handleThemeToggle)
          }
        }
      } catch (error) {
        console.warn('Theme initialization error:', error)
      }
    }

    // Initialize theme
    const cleanup = initializeTheme()

    // Intersection Observer for animations
    try {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { 
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      }, { threshold: 0.1 })

      // Observe elements with reveal class
      const revealElements = document.querySelectorAll('.reveal')
      revealElements.forEach(el => observer.observe(el))

      // Cleanup observer
      return () => {
        if (cleanup) cleanup()
        observer.disconnect()
      }
    } catch (error) {
      console.warn('Observer initialization error:', error)
      return cleanup
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