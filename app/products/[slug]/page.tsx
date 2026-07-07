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

      <section className="px-4 py-10 md:px-16 md:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/#products"
              className="rounded-full border border-[#BCBEBF] bg-white/70 px-5 py-3 text-sm font-black text-[#5A4224] transition hover:border-[#F6C62F]"
            >
              Kembali ke produk
            </Link>
            <a
              href={getWhatsappLink(BRAND.whatsapp, item.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#0D0B09] px-6 py-3 text-sm font-black text-white transition hover:bg-[#F6C62F] hover:text-[#0D0B09]"
            >
              Tanya melalui WhatsApp
            </a>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2.5rem] border border-[#BCBEBF] bg-[#F5F5F4] p-4 shadow-[0_24px_100px_rgba(246,198,47,0.12)]">
              <ImageSlot
                src={item.image}
                label={`Letak ${item.image.split("/").pop()}`}
                className="h-[520px]"
              />
            </div>

            <div className="rounded-[2.5rem] border border-[#BCBEBF] bg-white/75 p-6 md:p-10">
              <p className="mb-4 inline-flex rounded-full bg-[#FFF8D6] px-4 py-2 text-xs font-black uppercase text-[#A7592F]">
                Detail produk
              </p>
              <h1 className="text-5xl font-black leading-none tracking-[-0.05em] md:text-7xl">
                {item.name}
              </h1>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-[#EAD8C8] bg-[#F5F5F4] p-5">
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

                <div className="rounded-[1.5rem] border border-[#EAD8C8] bg-[#FFF8D6]/60 p-5">
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

              <div className="mt-8">
                <h2 className="text-xl font-black">Pilihan warna</h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {item.colors.map((color) => (
                    <div
                      key={color.name}
                      className="flex items-center gap-3 rounded-2xl border border-[#EAD8C8] bg-[#F5F5F4] px-4 py-3"
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

              <div className="mt-8">
                <h2 className="text-xl font-black">Maklumat</h2>
                <div className="mt-4 space-y-3">
                  {item.details.map((detail) => (
                    <p
                      key={detail}
                      className="rounded-2xl border border-[#EAD8C8] bg-[#F5F5F4] px-4 py-3 text-sm font-bold leading-6 text-[#6D6E6C]"
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
                className="mt-8 block rounded-full bg-[#0D0B09] px-8 py-4 text-center font-black text-white transition hover:bg-[#F6C62F] hover:text-[#0D0B09]"
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
