import Image from "next/image";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

function Navbar() {
  return (
    <nav
      aria-label="Main navigation"
      className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[calc(100%-3rem)] max-w-3xl flex justify-between items-center px-4 py-2 rounded-xl z-50
                 bg-white/20 backdrop-blur-md border border-white/10 shadow-md text-black"
    >
      <Image
        src="/logo.png"
        alt="Logo"
        width={60}
        height={60}
        className="rounded-full"
      />
      <div className="space-x-4">
        <a href="#about" className="text-black hover:text-gray-800">
          About
        </a>
        <a href="#skills" className="text-black hover:text-gray-800">
          Skills
        </a>
        <a href="#contact" className="text-black hover:text-gray-800">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default function Home() {
  return (
      <main className="min-h-screen bg-cover bg-center text-white flex flex-col items-center justify-center px-6 py-12"
      style={{ backgroundImage: "url('/bg.jpg')" }}
        >
      {/* Navbar */}
        <Navbar />

        {/* HERO WRAPPER - image beside hero (responsive) */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-20 mt-30">
        {/* HERO */}
        <div className="text-center md:text-left mb-6 md:mb-0 mt-40">
        <h1
          className="text-black text-4xl font-bold mb-2 flex items-center justify-center md:justify-start gap-3"
          style={{ textShadow: "0 4px 8px rgba(0,0,0,0.6)" }}
        >
          Hi, I&apos;m MOH. NURUL LANJIB
          <span className="inline-block transform-gpu motion-safe:animate-bounce" role="img" aria-label="waving">
          👋
          </span>
        </h1>

        <p
          className="bg-clip-text  text-amber-300  max-w-md mb-3 font-medium"
          style={{ textShadow: "0 2px 4px rgba(0,0,0,0.45)" }}
        >
          Web Developer & Law Student — crafting modern, accessible web applications.
        </p>
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center md:justify-start gap-3"> 
          <a
          href="mailto:example@email.com"
          className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg font-medium hover:opacity-95 hover:shadow-lg transform transition-transform hover:scale-105"
          >
          Email Me
          </a>

        </div>
        </div>

          {/* FOTO */}
          <Image
        src="/lanjib.png"
        alt="Profile"
        width={220}
        height={220}
        
          />
        </div>

      {/* ABOUT */}
      <h2 className="text-2xl font-semibold mb-2">About Me</h2>
      <p className="text-yellow-400 text-center max-w-md mb-12">
        Passionate in technology, UI/UX, and education. Currently learning Next.js and building LMS platform.
      </p>

      {/* SKILLS */}
      <h2 className="text-2xl font-semibold mb-6">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mb-16">
        <div
          className="group bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center gap-2 w-full
             transition-transform transform hover:-translate-y-2 hover:scale-105 duration-200 shadow-sm hover:shadow-md"
          role="img"
          aria-label="HTML5"
          title="HTML5"
        >
          <SiHtml5 size={40} color="#F97316" />
          <span className="text-sm text-white/90 group-hover:text-white">HTML5</span>
        </div>

        <div
          className="group bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center gap-2 w-full
             transition-transform transform hover:-translate-y-2 hover:scale-105 duration-200 shadow-sm hover:shadow-md"
          role="img"
          aria-label="CSS3"
          title="CSS3"
        >
          <SiCss3 size={40} color="#2563EB" />
          <span className="text-sm text-white/90 group-hover:text-white">CSS3</span>
        </div>

        <div
          className="group bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center gap-2 w-full
             transition-transform transform hover:-translate-y-2 hover:scale-105 duration-200 shadow-sm hover:shadow-md"
          role="img"
          aria-label="JavaScript"
          title="JavaScript"
        >
          <SiJavascript size={40} color="#FACC15" />
          <span className="text-sm text-white/90 group-hover:text-white">JavaScript</span>
        </div>

        <div
          className="group bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center gap-2 w-full
             transition-transform transform hover:-translate-y-2 hover:scale-105 duration-200 shadow-sm hover:shadow-md"
          role="img"
          aria-label="React"
          title="React"
        >
          <SiReact size={40} color="#22D3EE" />
          <span className="text-sm text-white/90 group-hover:text-white">React</span>
        </div>

        <div
          className="group bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center gap-2 w-full
             transition-transform transform hover:-translate-y-2 hover:scale-105 duration-200 shadow-sm hover:shadow-md"
          role="img"
          aria-label="Next.js"
          title="Next.js"
        >
          <SiNextdotjs size={40} color="#FFFFFF" />
          <span className="text-sm text-white/90 group-hover:text-white">Next.js</span>
        </div>

        <div
          className="group bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center gap-2 w-full
             transition-transform transform hover:-translate-y-2 hover:scale-105 duration-200 shadow-sm hover:shadow-md"
          role="img"
          aria-label="Tailwind CSS"
          title="Tailwind CSS"
        >
          <SiTailwindcss size={40} color="#38BDF8" />
          <span className="text-sm text-white/90 group-hover:text-white">Tailwind</span>
        </div>
      </div>


      {/* CONTACT */}
      <h2 className="text-2xl font-semibold mb-3">Contact</h2>
      <p className="text-yellow-400 mb-4">Let’s build something together!</p>

    {/* Social icons */}
    {(() => {
      // Ganti URL di sini dengan akunmu
      const social = {
        github: "https://github.com/lanjib13",
        instagram: "https://www.instagram.com/landrep_13/",
        linkedin: "https://www.linkedin.com/in/moh-nurul-lanjib-a28608331/",
        twitter: "https://twitter.com/your-username",
      };

      return (
        <div className="flex items-center gap-4 mb-12">
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="text-white">
              <path d="M12 .5C5.73.5.75 5.48.75 11.76c0 4.93 3.19 9.11 7.62 10.59.56.1.77-.24.77-.54 0-.27-.01-1-.02-1.95-3.1.67-3.76-1.5-3.76-1.5-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1.01 1.72 2.65 1.22 3.3.93.1-.73.39-1.22.71-1.5-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.16-3-.12-.29-.5-1.46.11-3.04 0 0 .95-.31 3.12 1.17a10.8 10.8 0 0 1 2.84-.38c.96 0 1.93.13 2.84.38 2.17-1.48 3.11-1.17 3.11-1.17.62 1.58.24 2.75.12 3.04.72.78 1.16 1.78 1.16 3 0 4.29-2.62 5.24-5.11 5.51.4.34.76 1.02.76 2.06 0 1.49-.01 2.69-.01 3.05 0 .3.2.65.78.54 4.43-1.49 7.62-5.67 7.62-10.59C23.25 5.48 18.27.5 12 .5z" />
            </svg>
          </a>

          <a
            href={social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Instagram"
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="text-white">
              <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5.8A4.2 4.2 0 1 0 16.2 12 4.2 4.2 0 0 0 12 7.8zm5.4-2.1a1 1 0 1 0 1 1 1 1 0 0 0-1-1zM12 9.5A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5z" />
            </svg>
          </a>

          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="text-white">
              <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5 2.5 2.5 0 0 1 4.98 3.5zM3 9h4v12H3zM10 9h3.8v1.6h.1c.5-.9 1.8-1.9 3.7-1.9C21.2 8.7 22 11 22 14.6V21h-4v-6.1c0-1.5-.03-3.4-2.1-3.4-2.1 0-2.4 1.6-2.4 3.3V21H10z" />
            </svg>
          </a>

          <a
            href={social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            title="Twitter"
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="text-white">
              <path d="M22 5.92c-.66.29-1.37.49-2.12.58a3.7 3.7 0 0 0 1.62-2.03c-.72.43-1.52.74-2.38.9A3.68 3.68 0 0 0 12.6 7.7c0 .29.03.58.1.85A10.46 10.46 0 0 1 3.3 5.1a3.68 3.68 0 0 0 1.14 4.92c-.6-.02-1.16-.18-1.66-.45v.05c0 1.77 1.26 3.25 2.93 3.59-.49.13-1.01.16-1.54.06.43 1.33 1.67 2.3 3.14 2.33A7.38 7.38 0 0 1 2 19.54a10.43 10.43 0 0 0 5.65 1.66c6.78 0 10.49-5.62 10.49-10.49v-.48A7.36 7.36 0 0 0 22 5.92z" />
            </svg>
          </a>
        </div>
      );
    })()}
    </main>
  );
}
