"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <>
    <header className="bg-[#00162e] text-white min-h-[400px] max-w-full ">
      <div className="flex justify-between items-center px-16 pt-[60px] max-w-[1300px] mx-auto">
        <div className="flex gap-4 items-center">
          <div>
            <Image src="/assets/logo/logo.png" alt="Logo1" width={128} height={128} />
          </div>
          <div>
            <Image src="/assets/logo/profile.png" alt="Logo2" width={115} height={119} />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex gap-8">
          <Link href="#about" className="text-[#f5f7fb] text-[18px] font-bold py-[6px] px-[10px] hover:opacity-80 transition-opacity">About</Link>
          <Link href="#key-dates" className="text-[#f5f7fb] text-[18px] font-bold py-[6px] px-[10px] hover:opacity-80 transition-opacity">Key Dates</Link>
          <Link href="#programme" className="text-[#f5f7fb] text-[18px] font-bold py-[6px] px-[10px] hover:opacity-80 transition-opacity">Programme</Link>
          <Link href="#venue" className="text-[#f5f7fb] text-[18px] font-bold py-[6px] px-[10px] hover:opacity-80 transition-opacity">Venue</Link>
          <Link href="#committee" className="text-[#f5f7fb] text-[18px] font-bold py-[6px] px-[10px] hover:opacity-80 transition-opacity">Committee</Link>
          <Link href="#partners" className="text-[#f5f7fb] text-[18px] font-bold py-[6px] px-[10px] hover:opacity-80 transition-opacity">Partners</Link>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="flex justify-between items-start px-16 py-10 gap-10 max-w-[1300px] mx-auto">
        <div className="flex-1 max-w-[600px]">
          <h1 className="text-[48px] font-bold leading-tight mb-5">
            Oxford Earth Observation Forum
          </h1>
          <p className="text-base text-white/80 mb-6">
            A meeting to bring together people interested in Earth observation.
          </p>
          <p className="text-[18px]">
            <strong>Date: 26 March 2026 &nbsp; Location: St Hugh&apos;s College, Oxford, UK </strong>
          </p>
        </div>

        {/* Registration Card */}
        <div className=" border-[1px] rounded-lg px-8 py-6  min-w-[400px]">
          <div className="mb-5">
            <span className="block text-[15px] font-bold text-white/70 mb-1">Registration</span>
            <a href="#" className="text-white font-bold underline text-[15px] hover:opacity-80">
              Register by 12 March 2026
            </a>
          </div>
          <div>
            <span className="block text-[15px] font-bold text-white/70 mb-1">Contact</span>
            <a href="mailto:antonin.knizek@physics.ox.ac.uk" className="text-white font-bold underline text-[15px] hover:opacity-80">
              antonin.knizek@physics.ox.ac.uk
            </a>
          </div>
        </div>
      </div>
    </header>
      <div 
        className="w-full h-[260px] bg-cover bg-no-repeat border-b border-[#dfe3eb]"
        style={{
          backgroundImage: "url('/assets/image/vesuvius.jpg')",
          backgroundPosition: "center 80%",
          boxShadow: "inset 0 -40px 40px rgba(0, 0, 0, 0.12)"
        }}
      ></div>   
    </>
  );
}
