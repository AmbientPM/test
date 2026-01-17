import Button, { ButtonIcon } from "../../ui/button";

export default function CtaComponent() {
  return (
    <div className="flex flex-col items-center gap-[42px] w-[823px] mx-auto my-11">
      {/* Text Content */}
      <div className="flex flex-col items-center gap-8 w-full">
        {/* Title */}
        <h1
          className="text-center w-full flex   items-center justify-center gap-4"
          style={{
            fontFamily: "var(--font-sf-medium)",
            fontSize: "42px",
            lineHeight: "84px",
            color: "var(--text-dark)",
          }}
        >
          {/* Remove pill */}
          <span
            className="inline-flex items-center justify-center px-9 py-3.5 font-sf-light-italic text-[70px] rounded-full"
            style={{
              background:
                "radial-gradient(ellipse 90% 80% at 50% 60%, var(--primary-blue-soft) 0%, var(--primary-blue-deep) 100%)",
            }}
          >
            <span
              style={{
                background:
                  "radial-gradient(ellipse 100% 90% at 50% 55%, var(--gradient-text-light) 0%, var(--gradient-text-blue) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Remove
            </span>
          </span>
          <span className="text-[70px]">Leaked Content</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-center max-w-[717px]"
          style={{
            fontFamily: "var(--font-sf-regular)",
            fontSize: "24px",
            lineHeight: "36px",
            color: "var(--text-secondary)",
          }}
        >
          We scan the web for stolen photos & videos and remove them fast.{" "}
          <br />
          <b> Your leak check is 100% free.</b>
        </p>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-4">
        {/* Get Started Free Button */}
        <Button
          variant="primary"
          size="lg"
          withTexture
          className="text-[26px]"
          icon={
            <ButtonIcon bgColor="bg-soft-blue" size={50}>
              <img
                src="/images/hero/cta-icon.svg"
                alt=""
                width="19"
                height="24"
              />
            </ButtonIcon>
          }
        >
          Get Started Free
        </Button>

        {/* Made by a Woman Button */}
        <Button
          variant="secondary"
          size="lg"
          className="text-[26px]"
          iconPosition="left"
          icon={
            <ButtonIcon bgColor="bg-soft-pink" size={50}>
              <svg
                width="24"
                height="22"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 21.02C12 21.02 1 14.02 1 7.02C1 3.7 3.7 1 7 1C9.1 1 10.9 2.1 12 3.7C13.1 2.1 14.9 1 17 1C20.3 1 23 3.7 23 7.02C23 14.02 12 21.02 12 21.02Z"
                  fill="url(#heartGradient)"
                />
                <defs>
                  <linearGradient
                    id="heartGradient"
                    x1="12"
                    y1="1"
                    x2="12"
                    y2="21.02"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="var(--accent-red)" />
                    <stop offset="1" stopColor="var(--accent-red-light)" />
                  </linearGradient>
                </defs>
              </svg>
            </ButtonIcon>
          }
        >
          Made by a Woman
        </Button>
      </div>
    </div>
  );
}
