"use client";

export default function Registration() {
  return (
    <section id="registration" className="py-8 px-4 sm:px-8 lg:px-16 max-w-[1300px] mx-auto">
      <div className="bg-white border border-[#dfe3eb] rounded-[15px] p-6 lg:p-8 shadow-lg">
        <h2 className="text-[22px] font-bold text-[#00162e] mb-2">
          Registration
        </h2>
        <p className="text-[15px] text-[#4b5c78] mb-6">
          Registration is free but required.
        </p>

        {/* Registration Box */}
        <div className="border border-[#dfe3eb] rounded-[15px] p-6">
          <h3 className="text-[16px] font-bold text-[#00162e] mb-4">
            Registration
          </h3>
          <a 
            href="https://forms.office.com/Pages/ResponsePage.aspx?id=G96VzPWXk0-0uv5ouFLPkfWJX-MtaWtGq7nKc4z3zbxUNUExWVFaS1pMTEROWklTVjQ1S0c1NzZNQy4u" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-[16px] text-[#00162e] underline font-medium hover:opacity-80 transition-opacity"
          >
            Registration form
          </a>
        </div>
      </div>
    </section>
  );
}
