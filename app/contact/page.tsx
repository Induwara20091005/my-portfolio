'use client';

import { useState } from 'react';
import { Mail, MessageCircle, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react';

const contactMethods = [
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: '+94 76 156 2585',
    link: 'https://wa.me/94761562585',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'gginduwaradeshan@gmail.com',
    link: 'mailto:gginduwaradeshan@gmail.com',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: MessageCircle,
    title: 'Telegram',
    value: '@gginduwaradeshan',
    link: 'https://t.me/gginduwaradeshan',
    color: 'from-sky-500 to-blue-500',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Kataragama, Sri Lanka',
    link: null,
    color: 'from-red-500 to-pink-500',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
    const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

    const telegramMessage = `
🚀 *New Portfolio Inquiry!*
──────────────────
👤 *From:* ${formData.name}
📧 *Email:* ${formData.email}
📝 *Subject:* ${formData.subject}
💬 *Message:* ${formData.message}
──────────────────
    `;

    try {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage,
          parse_mode: 'Markdown',
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-slate-400 font-body max-w-3xl mx-auto">
            Let's discuss your project and bring your ideas to life
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-cyan-500 mx-auto rounded-full mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="animate-slide-up">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-8">
              <h2 className="text-3xl font-display font-bold text-white mb-6">Send a Message</h2>

              {status === 'success' && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl flex items-center space-x-3 animate-fade-in">
                  <CheckCircle2 className="w-6 h-6 text-green-400" />
                  <span className="text-green-300 font-body text-lg">Message sent to Telegram successfully!</span>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl flex items-center space-x-3 animate-fade-in">
                  <span className="text-red-300 font-body text-lg">Error sending message. Please try again.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-slate-300 font-body text-lg mb-2">Your Name *</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-slate-800/50 border border-primary-500/30 rounded-xl text-white focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-slate-300 font-body text-lg mb-2">Your Email *</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-slate-800/50 border border-primary-500/30 rounded-xl text-white focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-all" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-slate-300 font-body text-lg mb-2">Subject *</label>
                  <input type="text" name="subject" required value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 bg-slate-800/50 border border-primary-500/30 rounded-xl text-white focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-all" placeholder="Project Inquiry" />
                </div>
                <div>
                  <label className="block text-slate-300 font-body text-lg mb-2">Your Message *</label>
                  <textarea name="message" required value={formData.message} onChange={handleChange} rows={6} className="w-full px-4 py-3 bg-slate-800/50 border border-primary-500/30 rounded-xl text-white focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-all resize-none" placeholder="Tell me about your project..." />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full px-8 py-4 bg-primary-500 text-white font-body text-lg font-semibold rounded-xl transition-all duration-300 hover:bg-primary-600 disabled:opacity-50 flex items-center justify-center space-x-2"
                >
                  {status === 'sending' ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-6 animate-slide-up">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-8">
              <h2 className="text-3xl font-display font-bold text-white mb-6">Contact Methods</h2>
              <div className="space-y-4">
                {contactMethods.map((method) => (
                  <div key={method.title} className="group">
                    {method.link ? (
                      <a href={method.link} target="_blank" rel="noopener noreferrer" className="flex items-start space-x-4 p-4 bg-slate-800/30 border border-primary-500/20 rounded-xl hover:border-primary-400/40 transition-all">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center flex-shrink-0`}><method.icon className="w-6 h-6 text-white" /></div>
                        <div className="flex-grow">
                          <h3 className="text-lg font-display font-semibold text-white mb-1">{method.title}</h3>
                          <p className="text-slate-400 font-body text-lg group-hover:text-primary-400">{method.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start space-x-4 p-4 bg-slate-800/30 border border-primary-500/20 rounded-xl">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center flex-shrink-0`}><method.icon className="w-6 h-6 text-white" /></div>
                        <div className="flex-grow">
                          <h3 className="text-lg font-display font-semibold text-white mb-1">{method.title}</h3>
                          <p className="text-slate-400 font-body text-lg">{method.value}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-500/10 to-cyan-500/10 border border-primary-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-display font-bold text-white mb-4">Available for Projects</h3>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-400 font-body text-lg font-semibold">Open for Work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}