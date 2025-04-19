"use client";

import { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formsubmit.co/vegatextssms@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      alert('Error sending message. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Contact VegaText
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Send us a message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D8AFF] focus:border-[#0D8AFF]"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D8AFF] focus:border-[#0D8AFF]"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0D8AFF] focus:border-[#0D8AFF]"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0D8AFF] hover:bg-[#0A6FCC] text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-[#0D8AFF] text-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-blue-200 mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-1">Email</h4>
                  <a href="mailto:vegatextssms@gmail.com" className="text-blue-100 hover:text-white transition-colors">
                    vegatextssms@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-blue-200 mt-1">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-3">Telegram</h4>
                  <div className="space-y-2">
                    <a href="https://t.me/Emall02" target="_blank" rel="noopener noreferrer" className="block text-blue-100 hover:text-white transition-colors">
                      <span className="text-white">@</span>Emall02
                    </a>
                    <a href="https://t.me/smsRoutes2" target="_blank" rel="noopener noreferrer" className="block text-blue-100 hover:text-white transition-colors">
                      <span className="text-white">@</span>smsRoutes2
                    </a>
                    <a href="https://t.me/VegaTexts" target="_blank" rel="noopener noreferrer" className="block text-blue-100 hover:text-white transition-colors">
                      <span className="text-white">@</span>VegaTexts
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}