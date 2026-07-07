import Footer from "@/components/Footer";
import ImageSlot from "@/components/ImageSlot";
import Navigation from "@/components/Navigation";
import { catalogueProducts, getCatalogueProduct } from "@/lib/products";
import { BRAND } from "@/lib/constants";
import Link from "next/link";
import { notFound } from "next/navigation";

type ItemDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return catalogueProducts.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: ItemDetailPageProps) {
  const { id } = await params;
  const product = getCatalogueProduct(id);

  if (!product) {
    return {
      title: "Item Not Found | Bajukita.my",
    };
  }

  return {
    title: `${product.name} | Bajukita.my`,
    description: `Order enquiry for ${product.name}.`,
  };
}

export default async function ItemDetailPage({ params }: ItemDetailPageProps) {
  const { id } = await params;
  const product = getCatalogueProduct(id);

  if (!product) {
    notFound();
  }

  const message = encodeURIComponent(
    `Hai Bajukita, saya berminat dengan ${product.name} (${product.code}). Boleh bantu saya buat tempahan?`
  );

  return (
    <main className="min-h-screen bg-[#EBEBEC] text-[#0D0B09]">
      <Navigation />

      <section className="px-4 py-6 md:px-16 md:py-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-5 grid gap-3 min-[420px]:grid-cols-2 md:mb-6">
            <Link
              href="/items"
              className="rounded-full border border-[#BCBEBF] bg-white/70 px-4 py-2 text-center text-xs font-black text-[#5A4224] transition hover:border-[#fd7c03]"
            >
              Back to items
            </Link>
            <a
              href={`https://wa.me/${BRAND.whatsapp}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#0D0B09] px-5 py-2 text-center text-xs font-black text-white transition hover:bg-[#fd7c03]"
            >
              WhatsApp Order
            </a>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[1.75rem] border border-[#BCBEBF] bg-[#F5F5F4] p-3 shadow-[0_18px_70px_rgba(246,198,47,0.1)]">
              <ImageSlot
                src={product.image}
                label={`Replace ${product.image.split("/").pop()}`}
                className="h-[260px] min-[420px]:h-[320px] md:h-[390px]"
              />
            </div>

            <div className="rounded-[1.5rem] border border-[#EAD8C8] bg-white/80 p-4 md:rounded-[1.75rem] md:p-7">
              <p className="mb-3 inline-flex rounded-full bg-[#FFF8D6] px-3 py-1.5 text-xs font-black uppercase text-[#A7592F]">
                {product.code}
              </p>
              <h1 className="text-2xl font-black leading-none tracking-[-0.03em] min-[420px]:text-3xl md:text-5xl">
                {product.name}
              </h1>
              <p className="mt-3 text-xl font-black text-[#fd7c03] md:mt-4 md:text-2xl">
                {product.priceLabel}
              </p>

              <div className="mt-5 rounded-[1.25rem] border border-[#EAD8C8] bg-[#F5F5F4] p-4">
                <p className="text-xs font-black uppercase text-[#6D6E6C]">
                  Preselected item
                </p>
                <p className="mt-2 text-sm font-bold leading-6 text-[#6D6E6C]">
                  This item is preselected for enquiry. Use the WhatsApp button
                  to continue the order conversation with Bajukita.
                </p>
              </div>

              {product.specs && (
                <div className="mt-4 space-y-2">
                  {product.specs.map((spec) => (
                    <p
                      key={spec}
                      className="rounded-xl border border-[#EAD8C8] bg-[#FFF8D6]/60 px-4 py-2.5 text-sm font-black text-[#5A4224]"
                    >
                      {spec}
                    </p>
                  ))}
                </div>
              )}

              <a
                href={`https://wa.me/${BRAND.whatsapp}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block rounded-full bg-[#0D0B09] px-6 py-3 text-center text-sm font-black text-white transition hover:bg-[#fd7c03]"
              >
                Continue with WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
