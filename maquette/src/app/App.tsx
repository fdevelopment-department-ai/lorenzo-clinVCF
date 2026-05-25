import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { DashboardPreview } from './components/DashboardPreview';
import { PhilosophySection } from './components/PhilosophySection';
import { ModulesSection } from './components/ModulesSection';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <DashboardPreview />
        <PhilosophySection />
        <ModulesSection />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}