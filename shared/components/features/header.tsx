import Image from "next/image";
import Link from "next/link";
import Button from "../ui/button";

const navItems = [
  { label: "Services", hasDropdown: true },
  { label: "Pricing", hasDropdown: true },
  { label: "Resources", hasDropdown: true },
  { label: "For Agencies", hasDropdown: true },
];

export default function Header() {
  return (
    <header className="w-full py-6.75 border-b-2" style={{ borderColor: 'var(--border-light)' }}>
      <div className="max-w-[1440px] mx-auto flex items-center justify-center px-0.5">
        {/* Empty spacer for balance */}
        <div className="flex-1"></div>

        {/* Logo + Navigation - pill container */}
        <div
          className="flex items-center h-12 px-5 rounded-full border"
          style={{
            borderColor: 'var(--border-light)',
            background:
              "linear-gradient(90deg, var(--bg-gradient-start) 0%, var(--bg-gradient-mid) 49%, var(--bg-gradient-start) 100%)",
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.svg"
              alt="Lock Leaks"
              width={125}
              height={20}
              priority
            />
          </Link>

          {/* Logo divider */}
          <div className="w-px h-4 mx-6" style={{ backgroundColor: 'var(--border-divider)' }}></div>

          {/* Navigation */}
          <nav className="flex items-center gap-6">
            {navItems.map((item, index) => (
              <div key={item.label} className="flex items-center gap-6">
                <button
                  className="flex items-center gap-1.5 text-sm hover:text-black transition-colors"
                  style={{ fontFamily: "var(--font-sf-regular)", color: 'var(--text-primary)' }}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <svg
                      width="6"
                      height="10"
                      viewBox="0 0 6 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L5 5L1 9"
                        stroke="var(--primary-blue)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
                {/* Divider between nav items */}
                {index < navItems.length - 1 && (
                  <div className="w-[1px] h-3" style={{ backgroundColor: 'var(--border-nav)' }}></div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Auth Buttons */}
        <div className="flex-1 flex items-center justify-end gap-2">
          <Button variant="outline" size="md" className="w-[113px]">
            Log in
          </Button>
          <Button variant="primary" size="md" className="w-[182px]">
            Get Started Free
          </Button>
        </div>
      </div>
    </header>
  );
}
