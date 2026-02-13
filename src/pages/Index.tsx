import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import ServicesSection from "@/components/ServicesSection";
import AmbulanceSection from "@/components/AmbulanceSection";
import ValuePropsSection from "@/components/ValuePropsSection";
import AppDownloadSection from "@/components/AppDownloadSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <main>
      <HeroSection />
      <ProblemsSection />
      <ServicesSection />
      <AmbulanceSection />
      <ValuePropsSection />
      <AppDownloadSection />
      <CTASection />
    </main>
    <Footer />
  </div>
);

export default Index;
