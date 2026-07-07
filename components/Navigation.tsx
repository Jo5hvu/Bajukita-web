import { BRAND } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Items", href: "/items" },
  { label: "Contact Us", href: "/#order" },
];

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#E8C84E]/40 bg-[#EBEBEC]/95 shadow-sm backdrop-blur">
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center gap-3 px-4 py-3 md:grid-cols-[1fr_auto_1fr] md:px-16 md:py-4">
        <Link href="/" className="flex min-w-0 items-center">
          <Image
            src="/images/logos/al-ikhlas-printing-logo.png"
            alt="Al-Ikhlas Printing logo"
            width={180}
            height={54}
            className="h-8 w-auto max-w-[116px] object-contain sm:max-w-[140px] md:h-12 md:max-w-[180px]"
            priority
          />
        </Link>

        <Link href="/" className="hidden justify-center md:flex">
          <Image
            src="/images/logos/bajukita-logo.png"
            alt="Bajukita.my logo"
            width={300}
            height={96}
            className="h-auto w-40 object-contain md:w-56"
            priority
          />
        </Link>

        <a
          href={`https://wa.me/${BRAND.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="justify-self-end rounded-full bg-[#1F1F1F] px-3 py-2.5 text-[0.68rem] font-bold text-white shadow-sm transition hover:bg-[#FD7C03] sm:text-xs md:px-6 md:py-3 md:text-sm"
        >
          Sebut Harga
        </a>
      </div>
      <div className="mx-auto flex max-w-7xl justify-center gap-5 px-4 pb-3 text-xs font-bold md:gap-8 md:pb-4 md:text-sm">
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
