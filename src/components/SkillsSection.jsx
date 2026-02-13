export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 md:px-20 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 reveal">
          <h2 className="text-sm font-bold text-indigo-500 uppercase tracking-[0.4em] mb-4">The Toolkit</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white">
            Design <span className="text-indigo-500">&</span> Development.
          </h3>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto leading-relaxed">
            I bridge the gap between complex design and functional code, ensuring every pixel has a purpose.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* UI/UX Design Card */}
          <div className="reveal bg-slate-900/50 backdrop-blur-sm p-10 rounded-3xl border border-slate-800 hover:border-purple-500/50 transition-all duration-300 group">
            <div className="w-16 h-16 bg-purple-500/10 text-purple-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <i className="fa-brands fa-figma text-3xl"></i>
            </div>
            <h4 className="text-xl font-bold mb-4 text-white">UI/UX Design</h4>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Crafting high-fidelity mockups, wireframes, and interactive prototypes with a focus on user flow.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-semibold px-3 py-1.5 bg-slate-800 text-slate-300 rounded-lg border border-slate-700">Figma</span>
              <span className="text-xs font-semibold px-3 py-1.5 bg-slate-800 text-slate-300 rounded-lg border border-slate-700">Prototyping</span>
              <span className="text-xs font-semibold px-3 py-1.5 bg-slate-800 text-slate-300 rounded-lg border border-slate-700">Layouts</span>
            </div>
          </div>

          {/* Frontend Dev Card */}
          <div className="reveal bg-slate-900/50 backdrop-blur-sm p-10 rounded-3xl border border-slate-800 hover:border-blue-500/50 transition-all duration-300 group">
            <div className="w-16 h-16 bg-blue-500/10 text-blue-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-code text-3xl"></i>
            </div>
            <h4 className="text-xl font-bold mb-4 text-white">Frontend Dev</h4>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Turning designs into responsive, interactive websites using semantic code and modern logic.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-semibold px-3 py-1.5 bg-indigo-500/10 text-indigo-400 rounded-lg border border-indigo-500/20">HTML5</span>
              <span className="text-xs font-semibold px-3 py-1.5 bg-indigo-500/10 text-indigo-400 rounded-lg border border-indigo-500/20">CSS3 / SCSS</span>
              <span className="text-xs font-semibold px-3 py-1.5 bg-indigo-500/10 text-indigo-400 rounded-lg border border-indigo-500/20">JavaScript</span>
            </div>
          </div>

          {/* Backend Basics Card */}
          <div className="reveal bg-slate-900/50 backdrop-blur-sm p-10 rounded-3xl border border-slate-800 hover:border-green-500/50 transition-all duration-300 group">
            <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-database text-3xl"></i>
            </div>
            <h4 className="text-xl font-bold mb-4 text-white">Backend Basics</h4>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Exploring server-side logic and database structures to build dynamic and powerful web apps.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-semibold px-3 py-1.5 bg-slate-800 text-slate-300 rounded-lg border border-slate-700">Node.js</span>
              <span className="text-xs font-semibold px-3 py-1.5 bg-slate-800 text-slate-300 rounded-lg border border-slate-700">Express</span>
              <span className="text-xs font-semibold px-3 py-1.5 bg-slate-800 text-slate-300 rounded-lg border border-slate-700">API Logic</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
