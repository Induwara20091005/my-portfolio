'use client';

import { useState } from 'react';
import { Mail, MessageCircle, MapPin, Send, CheckCircle2, Loader2, Smartphone } from 'lucide-react';

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

  // Telegram API එකට Backend හරහා දත්ත යැවීම
  const sendToTelegram = async () => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      return response.ok;
    } catch (error) {
      console.error('Telegram Error:', error);
      return false;
    }
  };

  const handleWhatsApp = async () => {
    setStatus('sending');
    await sendToTelegram();
    const text = `*New Inquiry*%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*WhatsApp:* ${formData.whatsapp}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/94761562585?text=${text}`, '_blank');
    setStatus('success');
    setTimeout(() => setStatus('idle'), 5000);
  };

  const handleGmail = async () => {
    setStatus('sending');
    await sendToTelegram();
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nWhatsApp: ${formData.whatsapp}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:gginduwaradeshan@gmail.com?subject=${subject}&body=${body}`;
    setStatus('success');
    setTimeout(() => setStatus('idle'), 5000);
  };

  const handleSubmitOnlyTelegram = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    const success = await sendToTelegram();
    if (success) {
      setStatus('success');
      setFormData({ name: '', email: '', whatsapp: '', subject: 'Project Inquiry', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } else {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-slate-400 font-body max-w-3xl mx-auto">
            Let's discuss your project and bring your ideas to life
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-slate-900/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-6 md:p-10">
            <h2 className="text-3xl font-display font-bold text-white mb-8">Send a Message</h2>

            {status === 'success' && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl flex items-center space-x-3 animate-fade-in">
                <CheckCircle2 className="w-6 h-6 text-green-400" />
                <span className="text-green-300 font-body text-lg text-sm sm:text-base">Message processed successfully! Check your app.</span>
              </div>
            )}

            {status === 'error' && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl flex items-center space-x-3 animate-fade-in">
                <span className="text-red-300 font-body text-lg">Error sending message. Please try again.</span>
              </div>
            )}

            <form onSubmit={handleSubmitOnlyTelegram} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-slate-300 font-body mb-2">Your Name *</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-slate-800/50 border border-primary-500/30 rounded-xl text-white focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400/20 transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-slate-300 font-body mb-2">WhatsApp Number</label>
                  <input type="text" name="whatsapp" value={formData.whatsapp} onChange={handleChange} className="w-full px-4 py-3 bg-slate-800/50 border border-primary-500/30 rounded-xl text-white focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400/20 transition-all" placeholder="+94 7x xxx xxxx" />
                </div>
              </div>
              
              <div>
                <label className="block text-slate-300 font-body mb-2">Your Email *</label>
                <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-slate-800/50 border border-primary-500/30 rounded-xl text-white focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400/20 transition-all" placeholder="john@example.com" />
              </div>

              <div>
                <label className="block text-slate-300 font-body mb-2">Your Message *</label>
                <textarea name="message" required value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-3 bg-slate-800/50 border border-primary-500/30 rounded-xl text-white focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400/20 transition-all resize-none" placeholder="Tell me about your project..." />
              </div>

              {/* Action Buttons */}
              <div className="pt-4 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button type="button" onClick={handleWhatsApp} disabled={status === 'sending'} className="flex items-center justify-center space-x-2 px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all active:scale-95">
                    <MessageCircle className="w-5 h-5" />
                    <span className="whitespace-nowrap">Send via WhatsApp</span>
                  </button>

                  <button type="button" onClick={handleGmail} disabled={status === 'sending'} className="flex items-center justify-center space-x-2 px-6 py-4 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl transition-all active:scale-95">
                    <Mail className="w-5 h-5" />
                    <span className="whitespace-nowrap">Send via Gmail</span>
                  </button>
                </div>

                <button type="submit" disabled={status === 'sending'} className="w-full px-6 py-4 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-xl transition-all flex items-center justify-center space-x-2">
                  {status === 'sending' ? <Loader2 className="w-5 h-5 animate-spin" /> : (
                    <>
                      <span>Submit to Telegram Only</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
