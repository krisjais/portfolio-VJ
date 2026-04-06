'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function AchievementGallery() {
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (achievement) => {
    setSelected(achievement);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelected(null);
  };

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") closeModal(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const achievements = [
    {
      title: "AI For All",
      status: "Verified",
      description: "Foundational understanding of Artificial Intelligence and its impact on the digital economy.",
      img: "/My_Certificate_page-0001.jpg",
      tag: "Awareness"
    },
    {
      title: "AI Aware",
      status: "Certified",
      description: "Deep dive into AI ethics, data privacy, and the building blocks of machine learning.",
      img: "/Vishesh Jaiswar_AI_AWARE_CERTIFICATE.png",
      tag: "Literacy"
    },
    {
      title: "AI Appreciate",
      status: "Advanced",
      description: "Practical appreciation of AI solutions and their integration into modern web workflows.",
      img: "/Vishesh Jaiswar_AI_APPRECIATE_CERTIFICATE.png",
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
            <div key={index} className="reveal group cursor-pointer" onClick={() => openModal(item)}>
              {/* Photo Frame */}
              <div className="relative aspect-[4/3] mb-6 rounded-3xl overflow-hidden bg-slate-900 border border-white/10 group-hover:border-indigo-500/50 transition-all duration-500 shadow-2xl">
                <div className="absolute inset-0 bg-indigo-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center backdrop-blur-[2px]">
                   <i className="fa-solid fa-magnifying-glass-plus text-3xl text-white scale-50 group-hover:scale-100 transition-transform duration-300"></i>
                </div>
                <Image 
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                  className="object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-110 transition-all duration-700"
                  unoptimized
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
                <h4 className="text-2xl font-black tracking-tighter uppercase mb-2 group-hover:text-indigo-400 transition-colors duration-500">
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

      {/* Modal - Moved outside the z-10 container to avoid overlap with navbar */}
      {isOpen && selected && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl animate-fadeIn p-4 md:p-8" onClick={closeModal}>
          {/* Direct Screen-Level Close Button for Maximum Accessibility */}
          <button 
            onClick={closeModal} 
            className="fixed top-6 right-6 md:top-10 md:right-10 z-[110] bg-white text-slate-900 rounded-full w-12 h-12 flex items-center justify-center transition-all hover:rotate-90 hover:scale-110 duration-300 shadow-2xl"
            aria-label="Close modal"
          >
            <i className="fa-solid fa-times text-xl"></i>
          </button>

          <div className="bg-white dark:bg-slate-900 rounded-[2rem] max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scaleUp border border-white/10" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
            <div className="flex flex-col md:flex-row h-full">
              
              {/* Image Section (left/top) */}
              <div className="w-full md:w-2/3 bg-slate-100 dark:bg-slate-950 flex items-center justify-center p-6 md:p-10">
                <div className="relative w-full aspect-[1.414/1] shadow-2xl rounded-lg overflow-hidden border border-white/5">
                  <Image 
                    src={selected.img} 
                    alt={selected.title} 
                    fill
                    className="object-contain" 
                    unoptimized
                  />
                </div>
              </div>

              {/* Details Section (right/bottom) */}
              <div className="w-full md:w-1/3 p-8 md:p-12 flex flex-col justify-between bg-white dark:bg-slate-900">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 bg-indigo-500/10 text-indigo-500 text-[10px] font-black uppercase tracking-tighter rounded-full border border-indigo-500/20">
                      {selected.tag}
                    </span>
                    <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest">{selected.status}</span>
                  </div>
                  
                  <h3 className="text-3xl font-black tracking-tighter uppercase text-slate-900 dark:text-white mb-6 leading-tight">{selected.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm mb-8 font-light italic">
                    {selected.description}
                  </p>
                </div>

                <button 
                  onClick={closeModal}
                  className="w-full py-4 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-black uppercase tracking-widest rounded-2xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all active:scale-95"
                >
                  Close Certificate
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}