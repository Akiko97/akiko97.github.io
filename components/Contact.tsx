


import React from 'react';
import { ContactContent } from '../types';
import { Mail, MessageCircle, Send, Github } from 'lucide-react';

interface ContactProps {
  data: ContactContent;
}

const Contact: React.FC<ContactProps> = ({ data }) => {
  return (
    <footer id="contact" className="py-20 px-6 relative bg-slate-950/50 border-t border-white/5">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">{data.title}</h2>
        <p className="text-gray-400 mb-12 max-w-xl mx-auto">{data.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            
            {/* Email */}
            <a href={`mailto:${data.email.replace('$at$', '@')}`} className="group p-6 rounded-2xl bg-[#0F1115] border border-white/5 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-12 h-12 mx-auto bg-purple-500/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                    <Mail className="text-purple-400" />
                </div>
                <h3 className="text-white font-medium mb-1">Email</h3>
                <p className="text-xs text-gray-500 break-all">{data.email.replace('$at$', '@')}</p>
            </a>

            {/* Telegram */}
            <a href={`https://t.me/${data.telegram}`} target="_blank" rel="noreferrer" className="group p-6 rounded-2xl bg-[#0F1115] border border-white/5 hover:border-blue-500/50 transition-all duration-300">
                <div className="w-12 h-12 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                    <Send className="text-blue-400" />
                </div>
                <h3 className="text-white font-medium mb-1">Telegram</h3>
                <p className="text-xs text-gray-500">@{data.telegram}</p>
            </a>

             {/* Discord */}
             <a href={data.discordLink} target="_blank" rel="noreferrer" className="group p-6 rounded-2xl bg-[#0F1115] border border-white/5 hover:border-indigo-500/50 transition-all duration-300">
                <div className="w-12 h-12 mx-auto bg-indigo-500/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
                    <MessageCircle className="text-indigo-400" />
                </div>
                <h3 className="text-white font-medium mb-1">Discord</h3>
                <p className="text-xs text-gray-500">{data.discord}</p>
            </a>

            {/* GitHub */}
            <a href={data.githubLink} target="_blank" rel="noreferrer" className="group p-6 rounded-2xl bg-[#0F1115] border border-white/5 hover:border-gray-500/50 transition-all duration-300">
                <div className="w-12 h-12 mx-auto bg-gray-500/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-gray-500/20 transition-colors">
                    <Github className="text-gray-400" />
                </div>
                <h3 className="text-white font-medium mb-1">GitHub</h3>
                <p className="text-xs text-gray-500">{data.github}</p>
            </a>
        </div>

        <div className="text-xs text-gray-600 font-mono">
            <p className="mb-2">{data.email_intro}</p>
            <p>&copy; {new Date().getFullYear()} Gabriel Zhong. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;