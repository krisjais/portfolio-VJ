export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 md:px-20 pt-32 pb-20 relative overflow-hidden bg-white dark:bg-slate-950">
      
      {/* --- THE BEAUTIFUL BACKGROUND ORBITS --- */}
      <div className="absolute right-[-10%] top-[-10%] w-[1000px] h-[1000px] pointer-events-none">
        {/* Glowing Core */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px] animate-pulse"></div>
        
        {/* Outer Ring 1 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-slate-200 dark:border-white/5 rounded-full animate-[spin_30s_linear_infinite]">
            <div className="absolute top-0 left-1/2 w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.8)]"></div>
        </div>

        {/* Outer Ring 2 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-slate-200 dark:border-white/10 rounded-full animate-[spin_20s_linear_infinite_reverse]">
            <div className="absolute bottom-0 right-1/4 w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.8)]"></div>
        </div>

        {/* Outer Ring 3 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-slate-200 dark:border-white/20 rounded-full animate-[spin_15s_linear_infinite]">
            <div className="absolute top-1/4 left-0 w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
        </div>
      </div>

      {/* --- CONTENT AREA --- */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center relative z-10">
        
        <div className="w-full lg:w-3/5 text-center lg:text-left">
          {/* Status Badge */}
          <div className="reveal active inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 dark:bg-white/5 text-white dark:text-slate-300 text-[10px] font-black tracking-[0.3em] uppercase mb-8 border border-white/10 backdrop-blur-md">
            <span className="flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Available for New Projects
          </div>

          <h1 className="reveal active text-7xl md:text-[120px] font-black tracking-tighter leading-[0.8] mb-8 uppercase text-slate-900 dark:text-white">
            Vishesh <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 italic font-light">Jaiswar.</span>
          </h1>

          <p className="reveal active text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-12">
            A developer obsessed with the bridge between <span className="text-slate-900 dark:text-white font-bold">Figma & Code</span>. 
            I transform complex designs into high-performance, pixel-perfect web applications.
          </p>

          <div className="reveal active flex flex-wrap justify-center lg:justify-start gap-6 items-center">
            <a href="#projects" className="group relative px-12 py-6 bg-indigo-600 text-white font-black text-xs tracking-[0.2em] rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-indigo-500/20 uppercase">
              <span className="relative z-10">View Portfolio</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            
            <div className="flex gap-8 px-6 py-4 rounded-full border border-slate-200 dark:border-white/5 backdrop-blur-sm">
              <a href="https://github.com/krisjais" target="_blank" className="text-slate-400 hover:text-indigo-500 transition-colors"><i className="fa-brands fa-github text-2xl"></i></a>
              <a href="#" className="text-slate-400 hover:text-indigo-500 transition-colors"><i className="fa-brands fa-linkedin text-2xl"></i></a>
              <a href="#" className="text-slate-400 hover:text-indigo-500 transition-colors"><i className="fa-brands fa-figma text-2xl"></i></a>
            </div>
          </div>
        </div>

        {/* --- FLOATING TECH STACK (Right Side) --- */}
        <div className="hidden lg:flex w-2/5 justify-center relative h-[500px]">
           <div className="relative w-full h-full">
              {/* Floating "Planets" with Tech Names */}
              <div className="absolute top-10 left-10 animate-bounce transition-all duration-1000 p-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/10 rounded-2xl shadow-2xl">
                 <span className="text-[10px] font-black tracking-widest uppercase">React.js</span>
              </div>
              <div className="absolute bottom-20 right-0 animate-bounce [animation-delay:0.5s] p-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/10 rounded-2xl shadow-2xl">
                 <span className="text-[10px] font-black tracking-widest uppercase text-indigo-500">Node.js</span>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/10 rounded-3xl shadow-2xl">
                 <span className="text-xs font-black tracking-[0.4em] uppercase">MERN</span>
              </div>
              <div className="absolute bottom-10 left-20 animate-bounce [animation-delay:0.2s] p-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/10 rounded-2xl shadow-2xl">
                 <span className="text-[10px] font-black tracking-widest uppercase">Tailwind</span>
              </div>
           </div>
        </div>

      </div>
    </section>
  )
}