interface SectionProps {
  children: React.ReactNode;
  className?: string;
  noBorder?: boolean;
}

export default function Section({
  children,
  className = "",
  noBorder = false,
}: SectionProps) {
  return (
    <section
      className={`${!noBorder ? "border-b-2 border-[#ECECEC]" : ""} ${className}`}
    >
      {children}
    </section>
  );
}
