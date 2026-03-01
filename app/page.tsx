'use client';

import Link from 'next/link';
import { ArrowRight, Code2, Sparkles, Zap, Rocket } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            {/* Animated Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary-500/10 border border-primary-500/30 rounded-full px-6 py-2 animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary-400" />
              <span className="text-primary-300 font-body text-lg">Available for Freelance Projects</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold animate-slide-up">
              <span className="block text-white mb-2">G.G. Induwara</span>
              <span className="block gradient-text">Deshan</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl sm:text-2xl md:text-3xl text-slate-300 font-body max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Full-stack Web Developer
              <span className="block mt-2 text-primary-400">
                Specializing in Next.js & Tailwind CSS
              </span>
            </p>

            {/* Description */}
            <p className="text-lg sm:text-xl text-slate-400 font-body max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Crafting fast, responsive, and high-performance web applications that deliver exceptional user experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Link
                href="/projects"
                className="group relative px-8 py-4 bg-primary-500 text-white font-body text-lg font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:bg-primary-600 hover:shadow-2xl hover:shadow-primary-500/50 hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>View My Work</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              
              <Link
                href="/contact"
                className="px-8 py-4 bg-slate-800/50 border-2 border-primary-500/30 text-primary-300 font-body text-lg font-semibold rounded-xl transition-all duration-300 hover:border-primary-400 hover:bg-slate-800 hover:shadow-lg hover:shadow-primary-500/20 hover:-translate-y-1"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <Code2 className="w-24 h-24 text-primary-400 float-animation" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <Zap className="w-32 h-32 text-primary-400 float-animation" style={{ animationDelay: '1s' }} />
        </div>
        <div className="absolute top-1/2 right-20 opacity-10">
          <Rocket className="w-20 h-20 text-primary-400 float-animation" style={{ animationDelay: '2s' }} />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-2 p-6 rounded-2xl bg-slate-800/30 border border-primary-500/20 hover:border-primary-400/40 transition-all duration-300">
              <div className="text-5xl font-display font-bold gradient-text">5+</div>
              <div className="text-xl text-slate-300 font-body">Technologies Mastered</div>
            </div>
            <div className="text-center space-y-2 p-6 rounded-2xl bg-slate-800/30 border border-primary-500/20 hover:border-primary-400/40 transition-all duration-300">
              <div className="text-5xl font-display font-bold gradient-text">10+</div>
              <div className="text-xl text-slate-300 font-body">Projects Completed</div>
            </div>
            <div className="text-center space-y-2 p-6 rounded-2xl bg-slate-800/30 border border-primary-500/20 hover:border-primary-400/40 transition-all duration-300">
              <div className="text-5xl font-display font-bold gradient-text">100%</div>
              <div className="text-xl text-slate-300 font-body">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white">
              Building The <span className="gradient-text">Future</span> of Web
            </h2>
            <p className="text-xl text-slate-400 font-body max-w-3xl mx-auto leading-relaxed">
              Based in Kataragama, Sri Lanka, I transform ideas into powerful web applications 
              using cutting-edge technologies. From educational platforms to entertainment portals, 
              I bring visions to life with clean code and stunning design.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 font-body text-lg font-semibold transition-colors group"
            >
              <span>Learn More About Me</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
