import React from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Header from './components/Header';
import AmbientBackground from './components/AmbientBackground';
import SocialBar from './components/SocialBar';
import Hero from './components/Hero';
import FooterScroll from './components/FooterScroll';
import AboutSection from './components/AboutSection';
import Technologies from './components/Technologies';
import Education from './components/Education';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

function PortfolioApp() {
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen relative overflow-x-hidden selection:bg-blue-600 selection:text-white font-sans transition-colors duration-300 ${isDark
        ? 'bg-[#06080F] text-slate-200'
        : 'bg-[#F8FAFC] text-slate-800'
        }`}
    >
      <AmbientBackground />

      {/* Hero Viewport Section: Header -> Hero (with SocialBar) -> FooterScroll */}
      <div id="home" className="min-h-screen flex flex-col justify-between relative z-10">
        <Header />

        <main
          className="relative flex-1 flex flex-col justify-center px-6 md:px-14 lg:px-20 py-4 sm:py-6"
          data-purpose="hero-main-container"
        >
          <SocialBar />
          <Hero />
        </main>

        <FooterScroll />
      </div>

      {/* About Section */}
      <AboutSection />


      {/* Technologies Section */}
      <Technologies />
      {/* Education Section */}
      <Education />
      {/* Project Section */}
      <Project />
      {/* Contact Section */}
      <Contact />
      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}