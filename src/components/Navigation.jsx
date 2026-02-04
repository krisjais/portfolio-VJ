export default function Navigation() {
  return (
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

        {/* Theme & Menu Controls */}
        <div className="flex items-center gap-4 border-l dark:border-slate-800 pl-6">
          <button 
            id="theme-toggle" 
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900/50 text-indigo-500 border border-transparent hover:border-indigo-500/20 transition-all active:scale-90"
            aria-label="Toggle Theme"
          >
            <i id="theme-icon" className="fa-solid fa-moon"></i>
          </button>
          
          {/* Mobile Menu Trigger */}
          <button className="lg:hidden text-slate-500 p-2 hover:text-indigo-500 transition-colors">
            <i className="fa-solid fa-bars-staggered text-xl"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}
