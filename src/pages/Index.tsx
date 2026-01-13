import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhoSection from '@/components/WhoSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import FeatureGrid from '@/components/FeatureGrid';
import TrustSection from '@/components/TrustSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar variant="dark" />
      <Hero />
      <WhoSection />
      <ProblemSection />
      <SolutionSection />
      <FeatureGrid />
      <TrustSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
