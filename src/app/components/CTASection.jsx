export default function CTASection() {
  return (
    <section className="py-24 px-6 text-center">
      <div className="reveal max-w-3xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">Let&apos;s build something <span className="text-indigo-600">Unforgettable.</span></h2>
        <p className="text-xl text-slate-500 mb-12 font-light">Stop hiring &quot;developers.&quot; Start hiring partners who care about your product as much as you do.</p>
        <a href="mailto:your@email.com" className="group relative px-12 py-6 bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-black rounded-full transition-all hover:scale-105 active:scale-95 overflow-hidden">
          <span className="relative z-10">WORK WITH ME</span>
          <div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </a>
      </div>
    </section>
  )
}
