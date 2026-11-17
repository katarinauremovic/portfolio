import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#111111]">
      {/* NAVIGATION */}
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-gray-200 bg-[#f7f7f5]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          <a href="#" className="font-semibold">
            Katarina Uremović
          </a>

          <div className="hidden items-center gap-8 text-sm text-gray-600 md:flex">
            <a href="#about" className="transition hover:text-black">
              About
            </a>

            <a
              href="#personal-projects"
              className="transition hover:text-black"
            >
              Personal Projects
            </a>

            <a
              href="#university-projects"
              className="transition hover:text-black"
            >
              University Projects
            </a>

            <a href="#contact" className="transition hover:text-black">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-10">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
            Portfolio
          </p>

          <h1 className="text-5xl font-semibold leading-tight md:text-7xl">
            Katarina Uremović
          </h1>

          <p className="mt-3 text-lg font-medium text-gray-500">
            univ. bacc. inf.
          </p>

          <h2 className="mt-8 max-w-xl text-2xl font-medium leading-snug md:text-3xl">
            Learning, building, and solving real-world problems through technology.
          </h2>

          <p className="mt-5 max-w-xl text-lg leading-8 text-gray-600">
            I enjoy exploring different areas of IT, learning new technologies and applying them to practical projects.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#personal-projects"
              className="rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800"
            >
              View My Projects
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium transition hover:bg-gray-50"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <Image
            src="/moja_slika.png"
            alt="Katarina Uremović"
            width={400}
            height={500}
            className="aspect-[4/5] w-full max-w-sm rounded-2xl object-cover"
            priority
          />
        </div>
      </section>


      {/* ABOUT */}
      <section
        id="about"
        className="mx-auto max-w-6xl px-6 py-24 md:px-10"
      >
