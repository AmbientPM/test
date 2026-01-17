import Image from "next/image";
import HeroComponentItem from "./hero-component-item";

// Конфигурация иконок
const socialIconsConfig = [
  { icon: "/images/hero/reddit.svg", alt: "Reddit" },
  { icon: "/images/hero/telegram.svg", alt: "Telegram" },
  { icon: "/images/hero/instagram.svg", alt: "Instagram" },
  { icon: "/images/hero/google.svg", alt: "Google" },
  { icon: "/images/hero/of.svg", alt: "OnlyFans" },
  { icon: "/images/hero/x.svg", alt: "X" },
];

// Настройки расположения
const LAYOUT_CONFIG = {
  containerSize: 750, // Размер контейнера
  iconSize: 71.55, // Размер иконки
  radius: 250, // Радиус окружности для иконок
  startAngle: -180, // Начальный угол (в градусах, -90 = верх)
  endAngle: -0, // Конечный угол
  centerX: 375, // Центр X (containerSize / 2)
  centerY: 375, // Центр Y (containerSize / 2)
};

// Функция для расчета позиции по радиусу
function getPositionOnCircle(
  index: number,
  total: number,
  config: typeof LAYOUT_CONFIG,
) {
  const { radius, startAngle, endAngle, centerX, centerY, iconSize } = config;

  // Распределяем иконки равномерно между startAngle и endAngle
  const angleRange = endAngle - startAngle;
  const angleStep = total > 1 ? angleRange / (total - 1) : 0;
  const angleDeg = startAngle + angleStep * index;

  // Конвертируем в радианы
  const angleRad = (angleDeg * Math.PI) / 180;

  // Вычисляем позицию
  const x = centerX + radius * Math.cos(angleRad) - iconSize / 2;
  const y = centerY + radius * Math.sin(angleRad) - iconSize / 2;

  return { x, y };
}

// Генерируем позиции для всех иконок
const socialIcons = socialIconsConfig.map((item, index) => {
  const position = getPositionOnCircle(
    index,
    socialIconsConfig.length,
    LAYOUT_CONFIG,
  );
  return {
    ...item,
    style: {
      left: position.x,
      top: position.y,
    },
  };
});

export default function HeroComponent() {
  return (
    <div className="relative w-[750px] h-[475px] mx-auto overflow-hidden mb-11">
      {/* Container for circles - positioned so center is at bottom */}
      <div className="absolute w-[750px] h-[750px] left-0 top-0">
        {/* Outer ring - 750px */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle at center, transparent 0%, var(--primary-blue-glow) 50%, transparent 100%)",
          }}
        />

        {/* Ring 3 - 561px */}
        <div
          className="absolute rounded-full"
          style={{
            width: 561,
            height: 561,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle at center, transparent 0%, rgba(24, 140, 255, 0.1) 50%, transparent 100%)",
          }}
        />

        {/* Ring 2 - 406px */}
        <div
          className="absolute rounded-full"
          style={{
            width: 406,
            height: 406,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle at center, transparent 0%, rgba(24, 140, 255, 0.12) 50%, transparent 100%)",
          }}
        />

        {/* Ring 1 - 278px */}
        <div
          className="absolute rounded-full"
          style={{
            width: 278,
            height: 278,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle at center, transparent 0%, rgba(24, 140, 255, 0.15) 50%, transparent 100%)",
          }}
        />

        {/* Center white circle - 226px */}
        <div
          className="absolute rounded-full"
          style={{
            width: 226,
            height: 226,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle at center, var(--bg-center-circle) 0%, rgba(243, 247, 252, 0) 100%)",
          }}
        />

        {/* Center logo */}
        <div
          className="absolute"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Image
            src="/images/big-logo.svg"
            alt="Lock Leaks"
            width={150}
            height={150}
            priority
          />
        </div>

        {/* Social icons */}
        {socialIcons.map((item) => (
          <div key={item.alt} className="absolute" style={item.style}>
            <HeroComponentItem icon={item.icon} alt={item.alt} />
          </div>
        ))}
      </div>

      {/* Fade to white at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[120px] pointer-events-none "
        style={{
          background: "linear-gradient(to bottom, transparent 0%, white 100%)",
        }}
      />
    </div>
  );
}
