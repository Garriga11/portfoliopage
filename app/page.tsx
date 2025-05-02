'use client'

import React from 'react';
import { hobbies, Tech_Stck } from './data';
import { SOCIAL_LINKS } from './data';
import { AnimatedBackground } from '@/components/ui/animated-background'
import {  contact }  from './data'

const WebProjects = [
  {
    name: 'Ask AI',
    description: "An AI-powered tool that helps you find the right answers.",
    link: 'https://academic-chatbot-eta.vercel.app/',
    id: 'project1',
  },

  {
    name: 'Starter',
    description: "Full integreation demo built with NextJS, Clerk, Prisma & Versal.",
    link: 'https://www.garriga19programs.com',

    id: 'project2',
  }
];


export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold">Ashley Garriga</h1>
          <p className="text-lg text-gray-400">Web Developer / Programmer</p>
          <span className="text-sm text-gray-400">Contact: garriga@G19programs</span>
        </header>

        {/* Projects Section */}
        
          
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Selected Projects</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {WebProjects.map((project) => (
              <div key={project.id} className="bg-gray-800 p-4 rounded-lg shadow-md">
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
              </div>
            ))}
          </div>
        </section>
        

       

        
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-4">
            {Tech_Stck.map((tech) => (
              <div key={tech.id} className="bg-gray-800 text-white px-4 py-2 rounded-md shadow-md flex items-center gap-2">
                <span className="text-lg">{tech.name}</span>
                <span className="text-sm text-gray-400">{tech.language}</span>
                <span className="text-sm text-gray-400">{tech.strorage}</span>
                <span className="text-sm text-gray-400">{tech.security}</span>
                <span className="text-sm text-gray-400">{tech.styling}</span>
                <span className="text-sm text-gray-400">{tech.deployment}</span>
              </div>
            ))}
          </div>
        </section>
        

  
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Hobbies</h2>
          <div className="flex flex-col gap-6">
            {hobbies.map((hobby) => (
              <div key={hobby.id} className="bg-gray-800 p-4 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold">{hobby.hobby_1}</h3>
                <h3 className="text-2xl font-bold">{hobby.hobby_2}</h3>
                <h3 className="text-2xl font-bold">{hobby.hobby_3}</h3>
              
              </div>
            ))}
          </div>
        </section>

          
        <div className="fixed top-1/2 right-4 flex flex-col gap-2">
          {SOCIAL_LINKS.map((social) => (
            <a key={social.label} href={social.link} target="_blank" rel="noopener noreferrer"
              className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:scale-105 transition">
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
