export default function LearningSection() {
  return (
    <section id="learning" className="py-24 px-6 md:px-20 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="reveal">
            <h2 className="text-sm font-black text-indigo-500 uppercase tracking-[0.4em] mb-4">The Next Frontier</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-8 italic">
              Currently <span className="text-indigo-500 text-outline">Pursuing.</span>
            </h3>
            <p className="text-slate-500 dark:text-slate-400 mb-10 leading-relaxed max-w-xl">
              I don&apos;t just stop at layouts. I am currently expanding my ecosystem to include intelligent data processing and high-performance server-side architectures.
            </p>
            
            <div className="space-y-4">
              {/* AI/ML */}
              <div className="p-6 rounded-3xl border border-slate-100 dark:border-slate-900 bg-slate-50/50 dark:bg-slate-900/20 group hover:border-indigo-500/30 transition-all">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-black uppercase tracking-tighter text-slate-800 dark:text-slate-200">AI & Machine Learning</h4>
                  <span className="text-[10px] font-bold text-purple-500 px-2 py-1 bg-purple-500/10 rounded">NEW FRONTIER</span>
                </div>
                <p className="text-sm text-slate-500 italic">Exploring data patterns and integrating intelligent models to create apps that think, not just react.</p>
              </div>

              {/* React & Next.js */}
              <div className="p-6 rounded-3xl border border-slate-100 dark:border-slate-900 bg-slate-50/50 dark:bg-slate-900/20 group hover:border-indigo-500/30 transition-all">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-black uppercase tracking-tighter text-slate-800 dark:text-slate-200">Next.js & React Mastery</h4>
                  <span className="text-[10px] font-bold text-sky-500 px-2 py-1 bg-sky-500/10 rounded">MASTERING</span>
                </div>
                <p className="text-sm text-slate-500 italic">Optimizing user experiences with Server Components, SSR, and seamless client-side state management.</p>
              </div>

              {/* Express.js */}
              <div className="p-6 rounded-3xl border border-slate-100 dark:border-slate-900 bg-slate-50/50 dark:bg-slate-900/20 group hover:border-indigo-500/30 transition-all">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-black uppercase tracking-tighter text-slate-800 dark:text-slate-200">Express.js & Node</h4>
                  <span className="text-[10px] font-bold text-green-500 px-2 py-1 bg-green-500/10 rounded">DEEP DIVE</span>
                </div>
                <p className="text-sm text-slate-500 italic">Building the backbone. Crafting secure APIs and managing databases to power complex full-stack workflows.</p>
              </div>
            </div>
          </div>

          {/* Visual Learning Stack */}
          <div className="reveal relative flex justify-center">
            <div className="relative w-full max-w-md aspect-square bg-indigo-600/5 rounded-[4rem] border-2 border-dashed border-indigo-500/20 flex items-center justify-center p-12">
              
              {/* Floating Tech Icons */}
              <div className="grid grid-cols-2 gap-6 w-full">
                <div className="aspect-square glass rounded-3xl flex flex-col items-center justify-center border-indigo-500/20 shadow-2xl animate-bounce" style={{ animationDuration: '3s' }}>
                  <i className="fa-solid fa-brain text-4xl text-purple-500 mb-2"></i>
                  <span className="text-[9px] font-black tracking-widest opacity-60 uppercase">AI / ML</span>
                </div>
                <div className="aspect-square glass rounded-3xl flex flex-col items-center justify-center border-indigo-500/20 shadow-2xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                  <i className="fa-brands fa-react text-4xl text-sky-400 mb-2"></i>
                  <span className="text-[9px] font-black tracking-widest opacity-60 uppercase">React / Next</span>
                </div>
                <div className="aspect-square glass rounded-3xl flex flex-col items-center justify-center border-indigo-500/20 shadow-2xl animate-bounce" style={{ animationDuration: '5s', animationDelay: '0.5s' }}>
                  <i className="fa-brands fa-node-js text-4xl text-green-500 mb-2"></i>
                  <span className="text-[9px] font-black tracking-widest opacity-60 uppercase">Express</span>
                </div>
                <div className="aspect-square glass rounded-3xl flex flex-col items-center justify-center border-indigo-500/20 shadow-2xl animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1.5s' }}>
                  <i className="fa-solid fa-database text-4xl text-indigo-400 mb-2"></i>
                  <span className="text-[9px] font-black tracking-widest opacity-60 uppercase">Data Structures</span>
                </div>
              </div>

              {/* Center Badge */}
              <div className="absolute inset-0 m-auto w-24 h-24 bg-slate-900 dark:bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-indigo-500">
                <span className="text-white dark:text-slate-900 font-black text-xl italic">GROWTH</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
