import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import OrderCTA from "@/components/OrderCTA";
import ProductCategories from "@/components/ProductCategories";
import ServiceHighlights from "@/components/ServiceHighlights";
import TermsProcess from "@/components/TermsProcess";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#FFF7EF] text-[#1F1F1F]">
      <Navigation />
      <Hero />
      <ProductCategories />
      <ServiceHighlights />
      <TermsProcess />
      <OrderCTA />
      <Footer />
    </main>
  );
}
