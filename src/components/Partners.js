"use client";
import Image from "next/image";

export default function Partners() {
  return (
    <section id="partners" className="py-8 px-4 sm:px-8 lg:px-16 max-w-[1300px] mx-auto">
      <div className="bg-white border border-[#dfe3eb] rounded-[15px] p-6 lg:p-10 shadow-lg">
        <h2 className="text-[22px] font-bold text-[#00162e] mb-8 text-center lg:text-left">
          Organised in cooperation with
        </h2>
        
        <div className="flex flex-wrap gap-8 lg:gap-12 items-center justify-center lg:justify-start py-4 mb-10">
          {/* Partner 1 */}
          <div className="relative w-[120px] h-[80px] lg:w-[140px] lg:h-[100px] flex items-center justify-center transition-transform hover:scale-105">
            <Image src="/assets/logo/logo.png" alt="Logo1" fill className="object-contain" />
          </div>
          {/* Partner 4 */}
          <div className="relative w-[150px] h-[60px] lg:w-[200px] lg:h-[80px] flex items-center justify-center transition-transform hover:scale-105">
            <Image src="/assets/logo/st_hughs.png" alt="St Hugh's" fill className="object-contain" />
          </div>
          {/* Partner 5 */}
          <div className="relative w-[150px] h-[60px] lg:w-[200px] lg:h-[80px] flex items-center justify-center transition-transform hover:scale-105">
            <Image src="/assets/logo/eodg-logo.png" alt="EODG" fill className="object-contain" />
          </div>
          {/* Partner 6 */}
          <div className="relative w-[100px] h-[80px] lg:w-[130px] lg:h-[100px] flex items-center justify-center transition-transform hover:scale-105">
            <Image src="/assets/logo/earth-science-logo.jpg" alt="Earth Science" fill className="object-contain" />
          </div>
          {/* Partner 7 */}
          <div className="relative w-[100px] h-[80px] lg:w-[120px] lg:h-[100px] flex items-center justify-center transition-transform hover:scale-105">
            <Image src="/assets/logo/oxford_geography.jpg" alt="Oxford Geography" fill className="object-contain" />
          </div>
        </div>

        <h2 className="text-[22px] font-bold text-[#00162e] mb-8 text-center lg:text-left">
          Involving scientists funded through
        </h2>
        
        <div className="flex flex-wrap gap-8 lg:gap-12 items-center justify-center lg:justify-start py-4">
          {/* Partner 2 */}
          <div className="relative w-[120px] h-[60px] lg:w-[160px] lg:h-[80px] flex items-center justify-center transition-transform hover:scale-105">
            <Image src="/assets/logo/ukri-nerc.png" alt="UKRI NERC" fill className="object-contain" />
          </div>
          {/* Partner 3 */}
          <div className="relative w-[120px] h-[80px] lg:w-[160px] lg:h-[100px] flex items-center justify-center transition-transform hover:scale-105">
            <Image src="/assets/logo/leverhulme_trust.jpg" alt="Leverhulme Trust" fill className="object-contain" />
          </div>
          {/* Partner 8 */}
          <div className="relative w-[100px] h-[80px] lg:w-[120px] lg:h-[100px] flex items-center justify-center transition-transform hover:scale-105">
            <Image src="/assets/logo/comet.jpg" alt="Comet" fill className="object-contain" />
          </div>
          {/* Partner 9 */}
          <div className="relative w-[150px] h-[60px] lg:w-[180px] lg:h-[80px] flex items-center justify-center transition-transform hover:scale-105">
            <Image src="/assets/logo/nceo.png" alt="NCEO" fill className="object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
