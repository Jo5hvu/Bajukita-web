import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import OrderCTA from "@/components/OrderCTA";
import ProductCategories from "@/components/ProductCategories";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#EBEBEC] text-[#1F1F1F]">
      <Navigation />
      <Hero />
      <ProductCategories />
      <OrderCTA />
      <Footer />
    </main>
  );
}
