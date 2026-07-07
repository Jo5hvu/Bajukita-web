import { BRAND } from "@/lib/constants";
import { heroImageSlots } from "@/data/products";
import ImageSlot from "@/components/ImageSlot";

const proofPoints = [
  "Baju cotton",
  "Baju F1",
  "Sublimation",
  "Topi, bag & apron",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#EBEBEC] px-4 py-10 shadow-[inset_0_-120px_160px_rgba(246,198,47,0.08)] md:px-16 md:py-16">
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.2fr_0.9fr]">
          <div className="flex flex-col justify-between gap-8">
            <div className="text-xs font-bold leading-5 text-[#6D6E6C]">
              <p>info@alikhlas.com</p>
              <p>+60 10 668 0045</p>
            </div>

            <div>
              <p className="mb-5 inline-flex rounded-full border border-[#E8C84E]/50 bg-[#FFF8D6]/60 px-4 py-2 text-xs font-black uppercase text-[#A7592F]">
                Pakaian tempahan khas
              </p>
              <h1 className="text-[4.6rem] font-black leading-[0.82] tracking-[-0.06em] text-[#0D0B09] sm:text-[6.5rem] lg:text-[7rem]">
                gaya
                <br />
                milik
                <br />
                kita
              </h1>
            </div>

            <p className="max-w-sm text-sm leading-6 text-[#6D6E6C]">
              Tempah baju custom untuk pasukan, sekolah, acara, restoran,
              family day, sukan, dan bisnes.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-8 z-10 flex -space-x-2">
              <span className="h-9 w-9 rounded-full border-2 border-white bg-[#0D0B09]" />
              <span className="h-9 w-9 rounded-full border-2 border-white bg-[#BCBEBF]" />
              <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-white bg-[#FD7C03] text-sm font-black text-white">
                +
              </span>
            </div>
            <ImageSlot
              src={heroImageSlots[0].src}
              label="Letak hero-main.png"
              className={heroImageSlots[0].className}
            />
            <a
              href="#products"
              className="absolute bottom-8 right-8 grid h-16 w-16 place-items-center rounded-2xl bg-white text-3xl font-black text-[#0D0B09] shadow-xl transition hover:bg-[#FD7C03] hover:text-white"
              aria-label="Lihat produk"
            >
              ↗
            </a>
          </div>

          <div className="grid content-between gap-5">
            <div className="rounded-[2rem] border border-[#BCBEBF] bg-white/80 p-6">
              <p className="text-5xl font-black text-[#0D0B09]">320K</p>
              <p className="mt-2 text-xs font-bold uppercase text-[#6D6E6C]">
                pelanggan dan pengikut
              </p>
            </div>
            <ImageSlot
              src={heroImageSlots[1].src}
              label="Letak hero-side.png"
              className={heroImageSlots[1].className}
            />
            <ImageSlot
              src={heroImageSlots[2].src}
              label="Letak hero-detail.png"
              className={heroImageSlots[2].className}
            />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-y border-[#BCBEBF] py-5 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-3">
            {proofPoints.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#BCBEBF] bg-white/70 px-4 py-2 text-xs font-black text-[#5A4224]"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#products"
              className="rounded-full bg-[#0D0B09] px-7 py-4 text-center text-sm font-bold text-white transition hover:bg-[#FD7C03]"
            >
              Lihat Produk
            </a>
            <a
              href={`https://wa.me/${BRAND.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#BCBEBF] bg-white/70 px-7 py-4 text-center text-sm font-bold text-[#0D0B09] transition hover:border-[#FD7C03]"
            >
              WhatsApp Bajukita
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
