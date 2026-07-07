import { catalogItems, productCategories } from "@/data/products";

export default function ProductCategories() {
  return (
    <section id="products" className="bg-white px-4 py-16 md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 inline-block rounded-full bg-[#FFE1C2] px-4 py-2 text-xs font-black text-[#FD7C03]">
            Kategori produk
          </p>
          <h2 className="text-3xl font-black text-[#1F1F1F] md:text-5xl">
            Pilih kategori baju dan kelengkapan.
          </h2>
          <p className="mt-4 text-base leading-7 text-[#6F625A]">
            Berdasarkan halaman Pakaian dan Kelengkapan Bajukita: susunan
            katalog dibuat ringan, senang dibaca, dan boleh dikembangkan tanpa
            pangkalan data.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {productCategories.map((product) => (
            <article
              key={product.name}
              className="flex min-h-[310px] flex-col rounded-3xl border border-[#EAD8C8] bg-[#FFF7EF] p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#FD7C03] hover:shadow-lg"
            >
              <span className="mb-5 w-fit rounded-full bg-white px-3 py-1 text-xs font-black text-[#FD7C03]">
                {product.tag}
              </span>

              <h3 className="text-xl font-black text-[#1F1F1F]">
                {product.name}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-6 text-[#6F625A]">
                {product.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {product.bestFor.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#EAD8C8] bg-white px-3 py-1 text-xs font-bold text-[#6F625A]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] border border-[#EAD8C8] bg-white p-6 shadow-sm md:p-8">
          <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-black uppercase text-[#FD7C03]">
                Senarai katalog
              </p>
              <h3 className="mt-1 text-2xl font-black text-[#1F1F1F]">
                Pakaian dan kelengkapan tersedia
              </h3>
            </div>
            <a
              href="#order"
              className="w-fit rounded-full bg-[#1F1F1F] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#FD7C03]"
            >
              Tanya stok & harga
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {catalogItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-[#EAD8C8] bg-[#FFF7EF] px-4 py-3"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-[#FD7C03]" />
                <span className="text-sm font-bold text-[#2B1B12]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
