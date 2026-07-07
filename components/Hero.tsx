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
    <section className="relative overflow-hidden bg-[#EBEBEC] px-4 py-8 shadow-[inset_0_-120px_160px_rgba(246,198,47,0.08)] md:px-16 md:py-16">
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.2fr_0.9fr]">
          <div className="flex flex-col justify-between gap-5 md:gap-8">
            <div className="text-xs font-bold leading-5 text-[#6D6E6C]">
              <p>info@alikhlas.com</p>
              <p>+60 10 668 0045</p>
            </div>

            <div>
              <p className="mb-4 inline-flex rounded-full border border-[#E8C84E]/50 bg-[#FFF8D6]/60 px-3 py-2 text-[0.68rem] font-black uppercase text-[#A7592F] md:px-4 md:text-xs">
                Pakaian tempahan khas
              </p>
              <h1 className="max-w-full text-[3.2rem] font-black leading-[0.86] tracking-[-0.04em] text-[#0D0B09] min-[380px]:text-[3.8rem] sm:text-[5.7rem] lg:text-[7rem]">
                baju
                <br />
                kita
                <br />
                gaya kita
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
              className="h-[300px] min-[380px]:h-[360px] md:h-[520px] lg:h-[560px]"
            />
            <a
              href="#products"
              className="absolute bottom-5 right-5 grid h-12 w-12 place-items-center rounded-xl bg-white text-xl font-black text-[#0D0B09] shadow-xl transition hover:bg-[#FD7C03] hover:text-white md:bottom-8 md:right-8 md:h-16 md:w-16 md:rounded-2xl md:text-3xl"
              aria-label="Lihat produk"
            >
              &gt;
            </a>
          </div>

          <div className="grid content-between gap-5">
            <div className="rounded-[1.5rem] border border-[#BCBEBF] bg-white/80 p-4 md:rounded-[2rem] md:p-6">
              <p className="text-3xl font-black text-[#0D0B09] md:text-5xl">320K</p>
              <p className="mt-2 text-xs font-bold uppercase text-[#6D6E6C]">
                Jumlah Tempahan
              </p>
            </div>
            <ImageSlot
              src={heroImageSlots[1].src}
              label="Letak hero-side.png"
              className="h-40 md:h-56"
            />
            <ImageSlot
              src={heroImageSlots[2].src}
              label="Letak hero-detail.png"
              className="h-36 md:h-44"
            />
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-5 border-y border-[#BCBEBF] py-5 md:mt-10 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2 md:gap-3">
            {proofPoints.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#BCBEBF] bg-white/70 px-4 py-2 text-xs font-black text-[#5A4224]"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
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
