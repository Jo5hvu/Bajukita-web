export const productCategories = [
  {
    name: "Baju Cotton & Polo",
    tag: "Pakaian harian",
    description:
      "Pilihan round neck, cotton premium, kanak-kanak, lengan panjang, oversized, dan polo untuk kegunaan harian atau event.",
    bestFor: ["Cotton", "Polo", "Kanak-kanak"],
    image: "/images/products/cotton-polo.png",
  },
  {
    name: "Microfiber, Jersey & Sublimation",
    tag: "Sukan",
    description:
      "Microfiber, half zip, jersi sukan, baju sublimation, dan pakaian aktif yang selesa untuk pasukan.",
    bestFor: ["Microfiber", "Jersi", "Sublimation"],
    image: "/images/products/jersey-sublimation.png",
  },
  {
    name: "Uniform & Workwear",
    tag: "Korporat",
    description:
      "Baju F1, F1 muslimah, jaket korporat, apron, baju chef, vest, dan safety vest.",
    bestFor: ["F1", "Apron", "Vest"],
    image: "/images/products/uniform-workwear.png",
  },
  {
    name: "Kelengkapan & Merchandise",
    tag: "Merch",
    description:
      "Topi, bucket hat, lanyard, canvas bag, non woven bag, payung, dan wind flag.",
    bestFor: ["Topi", "Bag", "Umbrella"],
    image: "/images/products/merch-accessories.png",
  },
];

export const heroImageSlots = [
  {
    label: "Hero utama",
    src: "/images/products/hero-main.png",
    className: "h-[430px] md:h-[560px]",
  },
  {
    label: "Look sampingan",
    src: "/images/products/hero-side.png",
    className: "h-56",
  },
  {
    label: "Detail produk",
    src: "/images/products/hero-detail.png",
    className: "h-44",
  },
];

export const shirtColors = [
  { name: "Putih", value: "#F8F8F5" },
  { name: "Hitam", value: "#111111" },
  { name: "Kelabu", value: "#8C8C8C" },
  { name: "Navy", value: "#17233B" },
  { name: "Royal Blue", value: "#1D5FA7" },
  { name: "Merah", value: "#B3262E" },
  { name: "Maroon", value: "#6F1D2A" },
  { name: "Hijau", value: "#1F6A43" },
  { name: "Oren", value: "#FD7C03" },
  { name: "Kuning", value: "#F6C62F" },
];

const catalogDefinitions = [
  ["Baju Cotton", "baju-cotton", "Harga ikut kuantiti"],
  ["Baju Cotton Premium", "baju-cotton-premium", "Harga ikut kuantiti"],
  ["Baju Cotton Kanak-Kanak", "baju-cotton-kanak-kanak", "Harga ikut kuantiti"],
  ["Baju Cotton Long Sleeve", "baju-cotton-long-sleeve", "Harga ikut kuantiti"],
  ["Baju Oversized", "baju-oversized", "Harga ikut kuantiti"],
  ["Baju Polo", "baju-polo", "Harga ikut kuantiti"],
  ["Baju Microfiber", "baju-microfiber", "Harga ikut kuantiti"],
  ["Baju Microfiber Half Zip", "baju-microfiber-half-zip", "Harga ikut kuantiti"],
  ["Baju Jersey", "baju-jersey", "Harga ikut design"],
  ["Baju Sublimation", "baju-sublimation", "Harga ikut design"],
  ["Baju Singlet", "baju-singlet", "Harga ikut kuantiti"],
  ["Baju F1", "baju-f1", "Harga ikut kuantiti"],
  ["Baju F1 Muslimah", "baju-f1-muslimah", "Harga ikut kuantiti"],
  ["Hoodie", "hoodie", "Harga ikut kuantiti"],
  ["Windbreaker", "windbreaker", "Harga ikut kuantiti"],
  ["Jaket Korporat", "jaket-korporat", "Harga ikut kuantiti"],
  ["Apron", "apron", "Harga ikut kuantiti"],
  ["Chef Wear", "chef-wear", "Harga ikut kuantiti"],
  ["Vest", "vest", "Harga ikut kuantiti"],
  ["Safety Vest", "safety-vest", "Harga ikut kuantiti"],
  ["Topi", "topi", "Harga ikut kuantiti"],
  ["Bucket Hat", "bucket-hat", "Harga ikut kuantiti"],
  ["Lanyard", "lanyard", "Harga ikut kuantiti"],
  ["Canvas Bag", "canvas-bag", "Harga ikut kuantiti"],
  ["Non Woven Bag", "non-woven-bag", "Harga ikut kuantiti"],
  ["Umbrella", "umbrella", "Harga ikut kuantiti"],
  ["Wind Flag", "wind-flag", "Harga ikut kuantiti"],
];

export const catalogItems = catalogDefinitions.map(([name, slug, price]) => ({
  name,
  slug,
  price,
  image: `/images/products/items/${slug}.png`,
  colors: shirtColors,
  details: [
    "Pilihan warna bergantung pada stok dan material.",
    "Harga akhir bergantung pada kuantiti, saiz, dan jenis cetakan.",
    "Boleh tambah logo, nama, nombor, atau design penuh.",
  ],
}));

export function getCatalogItem(slug: string) {
  return catalogItems.find((item) => item.slug === slug);
}

export function getWhatsappMessage(itemName: string) {
  return encodeURIComponent(
    `Hai Bajukita, saya berminat dengan ${itemName}.

Boleh bantu semak:
- Harga
- Warna tersedia
- Material
- Minimum kuantiti
- Tempoh siap

Terima kasih.`
  );
}

export function getWhatsappLink(phone: string, itemName: string) {
  return `https://wa.me/${phone}?text=${getWhatsappMessage(itemName)}`;
}
