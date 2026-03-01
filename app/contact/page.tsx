'use client';

import { useState, useEffect, useRef } from 'react';
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
    whatsapp: '', // අලුත් field එක
    subject: 'Project Inquiry',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const hasSentDraft = useRef(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendToTelegram = async (source: string) => {
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source }),
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Draft Tracker (තත්පර 30කින් යවනවා)
  useEffect(() => {
    if ((formData.name || formData.message) && !hasSentDraft.current) {
      const timer = setTimeout(() => {
        sendToTelegram("Draft (User is typing...)");
        hasSentDraft.current = true;
      }, 30000);
      return () => clearTimeout(timer);
    }
  }, [formData]);

  const handleWhatsApp = async () => {
    setStatus('sending');
    await sendToTelegram('WhatsApp Button Clicked');
    const text = `*New Inquiry*%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*WhatsApp:* ${formData.whatsapp}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/94761562585?text=${text}`, '_blank');
    setStatus('success');
    setTimeout(() => setStatus('idle'), 5000);
  };

  const handleGmail = async () => {
    setStatus('sending');
    await sendToTelegram('Gmail Button Clicked');
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nWhatsApp: ${formData.whatsapp}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:gginduwaradeshan@gmail.com?subject=${subject}&body=${body}`;
    setStatus('success');
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold mb-6 text-white">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-slate-400 font-body max-w-3xl mx-auto italic">
            "Let's build something amazing together"
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side: Contact Methods (ඔයාගේ පරණ Design එක) */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h2 className="text-3xl font-display font-bold text-white mb-6">Contact Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="group transition-all duration-300 transform hover:-translate-y-1">
                    {method.link ? (
                      <a href={method.link} target="_blank" rel="noopener noreferrer" className="flex items-start space-x-4 p-4 bg-slate-800/30 border border-primary-500/20 rounded-xl hover:border-primary-500/50 transition-colors">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                          <method.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-display font-semibold text-white mb-1">{method.title}</h3>
                          <p className="text-slate-400 font-body text-lg group-hover:text-primary-400">{method.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start space-x-4 p-4 bg-slate-800/30 border border-primary-500/20 rounded-xl">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center flex-shrink-0`}><method.icon className="w-6 h-6 text-white" /></div>
                        <div>
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
              <h3 className="text-2xl font-display font-bold text-white mb-4 italic">Available for Projects</h3>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-400 font-body text-lg font-semibold">Open for Work</span>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form (Updated with new logic) */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-8 md:p-10 animate-slide-in-right shadow-2xl">
            <h2 className="text-3xl font-display font-bold text-white mb-8">Send a Message</h2>
            
            {status === 'success' && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl flex items-center space-x-3 text-green-300">
                <CheckCircle2 className="w-6 h-6" />
                <span>Message tracked & Redirecting...</span>
              </div>
            )}

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" name="name" placeholder="Name" required onChange={handleChange} value={formData.name} className="w-full px-4 py-3 bg-slate-800/50 border border-primary-500/30 rounded-xl text-white outline-none focus:border-primary-400" />
                <input type="text" name="whatsapp" placeholder="WhatsApp (Optional)" onChange={handleChange} value={formData.whatsapp} className="w-full px-4 py-3 bg-slate-800/50 border border-primary-500/30 rounded-xl text-white outline-none focus:border-primary-400" />
              </div>
              <input type="email" name="email" placeholder="Email" required onChange={handleChange} value={formData.email} className="w-full px-4 py-3 bg-slate-800/50 border border-primary-500/30 rounded-xl text-white outline-none focus:border-primary-400" />
              <textarea name="message" placeholder="Your Message" required rows={5} onChange={handleChange} value={formData.message} className="w-full px-4 py-3 bg-slate-800/50 border border-primary-500/30 rounded-xl text-white outline-none focus:border-primary-400 resize-none" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button type="button" onClick={handleWhatsApp} disabled={status === 'sending'} className="flex items-center justify-center space-x-2 px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all active:scale-95 disabled:opacity-50">
                  <MessageCircle className="w-5 h-5" />
                  <span>via WhatsApp</span>
                </button>
                <button type="button" onClick={handleGmail} disabled={status === 'sending'} className="flex items-center justify-center space-x-2 px-6 py-4 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl transition-all active:scale-95 disabled:opacity-50">
                  <Mail className="w-5 h-5" />
                  <span>via Gmail</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
