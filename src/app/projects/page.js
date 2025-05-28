export default function Projects() {
    const projects = [
        {
            title: "Real-time Chat App",
            description: "Eine Chat-App mit Java",
            technologies: ["Java", "React"],
            image: "/project1.jpg"
        },
        {
            title: "Kahoot Cheat",
            description: "Ein Skript um Kahoots zu gewinnen",
            technologies: ["python"],
            image: "/project2.jpg"
        },

    ];

    return (
        <main className="min-h-screen bg-black text-white py-16">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-12 text-center">Meine Projekte</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
                            <div className="h-48 bg-gray-800">
                                {/* Hier können Sie später echte Projektbilder einfügen */}
                                <div className="w-full h-full flex items-center justify-center text-gray-500">
                                    Projektbild
                                </div>
                            </div>
                            
                            <div className="p-6">
                                <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
                                <p className="text-gray-300 mb-4">{project.description}</p>
                                
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span 
                                            key={techIndex}
                                            className="bg-gray-800 text-sm px-3 py-1 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
} 