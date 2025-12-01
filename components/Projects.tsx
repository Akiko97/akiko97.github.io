import React, { useState } from 'react';
import { ProjectsContent, ProjectItem } from '../types';
import { FolderGit2, ExternalLink, BookOpen, Gamepad2, Database, FileCode, FileText, X, ArrowRight } from 'lucide-react';

interface ProjectsProps {
  data: ProjectsContent;
}

const Projects: React.FC<ProjectsProps> = ({ data }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2">
                <span className="text-white">&gt; </span>
                <span className="text-gray-200">{data.title}</span> 
                <span className="text-white"> &lt;</span>
            </h2>
            <div className="h-px bg-gradient-to-r from-purple-500/50 to-transparent w-full max-w-xs mt-4"></div>
        </div>

        {/* Research Section */}
        <div className="mb-16">
            <h3 className="text-xl font-bold text-purple-400 mb-6 flex items-center gap-2">
                <BookOpen size={20} />
                {data.research.title}
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {data.research.items.map((item, idx) => (
                    <ProjectCard 
                        key={idx} 
                        item={item} 
                        type="research" 
                        onClick={() => setSelectedProject(item)}
                    />
                ))}
            </div>
        </div>

        {/* Personal Projects Section */}
        <div>
            <h3 className="text-xl font-bold text-orange-400 mb-6 flex items-center gap-2">
                <Gamepad2 size={20} />
                {data.personal.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.personal.items.map((item, idx) => (
                    <ProjectCard key={idx} item={item} type="personal" />
                ))}
            </div>
        </div>

        {/* Modal */}
        {selectedProject && (
            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}

      </div>
    </section>
  );
};

interface ProjectCardProps {
    item: ProjectItem;
    type: 'research' | 'personal';
    onClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ item, type, onClick }) => {
    // Determine icon based on content or randomness for variety
    const getIcon = () => {
        if (type === 'research') {
             return <FileText size={24} className="text-purple-400" />;
        }
        
        if (item.title.toLowerCase().includes('simd')) return <CpuIcon />;
        if (item.title.toLowerCase().includes('cloud')) return <Database size={24} className="text-blue-400" />;
        if (item.title.toLowerCase().includes('game')) return <Gamepad2 size={24} className="text-pink-400" />;
        return <FolderGit2 size={24} className="text-orange-400" />;
    };

    const CpuIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-400"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>
    )

    const isResearch = type === 'research';
    const hasLink = !!item.link;
    
    // Research items are always interactive (open modal).
    // Personal items are interactive only if they have a link.
    const isInteractive = isResearch || hasLink;

    const Tag = isResearch ? 'div' : (hasLink ? 'a' : 'div');
    
    return (
        <Tag 
            href={!isResearch && hasLink ? item.link : undefined}
            target={!isResearch && hasLink ? "_blank" : undefined}
            rel={!isResearch && hasLink ? "noopener noreferrer" : undefined}
            onClick={isResearch ? onClick : undefined}
            className={`group relative bg-[#0F1115] rounded-2xl p-6 border border-white/5 transition-all duration-300 flex flex-col h-full overflow-hidden ${isInteractive ? 'hover:border-purple-500/40 hover:-translate-y-1 cursor-pointer' : ''}`}
        >
            {/* Background subtle glow on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br from-purple-500/5 to-orange-500/5 opacity-0 transition-opacity ${isInteractive ? 'group-hover:opacity-100' : ''}`}></div>

            <div className="relative z-10 flex items-start justify-between mb-4">
                <div className={`p-3 bg-white/5 rounded-xl transition-colors ${isInteractive ? 'group-hover:bg-white/10' : ''}`}>
                    {getIcon()}
                </div>
                {!isResearch && hasLink && <ExternalLink size={16} className="text-gray-500 group-hover:text-white transition-colors" />}
                {isResearch && <BookOpen size={16} className="text-gray-500 group-hover:text-white transition-colors" />}
            </div>

            <h4 className={`relative z-10 text-lg font-bold text-gray-100 mb-2 transition-colors ${isInteractive ? 'group-hover:text-purple-300' : ''}`}>
                {item.title}
            </h4>

            <p className="relative z-10 text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {item.description.length > 150 ? item.description.substring(0, 150) + '...' : item.description}
            </p>

            <div className="relative z-10 pt-4 border-t border-white/5 flex items-center justify-between mt-auto w-full">
                {item.language && (
                     <span className="text-xs font-mono text-gray-500 px-2 py-1 rounded bg-white/5 border border-white/5">
                        {item.language}
                     </span>
                )}
                
                {isResearch ? (
                    <span className="text-xs text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                        View Details <ArrowRight size={12} />
                    </span>
                ) : (
                    hasLink && (
                        <span className="text-xs text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                            Explore <ExternalLink size={12} />
                        </span>
                    )
                )}
            </div>
        </Tag>
    )
}

interface ProjectModalProps {
    project: ProjectItem;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
            <div 
                className="bg-[#0F1115] border border-white/10 rounded-2xl max-w-2xl w-full p-6 md:p-8 relative shadow-2xl max-h-[90vh] flex flex-col" 
                onClick={e => e.stopPropagation()}
            >
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-colors"
                >
                    <X size={24} />
                </button>
                
                <h3 className="text-2xl font-bold text-white mb-6 pr-10">{project.title}</h3>
                
                <div className="overflow-y-auto pr-2 custom-scrollbar flex-grow">
                    <p className="text-gray-300 leading-relaxed whitespace-pre-line text-sm md:text-base">
                        {project.description}
                    </p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between flex-shrink-0">
                    {project.language ? (
                        <span className="text-xs font-mono text-purple-300 px-3 py-1.5 rounded bg-purple-500/10 border border-purple-500/20">
                            {project.language}
                        </span>
                    ) : <div></div>}
                    
                    {project.link && (
                        <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-lg hover:bg-gray-200 transition-colors font-medium text-sm"
                        >
                            <span>Explore</span>
                            <ExternalLink size={16} />
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Projects;