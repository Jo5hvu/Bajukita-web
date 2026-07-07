import { BRAND } from "@/lib/constants";
import Image from "next/image";

const navItems = [
  { label: "Produk", href: "#products" },
  { label: "Servis", href: "#services" },
  { label: "Proses", href: "#process" },
  { label: "Tempahan", href: "#order" },
];

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#EAD8C8] bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-16">
        <a href="#" className="flex min-w-0 items-center gap-3">
          <Image
            src="/bajukita-logo.png"
            alt="Bajukita.my logo"
            width={56}
            height={56}
            className="h-12 w-12 rounded-2xl object-contain md:h-14 md:w-14"
          />
          <div>
            <p className="text-lg font-black leading-5 text-[#1F1F1F]">
              {BRAND.name}
            </p>
            <p className="text-xs font-semibold text-[#6F625A]">
              {BRAND.tagline}
            </p>
          </div>
        </a>

        <div className="hidden items-center gap-8 text-sm font-bold md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[#2B1B12] transition hover:text-[#FD7C03]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href={`https://wa.me/${BRAND.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full bg-[#1F1F1F] px-4 py-3 text-xs font-bold text-white shadow-sm transition hover:bg-[#FD7C03] md:px-6 md:text-sm"
        >
          Dapatkan Sebut Harga
        </a>
      </div>
    </nav>
  );
}
