import Link from "next/link";
import Image from "next/image";

interface NavLinkProps {
  href: string;
  label: string;
  isExternal?: boolean;
}

const NavLink = ({ href, label, isExternal }: NavLinkProps) => {
  const className =
    "text-lg border border-white py-1 px-4 rounded hover:text-yellow-500 hover:border-yellow-500 transition-all";

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
};

const NavBar = () => {
  return (
    <div>
      <header className="mb-5 mt-6 flex flex-col items-center justify-center gap-2 px-4 sm:flex-row sm:gap-4">
        <Image
          src="/logo.png"
          alt="Company Logo"
          width={80}
          height={80}
          className="h-14 w-14 cursor-pointer object-contain sm:h-16 sm:w-16 md:h-20 md:w-20"
        />
        <h1 className="text-center text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          Rank Predictor
        </h1>
      </header>
      <div className="text-sm text-center mb-4">
        By{" "}
        <a
          href="https://github.com/druwn"
          target="_blank"
          className="text-white hover:text-yellow-500 transition-all"
        >
          druwn
        </a>{" "}
        and
        <a
          href="https://github.com/PixelHalide"
          target="_blank"
          className="text-white hover:text-yellow-500 transition-all"
        >
          {" "}
          Pixel
        </a>
      </div>

      <hr className="border-t-2 border-white my-5" />
      <nav className="flex flex-col md:flex-row justify-center gap-8 mb-5 text-center">
        <NavLink href="/" label="Home" />
        <NavLink href="/met2026" label="MET 2026 Rank" />
        <NavLink href="/gpaCalc" label="MIT GPA Calculator" />
        <NavLink
          href="https://manipal-guessr.vercel.app/"
          label="ManipalGuessr"
          isExternal
        />
        <NavLink
        href="https://cd.coolstuff.work"
        label="MIT Directory"
        isExternal
      />
      </nav>
      <hr className="border-t-2 border-white my-5" />
    </div>
  );
};

export default NavBar;
