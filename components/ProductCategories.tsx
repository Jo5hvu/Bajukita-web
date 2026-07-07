import ImageSlot from "@/components/ImageSlot";
import { BRAND } from "@/lib/constants";
import { catalogueProducts } from "@/lib/products";
import Link from "next/link";

export default function ProductCategories() {
  return (
    <section id="products" className="bg-[#F5F5F4] px-4 py-10 md:px-16 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 grid gap-5 md:mb-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="mb-3 inline-block rounded-full bg-white px-3 py-2 text-[0.68rem] font-black uppercase text-[#A7592F] md:px-4 md:text-xs">
              Katalog item
            </p>
            <h2 className="max-w-3xl text-3xl font-black leading-none tracking-[-0.04em] text-[#0D0B09] md:text-6xl">
              item cetakan & pakaian
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-[#6D6E6C]">
            Pilih item yang anda mahu. Klik kad untuk lihat skrin item, atau
            terus WhatsApp kami untuk semak harga dan tempahan.
          </p>
        </div>

        <div className="rounded-[1.5rem] border border-[#BCBEBF] bg-[#EBEBEC] p-3 shadow-[0_20px_80px_rgba(246,198,47,0.08)] md:rounded-[2rem] md:p-8">
          <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-black uppercase text-[#A7592F]">
                Senarai katalog
              </p>
              <h3 className="mt-1 text-2xl font-black text-[#0D0B09]">
                Item tersedia
              </h3>
            </div>
            <Link
              href="/items"
              className="w-fit rounded-full bg-[#0D0B09] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#FD7C03]"
            >
              Lihat semua item
            </Link>
          </div>

          <div className="grid gap-3 min-[420px]:grid-cols-2 md:gap-4 lg:grid-cols-4">
            {catalogueProducts.map((item) => (
              <article
                key={item.id}
                className="rounded-[1.25rem] border border-[#BCBEBF] bg-white/75 p-2 transition hover:-translate-y-1 hover:border-[#FD7C03]"
              >
                <Link href={`/items/${item.id}`} className="block">
                  <ImageSlot
                    src={item.image}
                    label={`Letak ${item.image.split("/").pop()}`}
                    className="h-32 rounded-[1rem] sm:h-36"
                  />
                </Link>
                <div className="mt-3 flex items-center justify-between gap-3 px-1">
                  <div>
                    <Link
                      href={`/items/${item.id}`}
                      className="text-sm font-black leading-tight text-[#0D0B09] hover:text-[#A7592F]"
                    >
                      {item.name}
                    </Link>
                    <p className="mt-1 text-xs font-bold text-[#6D6E6C]">
                      {item.priceLabel}
                    </p>
                  </div>
                  <Link
                    href={`/items/${item.id}`}
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#0D0B09] text-sm font-black text-white transition hover:bg-[#F6C62F] hover:text-[#0D0B09]"
                    aria-label={`Lihat ${item.name}`}
                  >
                    &gt;
                  </Link>
                </div>
                <a
                  href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
                    `Hai Bajukita, saya berminat dengan ${item.name} (${item.code}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 block rounded-full border border-[#E8C84E]/50 bg-[#FFF8D6]/50 px-3 py-2 text-center text-xs font-black text-[#5A4224] transition hover:border-[#F6C62F] hover:bg-[#F6C62F]/20"
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
