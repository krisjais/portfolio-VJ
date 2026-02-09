'use client'

import { useEffect } from 'react'
import Image from 'next/image'

export default function ImageModal({ isOpen, onClose, item, type }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen || !item) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fadeIn">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all hover:rotate-90 duration-300"
        aria-label="Close modal"
      >
        <i className="fa-solid fa-times text-2xl"></i>
      </button>

      {/* Modal Content */}
      <div className="max-w-6xl w-full max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl animate-slideUp">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image Side */}
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[500px] bg-slate-100">
            <Image
              src={item.img}
              alt={item.title}
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          {/* Details Side */}
          <div className="p-8 md:p-12 flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  {type === 'project' && item.category && (
                    <span className="px-3 py-1 bg-indigo-500/10 text-indigo-600 text-xs font-black uppercase tracking-wider rounded-full border border-indigo-500/20">
                      {item.category}
                    </span>
                  )}
                  {type === 'certificate' && item.tag && (
                    <span className="px-3 py-1 bg-indigo-500/10 text-indigo-600 text-xs font-black uppercase tracking-wider rounded-full border border-indigo-500/20">
                      {item.tag}
                    </span>
                  )}
                  {item.status && (
                    <span className="text-xs font-bold text-green-600 uppercase tracking-widest">
                      {item.status}
                    </span>
                  )}
                </div>
                <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-4">
                  {item.title}
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Technologies/Tools */}
              {item.technologies && item.technologies.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-black uppercase tracking-wider text-slate-400 mb-3">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-slate-100 text-slate-700 text-sm font-bold rounded-lg hover:bg-indigo-500 hover:text-white transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Additional Details */}
              {item.details && (
                <div className="mb-6">
                  <h3 className="text-sm font-black uppercase tracking-wider text-slate-400 mb-3">
                    Details
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.details}
                  </p>
                </div>
              )}

              {/* Date or Duration */}
              {item.date && (
                <div className="mb-6">
                  <h3 className="text-sm font-black uppercase tracking-wider text-slate-400 mb-2">
                    {type === 'project' ? 'Completed' : 'Issued'}
                  </h3>
                  <p className="text-slate-600 font-medium">{item.date}</p>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-8">
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 bg-indigo-600 text-white font-black text-sm uppercase tracking-wider rounded-full hover:bg-indigo-700 transition-all hover:scale-105 text-center"
                >
                  <i className="fa-solid fa-external-link mr-2"></i>
                  View {type === 'project' ? 'Live' : 'Certificate'}
                </a>
              )}
              {item.github && (
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-slate-900 text-white font-black text-sm uppercase tracking-wider rounded-full hover:bg-slate-800 transition-all hover:scale-105 text-center"
                >
                  <i className="fa-brands fa-github mr-2"></i>
                  Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}