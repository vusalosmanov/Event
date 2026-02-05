"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#key-dates", label: "Key Dates" },
    { href: "#programme", label: "Programme" },
    { href: "#venue", label: "Venue" },
    { href: "#committee", label: "Committee" },
    { href: "#partners", label: "Partners" },
  ];

  return (
    <>
      <header className="bg-[#00162e] text-white min-h-[auto] lg:min-h-[400px] max-w-full pb-10 lg:pb-0">
        <div className="flex justify-between items-center px-4 sm:px-8 lg:px-16 pt-[40px] lg:pt-[60px] max-w-[1300px] mx-auto">
          <div className="flex gap-4 items-center scale-90 sm:scale-100 origin-left">
            <div>
              <Image src="/assets/logo/logo.png" alt="Logo1" width={100} height={100} className="lg:w-[128px] lg:h-[128px]" />
            </div>
            <div>
              <Image src="/assets/logo/profile.png" alt="Logo2" width={90} height={90} className="lg:w-[115px] lg:h-[119px]" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-[#f5f7fb] text-[18px] font-bold py-[6px] px-[10px] hover:opacity-80 transition-opacity">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden flex flex-col items-center bg-[#002a54] mt-4 py-4 gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="text-[#f5f7fb] text-[20px] font-bold py-2 w-full text-center hover:bg-[#003c77]"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start px-4 sm:px-8 lg:px-16 py-8 lg:py-10 gap-8 lg:gap-10 max-w-[1300px] mx-auto">
          <div className="flex-1 max-w-[600px]">
            <h1 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-tight mb-4 lg:mb-5">
              Oxford Earth Observation Forum
            </h1>
            <p className="text-sm sm:text-base text-white/80 mb-6">
              A meeting to bring together people interested in Earth observation.
            </p>
            <p className="text-[16px] sm:text-[18px]">
              <strong>Date: 26 March 2026 <span className="block sm:inline">&nbsp; Location: St Hugh&apos;s College, Oxford, UK</span> </strong>
            </p>
          </div>

          {/* Registration Card */}
          <div className="border-[1px] border-white/20 rounded-lg px-6 py-6 lg:px-8 lg:py-6 w-full lg:w-[500px] bg-[#001f41]/50 lg:bg-transparent">
            <div className="mb-5">
              <span className="block text-[14px] lg:text-[15px] font-bold text-white/70 mb-1">Registration</span>
              <a href="#" className="text-white font-bold underline text-[14px] lg:text-[15px] hover:opacity-80">
                Register by 12 March 2026
              </a>
            </div>
            <div>
              <span className="block text-[14px] lg:text-[15px] font-bold text-white/70 mb-1">Contact</span>
              <a href="mailto:antonin.knizek@physics.ox.ac.uk" className="text-white font-bold underline text-[14px] lg:text-[15px] hover:opacity-80 break-all">
                antonin.knizek@physics.ox.ac.uk
              </a>
            </div>
          </div>
        </div>
      </header>
      <div 
        className="w-full h-[180px] sm:h-[220px] lg:h-[260px] bg-cover bg-no-repeat border-b border-[#dfe3eb]"
        style={{
          backgroundImage: "url('/assets/image/vesuvius.jpg')",
          backgroundPosition: "center 80%",
          boxShadow: "inset 0 -40px 40px rgba(0, 0, 0, 0.12)"
        }}
      ></div>   
    </>
  );
}
