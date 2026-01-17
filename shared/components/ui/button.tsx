import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  onClick?: () => void;
  withTexture?: boolean;
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-10 px-2 text-sm gap-2",
  md: "h-12 px-3 text-sm gap-2.5",
  lg: "h-[74px] px-4 text-lg gap-3",
};

const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    background:
      "linear-gradient(to bottom, var(--primary-blue-light), var(--primary-blue-dark))",
    color: "white",
    border: "none",
  },
  secondary: {
    backgroundColor: "white",
    color: "var(--text-muted)",
    border: "1px solid var(--border-input)",
  },
  outline: {
    backgroundColor: "white",
    color: "var(--text-outline)",
    border: "1px solid var(--border-input)",
  },
};

const fontClasses: Record<ButtonVariant, string> = {
  primary: "font-medium",
  secondary: "font-normal",
  outline: "font-normal",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  className = "",
  onClick,
  withTexture = false,
}: ButtonProps) {
  const isIconLeft = iconPosition === "left";

  return (
    <button
      className={`
        relative flex items-center justify-center rounded-full overflow-hidden 
        transition-all hover:opacity-90
        ${sizeClasses[size]}
        ${fontClasses[variant]}
        ${className}
      `}
      style={{
        ...variantStyles[variant],
        fontFamily:
          variant === "primary"
            ? "var(--font-sf-medium)"
            : "var(--font-sf-regular)",
      }}
      onClick={onClick}
    >
      {/* Texture overlay for primary buttons */}
      {withTexture && variant === "primary" && (
        <div
          className="absolute overflow-hidden pointer-events-none w-[552px] h-[552px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06]"
          style={{ mixBlendMode: "overlay" }}
        >
          {[0, 1, 2].map((row) =>
            [0, 1, 2].map((col) => (
              <div
                key={`${row}-${col}`}
                className="absolute w-[184px] h-[184px] bg-cover"
                style={{
                  left: `${col * 184}px`,
                  top: `${row * 184}px`,
                  backgroundImage: `url("/images/hero/texture.png")`,
                }}
              />
            )),
          )}
        </div>
      )}

      {/* Icon left */}
      {icon && isIconLeft && <span className="z-10 flex-shrink-0">{icon}</span>}

      {/* Text - centered */}
      <span className="z-10">{children}</span>

      {/* Icon right */}
      {icon && !isIconLeft && (
        <span className="z-10 flex-shrink-0">{icon}</span>
      )}
    </button>
  );
}

// Icon wrapper component for consistent styling
export function ButtonIcon({
  children,
  bgColor = "bg-soft-blue",
  size = 50,
}: {
  children: ReactNode;
  bgColor?: string;
  size?: number;
}) {
  return (
    <div
      className={`rounded-full flex items-center justify-center shadow-[0px_2px_2px_rgba(0,0,0,0.13)] ${bgColor}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      {children}
    </div>
  );
}
