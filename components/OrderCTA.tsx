import { BRAND } from "@/lib/constants";

const message = encodeURIComponent(`Hai Bajukita, saya berminat untuk buat tempahan baju custom.

Detail tempahan:
- Jenis baju:
- Kuantiti:
- Size:
- Ada design sendiri / perlukan bantuan design:
- Tarikh diperlukan:

Boleh bantu saya semak harga?`);

export default function OrderCTA() {
  return (
    <section id="order" className="px-4 py-16 md:px-16">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-white p-8 shadow-2xl shadow-[#1F1F1F]/10 md:p-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="mb-3 inline-block rounded-full bg-[#FFE1C2] px-4 py-2 text-xs font-black text-[#FD7C03]">
              Mula pertanyaan
            </p>
            <h2 className="text-3xl font-black text-[#1F1F1F] md:text-5xl">
              Sedia untuk buat tempahan baju?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#6F625A]">
              Hantar butiran tempahan melalui WhatsApp. Team Bajukita boleh
              bantu cadangkan material, cetakan, dan sebut harga.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href={`https://wa.me/${BRAND.whatsapp}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#1F1F1F] px-8 py-4 text-center font-bold text-white transition hover:bg-[#FD7C03]"
            >
              Tempah melalui WhatsApp
            </a>
            <a
              href={`mailto:${BRAND.email}`}
              className="rounded-full border border-[#EAD8C8] px-8 py-4 text-center font-bold text-[#1F1F1F] transition hover:border-[#FD7C03]"
            >
              Email Bajukita
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
