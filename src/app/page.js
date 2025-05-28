import Link from 'next/link';

export default function Home() {
    return (
        <main className="min-h-screen bg-black text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-5xl font-bold mb-8">Willkommen auf meiner Portfolio-Seite</h1>
                    
                    <div className="space-y-6">
                        <p className="text-xl">
                            Hallo! Ich bin IMS Schüler an der Kantonsschule Hottingen und ich bin 17 Jahre alt.
                        </p>
                        
                        <div className="bg-gray-900 p-6 rounded-lg">
                            <h2 className="text-2xl font-semibold mb-4">Über mich</h2>
                            <p className="text-gray-300">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                            </p>
                        </div>

                        <div className="bg-gray-900 p-6 rounded-lg">
                            <h2 className="text-2xl font-semibold mb-4">Meine Fähigkeiten</h2>
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
                                Meine Projekte
                            </Link>
                            <Link href="/contact" 
                                  className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors">
                                Kontakt
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
} 