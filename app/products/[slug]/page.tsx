import Footer from "@/components/Footer";
import ImageSlot from "@/components/ImageSlot";
import Navigation from "@/components/Navigation";
import {
  catalogItems,
  getCatalogItem,
  getWhatsappLink,
} from "@/data/products";
import { BRAND } from "@/lib/constants";
import Link from "next/link";
import { notFound } from "next/navigation";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return catalogItems.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const item = getCatalogItem(slug);

  if (!item) {
    return {
      title: "Produk Tidak Dijumpai | Bajukita.my",
    };
  }

  return {
    title: `${item.name} | Bajukita.my`,
    description: `Lihat pilihan warna, harga, dan pertanyaan WhatsApp untuk ${item.name}.`,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const item = getCatalogItem(slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#EBEBEC] text-[#0D0B09]">
      <Navigation />

      <section className="px-4 py-8 md:px-16 md:py-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <Link
              href="/#products"
              className="rounded-full border border-[#BCBEBF] bg-white/70 px-4 py-2 text-xs font-black text-[#5A4224] transition hover:border-[#F6C62F]"
            >
              Kembali ke produk
            </Link>
            <a
              href={getWhatsappLink(BRAND.whatsapp, item.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#0D0B09] px-5 py-2 text-xs font-black text-white transition hover:bg-[#F6C62F] hover:text-[#0D0B09]"
            >
              Tanya melalui WhatsApp
            </a>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[1.75rem] border border-[#BCBEBF] bg-[#F5F5F4] p-3 shadow-[0_18px_70px_rgba(246,198,47,0.1)]">
              <ImageSlot
                src={item.image}
                label={`Letak ${item.image.split("/").pop()}`}
                className="h-[320px] md:h-[390px]"
              />
            </div>

            <div className="rounded-[1.75rem] border border-[#BCBEBF] bg-white/75 p-5 md:p-7">
              <p className="mb-3 inline-flex rounded-full bg-[#FFF8D6] px-3 py-1.5 text-xs font-black uppercase text-[#A7592F]">
                Detail produk
              </p>
              <h1 className="text-3xl font-black leading-none tracking-[-0.04em] md:text-5xl">
                {item.name}
              </h1>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.25rem] border border-[#EAD8C8] bg-[#F5F5F4] p-4">
                  <p className="text-xs font-black uppercase text-[#6D6E6C]">
                    Harga
                  </p>
                  <p className="mt-2 text-2xl font-black text-[#0D0B09]">
                    {item.price}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#6D6E6C]">
                    Sila WhatsApp untuk harga tepat mengikut kuantiti, saiz, dan
                    jenis cetakan.
                  </p>
                </div>

                <div className="rounded-[1.25rem] border border-[#EAD8C8] bg-[#FFF8D6]/60 p-4">
                  <p className="text-xs font-black uppercase text-[#A7592F]">
                    Tempahan
                  </p>
                  <p className="mt-2 text-2xl font-black text-[#0D0B09]">
                    WhatsApp
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#6D6E6C]">
                    Hantar pilihan warna, kuantiti, logo, dan tarikh diperlukan.
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <h2 className="text-xl font-black">Pilihan warna</h2>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {item.colors.map((color) => (
                    <div
                      key={color.name}
                      className="flex items-center gap-3 rounded-xl border border-[#EAD8C8] bg-[#F5F5F4] px-3 py-2"
                    >
                      <span
                        className="h-9 w-9 rounded-full border border-black/10"
                        style={{ backgroundColor: color.value }}
                      />
                      <span className="text-sm font-black text-[#0D0B09]">
                        {color.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5">
                <h2 className="text-xl font-black">Maklumat</h2>
                <div className="mt-3 space-y-2">
                  {item.details.map((detail) => (
                    <p
                      key={detail}
                      className="rounded-xl border border-[#EAD8C8] bg-[#F5F5F4] px-4 py-2.5 text-sm font-bold leading-6 text-[#6D6E6C]"
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              </div>

              <a
                href={getWhatsappLink(BRAND.whatsapp, item.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block rounded-full bg-[#0D0B09] px-6 py-3 text-center text-sm font-black text-white transition hover:bg-[#F6C62F] hover:text-[#0D0B09]"
              >
                WhatsApp untuk sebut harga
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
