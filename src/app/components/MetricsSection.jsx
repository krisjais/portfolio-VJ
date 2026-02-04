export default function MetricsSection() {
  return (
    <section id="skills" className="py-24 px-6 md:px-20 bg-slate-50 dark:bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="reveal">
            <h2 className="text-sm font-black text-indigo-500 uppercase tracking-[0.4em] mb-4">The Engine</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-slate-900 dark:text-white">
              Skills & <span className="italic text-indigo-500">Toolkit.</span>
            </h3>
          </div>
          <p className="text-slate-500 dark:text-slate-400 max-w-sm text-sm italic leading-relaxed">
            A specialized stack focused on high-fidelity frontend development and scalable backend logic.
          </p>
        </div>

        {/* Top Row: Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Concept Mastery */}
          <div className="reveal glass p-8 rounded-[2rem] border-slate-200 dark:border-slate-800 hover:border-indigo-500/30 transition-all group">
            <p className="text-[10px] font-black text-slate-400 mb-4 uppercase tracking-widest">Growth Velocity</p>
            <div className="flex items-end gap-2 mb-6">
              <span className="text-4xl font-black italic group-hover:text-indigo-500 transition-colors">180</span>
              <span className="text-indigo-500 text-xs font-bold mb-1 uppercase">Days Sprint</span>
            </div>
            <div className="space-y-4">
              <div className="space-y-1">
                <div className="flex justify-between text-[9px] font-black uppercase tracking-tighter">
                  <span>MERN Stack</span>
                  <span className="text-indigo-500">85%</span>
                </div>
                <div className="h-1 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-500 w-[85%]"></div>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-[9px] font-black uppercase tracking-tighter">
                  <span>Figma-to-Code</span>
                  <span className="text-indigo-500">100%</span>
                </div>
                <div className="h-1 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-500 w-[100%]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Stack */}
          <div className="reveal glass p-8 rounded-[2rem] border-slate-200 dark:border-slate-800 bg-indigo-600/5 md:col-span-2">
            <p className="text-[10px] font-black text-indigo-500 mb-6 uppercase tracking-widest">Core Technologies</p>
            <div className="flex flex-wrap gap-3">
              {[
                { name: 'React.js', icon: 'fa-react', color: 'text-sky-400' },
                { name: 'Next.js', icon: 'fa-n', color: 'text-white' },
                { name: 'Node.js', icon: 'fa-node-js', color: 'text-green-500' },
                { name: 'Express', icon: 'fa-server', color: 'text-slate-400' },
                { name: 'MongoDB', icon: 'fa-database', color: 'text-green-600' },
                { name: 'Tailwind', icon: 'fa-wind', color: 'text-teal-400' },
                { name: 'JavaScript', icon: 'fa-js', color: 'text-yellow-400' },
                { name: 'TypeScript', icon: 'fa-code', color: 'text-blue-500' }
              ].map((tech) => (
                <div key={tech.name} className="flex items-center gap-3 px-5 py-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:-translate-y-1 transition-all">
                  <i className={`fa-brands ${tech.icon} ${tech.color} text-xl`}></i>
                  <span className="text-xs font-black uppercase tracking-tighter">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row: Workflow Tools */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="reveal glass p-8 rounded-[2rem] border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div>
              <p className="text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Design Systems</p>
              <h4 className="text-xl font-black uppercase tracking-tighter">Figma</h4>
            </div>
            <div className="flex -space-x-3">
              <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center border-4 border-white dark:border-slate-950 shadow-xl">
                <i className="fa-brands fa-figma text-white"></i>
              </div>
              <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center border-4 border-white dark:border-slate-950 shadow-xl">
                <i className="fa-solid fa-palette text-white"></i>
              </div>
            </div>
          </div>

          <div className="reveal glass p-8 rounded-[2rem] border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div>
              <p className="text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Version Control</p>
              <h4 className="text-xl font-black uppercase tracking-tighter">Git & GitHub</h4>
            </div>
            <div className="flex -space-x-3">
              <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center border-4 border-white dark:border-slate-950 shadow-xl">
                <i className="fa-brands fa-github text-white"></i>
              </div>
              <div className="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center border-4 border-white dark:border-slate-950 shadow-xl">
                <i className="fa-brands fa-git-alt text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
