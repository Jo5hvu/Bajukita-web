import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import ProductCatalogue from "@/components/catalog/ProductCatalogue";

export const metadata = {
  title: "Items | Bajukita.my",
  description: "Product catalogue for Bajukita.my custom printing items.",
};

export default function ItemsPage() {
  return (
    <main className="min-h-screen bg-[#EBEBEC] text-[#1F1F1F]">
      <Navigation />
      <ProductCatalogue />
      <Footer />
    </main>
  );
}
