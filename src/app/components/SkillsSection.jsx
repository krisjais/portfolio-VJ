export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 md:px-20 bg-white dark:bg-slate-900/30 border-y dark:border-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 reveal">
          <h2 className="text-sm font-bold text-indigo-500 uppercase tracking-[0.4em] mb-4">The Toolkit</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold tracking-tighter">Design <span className="text-indigo-500">&</span> Development.</h3>
          <p className="mt-6 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">I bridge the gap between complex design and functional code, ensuring every pixel has a purpose.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="reveal glass p-10 rounded-[2.5rem] border-slate-200 dark:border-slate-800 hover:border-indigo-500/40 transition-all group">
            <div className="w-14 h-14 bg-purple-500/10 text-purple-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <i className="fa-brands fa-figma text-3xl"></i>
            </div>
            <h4 className="text-xl font-bold mb-4">UI/UX Design</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">Crafting high-fidelity mockups, wireframes, and interactive prototypes with a focus on user flow.</p>
            <div className="flex flex-wrap gap-2">
              <span className="text-[10px] font-bold px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full">Figma</span>
              <span className="text-[10px] font-bold px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full">Prototyping</span>
              <span className="text-[10px] font-bold px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full">Layouts</span>
            </div>
          </div>

          <div className="reveal glass p-10 rounded-[2.5rem] border-indigo-500/20 bg-indigo-500/5 hover:border-indigo-500/40 transition-all group">
            <div className="w-14 h-14 bg-indigo-500/10 text-indigo-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-code text-3xl"></i>
            </div>
            <h4 className="text-xl font-bold mb-4">Frontend Dev</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">Turning designs into responsive, interactive websites using semantic code and modern logic.</p>
            <div className="flex flex-wrap gap-2">
              <span className="text-[10px] font-bold px-3 py-1 bg-indigo-500/20 text-indigo-500 rounded-full">HTML5</span>
              <span className="text-[10px] font-bold px-3 py-1 bg-indigo-500/20 text-indigo-500 rounded-full">CSS3 / SCSS</span>
              <span className="text-[10px] font-bold px-3 py-1 bg-indigo-500/20 text-indigo-500 rounded-full">JavaScript</span>
            </div>
          </div>

          <div className="reveal glass p-10 rounded-[2.5rem] border-slate-200 dark:border-slate-800 hover:border-indigo-500/40 transition-all group">
            <div className="w-14 h-14 bg-green-500/10 text-green-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-database text-3xl"></i>
            </div>
            <h4 className="text-xl font-bold mb-4">Backend Basics</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">Exploring server-side logic and database structures to build more dynamic and powerful web apps.</p>
            <div className="flex flex-wrap gap-2">
              <span className="text-[10px] font-bold px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full">Node.js</span>
              <span className="text-[10px] font-bold px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full">Express</span>
              <span className="text-[10px] font-bold px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full">API Logic</span>
            </div>
          </div>
        </div>

        <div className="mt-20 max-w-3xl mx-auto space-y-8 reveal">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-xs font-black uppercase tracking-widest">Pixel Perfection (CSS)</span>
              <span className="text-xs font-bold text-indigo-500">98%</span>
            </div>
            <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-indigo-500 rounded-full w-[98%] animate-pulse"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-xs font-black uppercase tracking-widest">Visual Design (Figma)</span>
              <span className="text-xs font-bold text-indigo-500">90%</span>
            </div>
            <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-indigo-500 rounded-full w-[90%] opacity-80"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-xs font-black uppercase tracking-widest">Logic & Interactivity (JS)</span>
              <span className="text-xs font-bold text-indigo-500">85%</span>
            </div>
            <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-indigo-500 rounded-full w-[85%] opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
