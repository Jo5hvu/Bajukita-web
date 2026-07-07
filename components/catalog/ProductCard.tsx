import type { Product } from "@/lib/products";
import Link from "next/link";

type ProductCardProps = {
  product: Product;
  viewMode: "grid" | "list";
};

export default function ProductCard({ product, viewMode }: ProductCardProps) {
  const isList = viewMode === "list";

  return (
    <article
      className={`group rounded-[1.25rem] border border-[#EAD8C8] bg-white/85 p-2 shadow-sm transition hover:-translate-y-1 hover:border-[#fd7c03] hover:shadow-lg ${
        isList ? "grid gap-3 sm:grid-cols-[140px_1fr]" : ""
      }`}
    >
      <Link
        href={`/items/${product.id}`}
        className={`relative block overflow-hidden rounded-[1rem] bg-[#F5F5F4] ${
          isList ? "min-h-36" : "aspect-[1/0.82] sm:aspect-[1/0.78]"
        }`}
      >
        <div
          className="absolute inset-0 bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${product.image})` }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0,transparent_48%,rgba(246,198,47,0.14)_100%)]" />
      </Link>

      <div className="p-2">
        <div className="flex items-center gap-2">
          <span className="h-px w-6 bg-[#BCBEBF]" />
          <p className="text-xs font-bold uppercase text-[#6D6E6C]">
            {product.code}
          </p>
        </div>

        <Link
          href={`/items/${product.id}`}
          className="mt-2 block text-base font-black leading-tight text-[#0D0B09] transition group-hover:text-[#fd7c03]"
        >
          {product.name}
        </Link>

        {product.specs && (
          <div className="mt-2 space-y-1">
            {product.specs.slice(0, 2).map((spec) => (
              <p key={spec} className="text-xs font-semibold text-[#6D6E6C]">
                {spec}
              </p>
            ))}
          </div>
        )}

        <div className="mt-3 flex items-center justify-between gap-3">
          <p className="text-base font-black text-[#0D0B09]">
            {product.priceLabel}
          </p>
          <Link
            href={`/items/${product.id}`}
            className="grid h-8 w-8 place-items-center rounded-full bg-[#0D0B09] text-sm font-black text-white transition hover:bg-[#F6C62F] hover:text-[#0D0B09]"
            aria-label={`View ${product.name}`}
          >
            &gt;
          </Link>
        </div>
      </div>
    </article>
  );
}
