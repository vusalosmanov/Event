"use client";

export default function Programme() {
  const schedule = [
    { time: "10:30 - 11:00", session: "Registration", speaker: "" },
    { time: "11:00 - 11:05", session: "Welcome remarks", speaker: "TBA" },
    { time: "11:05 - 11:30", session: "Keynote lecture", speaker: "TBA" },
    { time: "11:30 - 12:00", session: "Contributed talks", speaker: "TBA" },
    { time: "12:00 - 13:00", session: "Lunch", speaker: "" },
    { time: "13:00 - 13:30", session: "Keynote lecture", speaker: "TBA" },
    { time: "13:30 - 14:00", session: "Contributed talks", speaker: "TBA" },
    { time: "14:00 - 14:10", session: "Short break", speaker: "" },
    { time: "14:10 - 15:00", session: "Contributed talks", speaker: "TBA" },
    { time: "15:00 - 15:30", session: "Coffee break", speaker: "" },
    { time: "15:30 - 16:00", session: "Breakout sessions", speaker: "Organizing committee" },
    { time: "16:00 - 18:00", session: "Poster session, drinks reception", speaker: "" },
  ];

  return (
    <section id="programme" className="py-8 px-16 max-w-[1300px] mx-auto">
      <div className="bg-white border border-[#dfe3eb] rounded-[15px] p-8 shadow-lg">
        <h2 className="text-[22px] font-bold text-[#00162e] mb-2">
          Programme
        </h2>
        <p className="text-[15px] text-[#4b5c78] mb-6">
          The programme will be updated on a rolling basis.
        </p>

        {/* Table Header */}
        <div className="grid grid-cols-[200px_1fr_200px] border-b-2 bg-gray-50 border-[#00162e] pb-2 mb-2">
          <span className="text-[13px] font-bold text-[#4b5c78] uppercase tracking-wide">Time</span>
          <span className="text-[13px] font-bold text-[#4b5c78] uppercase tracking-wide">Session</span>
          <span className="text-[13px] font-bold text-[#4b5c78] uppercase tracking-wide">Speaker</span>
        </div>

        {/* Table Rows */}
        {schedule.map((item, index) => (
          <div 
            key={index} 
            className="grid grid-cols-[200px_1fr_200px] py-4 border-b border-[#dfe3eb]"
          >
            <span className="text-[15px] text-[#00162e] font-medium">{item.time}</span>
            <span className="text-[15px] text-[#00162e]">{item.session}</span>
            <span className="text-[15px] text-[#4b5c78]">{item.speaker}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
