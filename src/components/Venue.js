"use client";

export default function Venue() {
  return (
    <section id="venue" className="py-8 px-4 sm:px-8 lg:px-16 max-w-[1300px] mx-auto">
      <div className="bg-white border border-[#dfe3eb] rounded-[15px] p-6 lg:p-8 shadow-lg">
        <h2 className="text-[22px] font-bold text-[#00162e] mb-6">
          Venue &amp; Travel
        </h2>

        {/* Venue Info Card */}
        <div className="border-l-4 border-[#00162e] pl-4 py-2 mb-6">
          <h3 className="text-[16px] font-bold text-[#00162e] mb-2">
            Venue
          </h3>
          <p className="text-[15px] text-[#00162e] mb-1">
            St Hugh&apos;s College (main entrance), University of Oxford
          </p>
          <p className="text-[15px] text-[#4b5c78]">
            St Margaret&apos;s Rd, Oxford OX2 6LE, UK
          </p>
        </div>

        {/* Google Maps Embed */}
        <div className="w-full h-[300px] rounded-lg overflow-hidden border border-[#dfe3eb]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.4567890123456!2d-1.2654321!3d51.7654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6a9f0b2b0b9%3A0x1234567890abcdef!2sSt%20Hugh&#39;s%20College!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="St Hugh's College Map"
          ></iframe>
        </div>

        {/* Second Venue Info Card */}
        <div className="border-l-4 border-[#00162e] pl-4 py-2 mb-6 mt-8">
          <h3 className="text-[16px] font-bold text-[#00162e] mb-2">
             Dinner  Venue
          </h3>
          <p className="text-[15px] text-[#00162e] mb-1">
            Jee Saheb Restaurant
          </p>
          <p className="text-[15px] text-[#4b5c78]">
             Oxford OX2 6LX, United Kingdom         
             </p>
        </div>

        {/* Second Google Maps Embed */}
        <div className="w-full h-[300px] rounded-lg overflow-hidden border border-[#dfe3eb]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.3!2d-1.2641681!3d51.7647159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c41cf5cde44f%3A0xd4ba40317e9bdae9!2sJee%20Saheb%20Restaurant!5e0!3m2!1sen!2suk!4v1710000000000!5m2!1sen!2suk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Second Venue Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
