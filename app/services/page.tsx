'use client';

import { Code2, Smartphone, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Custom Web Development',
    description: 'Building tailored web applications from scratch using modern technologies like Next.js, React, and Tailwind CSS. Each project is crafted with attention to detail, ensuring scalability and maintainability.',
    features: [
      'Full-stack development',
      'API integration',
      'Database design',
      'Authentication systems',
      'Content management',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Smartphone,
    title: 'Responsive UI Design',
    description: 'Creating beautiful, intuitive interfaces that work flawlessly across all devices. From desktop to mobile, your users will enjoy a seamless experience with pixel-perfect designs.',
    features: [
      'Mobile-first approach',
      'Cross-browser compatibility',
      'Accessibility standards',
      'Modern animations',
      'Interactive components',
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Zap,
    title: 'Speed Optimization',
    description: 'Optimizing your web applications for lightning-fast performance. I implement best practices to ensure your site loads quickly, ranks well, and keeps users engaged.',
    features: [
      'Image optimization',
      'Code splitting',
      'Lazy loading',
      'SEO optimization',
      'Core Web Vitals tuning',
    ],
    color: 'from-yellow-500 to-orange-500',
  },
];

const process = [
  {
    step: '01',
    title: 'Discovery',
    description: 'Understanding your vision, goals, and requirements to create a solid foundation.',
  },
  {
    step: '02',
    title: 'Design',
    description: 'Crafting wireframes and mockups that align with your brand and user needs.',
  },
  {
    step: '03',
    title: 'Development',
    description: 'Building your application with clean code, modern technologies, and best practices.',
  },
  {
    step: '04',
    title: 'Deployment',
    description: 'Launching your project and ensuring everything runs smoothly in production.',
  },
];

export default function Services() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold mb-6">
            My <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-slate-400 font-body max-w-3xl mx-auto">
            Comprehensive web development solutions tailored to bring your ideas to life
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-cyan-500 mx-auto rounded-full mt-6" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-slate-900/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-8 hover:border-primary-400/40 transition-all duration-300 card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} bg-opacity-20 flex items-center justify-center mb-6`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 font-body text-lg leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-3">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 font-body text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-center text-white mb-4">
            My <span className="gradient-text">Process</span>
          </h2>
          <p className="text-xl text-slate-400 font-body text-center max-w-2xl mx-auto mb-12">
            A streamlined approach to delivering exceptional results
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div
                key={item.step}
                className="relative bg-slate-900/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-6 hover:border-primary-400/40 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Step Number */}
                <div className="text-6xl font-display font-bold gradient-text opacity-30 mb-4">
                  {item.step}
                </div>

                {/* Title */}
                <h3 className="text-xl font-display font-bold text-white mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 font-body text-lg leading-relaxed">
                  {item.description}
                </p>

                {/* Arrow for desktop */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-primary-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-primary-500/10 to-cyan-500/10 border border-primary-500/30 rounded-2xl p-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-slate-400 font-body mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help bring your vision to life with cutting-edge web technologies
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-4 bg-primary-500 text-white font-body text-lg font-semibold rounded-xl transition-all duration-300 hover:bg-primary-600 hover:shadow-2xl hover:shadow-primary-500/50 hover:-translate-y-1"
            >
              Get In Touch
            </a>
            <a
              href="/projects"
              className="px-8 py-4 bg-slate-800/50 border-2 border-primary-500/30 text-primary-300 font-body text-lg font-semibold rounded-xl transition-all duration-300 hover:border-primary-400 hover:bg-slate-800 hover:shadow-lg hover:shadow-primary-500/20 hover:-translate-y-1"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
