import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Certifications from './components/Certifications';
import About from './components/About';
import Industries from './components/Industries';
import Portfolio from './components/Portfolio';
import Technology from './components/Technology';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EmergencyBanner from './components/EmergencyBanner';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Skip to main content link for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-red-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
        >
          Skip to main content
        </a>
        
        <Header />
        <main id="main-content">
          <Hero />
          <Services />
          <WhyChooseUs />
          <Certifications />
          <About />
          <Industries />
          <Portfolio />
          <Technology />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <EmergencyBanner />
        <WhatsAppButton phoneNumber="919313624114" />
      </div>
    </Router>
  );
}

export default App;
