import React, { useState } from 'react';
import { AboutContent } from '../types';
import { User, GraduationCap, Briefcase, Cpu, Code2, MapPin, Globe2 } from 'lucide-react';

interface AboutProps {
  data: AboutContent;
}

const About: React.FC<AboutProps> = ({ data }) => {
  const [activeTab, setActiveTab] = useState<'basic' | 'education' | 'experience' | 'skills'>('basic');

  const tabs = [
    { id: 'basic', label: data.basic.title, icon: User },
    { id: 'experience', label: data.experience.title, icon: Briefcase },
    { id: 'education', label: data.education.title, icon: GraduationCap },
    { id: 'skills', label: data.skills.title, icon: Cpu },
  ];

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-orange-400">
              {data.title}
            </span>
          </h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Tabs Navigation */}
          <div className="md:w-64 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-4 md:pb-0">
            {tabs.map((tab) => {
               const Icon = tab.icon;
               const isActive = activeTab === tab.id;
               return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 whitespace-nowrap ${
                    isActive 
                      ? 'bg-purple-500/10 border border-purple-500/30 text-purple-300' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon size={18} />
                  <span>{tab.label}</span>
                </button>
               )
            })}
          </div>

          {/* Content Area */}
          <div className="flex-1 min-h-[400px]">
            <div className="glass-card rounded-2xl p-8 animate-fadeIn">
              
              {/* Basic Info */}
              {activeTab === 'basic' && (
                <div className="space-y-8">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <InfoCard title={data.basic.name.title} content={data.basic.name.content} icon={<User className="text-purple-400" size={20} />} />
                      <InfoCard title={data.basic.hometown.title} content={data.basic.hometown.content} icon={<MapPin className="text-orange-400" size={20} />} />
                      <InfoCard title={data.basic.specialization.title} content={data.basic.specialization.content} icon={<Code2 className="text-blue-400" size={20} />} />
                      <InfoCard title={data.basic.language.title} content={data.basic.language.content} icon={<Globe2 className="text-green-400" size={20} />} />
                   </div>
                   
                   <div className="mt-8 pt-8 border-t border-gray-800">
                      <h3 className="text-xl font-bold mb-4 text-purple-300">{data.hobbies.title}</h3>
                      <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                        {data.hobbies.content}
                      </p>
                   </div>
                </div>
              )}

              {/* Education */}
              {activeTab === 'education' && (
                <div className="space-y-8 relative border-l-2 border-gray-800 ml-4 pl-8">
                  {data.education.items.map((edu, idx) => (
                    <div key={idx} className="relative">
                      <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-purple-500 border-4 border-slate-900"></div>
                      <div className="mb-1 text-sm text-purple-400 font-mono">{edu.dates}</div>
                      <h3 className="text-xl font-bold text-white mb-1">{edu.university.content}</h3>
                      <div className="text-lg text-gray-300 mb-2">{edu.degree.content} - {edu.major.content}</div>
                      <div className="space-y-1 text-sm text-gray-500">
                         <p>{edu.faculty.content}</p>
                         <p className="text-gray-400 italic">Lab: {edu.laboratory.content}</p>
                         <p className="text-orange-300/80">Focus: {edu.focus.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Experience */}
              {activeTab === 'experience' && (
                <div className="space-y-10">
                   {data.experience.items.map((exp, idx) => (
                     <div key={idx} className="group">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                           <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">{exp.job_title}</h3>
                           <span className="text-sm text-gray-400 font-mono bg-white/5 px-3 py-1 rounded">{exp.dates}</span>
                        </div>
                        <div className="text-purple-400 mb-1">{exp.company}</div>
                        <div className="text-sm text-gray-500 mb-4 flex items-center gap-1">
                            <MapPin size={14} /> {exp.location}
                        </div>
                        <ul className="space-y-2">
                            {exp.infos.map((info, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
                                    <span className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-orange-500/50"></span>
                                    <span>{info}</span>
                                </li>
                            ))}
                        </ul>
                     </div>
                   ))}
                </div>
              )}

              {/* Skills */}
              {activeTab === 'skills' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {data.skills.items.map((skillGroup, idx) => (
                    <div key={idx} className="bg-slate-900/50 p-5 rounded-xl border border-white/5 hover:border-purple-500/30 transition-colors">
                      <h4 className="text-purple-300 font-bold mb-4 border-b border-gray-800 pb-2">{skillGroup.title}</h4>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill, sIdx) => (
                          <span key={sIdx} className="px-3 py-1 bg-white/5 hover:bg-white/10 text-gray-300 text-xs rounded-full border border-white/5 transition-colors cursor-default">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoCard = ({ title, content, icon }: { title: string; content: string; icon: React.ReactNode }) => (
    <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 flex items-start space-x-4 hover:bg-slate-900/60 transition-colors">
        <div className="p-2 bg-white/5 rounded-lg">{icon}</div>
        <div>
            <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">{title}</div>
            <div className="text-gray-200 font-medium">{content}</div>
        </div>
    </div>
)

export default About;
