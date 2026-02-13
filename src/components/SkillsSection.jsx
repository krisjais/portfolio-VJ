export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 md:px-20 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 reveal">
          <h2 className="text-sm font-bold text-indigo-500 uppercase tracking-[0.4em] mb-4">The Toolkit</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold tracking-tighter">Design <span className="text-indigo-500">&</span> Development.</h3>
          <p className="mt-6 text-slate-500 max-w-2xl mx-auto leading-relaxed">I bridge the gap between complex design and functional code, ensuring every pixel has a purpose.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="reveal glass p-10 rounded-[2.5rem] border border-slate-200 hover:border-indigo-500/40 transition-all group">
            <div className="w-14 h-14 bg-purple-500/10 text-purple-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <i className="fa-brands fa-figma text-3xl"></i>
            </div>
            <h4 className="text-xl font-bold mb-4">UI/UX Design</h4>
            <p className="text-sm text-slate-500 mb-6 leading-relaxed">Crafting high-fidelity mockups, wireframes, and interactive prototypes with a focus on user flow.</p>
            <div className="flex flex-wrap gap-2">
              <span className="text-[10px] font-bold px-3 py-1 bg-slate-100 rounded-full">Figma</span>
              <span className="text-[10px] font-bold px-3 py-1 bg-slate-100 rounded-full">Prototyping</span>
              <span className="text-[10px] font-bold px-3 py-1 bg-slate-100 rounded-full">Layouts</span>
            </div>
          </div>

          <div className="reveal glass p-10 rounded-[2.5rem] border-indigo-500/20 bg-indigo-500/5 hover:border-indigo-500/40 transition-all group">
            <div className="w-14 h-14 bg-indigo-500/10 text-indigo-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-code text-3xl"></i>
            </div>
            <h4 className="text-xl font-bold mb-4">Frontend Dev</h4>
            <p className="text-sm text-slate-500 mb-6 leading-relaxed">Turning designs into responsive, interactive websites using semantic code and modern logic.</p>
            <div className="flex flex-wrap gap-2">
              <span className="text-[10px] font-bold px-3 py-1 bg-slate-100 rounded-full">React</span>
              <span className="text-[10px] font-bold px-3 py-1 bg-slate-100 rounded-full">Next.js</span>
              <span className="text-[10px] font-bold px-3 py-1 bg-slate-100 rounded-full">Tailwind</span>
            </div>
          </div>

          <div className="reveal glass p-10 rounded-[2.5rem] border border-slate-200 hover:border-indigo-500/40 transition-all group">
            <div className="w-14 h-14 bg-green-500/10 text-green-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <i className="fa-brands fa-node-js text-3xl"></i>
            </div>
            <h4 className="text-xl font-bold mb-4">Backend Logic</h4>
            <p className="text-sm text-slate-500 mb-6 leading-relaxed">Building scalable APIs, database structures, and server-side logic for full-stack applications.</p>
            <div className="flex flex-wrap gap-2">
              <span className="text-[10px] font-bold px-3 py-1 bg-slate-100 rounded-full">Node.js</span>
              <span className="text-[10px] font-bold px-3 py-1 bg-slate-100 rounded-full">MongoDB</span>
              <span className="text-[10px] font-bold px-3 py-1 bg-slate-100 rounded-full">APIs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
