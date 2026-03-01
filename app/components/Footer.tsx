'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail, Heart, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-primary-900/30 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold gradient-text">
              G.G. Induwara Deshan
            </h3>
            <p className="text-slate-400 font-body text-lg">
              Full-stack Web Developer specializing in modern web technologies and creating exceptional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold text-primary-400">
              Quick Links
            </h4>
            <div className="flex flex-col space-y-2">
              <Link href="/" className="text-slate-400 hover:text-primary-400 transition-colors font-body text-lg">
                Home
              </Link>
              <Link href="/about" className="text-slate-400 hover:text-primary-400 transition-colors font-body text-lg">
                About
              </Link>
              <Link href="/projects" className="text-slate-400 hover:text-primary-400 transition-colors font-body text-lg">
                Projects
              </Link>
              <Link href="/contact" className="text-slate-400 hover:text-primary-400 transition-colors font-body text-lg">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold text-primary-400">
              Get In Touch
            </h4>
            <div className="flex flex-col space-y-3">
              <a
                href="mailto:gginduwaradeshan@gmail.com"
                className="flex items-center space-x-2 text-slate-400 hover:text-primary-400 transition-colors font-body text-lg"
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
              <a
                href="https://wa.me/94761562585"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-slate-400 hover:text-primary-400 transition-colors font-body text-lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
              <a
                href="https://t.me/gginduwaradeshan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-slate-400 hover:text-primary-400 transition-colors font-body text-lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Telegram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-900/30">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 font-body text-lg flex items-center">
              Made with <Heart className="w-4 h-4 mx-2 text-red-500 fill-red-500" /> by G.G. Induwara Deshan
            </p>
            <p className="text-slate-500 font-body text-lg">
              &copy; {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
