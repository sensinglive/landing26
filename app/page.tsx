import Header from "./components/Header";
import Hero from "./components/Hero";
import RiskSection from "./components/RiskSection";
import SolutionSection from "./components/SolutionSection";
import EcosystemSection from "./components/EcosystemSection";
import PublicSectorSection from "./components/PublicSectorSection";
import PlatformSection from "./components/PlatformSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-page">
      <Header />
      <Hero />
      <RiskSection />
      <SolutionSection />
      <EcosystemSection />
      <PublicSectorSection />
      <PlatformSection />
      <CTASection />
      <Footer />
    </main>
  );
}
