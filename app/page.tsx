
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { skills, Tech_Stck } from './data';
import { SOCIAL_LINKS } from './data';
import Logo from './components/logo';
import { ThemeProvider } from 'next-themes';

const WebProjects = [
  {
    name: 'Ask AI',
    description: 'An AI-powered tool that helps you find the right answers.',
    link: 'https://academic-chatbot-eta.vercel.app/',
    id: 'project1',
  },
  {
    name: 'Bio Quiz',
    description: 'Interactive bio 101 quiz.',
    link: 'https://biq-quiz.vercel.app/',
    id: 'project2',
  },
  {
    name: 'Human Detection Interface',
    description: 'Real Time People Detection From Your WebCam',
    link: 'https://detection-wheat.vercel.app/',
    id: 'project3',
  },
];

export default function Portfolio() {
  return (
    <ThemeProvider enableSystem attribute="class" storageKey="theme" defaultTheme="system">
      <div className="min-h-screen bg-gray-900 text-white p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="text-center">
            <motion.h1
              className="text-4xl font-bold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              Ashley Garriga
            </motion.h1>
            <motion.p
              className="text-lg text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.2 }}
            >
              Web Developer / Programmer
            </motion.p>
            <motion.span
              className="text-sm text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.4 }}
            >
              Contact: garriga@G19programs.com
            </motion.span>
          </header>

          {/* Projects Section */}
          <section className="mt-8">
            <motion.h2
              className="text-2xl font-semibold mb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Selected Projects
            </motion.h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {WebProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="bg-gray-800 p-4 rounded-lg shadow-md"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="text-xl font-bold">{project.name}</h3>
                  <p className="text-gray-400">{project.description}</p>
                  <a
                    href={project.link}
                    className="text-blue-400 hover:underline mt-2 inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project →
                  </a>
                </motion.div>
              ))}
            </div>
          </section>

          {/* G19 Logo Section */}
          <section className="flex justify-center mt-10">
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <Logo src="/logo.jpg" alt="logo" className="w-24 h-24 rounded" />
              <p className="text-white mt-2 text-lg font-semibold italic">G19 Programs</p>
            </motion.div>
          </section>

          {/* Tech Stack Section */}
          <section className="mt-8">
            <motion.h2
              className="text-2xl font-semibold mb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Tech Stack
            </motion.h2>
            <div className="flex flex-wrap gap-4">
              {Tech_Stck.map((tech) => (
                <motion.div
                  key={tech.id}
                  className="bg-gray-800 text-white px-4 py-2 rounded-md shadow-md flex items-center gap-2"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="text-lg">{tech.name}</span>
                  <span className="text-sm text-gray-400">{tech.language}</span>
                  <span className="text-sm text-gray-400">{tech.strorage}</span>
                  <span className="text-sm text-gray-400">{tech.security}</span>
                  <span className="text-sm text-gray-400">{tech.styling}</span>
                  <span className="text-sm text-gray-400">{tech.deployment}</span>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Services Section */}
          <section className="mt-12">
            <motion.h2
              className="font-semibold mb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Services
            </motion.h2>
            <div className="flex flex-col gap-6 list-disc text-sm">
              {skills.map((skill) => (
                <motion.div
                  key={skill.id}
                  className="bg-gray-800 p-4 rounded-lg shadow-md"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="text-sm list-disc font-semibold">{skill.skill_1}</h3>
                  <h3 className="text-sm list-disc font-semibold">{skill.skill_2}</h3>
                  <h3 className="text-sm list-disc font-semibold">{skill.skill_3}</h3>
                  <h3 className="text-sm list-disc font-semibold">{skill.skill_4}</h3>
                  <h3 className="text-sm list-disc font-semibold">{skill.skill_5}</h3>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Social Links */}
          <div className="fixed top-1/2 right-4 flex flex-col gap-2">
            {SOCIAL_LINKS.map((social) => (
              <motion.a
                key={social.label}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:scale-105 transition"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                {social.label}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
