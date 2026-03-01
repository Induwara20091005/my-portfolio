'use client';

import { useState, useEffect, useRef } from 'react';
import { Mail, MessageCircle, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', whatsapp: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
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
    } catch (e) { console.error(e); }
  };

  // Draft Tracker: විස්තර ටයිප් කරලා තත්පර 30ක් ගියොත් Draft එකක් යවනවා
  useEffect(() => {
    if ((formData.name || formData.message) && !hasSentDraft.current) {
      const timer = setTimeout(() => {
        sendToTelegram("Draft (User is typing...)");
        hasSentDraft.current = true;
      }, 30000); // තත්පර 30කින් පසු
      return () => clearTimeout(timer);
    }
  }, [formData]);

  const handleWhatsApp = async () => {
    setStatus('sending');
    await sendToTelegram('WhatsApp Button Clicked');
    window.open(`https://wa.me/94761562585?text=Name: ${formData.name}%0AMessage: ${formData.message}`, '_blank');
    setStatus('success');
    setTimeout(() => setStatus('idle'), 4000);
  };

  const handleGmail = async () => {
    setStatus('sending');
    await sendToTelegram('Gmail Button Clicked');
    window.location.href = `mailto:gginduwaradeshan@gmail.com?body=Name: ${formData.name}%0A${formData.message}`;
    setStatus('success');
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto bg-slate-900 border border-teal-500/20 rounded-2xl p-8 shadow-2xl">
        <h1 className="text-4xl font-bold text-white mb-8 text-center font-display">Contact <span className="text-teal-400">Me</span></h1>
        
        {status === 'success' && (
          <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl flex items-center space-x-3 text-green-300 animate-fade-in">
            <CheckCircle2 className="w-6 h-6" />
            <span>Activity tracked! Redirecting...</span>
          </div>
        )}

        <div className="space-y-5 font-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input name="name" placeholder="Full Name" onChange={handleChange} value={formData.name} className="w-full p-4 bg-slate-800 rounded-xl border border-teal-500/20 text-white outline-none focus:border-teal-400 transition-all" />
            <input name="whatsapp" placeholder="WhatsApp Number" onChange={handleChange} value={formData.whatsapp} className="w-full p-4 bg-slate-800 rounded-xl border border-teal-500/20 text-white outline-none focus:border-teal-400 transition-all" />
          </div>
          <input name="email" type="email" placeholder="Email Address" onChange={handleChange} value={formData.email} className="w-full p-4 bg-slate-800 rounded-xl border border-teal-500/20 text-white outline-none focus:border-teal-400 transition-all" />
          <textarea name="message" placeholder="How can I help you?" rows={5} onChange={handleChange} value={formData.message} className="w-full p-4 bg-slate-800 rounded-xl border border-teal-500/20 text-white outline-none focus:border-teal-400 transition-all resize-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 font-bold">
            <button onClick={handleWhatsApp} className="flex items-center justify-center space-x-2 p-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl transition-all active:scale-95">
              <MessageCircle className="w-5 h-5" /> <span>WhatsApp</span>
            </button>
            <button onClick={handleGmail} className="flex items-center justify-center space-x-2 p-4 bg-rose-600 hover:bg-rose-700 text-white rounded-xl transition-all active:scale-95">
              <Mail className="w-5 h-5" /> <span>Gmail</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
