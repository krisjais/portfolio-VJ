export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 md:px-20 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 reveal">
          <h2 className="text-sm font-bold text-indigo-500 uppercase tracking-[0.4em] mb-4">The Toolkit</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-slate-900">Design <span className="text-indigo-500">&</span> Development.</h3>
          <p className="mt-6 text-slate-600 max-w-2xl mx-auto leading-relaxed">I bridge the gap between complex design and functional code, ensuring every pixel has a purpose.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* UI/UX Design Card */}
          <div className="reveal bg-white p-10 rounded-[2.5rem] border-2 border-slate-200 hover:border-indigo-400 transition-all duration-300 group shadow-lg hover:shadow-xl hover:shadow-indigo-100">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-lg">
              <i className="fa-brands fa-figma text-3xl"></i>
            </div>
            <h4 className="text-xl font-bold mb-4 text-slate-900">UI/UX Design</h4>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">Crafting high-fidelity mockups, wireframes, and interactive prototypes with a focus on user flow.</p>
            <div className="flex flex-wrap gap-2">
              <span className="text-[10px] font-bold px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-full border border-indigo-200">Figma</span>
              <span className="text-[10px] font-bold px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-full border border-indigo-200">Prototyping</span>
              <span className="text-[10px] font-bold px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-full border border-indigo-200">Layouts</span>
            </div>
          </div>

          {/* Frontend Dev Card - Featured */}
          <div className="reveal bg-gradient-to-br from-indigo-500 to-purple-600 p-10 rounded-[2.5rem] border-2 border-indigo-600 transition-all duration-300 group shadow-xl hover:shadow-2xl hover:scale-105">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-code text-3xl"></i>
            </div>
            <h4 className="text-xl font-bold mb-4 text-white">Frontend Dev</h4>
            <p className="text-sm text-indigo-50 mb-6 leading-relaxed">Turning designs into responsive, interactive websites using semantic code and modern logic.</p>
            <div className="flex flex-wrap gap-2">
              <span className="text-[10px] font-bold px-3 py-1.5 bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/30">React</span>
              <span className="text-[10px] font-bold px-3 py-1.5 bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/30">Next.js</span>
              <span className="text-[10px] font-bold px-3 py-1.5 bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/30">Tailwind</span>
            </div>
          </div>

          {/* Backend Logic Card */}
          <div className="reveal bg-white p-10 rounded-[2.5rem] border-2 border-slate-200 hover:border-indigo-400 transition-all duration-300 group shadow-lg hover:shadow-xl hover:shadow-indigo-100">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-lg">
              <i className="fa-brands fa-node-js text-3xl"></i>
            </div>
            <h4 className="text-xl font-bold mb-4 text-slate-900">Backend Logic</h4>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">Building scalable APIs, database structures, and server-side logic for full-stack applications.</p>
            <div className="flex flex-wrap gap-2">
              <span className="text-[10px] font-bold px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-full border border-indigo-200">Node.js</span>
              <span className="text-[10px] font-bold px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-full border border-indigo-200">MongoDB</span>
              <span className="text-[10px] font-bold px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-full border border-indigo-200">APIs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
