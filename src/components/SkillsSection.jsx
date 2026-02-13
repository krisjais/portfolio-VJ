import React from 'react';

const SkillCard = ({ name, icon, percentage, color, delay }) => {
  const proficiencyLevel = percentage >= 90 ? 'Expert' : percentage >= 80 ? 'Advanced' : percentage >= 70 ? 'Proficient' : 'Intermediate';
  const colorIntensity = percentage >= 90 ? 'bg-green-500' : percentage >= 80 ? 'bg-blue-500' : percentage >= 70 ? 'bg-indigo-500' : 'bg-amber-500';

  return (
    <div 
      className="reveal group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-all duration-500 shadow-md hover:shadow-xl hover:shadow-indigo-500/20"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Background Gradient Accent */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      <div className="p-6">
        {/* Header with Icon and Title */}
        <div className="flex items-start gap-4 mb-6">
          <div className={`flex-shrink-0 w-14 h-14 rounded-lg ${color} flex items-center justify-center shadow-lg`}>
            <i className={`${icon} text-xl text-white`}></i>
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{name}</h4>
            <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${proficiencyLevel === 'Expert' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' : proficiencyLevel === 'Advanced' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' : proficiencyLevel === 'Proficient' ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300' : 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300'}`}>
              {proficiencyLevel}
            </span>
          </div>
        </div>

        {/* Progress Bar Section */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Proficiency</span>
            <span className={`text-2xl font-black ${colorIntensity} bg-clip-text text-transparent`}>{percentage}%</span>
          </div>
          
          {/* Linear Progress Bar */}
          <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-3 overflow-hidden">
            <div 
              className={`h-full ${colorIntensity} rounded-full transition-all duration-1000 ease-out shadow-lg`}
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        {/* Footer Stats */}
        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
          <div className="flex justify-between items-center">
            <span className="text-xs text-slate-500 dark:text-slate-400">Experience Level</span>
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
              {percentage >= 90 ? '5+ Years' : percentage >= 80 ? '3-5 Years' : percentage >= 70 ? '1-3 Years' : '6-12 Months'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ProfessionalSkills() {
  const techStack = [
    { name: "UI/UX (Figma)", icon: "fa-brands fa-figma", percentage: 95, color: "bg-purple-500", delay: 100 },
    { name: "React / Next.js", icon: "fa-brands fa-react", percentage: 90, color: "bg-blue-400", delay: 200 },
    { name: "Node.js", icon: "fa-brands fa-node-js", percentage: 85, color: "bg-emerald-500", delay: 300 },
    { name: "Tailwind CSS", icon: "fa-solid fa-wind", percentage: 98, color: "bg-sky-400", delay: 400 },
    { name: "Python", icon: "fa-brands fa-python", percentage: 78, color: "bg-amber-400", delay: 500 },
    { name: "AI / ML", icon: "fa-solid fa-brain", percentage: 72, color: "bg-rose-500", delay: 600 },
  ];

  return (
    <section className="py-24 px-6 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-xs font-black text-indigo-500 uppercase tracking-[0.5em] mb-4">Core Competencies</h2>
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
            My <span className="text-indigo-500 italic font-light">Skills.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {techStack.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}