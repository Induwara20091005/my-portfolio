'use client';

import { Code2, Palette, Zap, Users, Award, Target } from 'lucide-react';

const techStack = [
  { name: 'HTML', color: 'from-orange-500 to-red-500', level: 95 },
  { name: 'CSS', color: 'from-blue-500 to-cyan-500', level: 90 },
  { name: 'JavaScript', color: 'from-yellow-400 to-yellow-600', level: 90 },
  { name: 'Next.js', color: 'from-slate-400 to-slate-600', level: 85 },
  { name: 'React', color: 'from-cyan-400 to-blue-500', level: 85 },
  { name: 'Tailwind CSS', color: 'from-teal-400 to-cyan-500', level: 95 },
];

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and efficient code following industry best practices.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimizing applications for lightning-fast load times and smooth user experiences.',
  },
  {
    icon: Palette,
    title: 'Modern Design',
    description: 'Creating beautiful, responsive interfaces that look great on all devices.',
  },
  {
    icon: Users,
    title: 'User-Focused',
    description: 'Building applications with the end-user in mind, ensuring intuitive interactions.',
  },
];

export default function About() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        {/* Bio Section */}
        <div className="max-w-4xl mx-auto mb-20 animate-slide-up">
          <div className="bg-slate-900/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-8 sm:p-12 space-y-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-400 to-cyan-500 flex items-center justify-center">
                <Code2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-display font-bold text-white">G.G. Induwara Deshan</h2>
                <p className="text-lg text-primary-400 font-body">Full-stack Web Developer</p>
              </div>
            </div>
            
            <p className="text-lg text-slate-300 font-body leading-relaxed">
              I am a passionate Web Developer dedicated to building fast, responsive, and high-performance web applications. 
              With expertise in Next.js and Tailwind CSS, I focus on creating clean code and exceptional user experiences. 
              Whether it's an educational platform or a high-energy entertainment site, I bring ideas to life with modern web technologies.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <div className="flex items-center space-x-3">
                <Target className="w-5 h-5 text-primary-400" />
                <span className="text-slate-300 font-body text-lg">Based in Kataragama, Sri Lanka</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="w-5 h-5 text-primary-400" />
                <span className="text-slate-300 font-body text-lg">5+ Core Technologies</span>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-center text-white mb-12">
            What I <span className="gradient-text">Bring</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="bg-slate-900/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-6 hover:border-primary-400/40 transition-all duration-300 card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-cyan-500/20 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-xl font-display font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-400 font-body text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-center text-white mb-12">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <div className="space-y-8">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className="animate-slide-in-right"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl font-body font-semibold text-white">
                    {tech.name}
                  </span>
                  <span className="text-lg font-body font-medium text-primary-400">
                    {tech.level}%
                  </span>
                </div>
                <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${tech.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${tech.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col items-center space-y-4 bg-gradient-to-br from-primary-500/10 to-cyan-500/10 border border-primary-500/30 rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Let's Build Something Amazing
            </h3>
            <p className="text-lg text-slate-400 font-body max-w-2xl">
              I'm always excited to work on new projects and collaborate with clients who value quality and innovation.
            </p>
            <a
              href="/contact"
              className="px-8 py-4 bg-primary-500 text-white font-body text-lg font-semibold rounded-xl transition-all duration-300 hover:bg-primary-600 hover:shadow-2xl hover:shadow-primary-500/50 hover:-translate-y-1"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
