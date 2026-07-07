"use client";

import type { ProductCategory, ProductSort } from "@/lib/products";
import { productCategories } from "@/lib/products";

type ProductFiltersProps = {
  activeCategory: "All" | ProductCategory;
  onCategoryChange: (category: "All" | ProductCategory) => void;
  search: string;
  onSearchChange: (search: string) => void;
  sort: ProductSort;
  onSortChange: (sort: ProductSort) => void;
};

export default function ProductFilters({
  activeCategory,
  onCategoryChange,
  search,
  onSearchChange,
  sort,
  onSortChange,
}: ProductFiltersProps) {
  return (
    <aside className="rounded-[2rem] border border-[#EAD8C8] bg-white/80 p-5 shadow-sm">
      <div className="mb-6">
        <label
          htmlFor="product-search"
          className="text-xs font-black uppercase text-[#A7592F]"
        >
          Search
        </label>
        <input
          id="product-search"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search product name"
          className="mt-3 w-full rounded-2xl border border-[#EAD8C8] bg-[#F5F5F4] px-4 py-3 text-sm font-semibold text-[#0D0B09] outline-none transition focus:border-[#fd7c03]"
        />
      </div>

      <div className="mb-6">
        <p className="text-xs font-black uppercase text-[#A7592F]">
          Categories
        </p>
        <div className="mt-3 grid gap-2">
          {(["All", ...productCategories] as Array<"All" | ProductCategory>).map(
            (category) => (
              <button
                key={category}
                type="button"
                onClick={() => onCategoryChange(category)}
                className={`rounded-2xl px-4 py-3 text-left text-sm font-black transition ${
                  activeCategory === category
                    ? "bg-[#fd7c03] text-white"
                    : "bg-[#F5F5F4] text-[#5A4224] hover:bg-[#FFF8D6]"
                }`}
              >
                {category}
              </button>
            )
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="product-sort"
          className="text-xs font-black uppercase text-[#A7592F]"
        >
          Sort
        </label>
        <select
          id="product-sort"
          value={sort}
          onChange={(event) => onSortChange(event.target.value as ProductSort)}
          className="mt-3 w-full rounded-2xl border border-[#EAD8C8] bg-[#F5F5F4] px-4 py-3 text-sm font-black text-[#0D0B09] outline-none transition focus:border-[#fd7c03]"
        >
          <option value="name">Name</option>
          <option value="price-asc">Price low-to-high</option>
          <option value="price-desc">Price high-to-low</option>
        </select>
      </div>
    </aside>
  );
}
