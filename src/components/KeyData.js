"use client";

export default function KeyData() {
  return (
    <section id="key-dates" className="py-8 px-16 max-w-[1300px] mx-auto">
      <div className="bg-white border border-[#dfe3eb] rounded-[15px] p-8 shadow-lg">
        <h2 className="text-[22px] font-bold text-[#00162e] mb-6">
          Key Dates
        </h2>
        <div className="grid grid-cols-2 gap-6">
          {/* Registration closes */}
          <div className="border-l-4 border-[#00162e] pl-4 py-2">
            <h3 className="text-[16px] font-bold text-[#00162e] mb-1">
              Registration closes
            </h3>
            <p className="text-[15px] text-[#4b5c78]">
              12 March 2026
            </p>
          </div>

          {/* OXEO Forum */}
          <div className="border-l-4 border-[#00162e] pl-4 py-2">
            <h3 className="text-[16px] font-bold text-[#00162e] mb-1">
              OXEO Forum
            </h3>
            <p className="text-[15px] text-[#4b5c78]">
              26 March 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
