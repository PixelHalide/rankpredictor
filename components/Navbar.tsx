import Link from "next/link";
import Image from "next/image";

interface NavLinkProps {
  href: string;
  label: string;
  tone: string;
  isExternal?: boolean;
}

const NavLink = ({ href, label, tone, isExternal }: NavLinkProps) => {
  const toneClasses: Record<string, string> = {
    home: "hover:bg-amber-400 hover:border-amber-200",
    met: "hover:bg-indigo-400 hover:border-indigo-200",
    gpa: "hover:bg-emerald-400 hover:border-emerald-200",
    guessr: "hover:bg-fuchsia-400 hover:border-fuchsia-200",
    directory: "hover:bg-sky-400 hover:border-sky-200",
  };
  const className = `text-lg border-2 border-slate-600 bg-slate-900/80 py-2 px-4 font-bold uppercase hover:text-slate-950 hover:translate-x-[2px] hover:translate-y-[2px] shadow-[4px_4px_0px_#64748b] hover:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all ${toneClasses[tone]}`;

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
          href="https://github.com/PixelHalide"
          target="_blank"
          className="text-rose-300 hover:bg-rose-400 hover:text-slate-950 border-b-2 border-transparent hover:border-rose-200 px-1"
        >
          Pixel
        </a>{" "}
        and{" "}
        <a
          href="https://github.com/druwn"
          target="_blank"
          className="text-indigo-200 hover:bg-indigo-400 hover:text-slate-950 border-b-2 border-transparent hover:border-indigo-200 px-1"
        >
          druwn
        </a>
      </div>

      <hr className="border-t-4 border-slate-600 my-5" />
      <nav className="flex flex-col md:flex-row justify-center gap-4 mb-5 text-center px-4">
        <NavLink href="/" label="Home" tone="home" />
        <NavLink href="/met2026" label="MET 2026 Rank" tone="met" />
        <NavLink href="/gpaCalc" label="MIT GPA Calculator" tone="gpa" />
        <NavLink
          href="https://manipal-guessr.vercel.app/"
          label="ManipalGuessr"
          tone="guessr"
          isExternal
        />
        <NavLink
          href="https://cd.coolstuff.work"
          label="MIT Directory"
          tone="directory"
          isExternal
        />
      </nav>
      <hr className="border-t-4 border-slate-600 my-5" />
    </div>
  );
};

export default NavBar;
