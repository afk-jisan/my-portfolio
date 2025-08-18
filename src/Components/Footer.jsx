export default function Footer() {
  const currentYear = new Date().getFullYear(); // Dynamically get the current year

  return (
    <footer className="bg-[var(--footer-bg)] py-15 text-center">
        
      <div className="container mx-auto px-4 ">
        {/* Company Name */}
        <h3 className="text-[24px] font-bold mb-2 text-[var(--footer-text)]">
          AFK-Jisan
        </h3>

        {/* Slogan/Tagline */}
        <p className="text-[var(--footer-text)] text-[16px] mb-4">
          You dream it. I make it real.
        </p>

        {/* Copyright Notice */}
        <p className="text-[var(--footer-text)] text-[14px]">
          &copy; {currentYear} AFK-Jisan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
