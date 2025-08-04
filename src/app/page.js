import Link from 'next/link';

export default function Home() {
    return (
        <main
            className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white flex items-center justify-center">
            <div className="w-full max-w-2xl mx-auto px-6 py-20">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-center tracking-tight">
                    Hello! I&apos;m Sandro Schmid
                </h1>
                <p className="text-lg md:text-xl text-gray-300 text-center mb-10 leading-relaxed">
                    I am a 18 years old student at Kantonsschule Hottingen, passionate about coding to solve complex
                    problems.<br/>
                    I am currently working on a Java project, which is a chat application.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/projects"
                          className="relative group px-8 py-3 rounded-full font-semibold text-white overflow-hidden shadow-lg">
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-opacity duration-300 group-hover:opacity-0" />
                        <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <span className="relative z-10">My Projects</span>
                    </Link>
                    <Link href="/contact"
                          className="px-8 py-3 rounded-full font-semibold border border-gray-400 text-gray-200 hover:bg-gray-800 hover:text-white transition-all duration-200 text-center">
                        Contact
                    </Link>
                </div>
            </div>
        </main>
    )
        ;
} 