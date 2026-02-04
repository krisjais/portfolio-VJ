export default function ProjectGallery() {
  const projects = [
    {
      title: "Wonderlust Travels",
      tech: "MERN Stack • Leaflet",
      image: "/Screenshot (230).png", 
    },
    {
      title: "Ecommerce Platform",
      tech: "React • Tailwind • Stripe",
      image: "/Screenshot (231).png",
    },
    {
      title: "Apple Clone",
      tech: "Next.js • 3D",
      image: "/Screenshot (232).png",
    },
    {
      title: "Snadeal clone",
      tech: "Figma • OpenAI",
      image: "/1e34efcc-5eef-4784-8b8a-d808b702b36c.jpg",
    },
    {
      title: "GOOZOOP",
      tech: "FIGMA",
      image: "/dbf3d8ca-26b9-4c1f-a4b9-8af99e0df803.jpg",
    },
    {
      title: "Social Dashboard",
      tech: "Open AI • Tailwind • React",
      image: "/Screenshot (234).png",
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-xs font-black text-indigo-500 uppercase tracking-[0.5em] mb-4">Selected Works</h2>
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
            Project <span className="text-indigo-500 italic font-light">Showcase.</span>
          </h3>
        </div>

        {/* --- SYMMETRICAL COLOR-TRANSITION GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((proj, index) => (
            <div key={index} className="reveal group cursor-pointer">
              
              {/* Image Container */}
              <div className="relative aspect-video rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 shadow-lg transition-all duration-500">
                
                {/* Project Image: Grayscale by default, color on group hover */}
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                />

              </div>

              {/* Text Content */}
              <div className="mt-6 px-2">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-xl font-black uppercase tracking-tighter dark:text-white group-hover:text-indigo-500 transition-colors">
                    {proj.title}
                  </h4>
                  <span className="text-[10px] font-mono text-slate-400">0{index + 1}</span>
                </div>
                <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                  {proj.tech}
                </p>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}