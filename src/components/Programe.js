"use client";

export default function Programme() {
  const schedule = [
    { time: "10:30 - 11:00", session: "Registration", speaker: "" },
    { time: "11:00 - 11:05", session: "Welcome remarks", speaker: "Don Grainger" },
    { time: "11:05 - 11:30", session: "Keynote lecture", speaker: "Samira Barzin" },
    { time: "11:30 - 11:40", session: "Contributed talks", speaker: "Rui Song" },
    { time: "11:40 - 11:50", session: "Contributed talks", speaker: "James Doherty" },
    { time: "11:50 - 12:00", session: "Contributed talks", speaker: "Becca Tanner" },
    { time: "12:00 - 13:00", session: "Lunch", speaker: "" },
    { time: "13:00 - 13:10", session: "Contributed talks", speaker: "Damien Weidmann" },
    { time: "13:10 - 13:20", session: "Contributed talks", speaker: "Maiurie Rasakulasuriar" },
    { time: "13:20 - 13:30", session: "Contributed talks", speaker: "Philip Stier" },
    { time: "13:30 - 14:00", session: "Breakout sessions", speaker: "" },
    { time: "14:00 - 14:20", session: "Break", speaker: "" },
    { time: "14:20 - 15:00", session: "Keynote lecture", speaker: "Erwan Rivault" },
    { time: "15:00 - 15:10", session: "Contributed talks", speaker: "Richard Walker" },
    { time: "15:10 - 15:20", session: "Contributed talks", speaker: "Amy Morgan" },
    { time: "15:20 - 15:50", session: "Coffee break", speaker: "" },
    { time: "15:50 - 16:00", session: "Contributed talks", speaker: "Rebekah Rhodes" },
    { time: "16:10 - 16:20", session: "Contributed talks", speaker: "Elisa Carboni" },
    { time: "16:20 - 16:30", session: "Contributed talks", speaker: "Nick Everard" },
    { time: "16:30 - 16:40", session: "Contributed talks", speaker: "Kendall Jeffreys" },
    { time: "16:40 - 16:50", session: "Contributed talks", speaker: "Pirta Palola" },
    { time: "16:50 - 17:00", session: "Closing remarks", speaker: "Isabelle Taylor" },
    { time: "17:00 - 18:00", session: "Poster session, networking", speaker: "" },
    { time: "18:30", session: "Dinner", speaker: "" },
  ];


  return (
    <section id="programme" className="py-8 px-4 sm:px-8 lg:px-16 max-w-[1300px] mx-auto">
      <div className="bg-white border border-[#dfe3eb] rounded-[15px] p-6 lg:p-8 shadow-lg">
        <h2 className="text-[22px] font-bold text-[#00162e] mb-2">
          Programme
        </h2>
        <p className="text-[15px] text-[#4b5c78] mb-6">
          The programme will be updated on a rolling basis.
        </p>

        {/* Desktop Table Header - Hidden on Mobile */}
        <div className="hidden md:grid grid-cols-[150px_1fr_150px] lg:grid-cols-[200px_1fr_200px] border-b-2 bg-gray-50 border-[#00162e] pb-2 mb-2 px-2">
          <span className="text-[13px] font-bold text-[#4b5c78] uppercase tracking-wide">Time</span>
          <span className="text-[13px] font-bold text-[#4b5c78] uppercase tracking-wide">Session</span>
          <span className="text-[13px] font-bold text-[#4b5c78] uppercase tracking-wide">Speaker</span>
        </div>

        {/* Table Rows */}
        <div className="flex flex-col">
          {schedule.map((item, index) => (
            <div 
              key={index} 
              className="grid grid-cols-1 md:grid-cols-[150px_1fr_150px] lg:grid-cols-[200px_1fr_200px] py-4 border-b border-[#dfe3eb] gap-2 md:gap-0 px-2"
            >
              <div className="flex md:block">
                <span className="md:hidden font-bold text-[#4b5c78] uppercase text-[11px] w-20 flex-shrink-0">Time:</span>
                <span className="text-[15px] text-[#00162e] font-medium">{item.time}</span>
              </div>
              <div className="flex md:block">
                <span className="md:hidden font-bold text-[#4b5c78] uppercase text-[11px] w-20 flex-shrink-0">Session:</span>
                <span className="text-[15px] text-[#00162e]">{item.session}</span>
              </div>
              <div className="flex md:block">
                <span className="md:hidden font-bold text-[#4b5c78] uppercase text-[11px] w-20 flex-shrink-0">Speaker:</span>
                <span className="text-[15px] text-[#4b5c78]">{item.speaker || "—"}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
