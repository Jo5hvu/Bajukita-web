import { BRAND } from "@/lib/constants";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[#EAD8C8] bg-white px-4 py-10 md:px-16">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        <div>
          <div>
            <Image
              src="/images/logos/bajukita-logo.png"
              alt="Bajukita.my logo"
              width={320}
              height={100}
              className="h-auto w-48 object-contain md:w-60"
            />
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-[#6F625A]">
            {BRAND.address}
          </p>
        </div>

        <div>
          <h4 className="font-black text-[#1F1F1F]">Pautan Pantas</h4>
          <div className="mt-3 flex flex-col gap-2 text-sm font-semibold text-[#6F625A]">
            <a href="#products" className="hover:text-[#FD7C03]">
              Produk
            </a>
            <a href="#order" className="hover:text-[#FD7C03]">
              Tempahan
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-black text-[#1F1F1F]">Hubungi Kami</h4>
          <div className="mt-3 flex flex-col gap-2 text-sm font-semibold text-[#6F625A]">
            <a
              href={`https://wa.me/${BRAND.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FD7C03]"
            >
              WhatsApp: +{BRAND.whatsapp}
            </a>
            <a href={`mailto:${BRAND.email}`} className="hover:text-[#FD7C03]">
              Email: {BRAND.email}
            </a>
          </div>
        </div>
      </div>

      <p className="mt-10 text-center text-xs font-semibold text-[#6F625A]">
        Copyright (c) 2026 Bajukita.my. All rights reserved.
      </p>
    </footer>
  );
}
