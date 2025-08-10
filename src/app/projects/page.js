import Image from 'next/image';

export default function Projects() {
    const projects = [
        {
            title: "Real-time Chat App",
            description: "A simple real-time chat application built with Java. It supports multiple clients through socket programming",
            technologies: ["Java", "Spring Boot", "React", "MySQL"],
            image: "/images/chat-app.png",
            githubLink: "https://github.com/im23b-schmids3/real-time-chat-app"
        },
        {
            title: "Kahoot Cheat",
            description: "This is a Python-based cheat tool designed for Kahoot quizzes. It automates answering questions by utilizing the OpenAI API for question understanding and Space OCR for text extraction from images.",
            technologies: ["Python", "OpenAI API", "Space OCR"],
            image: "/images/Kahoot-Cheat.png",
            githubLink: "https://github.com/im23b-schmids3/Win-every-Kahoot"
        },
        {
            title: "Mensa App",
            description: "A web app built for a school project. A simple Mensa-App which allows users to view the daily menu of their school canteen and pre-order it.",
            technologies: ["Next.js", "Tailwind CSS", "MySQL"],
            image: "/images/Mensa-App.png",
            githubLink: "https://github.com/im23b-schmids3/Mensa-App"
        },
        {
            title: "Discord bot",
            description: "A simple Discord bot that responds to a few basic commands and can play music from YouTube in voice channels",
            technologies: ["Python", "discord.py", "yt-dlp"],
            image: "/images/Discord-Bot.png",
            githubLink: "https://github.com/im23b-schmids3/Discord-bot"
        },
        {
            title: "CryptoVerse",
            description: "A web app built for a school project that tracks live cryptocurrency prices and features an integrated AI chatbot for user interaction.",
            technologies: ["HTML / CSS", "JavaScript", "CoinGecko API"],
            image: "/images/CryptoVerse.png",
            githubLink: "https://github.com/im23b-schmids3/CryptoVerse",
            liveDemo: "https://im23b-busere.github.io/CryptoVerse/index.html"
        },
    ];

    return (
        <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white flex items-center justify-center py-20">
            <div className="w-full max-w-6xl mx-auto px-6">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-12 text-center tracking-tight">My Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-black/70 border border-gray-800 rounded-2xl shadow-xl overflow-hidden hover:scale-[1.03] transition-transform duration-200 flex flex-col">
                            <div className="h-48 bg-gray-800 relative">
                                <Image 
                                    src={project.image} 
                                    alt={`${project.title} Screenshot`}
                                    width={400}
                                    height={192}
                                    className="w-full h-full object-cover rounded-t-2xl"
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <h2 className="text-2xl font-semibold mb-2 text-white text-center">{project.title}</h2>
                                <p className="text-gray-300 mb-4 text-center">{project.description}</p>
                                <div className="flex flex-wrap gap-2 justify-center mb-4">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span 
                                            key={techIndex}
                                            className="bg-gray-800/80 text-sm px-3 py-1 rounded-full text-gray-200"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4 justify-between mt-auto w-full">
                                  <a 
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-blue-400 hover:text-white transition-colors"
                                  >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                    Source Code
                                  </a>
                                  {project.title === "CryptoVerse" && (
                                    <a
                                      href={project.liveDemo}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-2 text-green-400 hover:text-white transition-colors"
                                    >
                                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                      </svg>
                                      Live Demo
                                    </a>
                                  )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
} 