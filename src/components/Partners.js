"use client";
import Image from "next/image";

export default function Partners() {
  return (
    <section id="partners" className="py-8 px-16 max-w-[1300px] mx-auto">
      <div className="bg-white border border-[#dfe3eb] rounded-[15px] p-8 shadow-lg">
        <h2 className="text-[22px] font-bold text-[#00162e] mb-6">
          Organised in cooperation with
        </h2>
        
        <div className="flex flex-wrap gap-16 items-center justify-center py-4">
          {/* Partner Placeholder 1 */}
          <div className="w-[140px] h-[140px] bg-gray-50 border border-gray-300 rounded-lg flex items-center justify-center text-gray-400 text-sm italic">
            <Image src="/assets/logo/logo.png" alt="Logo1" width={120} height={120} />
          </div>
          {/* Partner Placeholder 4 */}
          <div className="w-[200px] h-[70px] bg-gray-50 border  border-gray-300 rounded-lg flex items-center justify-center text-gray-400 text-sm italic">
            <Image src="/assets/logo/st_hughs.png" alt="Logo1" width={180} height={180} />
          </div>
          {/* Partner Placeholder 5 */}
          <div className="w-[200px] h-[90px] bg-gray-50 border  border-gray-300 rounded-lg flex items-center justify-center text-gray-400 text-sm italic">
            <Image src="/assets/logo/eodg-logo.png" alt="Logo1" width={180} height={180} />
          </div>
          {/* Partner Placeholder 6 */}
          <div className="w-[130px] h-[130px] bg-gray-50 border border-gray-300 rounded-lg flex items-center justify-center text-gray-400 text-sm italic">
            <Image src="/assets/logo/earth-science-logo.jpg" alt="Logo1" width={110} height={110} />
          </div>
          {/* Partner Placeholder 7 */}
          <div className="w-[120px] h-[120px] bg-gray-50 border  border-gray-300 rounded-lg flex items-center justify-center text-gray-400 text-sm italic">
            <Image src="/assets/logo/oxford_geography.jpg" alt="Logo1" width={110} height={110} />
          </div>
        </div>
        <h2 className="text-[22px] font-bold text-[#00162e] mb-6">
          Involving scientists funded through
        </h2>
        
        <div className="flex flex-wrap gap-16 items-center justify-center py-4">
          {/* Partner Placeholder 2 */}
          <div className="w-[140px] h-[140px] bg-gray-50 border  border-gray-300 rounded-lg flex items-center justify-center text-gray-400 text-sm italic">
            <Image src="/assets/logo/ukri-nerc.png" alt="Logo1" width={120} height={120} />
          </div>
          {/* Partner Placeholder 3 */}
          <div className="w-[140px] h-[140px] bg-gray-50 border  border-gray-300 rounded-lg flex items-center justify-center text-gray-400 text-sm italic">
            <Image src="/assets/logo/leverhulme_trust.jpg" alt="Logo1" width={140} height={140} />
          </div>
          {/* Partner Placeholder 8 */}
          <div className="w-[120px] h-[120px] bg-gray-50 border  border-gray-300 rounded-lg flex items-center justify-center text-gray-400 text-sm italic">
            <Image src="/assets/logo/comet.jpg" alt="Logo1" width={110} height={110} />
          </div>
          {/* Partner Placeholder 9 */}
          <div className="w-[180px] h-[80px] bg-gray-50 border  border-gray-300 rounded-lg flex items-center justify-center text-gray-400 text-sm italic">
            <Image src="/assets/logo/nceo.png" alt="Logo1" width={110} height={110} />
          </div>
        </div>
        
      </div>
    </section>
  );
}
