export default function AchievementGallery() {
  const achievements = [
    {
      title: "AI For All",
      status: "Verified",
      description: "Foundational understanding of Artificial Intelligence and its impact on the digital economy.",
      img: "/My_Certificate_page-0001.jpg", // Replace with your actual certificate image path
      tag: "Awareness"
    },
    {
      title: "AI Aware",
      status: "Certified",
      description: "Deep dive into AI ethics, data privacy, and the building blocks of machine learning.",
      img: "/Vishesh Jaiswar_AI_Aware_CERTIFICATE.png", // Replace with your actual badge image path
      tag: "Literacy"
    },
    {
      title: "AI Appreciate",
      status: "Advanced",
      description: "Practical appreciation of AI solutions and their integration into modern web workflows.",
      img: "/Vishesh Jaiswar_AI_Appreciate_CERTIFICATE.png", // Replace with your actual badge image path
      tag: "Mastery"
    }
  ];

  return (
    <section id="achievements" className="py-32 px-6 md:px-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <h2 className="text-sm font-black tracking-[0.4em] text-indigo-500 uppercase mb-4">Official Recognition</h2>
          <h3 className="text-4xl md:text-6xl font-extrabold tracking-tighter">
            AI <span className="text-indigo-500 italic font-light text-5xl md:text-7xl">Initiatives.</span>
          </h3>
        </div>

        {/* Certificate Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {achievements.map((item, index) => (
            <div key={index} className="reveal group">
              {/* Photo Frame */}
              <div className="relative aspect-[4/3] mb-6 rounded-3xl overflow-hidden bg-slate-900 border border-white/10 group-hover:border-indigo-500/50 transition-all duration-500 shadow-2xl">
                <div className="absolute inset-0 bg-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                   <i className="fa-solid fa-magnifying-glass-plus text-3xl text-white"></i>
                </div>
                {/* Replace src with your actual image path */}
                <img 
                  src={item.img}
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
              </div>

              {/* Text Content */}
              <div className="px-2">
                <div className="flex items-center gap-3 mb-3">
                   <span className="px-3 py-1 bg-indigo-500/10 text-indigo-500 text-[10px] font-black uppercase tracking-tighter rounded-full border border-indigo-500/20">
                     {item.tag}
                   </span>
                   <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest">{item.status}</span>
                </div>
                <h4 className="text-2xl font-black tracking-tighter uppercase mb-2 group-hover:text-indigo-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed font-light italic">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-24 p-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent">
           <div className="bg-slate-950 py-8 text-center">
              <p className="text-xs font-mono text-slate-500 uppercase tracking-[0.5em]">
                Intel Digital Readiness & Govt. of India Recognized
              </p>
           </div>
        </div>
      </div>
    </section>
  );
}