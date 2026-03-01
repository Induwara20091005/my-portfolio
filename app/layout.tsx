import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "G.G. Induwara Deshan - Full-stack Web Developer",
  description: "Professional portfolio of G.G. Induwara Deshan, a Full-stack Web Developer specializing in Next.js, React, and Tailwind CSS. Based in Kataragama, Sri Lanka.",
  keywords: ["Web Developer", "Next.js", "React", "Tailwind CSS", "Full-stack Developer", "Sri Lanka"],
  authors: [{ name: "G.G. Induwara Deshan" }],
  openGraph: {
    title: "G.G. Induwara Deshan - Full-stack Web Developer",
    description: "Professional portfolio showcasing modern web development projects and services.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="relative min-h-screen flex flex-col">
          {/* Background Pattern */}
          <div className="fixed inset-0 tech-grid opacity-30 pointer-events-none" />
          
          {/* Gradient Overlay */}
          <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pointer-events-none" />
          
          {/* Content */}
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-16">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
