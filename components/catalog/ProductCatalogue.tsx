"use client";

import ProductFilters from "@/components/catalog/ProductFilters";
import ProductGrid from "@/components/catalog/ProductGrid";
import type { ProductCategory, ProductSort } from "@/lib/products";
import { catalogueProducts } from "@/lib/products";
import { useMemo, useState } from "react";

export default function ProductCatalogue() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<"All" | ProductCategory>(
    "All"
  );
  const [sort, setSort] = useState<ProductSort>("name");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return catalogueProducts
      .filter((product) => {
        const matchesCategory =
          activeCategory === "All" || product.category === activeCategory;
        const matchesSearch = product.name
          .toLowerCase()
          .includes(normalizedSearch);

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sort === "price-asc") {
          return a.price - b.price;
        }

        if (sort === "price-desc") {
          return b.price - a.price;
        }

        return a.name.localeCompare(b.name);
      });
  }, [activeCategory, search, sort]);

  const filters = (
    <ProductFilters
      activeCategory={activeCategory}
      onCategoryChange={setActiveCategory}
      search={search}
      onSearchChange={setSearch}
      sort={sort}
      onSortChange={setSort}
    />
  );

  return (
    <section className="px-4 py-10 md:px-16 md:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="mb-3 inline-flex rounded-full bg-[#FFF8D6] px-4 py-2 text-xs font-black uppercase text-[#A7592F]">
            Product catalogue
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-none tracking-[-0.05em] text-[#0D0B09] md:text-7xl">
            Items
          </h1>
        </div>

        <div className="grid gap-8 md:grid-cols-[230px_1fr] xl:grid-cols-[260px_1fr]">
          <div className="hidden md:block">{filters}</div>

          <div>
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-[1.75rem] border border-[#EAD8C8] bg-white/80 px-4 py-4">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsFilterOpen(true)}
                  className="rounded-2xl border border-[#EAD8C8] bg-[#F5F5F4] px-4 py-3 text-sm font-black text-[#0D0B09] md:hidden"
                >
                  Filter
                </button>
                <p className="text-sm font-black text-[#6D6E6C]">
                  Showing {filteredProducts.length} of {catalogueProducts.length}{" "}
                  results
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setViewMode("grid")}
                  className={`grid h-11 w-11 place-items-center rounded-2xl text-lg font-black ${
                    viewMode === "grid"
                      ? "bg-[#fd7c03] text-white"
                      : "bg-[#F5F5F4] text-[#0D0B09]"
                  }`}
                  aria-label="Grid view"
                >
                  ⊞
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("list")}
                  className={`grid h-11 w-11 place-items-center rounded-2xl text-lg font-black ${
                    viewMode === "list"
                      ? "bg-[#fd7c03] text-white"
                      : "bg-[#F5F5F4] text-[#0D0B09]"
                  }`}
                  aria-label="List view"
                >
                  ☰
                </button>
              </div>
            </div>

            <ProductGrid products={filteredProducts} viewMode={viewMode} />
          </div>
        </div>
      </div>

      {isFilterOpen && (
        <div className="fixed inset-0 z-[60] bg-black/40 p-4 md:hidden">
          <div className="ml-auto h-full max-w-sm overflow-y-auto rounded-[2rem] bg-[#EBEBEC] p-4 shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-lg font-black text-[#0D0B09]">Filter</p>
              <button
                type="button"
                onClick={() => setIsFilterOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-full bg-[#0D0B09] text-lg font-black text-white"
                aria-label="Close filters"
              >
                ×
              </button>
            </div>
            {filters}
          </div>
        </div>
      )}
    </section>
  );
}
