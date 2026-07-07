import { services } from "@/data/services";

export default function ServiceHighlights() {
  return (
    <section id="services" className="px-4 py-16 md:px-16">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="mb-3 inline-block rounded-full bg-white px-4 py-2 text-xs font-black text-[#FD7C03]">
            Design baju
          </p>
          <h2 className="text-3xl font-black text-[#1F1F1F] md:text-5xl">
            Dibina untuk tempahan pakaian dan kelengkapan.
          </h2>
          <p className="mt-4 text-base leading-7 text-[#6F625A]">
            Bajukita boleh gunakan halaman ini sebagai katalog ringkas dan
            pusat enquiry untuk baju, uniform, merchandise, dan aksesori tanpa
            sistem tempahan atau pangkalan data pada fasa awal.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-3xl border border-[#EAD8C8] bg-white p-6 shadow-sm"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1F1F1F] text-lg font-black text-white">
                {service.code}
              </div>
              <h3 className="text-lg font-black text-[#1F1F1F]">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#6F625A]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
