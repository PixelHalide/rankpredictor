import Link from "next/link"
import Image from "next/image"

const NavBar = () => {
  return (
    <div>
          <header className="relative flex items-center justify-center mb-5 mt-6">
            <Image src="/logo.png" alt="Company Logo" width={80} height={80} className="sm:hidden absolute top-2 left-5 w-16 md:w-20 cursor-pointer" />
            <h1 className="text-3xl md:text-5xl font-bold">Rank Predictor</h1>
          </header>
          <div className="text-sm text-center mb-4">
              By <a href="https://github.com/druwn" target="_blank" className="text-white hover:text-yellow-500 transition-all">druwn</a> and
              <a href="https://github.com/PixelHalide" target="_blank" className="text-white hover:text-yellow-500 transition-all"> Pixel</a>
          </div>

        <hr className="border-t-2 border-white my-5" />
        <nav className="flex flex-col md:flex-row justify-center gap-8 mb-5 text-center">
            <Link href="/" className="text-lg border border-white py-1 px-4 rounded hover:text-yellow-500 hover:border-yellow-500 transition-all">
              Home
            </Link>
            <Link href="/met2025" className="text-lg border border-white py-1 px-4 rounded hover:text-yellow-500 hover:border-yellow-500 transition-all">
              MET 2025 Rank
            </Link>
            <Link href="/gpaCalc" className="text-lg border border-white py-1 px-4 rounded hover:text-yellow-500 hover:border-yellow-500 transition-all">
              MIT GPA Calculator
            </Link>
            <a href="https://manipal-guessr.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-lg border border-white py-1 px-4 rounded hover:text-yellow-500 hover:border-yellow-500 transition-all">
              ManipalGuessr
            </a>
        </nav>
        <hr className="border-t-2 border-white my-5" />
    </div>
  )
}

export default NavBar
