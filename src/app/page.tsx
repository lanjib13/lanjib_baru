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
    <nav className="w-full max-w-3xl flex justify-between items-center mb-8 text-black">
      <Image
        src="/lanjib.png"
        alt="Logo"
        width={48}
        height={48}
        className="rounded-full"
      />
      <div className="space-x-4">
        <a href="#about" className="text-black hover:text-gray-800">About</a>
        <a href="#skills" className="text-black hover:text-gray-800">Skills</a>
        <a href="#contact" className="text-black hover:text-gray-800">Contact</a>
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
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-20">
            {/* HERO */}
            <div className="text-center md:text-left mb-6 md:mb-0 mt-20">
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
              className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 max-w-md mb-3 font-medium"
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
      <p className="text-gray-400 text-center max-w-md mb-12">
        Passionate in technology, UI/UX, and education. Currently learning Next.js and building LMS platform.
      </p>

      {/* SKILLS */}
      <h2 className="text-2xl font-semibold mb-6">Skills</h2>
        <div className="flex gap-6 text-4xl mb-16">
          <SiHtml5 size={40} color="#F97316" />
          <SiCss3 size={40} color="#2563EB" />         
          <SiJavascript size={40} color="#FACC15" />   
          <SiReact size={40} color="#22D3EE" />        
          <SiNextdotjs size={40} color="#FFFFFF" />
          <SiTailwindcss size={40} color="#38BDF8" />  
        </div>


      {/* CONTACT */}
      <h2 className="text-2xl font-semibold mb-3">Contact</h2>
      <p className="text-gray-400 mb-4">Let’s build something together!</p>
      
    </main>
  );
}
