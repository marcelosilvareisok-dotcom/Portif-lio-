/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Github, Linkedin, Mail, ExternalLink, Code2,
  ChevronRight, Terminal, Layout, Database, Smartphone,
  User, Briefcase, FolderGit2, Send, Menu, X, Share2
} from 'lucide-react';
import { portfolioData } from './data';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [];
  if (portfolioData.personalInfo.about || portfolioData.stats.length > 0) links.push('Sobre');
  if (portfolioData.experiences.length > 0) links.push('Experiência');
  if (portfolioData.skills.length > 0) links.push('Habilidades');
  if (portfolioData.projects.length > 0) links.push('Projetos');
  links.push('Contato');

  return (
    <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Portfólio.
        </span>
        <div className="hidden md:flex gap-8">
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
              {link}
            </a>
          ))}
        </div>
        <button className="md:hidden text-zinc-400 hover:text-white transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-zinc-900 border-b border-zinc-800 px-6 py-4 flex flex-col gap-4 shadow-xl"
        >
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
              {link}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-32 h-32 rounded-full border-2 border-zinc-800 bg-zinc-900 mb-8 overflow-hidden relative group shadow-2xl"
        >
          {/* Avatar Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center text-zinc-500 group-hover:scale-110 group-hover:text-zinc-400 transition-all duration-500">
            <User size={48} />
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
        >
          Olá, eu sou <br className="md:hidden" />
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
            {portfolioData.personalInfo.name}
          </span>
        </motion.h1>

        {(portfolioData.personalInfo.role || portfolioData.personalInfo.about) && (
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed"
          >
            {portfolioData.personalInfo.role && `${portfolioData.personalInfo.role}. `}
            {portfolioData.personalInfo.about}
          </motion.p>
        )}

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a href="#projetos" className="px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-medium transition-all shadow-[0_0_20px_-5px_rgba(147,51,234,0.5)] hover:shadow-[0_0_25px_-5px_rgba(147,51,234,0.7)] flex items-center justify-center gap-2">
            Ver Projetos <ChevronRight size={18} />
          </a>
          <a href="#contato" className="px-8 py-4 rounded-full bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white font-medium transition-all flex items-center justify-center gap-2">
            Entrar em Contato
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  if (!portfolioData.personalInfo.about && portfolioData.stats.length === 0) return null;

  return (
    <section id="sobre" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center gap-4 mb-12"
        >
          <User className="text-purple-400" size={32} />
          <h2 className="text-3xl md:text-4xl font-bold">Sobre Mim</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6 text-zinc-400 text-lg leading-relaxed"
          >
            <p>{portfolioData.personalInfo.about}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 gap-4"
          >
            {portfolioData.stats.map((stat, i) => (
              <div key={i} className="bg-zinc-900/50 border border-zinc-800/50 p-6 rounded-2xl backdrop-blur-sm hover:border-purple-500/30 transition-colors">
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  if (portfolioData.experiences.length === 0) return null;

  return (
    <section id="experiência" className="py-24 bg-zinc-900/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center gap-4 mb-16"
        >
          <Briefcase className="text-blue-400" size={32} />
          <h2 className="text-3xl md:text-4xl font-bold">Experiência</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="border-l-2 border-zinc-800 ml-4 md:ml-0 space-y-12">
            {portfolioData.experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Dot */}
                <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-zinc-950 border-2 border-blue-500" />
                
                <div className="bg-zinc-900/50 border border-zinc-800/50 p-6 rounded-2xl backdrop-blur-sm hover:border-blue-500/30 transition-colors group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                      <span className="text-zinc-400 font-medium">{exp.company}</span>
                    </div>
                    <span className="text-sm text-zinc-500 bg-zinc-950 px-3 py-1 rounded-full border border-zinc-800 w-fit">{exp.date}</span>
                  </div>
                  <p className="text-zinc-400 leading-relaxed">{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  if (portfolioData.skills.length === 0) return null;

  return (
    <section id="habilidades" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center gap-4 mb-16"
        >
          <Code2 className="text-emerald-400" size={32} />
          <h2 className="text-3xl md:text-4xl font-bold">Habilidades</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {portfolioData.skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-900/50 border border-zinc-800/50 p-6 rounded-2xl backdrop-blur-sm group hover:border-zinc-700 transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-zinc-800/50 rounded-lg text-zinc-300 group-hover:text-white transition-colors">
                  <Code2 />
                </div>
                <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Proficiência</span>
                  <span className="text-zinc-300 font-medium">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-800/50">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  if (portfolioData.projects.length === 0) return null;

  return (
    <section id="projetos" className="py-24 bg-zinc-900/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center gap-4 mb-16"
        >
          <FolderGit2 className="text-purple-400" size={32} />
          <h2 className="text-3xl md:text-4xl font-bold">Projetos em Destaque</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-zinc-900/50 border border-zinc-800/50 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all hover:-translate-y-1 shadow-lg"
            >
              {/* Image Placeholder */}
              <div className="aspect-video bg-zinc-800 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-zinc-600 group-hover:scale-110 transition-transform duration-500">
                  <Layout size={48} opacity={0.5} />
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-zinc-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                  <a href={proj.demoUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-purple-500 hover:text-white transition-colors text-zinc-300" title="Ver Demo">
                    <ExternalLink size={20} />
                  </a>
                  <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-purple-500 hover:text-white transition-colors text-zinc-300" title="Perfil do GitHub">
                    <Github size={20} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">{proj.title}</h3>
                <p className="text-zinc-400 text-sm mb-6 line-clamp-2">{proj.desc}</p>
                
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-1 bg-zinc-950 text-zinc-300 rounded-md border border-zinc-800">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <Send className="text-purple-400 mx-auto mb-4" size={32} />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Vamos Conversar?</h2>
          <p className="text-zinc-400">
            Estou sempre aberto a novas oportunidades e desafios. 
            Sinta-se à vontade para entrar em contato.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 p-8 rounded-3xl shadow-2xl space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-300">Nome</label>
              <input 
                type="text" 
                placeholder="Seu nome" 
                className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-300">Email</label>
              <input 
                type="email" 
                placeholder="seu@email.com" 
                className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-300">Mensagem</label>
            <textarea 
              rows={5}
              placeholder="Sua mensagem aqui..." 
              className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
            />
          </div>
          <button 
            type="button"
            className="w-full bg-purple-600 hover:bg-purple-500 text-white font-medium py-4 rounded-xl transition-all shadow-[0_0_20px_-5px_rgba(147,51,234,0.5)] hover:shadow-[0_0_25px_-5px_rgba(147,51,234,0.7)] flex items-center justify-center gap-2"
          >
            Enviar Mensagem <Send size={18} />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

const ShareButton = () => {
  const handleShare = async () => {
    const shareText = 'Confira o portfólio de Marcelo da Silva Reis!';
    const shareUrl = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Portfólio - Marcelo da Silva Reis',
          text: shareText,
          url: shareUrl,
        });
      } catch (err) {
        console.error('Erro ao compartilhar:', err);
      }
    } else {
      // Fallback to WhatsApp
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <button
      onClick={handleShare}
      className="fixed bottom-6 right-6 p-4 bg-green-600 hover:bg-green-500 text-white rounded-full shadow-[0_0_20px_-5px_rgba(22,163,74,0.5)] hover:shadow-[0_0_25px_-5px_rgba(22,163,74,0.7)] transition-all z-50 flex items-center justify-center group"
      title="Compartilhar no WhatsApp"
    >
      <Share2 size={24} />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 ease-in-out font-medium">
        Compartilhar
      </span>
    </button>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-zinc-800/50 bg-zinc-950 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Portfólio.
        </div>
        
        <p className="text-zinc-500 text-sm text-center md:text-left">
          © {new Date().getFullYear()} Marcelo da Silva Reis. Todos os direitos reservados.
        </p>

        <div className="flex gap-4">
          {portfolioData.personalInfo.github && (
            <a href={portfolioData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-zinc-900 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all">
              <Github size={20} />
            </a>
          )}
          {portfolioData.personalInfo.linkedin && (
            <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-zinc-900 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all">
              <Linkedin size={20} />
            </a>
          )}
          {portfolioData.personalInfo.email && (
            <a href={`mailto:${portfolioData.personalInfo.email}`} className="p-2 bg-zinc-900 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all">
              <Mail size={20} />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-purple-500/30 font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ShareButton />
    </div>
  );
}
