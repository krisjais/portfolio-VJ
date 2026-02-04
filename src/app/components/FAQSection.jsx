export default function FAQSection() {
  return (
    <section className="py-24 px-6 md:px-20 bg-slate-50 dark:bg-slate-900/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="reveal text-center text-4xl font-extrabold mb-16 tracking-tighter">The <span className="text-indigo-500 italic">Fast-Track</span> FAQ.</h2>
        
        <div className="space-y-6">
          <div className="reveal glass p-8 rounded-3xl border-slate-200 dark:border-slate-800 hover:border-indigo-500/30 transition-all">
            <h4 className="font-black mb-3 text-indigo-500 uppercase tracking-widest text-xs text-indigo-600">01. How can you have 70 projects in 6 months?</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed italic">
              &quot;I am obsessed with the &apos;Build-to-Learn&apos; methodology. Instead of just watching tutorials, I spent the last 180 days building daily. From static clones to interactive JS apps, volume has been my greatest teacher.&quot;
            </p>
          </div>

          <div className="reveal glass p-8 rounded-3xl border-slate-200 dark:border-slate-800 hover:border-indigo-500/30 transition-all">
            <h4 className="font-black mb-3 text-indigo-500 uppercase tracking-widest text-xs text-indigo-600">02. What is your &apos;Actual&apos; expertise?</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed italic">
              &quot;My core strength is **Figma-to-Live-Code**. I specialize in pixel-perfect HTML, CSS, and modern JavaScript. I have foundational knowledge of Node/Express and I&apos;m currently scaling my backend skills every single day.&quot;
            </p>
          </div>

          <div className="reveal glass p-8 rounded-3xl border-slate-200 dark:border-slate-800 hover:border-indigo-500/30 transition-all">
            <h4 className="font-black mb-3 text-indigo-500 uppercase tracking-widest text-xs text-indigo-600">03. Why hire a high-speed learner over a veteran?</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed italic">
              &quot;Veterans have habits; I have hunger. I don&apos;t have legacy baggage—I am learning the most modern standards (Next.js, Tailwind, ES6+) from day one. I am here to out-work and out-learn the competition.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
