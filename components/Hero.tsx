import { BRAND } from "@/lib/constants";
import Image from "next/image";

const proofPoints = [
  "Baju cotton",
  "Baju F1",
  "Sublimation",
  "Topi, bag & apron",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 py-12 md:px-16 md:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(7,61,77,0.11) 1px, transparent 1px), linear-gradient(90deg, rgba(7,61,77,0.11) 1px, transparent 1px)",
          backgroundSize: "54px 54px",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-[#EAD8C8] bg-white px-4 py-2 text-xs font-black uppercase text-[#FD7C03] shadow-sm">
            Pakaian tempahan khas dari Melaka
          </div>

          <h1 className="max-w-3xl text-5xl font-black leading-[0.95] text-[#1F1F1F] md:text-7xl">
            Baju Kita, Gaya Kita.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#6F625A] md:text-lg">
            Tempah baju custom untuk pasukan, sekolah, acara, restoran, family
            day, sukan, dan bisnes. Pilih pakaian atau kelengkapan, hantar
            design, dan kami bantu susun sebut harga melalui WhatsApp.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#products"
              className="rounded-full bg-[#1F1F1F] px-7 py-4 text-center font-bold text-white shadow-lg shadow-[#1F1F1F]/20 transition hover:bg-[#FD7C03]"
            >
              Lihat Produk
            </a>
            <a
              href={`https://wa.me/${BRAND.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#EAD8C8] bg-white px-7 py-4 text-center font-bold text-[#1F1F1F] transition hover:border-[#FD7C03]"
            >
              WhatsApp Bajukita
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {proofPoints.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#EAD8C8] bg-white px-4 py-2 text-sm font-bold text-[#2B1B12]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative min-h-[430px]">
          <div className="absolute inset-x-5 top-6 h-[360px] rounded-[2rem] bg-[#1F1F1F] shadow-2xl shadow-[#1F1F1F]/20 md:inset-x-10" />
          <div className="absolute right-0 top-0 h-44 w-44 rounded-[2rem] bg-[#FD7C03]" />
          <div className="absolute bottom-4 left-0 h-40 w-40 rounded-[2rem] bg-[#FD7C03]" />

          <div className="relative mx-auto max-w-xl overflow-hidden rounded-[2rem] border-8 border-white bg-white shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=85"
              alt="Paparan pakaian tempahan khas"
              width={1200}
              height={820}
              className="h-[410px] w-full object-cover"
              priority
            />
          </div>

          <div className="absolute bottom-0 right-4 max-w-xs rounded-3xl border border-[#EAD8C8] bg-white p-5 shadow-xl">
            <p className="text-sm font-black text-[#1F1F1F]">
              Proses pertanyaan mudah
            </p>
            <p className="mt-2 text-sm leading-6 text-[#6F625A]">
              Produk, kuantiti, saiz, rujukan design, kemudian sebut harga.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
