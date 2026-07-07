type ImageSlotProps = {
  src: string;
  label: string;
  className?: string;
  variant?: "light" | "dark";
};

export default function ImageSlot({
  src,
  label,
  className = "h-72",
  variant = "light",
}: ImageSlotProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border ${
        isDark
          ? "border-white/15 bg-[#1F1F1F] text-white"
          : "border-[#EAD8C8] bg-[#EBEBEC] text-[#1F1F1F]"
      } ${className}`}
    >
      <div
        className="absolute inset-0 bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${src})` }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0,transparent_48%,rgba(255,255,255,0.48)_100%)]" />
      <div className="absolute bottom-4 left-4">
        <div
          className={`rounded-full px-4 py-2 text-xs font-black uppercase ${
            isDark ? "bg-white/10 text-white" : "bg-white/80 text-[#6F625A]"
          }`}
        >
          {label}
        </div>
      </div>
    </div>
  );
}
