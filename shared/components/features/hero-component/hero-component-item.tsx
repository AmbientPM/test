import Image from "next/image";

interface HeroComponentItemProps {
  icon: string;
  alt: string;
  size?: number;
  className?: string;
}

export default function HeroComponentItem({
  icon,
  alt,
  size = 71.55,
  className = "",
}: HeroComponentItemProps) {
  const iconSize = size * 0.39; // ~28px for 71.55 container

  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: "var(--primary-blue-icon-bg)",
      }}
    >
      <Image
        src={icon}
        alt={alt}
        width={iconSize}
        height={iconSize}
        className="object-contain"
      />
    </div>
  );
}
