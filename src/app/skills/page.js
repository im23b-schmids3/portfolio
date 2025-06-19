'use client';
import { useState } from 'react';

const SKILL_CATEGORIES = [
  { key: 'all', label: 'All' },
  { key: 'backend', label: 'Backend' },
  { key: 'databases', label: 'Databases' },
  { key: 'frameworks', label: 'Frameworks' },
];

const SKILLS = [
  // Frameworks
  {
    name: 'Next.js',
    category: 'frameworks',
    logo: '/next.svg',
  },
  {
    name: 'React',
    category: 'frameworks',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'Tailwind CSS',
    category: 'frameworks',
    logo: '/images/tailwindcss.png',
  },
  // Backend (sortiert)
  {
    name: 'Python',
    category: 'backend',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    name: 'JavaScript',
    category: 'backend',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'Java',
    category: 'backend',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  },
  {
    name: 'Node.js',
    category: 'backend',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  // Datenbanken (sortiert)
  {
    name: 'MySQL',
    category: 'databases',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },
  {
    name: 'MongoDB',
    category: 'databases',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },
];

export default function Skills() {
  const [selected, setSelected] = useState('all');

  const filteredSkills = selected === 'all'
    ? SKILLS
    : SKILLS.filter(skill => skill.category === selected);

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white py-20">
      <div className="w-full max-w-5xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-center tracking-tight">
          My Skills
        </h1>
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {SKILL_CATEGORIES.map(cat => (
            <button
              key={cat.key}
              onClick={() => setSelected(cat.key)}
              className={`px-5 py-2 rounded-full font-semibold border transition-all duration-200 text-sm md:text-base ${selected === cat.key ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white border-blue-400 shadow-lg' : 'bg-gray-900/80 text-gray-300 border-gray-700 hover:bg-gray-800 hover:text-white'}`}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredSkills.map((skill, idx) => (
            <div key={idx} className="flex items-center gap-4 bg-gray-900/80 rounded-xl px-4 py-3 shadow-md">
              <img src={skill.logo} alt={skill.name + ' logo'} className="w-10 h-10 object-contain" />
              <span className="text-lg text-white font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 