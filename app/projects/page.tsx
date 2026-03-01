'use client';

import { ExternalLink, GraduationCap, Smartphone, Music } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'School Management System',
    description: 'A comprehensive web platform designed for educational institutions to manage their digital presence, student information, announcements, and administrative tasks. Features include student portals, teacher dashboards, attendance tracking, and parent communication tools.',
    icon: GraduationCap,
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Database'],
    color: 'from-blue-500 to-cyan-500',
    features: [
      'Student & Teacher Portals',
      'Attendance Management',
      'Grade Tracking System',
      'Parent Communication',
      'Event Calendar',
    ],
  },
  {
    id: 2,
    title: 'Mobile Phone Shop',
    description: 'A modern e-commerce website for showcasing and selling mobile devices. Built with a sleek design, this platform features product catalogs, detailed specifications, comparison tools, shopping cart functionality, and secure checkout process.',
    icon: Smartphone,
    tags: ['E-commerce', 'React', 'Tailwind', 'Payment Integration'],
    color: 'from-purple-500 to-pink-500',
    features: [
      'Product Catalog',
      'Advanced Search & Filters',
      'Shopping Cart',
      'Secure Checkout',
      'Order Tracking',
    ],
  },
  {
    id: 3,
    title: 'DJ VIP & Music Portal',
    description: 'A full-featured entertainment website for a DJ to sell VIP packages, publish latest tracks, manage bookings, and engage with fans. Includes audio streaming, event calendar, ticket sales, and exclusive member content areas.',
    icon: Music,
    tags: ['Entertainment', 'Next.js', 'Streaming', 'Membership'],
    color: 'from-orange-500 to-red-500',
    features: [
      'Audio Streaming',
      'VIP Membership System',
      'Event Booking',
      'Track Publishing',
      'Fan Engagement Tools',
    ],
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-slate-400 font-body max-w-3xl mx-auto">
            A showcase of web applications I've built across various industries
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-cyan-500 mx-auto rounded-full mt-6" />
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-slate-900/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl overflow-hidden hover:border-primary-400/40 transition-all duration-300 card-hover animate-slide-up`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image/Visual Section */}
                <div className={`relative bg-gradient-to-br ${project.color} p-12 flex items-center justify-center`}>
                  <div className="relative z-10">
                    <project.icon className="w-32 h-32 text-white opacity-90" strokeWidth={1.5} />
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-12 flex flex-col justify-between">
                  <div>
                    {/* Title */}
                    <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
                      {project.title}
                    </h2>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-primary-500/20 border border-primary-500/30 text-primary-300 text-sm font-body rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Description */}
                    <p className="text-slate-400 font-body text-lg leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      <h3 className="text-lg font-display font-semibold text-white mb-3">
                        Key Features:
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center space-x-2 text-slate-300 font-body"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-4">
                    <button
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-primary-500/20 border border-primary-500/30 text-primary-300 font-body text-lg font-semibold rounded-xl transition-all duration-300 hover:bg-primary-500/30 hover:border-primary-400/50 group"
                    >
                      <span>View Project</span>
                      <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-br from-primary-500/10 to-cyan-500/10 border border-primary-500/30 rounded-2xl p-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-slate-400 font-body mb-8 max-w-2xl mx-auto">
            Let's collaborate and create something amazing together
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-primary-500 text-white font-body text-lg font-semibold rounded-xl transition-all duration-300 hover:bg-primary-600 hover:shadow-2xl hover:shadow-primary-500/50 hover:-translate-y-1"
          >
            Start a Project
          </a>
        </div>
      </div>
    </div>
  );
}
