import Link from "next/link";
import Image from "next/image";

interface NavLinkProps {
  href: string;
  label: string;
  isExternal?: boolean;
}

const NavLink = ({ href, label, isExternal }: NavLinkProps) => {
  const className =
    "text-lg border-2 border-white py-2 px-4 font-bold uppercase hover:bg-white hover:text-black hover:translate-x-[2px] hover:translate-y-[2px] shadow-[4px_4px_0px_white] hover:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all";

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
      <header className="relative mb-5 mt-6 flex flex-col items-center justify-center gap-2 px-4 sm:gap-4 uppercase">
        <Image
          src="/logo.png"
          alt="RankPredictor Logo"
          width={80}
          height={80}
          className="h-14 w-14 cursor-pointer object-contain sm:h-16 sm:w-16 md:absolute md:left-4 md:top-1/2 md:h-20 md:w-20 md:-translate-y-1/3 md:ml-4"
        />
        <h1 className="text-center text-3xl font-bold leading-tight sm:text-4xl md:text-5xl tracking-tighter">
          Rank Predictor
        </h1>
      </header>
      <div className="text-sm text-center mb-4 uppercase font-bold">
        By{" "}
        <a
          href="https://github.com/druwn"
          target="_blank"
          className="text-white hover:bg-white hover:text-black border-b-2 border-transparent hover:border-white px-1"
        >
          druwn
        </a>{" "}
        and
        <a
          href="https://github.com/PixelHalide"
          target="_blank"
          className="text-white hover:bg-white hover:text-black border-b-2 border-transparent hover:border-white px-1"
        >
          {" "}
          Pixel
        </a>
      </div>

      <hr className="border-t-4 border-white my-5" />
      <nav className="flex flex-col md:flex-row justify-center gap-4 mb-5 text-center px-4">
        <NavLink href="/" label="Home" />
        <NavLink href="/met2026" label="MET 2026 Rank" />
        <NavLink href="/gpaCalc" label="MIT GPA Calculator" />
        <NavLink href="https://manipal-guessr.vercel.app/" label="ManipalGuessr" isExternal />
        <NavLink href="https://cd.coolstuff.work" label="MIT Directory" isExternal />
      </nav>
      <hr className="border-t-4 border-white my-5" />
    </div>
  );
};

export default NavBar;
