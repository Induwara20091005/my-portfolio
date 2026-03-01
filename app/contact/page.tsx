"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Telegram එකට දත්ත යවන ප්‍රධාන Function එක
  const sendToTelegram = async () => {
    try {
      setStatus("Sending...");
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("Success! Details sent to Telegram.");
      } else {
        setStatus("Error sending to Telegram.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Connection error.");
    }
  };

  // WhatsApp හරහා විවෘත කිරීම
  const handleWhatsApp = () => {
    sendToTelegram(); // Telegram එකටත් යවනවා
    const text = `*New Inquiry*%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*WhatsApp:* ${formData.whatsapp}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/94761562585?text=${text}`, "_blank");
  };

  // Gmail හරහා විවෘත කිරීම
  const handleGmail = () => {
    sendToTelegram(); // Telegram එකටත් යවනවා
    const subject = encodeURIComponent("Project Inquiry - Portfolio");
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nWhatsApp: ${formData.whatsapp}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:gginduwaradeshan@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-12 px-4 max-w-2xl mx-auto">
      <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Get In Touch 🚀</h2>
        
        <div className="space-y-4">
          <input 
            name="name" placeholder="Full Name" onChange={handleChange}
            className="w-full p-4 bg-gray-800 rounded-xl border border-gray-700 text-white focus:border-blue-500 outline-none transition"
          />
          <input 
            name="email" type="email" placeholder="Email Address" onChange={handleChange}
            className="w-full p-4 bg-gray-800 rounded-xl border border-gray-700 text-white focus:border-blue-500 outline-none transition"
          />
          <input 
            name="whatsapp" placeholder="Your WhatsApp (Optional)" onChange={handleChange}
            className="w-full p-4 bg-gray-800 rounded-xl border border-gray-700 text-white focus:border-blue-500 outline-none transition"
          />
          <textarea 
            name="message" placeholder="Describe your project..." onChange={handleChange}
            className="w-full p-4 bg-gray-800 rounded-xl border border-gray-700 text-white h-32 focus:border-blue-500 outline-none transition"
          />
        </div>

        <p className="text-sm text-gray-400 mt-6 mb-3 text-center">Choose your preferred way to send:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* WhatsApp Button */}
          <button 
            onClick={handleWhatsApp}
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl transition transform hover:scale-105"
          >
            <span>🟢</span> WhatsApp
          </button>

          {/* Gmail Button */}
          <button 
            onClick={handleGmail}
            className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition transform hover:scale-105"
          >
            <span>🔴</span> Gmail / Email
          </button>
        </div>

        {/* Telegram Only Button */}
        <button 
          onClick={sendToTelegram}
          className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition flex items-center justify-center gap-2"
        >
          <span>🔵</span> Send to Telegram Only
        </button>

        {status && <p className="text-center mt-4 text-blue-400 font-medium">{status}</p>}
      </div>
    </section>
  );
}
