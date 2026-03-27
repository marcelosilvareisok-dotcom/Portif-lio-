/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'motion/react';

interface Project {
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    title: 'Projeto 1',
    description: 'Descrição do projeto 1.',
    link: '#',
  },
  {
    title: 'Projeto 2',
    description: 'Descrição do projeto 2.',
    link: '#',
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 text-gray-900 p-6">
      <motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white/70 backdrop-blur-md shadow-lg rounded-full px-8 py-4 max-w-5xl mx-auto mb-12"
      >
        <nav className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-indigo-900">Marcelo da Silva Reis</h1>
          <div className="flex gap-4">
            <a href="#" className="text-indigo-600 hover:text-indigo-900 transition-colors"><Github size={20} /></a>
            <a href="#" className="text-indigo-600 hover:text-indigo-900 transition-colors"><Linkedin size={20} /></a>
            <a href="mailto:marcelodasilvareis30@gmail.com" className="text-indigo-600 hover:text-indigo-900 transition-colors"><Mail size={20} /></a>
          </div>
        </nav>
      </motion.header>

      <main className="max-w-5xl mx-auto">
        <motion.section 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex flex-col md:flex-row items-center gap-12 mb-16 bg-white/50 backdrop-blur-sm p-12 rounded-3xl shadow-xl"
        >
          <div className="w-64 h-64 bg-indigo-200 rounded-full overflow-hidden flex-shrink-0 border-4 border-white shadow-inner">
            {/* Placeholder for profile photo */}
            <div className="w-full h-full flex items-center justify-center text-indigo-500 font-bold">Foto</div>
          </div>
          <div>
            <h2 className="text-5xl font-extrabold mb-4 text-indigo-950">Olá, eu sou Marcelo da Silva Reis</h2>
            <p className="text-xl text-indigo-800 mb-6">Desenvolvedor apaixonado por criar soluções digitais fluidas e modernas.</p>
          </div>
        </motion.section>

        <section>
          <h3 className="text-3xl font-bold mb-8 text-indigo-950">Projetos</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={index} 
                whileHover={{ scale: 1.05 }}
                className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-white/50"
              >
                <h4 className="text-2xl font-semibold mb-3 text-indigo-900">{project.title}</h4>
                <p className="text-gray-700 mb-6">{project.description}</p>
                <a href={project.link} className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-full font-medium hover:bg-indigo-700 transition-colors">Ver projeto</a>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
