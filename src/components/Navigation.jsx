'use client'

import { useState } from 'react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <>
      <nav className="fixed top-0 w-full z-50 glass border-b dark:border-slate-800 py-4 px-6 md:px-20 flex justify-between items-center backdrop-blur-md">
        
        {/* Brand / Home Link */}
        <a href="#home" className="flex items-center gap-3 group cursor-pointer">
          <div className="text-2xl font-black tracking-tighter text-indigo-600 dark:text-indigo-400 uppercase">
           VJ<span className="text-slate-400 group-hover:text-indigo-500 transition-colors">.</span>
          </div>
          
          {/* Availability Badge */}
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-green-500/10 rounded-full border border-green-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[9px] font-black text-green-600 dark:text-green-400 uppercase tracking-tighter">Available</span>
          </div>
        </a>

        {/* Navigation Links */}
        <div className="flex items-center gap-10">
          <div className="hidden lg:flex gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            
            <a href="#home" className="hover:text-indigo-500 dark:hover:text-white transition-all relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300"></span>
            </a>

            <a href="#skills" className="hover:text-indigo-500 dark:hover:text-white transition-all relative group">
              Toolkit
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300"></span>
            </a>

            <a href="#learning" className="hover:text-indigo-500 dark:hover:text-white transition-all relative group">
              Pursuing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300"></span>
            </a>

            <a href="#achievements" className="hover:text-indigo-500 dark:hover:text-white transition-all relative group">
              Credentials
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300"></span>
            </a>

            <a href="#contact" className="hover:text-indigo-500 dark:hover:text-white transition-all relative group text-indigo-500 dark:text-indigo-400">
              Connect
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          {/* Menu Controls */}
          <div className="flex items-center gap-4">
            {/* Mobile Menu Trigger */}
            <button 
              onClick={toggleMobileMenu}
              className="lg:hidden text-slate-500 p-2 hover:text-indigo-500 transition-colors"
              aria-label="Toggle Mobile Menu"
            >
              <i className={`fa-solid ${mobileMenuOpen ? 'fa-times' : 'fa-bars-staggered'} text-xl`}></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={closeMobileMenu}
        ></div>
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-[73px] right-0 w-64 h-[calc(100vh-73px)] bg-white dark:bg-slate-950 border-l dark:border-slate-800 z-40 transform transition-transform duration-300 ease-in-out lg:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col p-6 gap-6">
          <a 
            href="#home" 
            onClick={closeMobileMenu}
            className="text-sm font-black uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-white transition-all py-3 border-b dark:border-slate-800"
          >
            Home
          </a>

          <a 
            href="#skills" 
            onClick={closeMobileMenu}
            className="text-sm font-black uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-white transition-all py-3 border-b dark:border-slate-800"
          >
            Toolkit
          </a>

          <a 
            href="#learning" 
            onClick={closeMobileMenu}
            className="text-sm font-black uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-white transition-all py-3 border-b dark:border-slate-800"
          >
            Pursuing
          </a>

          <a 
            href="#achievements" 
            onClick={closeMobileMenu}
            className="text-sm font-black uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-white transition-all py-3 border-b dark:border-slate-800"
          >
            Credentials
          </a>

          <a 
            href="#contact" 
            onClick={closeMobileMenu}
            className="text-sm font-black uppercase tracking-[0.3em] text-indigo-500 dark:text-indigo-400 hover:text-indigo-600 dark:hover:text-white transition-all py-3 border-b dark:border-slate-800"
          >
            Connect
          </a>
        </div>
      </div>
    </>
  );
}
