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