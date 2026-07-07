import {
  catalogItems,
  getWhatsappLink,
  productCategories,
} from "@/data/products";
import ImageSlot from "@/components/ImageSlot";
import { BRAND } from "@/lib/constants";
import Link from "next/link";

export default function ProductCategories() {
  return (
    <section id="products" className="bg-[#F5F5F4] px-4 py-16 md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="mb-3 inline-block rounded-full bg-white px-4 py-2 text-xs font-black uppercase text-[#A7592F]">
              Kategori produk
            </p>
            <h2 className="max-w-3xl text-4xl font-black leading-none tracking-[-0.04em] text-[#0D0B09] md:text-6xl">
              koleksi pakaian & kelengkapan
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-[#6D6E6C]">
            Pilih item yang anda mahu, kemudian terus WhatsApp kami untuk
            semak harga, material, saiz, dan tempoh siap.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {productCategories.map((product) => (
            <article
              key={product.name}
              className="group flex min-h-[520px] flex-col rounded-[2rem] border border-[#BCBEBF] bg-[#EBEBEC] p-4 transition hover:-translate-y-1 hover:border-[#FD7C03]"
            >
              <ImageSlot
                src={product.image}
                label={`Letak ${product.image.split("/").pop()}`}
                className="h-64"
              />

              <div className="flex flex-1 flex-col p-3">
                <span className="mt-4 w-fit rounded-full bg-white px-3 py-1 text-xs font-black text-[#A7592F]">
                  {product.tag}
                </span>

                <h3 className="mt-4 text-2xl font-black leading-tight tracking-[-0.03em] text-[#0D0B09]">
                  {product.name}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-[#6D6E6C]">
                  {product.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {product.bestFor.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#BCBEBF] bg-white/70 px-3 py-1 text-xs font-bold text-[#5A4224]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] border border-[#BCBEBF] bg-[#EBEBEC] p-6 shadow-[0_20px_80px_rgba(246,198,47,0.08)] md:p-8">
          <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-black uppercase text-[#A7592F]">
                Senarai katalog
              </p>
              <h3 className="mt-1 text-2xl font-black text-[#0D0B09]">
                Pakaian dan kelengkapan tersedia
              </h3>
            </div>
            <a
              href={`https://wa.me/${BRAND.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit rounded-full bg-[#0D0B09] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#FD7C03]"
            >
              WhatsApp kami
            </a>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {catalogItems.map((item) => (
              <article
                key={item.name}
                className="rounded-[1.5rem] border border-[#BCBEBF] bg-white/75 p-3 transition hover:-translate-y-1 hover:border-[#FD7C03]"
              >
                <Link href={`/products/${item.slug}`} className="block">
                  <ImageSlot
                    src={item.image}
                    label={`Letak ${item.image.split("/").pop()}`}
                    className="h-48 rounded-[1.25rem]"
                  />
                </Link>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <div>
                    <Link
                      href={`/products/${item.slug}`}
                      className="text-base font-black leading-tight text-[#0D0B09] hover:text-[#A7592F]"
                    >
                      {item.name}
                    </Link>
                    <p className="mt-1 text-xs font-bold text-[#6D6E6C]">
                      {item.price}
                    </p>
                  </div>
                  <Link
                    href={`/products/${item.slug}`}
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#0D0B09] text-lg font-black text-white transition hover:bg-[#F6C62F] hover:text-[#0D0B09]"
                    aria-label={`Lihat ${item.name}`}
                  >
                    ↗
                  </Link>
                </div>
                <a
                    href={getWhatsappLink(BRAND.whatsapp, item.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 block rounded-full border border-[#E8C84E]/50 bg-[#FFF8D6]/50 px-4 py-3 text-center text-xs font-black text-[#5A4224] transition hover:border-[#F6C62F] hover:bg-[#F6C62F]/20"
                    aria-label={`WhatsApp untuk ${item.name}`}
                  >
                    Tanya harga WhatsApp
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
