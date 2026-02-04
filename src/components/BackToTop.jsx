'use client'

import { useEffect } from 'react'

export default function BackToTop() {
  useEffect(() => {
    const backToTopBtn = document.getElementById('backToTop')

    const handleScroll = () => {
      if (window.scrollY > 300) {
        // Show button
        backToTopBtn?.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none')
        backToTopBtn?.classList.add('opacity-100', 'translate-y-0', 'pointer-events-all')
      } else {
        // Hide button
        backToTopBtn?.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none')
        backToTopBtn?.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-all')
      }
    }

    const handleClick = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    window.addEventListener('scroll', handleScroll)
    backToTopBtn?.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      backToTopBtn?.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <button 
      id="backToTop" 
      className="fixed bottom-8 right-8 z-[60] w-12 h-12 bg-indigo-600 text-white rounded-2xl shadow-2xl flex items-center justify-center opacity-0 translate-y-10 pointer-events-none transition-all duration-500 hover:bg-indigo-700 hover:-translate-y-1 active:scale-90 group"
    >
      <i className="fa-solid fa-arrow-up text-lg group-hover:animate-bounce"></i>
    </button>
  )
}
