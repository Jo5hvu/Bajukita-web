import type { Product } from "@/lib/products";
import ProductCard from "@/components/catalog/ProductCard";

type ProductGridProps = {
  products: Product[];
  viewMode: "grid" | "list";
};

export default function ProductGrid({ products, viewMode }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="rounded-[2rem] border border-dashed border-[#BCBEBF] bg-white/70 px-6 py-16 text-center">
        <h2 className="text-2xl font-black text-[#0D0B09]">
          Tiada produk dijumpai.
        </h2>
        <p className="mt-3 text-sm font-semibold text-[#6D6E6C]">
          Cuba tukar kata carian, kategori, atau susunan harga.
        </p>
      </div>
    );
  }

  return (
    <div
      className={
        viewMode === "list"
          ? "grid gap-4"
          : "grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      }
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} viewMode={viewMode} />
      ))}
    </div>
  );
}
