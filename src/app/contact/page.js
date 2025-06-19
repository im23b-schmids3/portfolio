'use client';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_vr6d0lz';
const TEMPLATE_ID = 'template_a5c8krn';
const PUBLIC_KEY = 'kOwVP1zSHTeJ1eLsP';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          user_name: formData.name,
          user_email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white flex items-center justify-center py-20">
      <div className="w-full max-w-2xl mx-auto px-6 py-16 rounded-2xl shadow-xl bg-black/70 backdrop-blur-md border border-gray-800">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-center tracking-tight">Contact</h1>
        <div className="bg-gray-900/80 rounded-xl p-8 mb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">E-Mail</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-3 px-6 rounded-full font-semibold shadow-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 disabled:opacity-60"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && (
              <p className="text-green-400 text-center mt-2">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-center mt-2">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900/80 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4 text-white text-center">Contact Information</h2>
            <div className="space-y-3 text-gray-300 text-center">
              <p>📍 Zurich, Switzerland</p>
              <p>📧 sandro.schmid@student.ksh.ch</p>
            </div>
          </div>
          <div className="bg-gray-900/80 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4 text-white text-center">Social Media</h2>
            <div className="space-y-3 text-gray-300 text-center">
              <a 
                href="https://github.com/im23b-schmids3" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 justify-center hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 