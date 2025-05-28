import Link from 'next/link';

export default function Home() {
    return (
        <main className="min-h-screen bg-black text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-5xl font-bold mb-8">Welcome to my Portfolio-Site</h1>

                    <div className="space-y-6">
                        <p className="text-xl">
                            Hello! I’m Sandro Schmid, a 17-year-old Student at Kantonsschule Hottingen.
                        </p>

                        <div className="bg-gray-900 p-6 rounded-lg">
                            <h2 className="text-2xl font-semibold mb-4">About me</h2>
                            <p className="text-gray-300">
                                I’m a passionate developer with a focus on creating practical and efficient
                                solutions through code. I enjoy working on diverse projects, from chat applications in
                                Java to automation tools in Python. My strengths lie in problem-solving, learning new
                                technologies quickly, and building projects that bridge creativity with functionality.
                                I’m always looking to grow as a developer and collaborate on meaningful work.
                            </p>
                        </div>

                        <div className="bg-gray-900 p-6 rounded-lg">
                            <h2 className="text-2xl font-semibold mb-4">My Skills</h2>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>Next.js & React</li>
                                <li>Tailwind CSS</li>
                                <li>JavaScript</li>
                                <li>Python</li>

                            </ul>
                        </div>

                        <div className="flex gap-4 mt-8">
                            <Link href="/projects"
                                  className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                                My Projects
                            </Link>
                            <Link href="/contact"
                                  className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors">
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
} 