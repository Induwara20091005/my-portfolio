'use client';

import { useState } from 'react';
import { Mail, MessageCircle, Send, CheckCircle2, Loader2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    subject: 'Project Inquiry',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

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
      console.error('Telegram Error:', error);
    }
  };

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
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold mb-6 text-white">
            Get In <span className="text-teal-400">Touch</span>
          </h1>
        </div>

        <div className="max-w-3xl mx-auto bg-slate-900/50 backdrop-blur-sm border border-teal-500/20 rounded-2xl p-6 md:p-10 shadow-2xl">
          {status === 'success' && (
            <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl flex items-center space-x-3 text-green-300">
              <CheckCircle2 className="w-6 h-6" />
              <span>Redirecting to app... (Telegram notification sent)</span>
            </div>
          )}

          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input type="text" name="name" required placeholder="Full Name" onChange={handleChange} value={formData.name} className="w-full px-4 py-3 bg-slate-800/50 border border-teal-500/30 rounded-xl text-white outline-none focus:border-teal-400" />
              <input type="text" name="whatsapp" placeholder="WhatsApp Number" onChange={handleChange} value={formData.whatsapp} className="w-full px-4 py-3 bg-slate-800/50 border border-teal-500/30 rounded-xl text-white outline-none focus:border-teal-400" />
            </div>
            <input type="email" name="email" required placeholder="Email Address" onChange={handleChange} value={formData.email} className="w-full px-4 py-3 bg-slate-800/50 border border-teal-500/30 rounded-xl text-white outline-none focus:border-teal-400" />
            <textarea name="message" required placeholder="Describe your project..." rows={5} onChange={handleChange} value={formData.message} className="w-full px-4 py-3 bg-slate-800/50 border border-teal-500/30 rounded-xl text-white outline-none focus:border-teal-400 resize-none" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <button type="button" onClick={handleWhatsApp} disabled={status === 'sending'} className="flex items-center justify-center space-x-2 px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all active:scale-95 disabled:opacity-50">
                <MessageCircle className="w-5 h-5" />
                <span>Send via WhatsApp</span>
              </button>

              <button type="button" onClick={handleGmail} disabled={status === 'sending'} className="flex items-center justify-center space-x-2 px-6 py-4 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl transition-all active:scale-95 disabled:opacity-50">
                <Mail className="w-5 h-5" />
                <span>Send via Gmail</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
