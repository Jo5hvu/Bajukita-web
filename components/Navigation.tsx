import { BRAND } from "@/lib/constants";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Items", href: "/items" },
  { label: "Contact Us", href: "/#order" },
];

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#E8C84E]/40 bg-[#EBEBEC]/95 shadow-sm backdrop-blur">
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 py-4 md:px-16">
        <a href="#" className="flex min-w-0 items-center">
          <Image
            src="/images/logos/al-ikhlas-printing-logo.png"
            alt="Al-Ikhlas Printing logo"
            width={180}
            height={54}
            className="h-10 w-auto max-w-[140px] object-contain md:h-12 md:max-w-[180px]"
            priority
          />
        </a>

        <a href="#" className="flex justify-center">
          <Image
            src="/images/logos/bajukita-logo.png"
            alt="Bajukita.my logo"
            width={300}
            height={96}
            className="h-auto w-40 object-contain md:w-56"
            priority
          />
        </a>

        <a
          href={`https://wa.me/${BRAND.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="justify-self-end rounded-full bg-[#1F1F1F] px-4 py-3 text-xs font-bold text-white shadow-sm transition hover:bg-[#FD7C03] md:px-6 md:text-sm"
        >
          Dapatkan Sebut Harga
        </a>
      </div>
      <div className="mx-auto hidden max-w-7xl justify-center gap-8 px-4 pb-4 text-sm font-bold md:flex">
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
    </nav>
  );
}
