import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RangeOverlay from './components/RangeOverlay';
import BrandManifesto from './components/BrandManifesto';
import Capabilities from './components/Capabilities';
import ProductGrid from './components/ProductGrid';
import Testimonials from './components/Testimonials';
import QualityLab from './components/QualityLab';
import QuoteForm from './components/QuoteForm';
import Faq from './components/Faq';
import ClientStrip from './components/ClientStrip';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import Insights from './components/Insights';
import IndustriesPage from './components/IndustriesPage';
import CapabilitiesPage from './components/CapabilitiesPage';
import AboutPage from './components/AboutPage';

function App() {
  const [rangeOpen, setRangeOpen] = useState(false);
  const [insightsOpen, setInsightsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [capabilitiesOpen, setCapabilitiesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <>
      <Header
        onInsightsOpen={() => setInsightsOpen(true)}
        onRangeOpen={() => setRangeOpen(true)}
        onIndustriesOpen={() => setIndustriesOpen(true)}
        onCapabilitiesOpen={() => setCapabilitiesOpen(true)}
        onAboutOpen={() => setAboutOpen(true)}
      />
      <Hero rangeOpen={rangeOpen} />
      <RangeOverlay isOpen={rangeOpen} onClose={() => setRangeOpen(false)} />

      <div style={{ position: 'relative', zIndex: 25 }}>
        <div style={{ height: '100vh' }} />
        <div style={{ backgroundColor: 'var(--bg-base)' }}>
          <BrandManifesto />
          <Capabilities />
          <ProductGrid />
          <Testimonials />
          <QualityLab />
          <QuoteForm />
          <Faq />
          <ClientStrip />
          <Footer />
        </div>
      </div>

      <CookieConsent />
      <Insights isOpen={insightsOpen} onClose={() => setInsightsOpen(false)} />
      <IndustriesPage isOpen={industriesOpen} onClose={() => setIndustriesOpen(false)} />
      <CapabilitiesPage isOpen={capabilitiesOpen} onClose={() => setCapabilitiesOpen(false)} />
      <AboutPage isOpen={aboutOpen} onClose={() => setAboutOpen(false)} />
    </>
  );
}

export default App;
