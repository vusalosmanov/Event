"use client";

export default function Programme() {
  const schedule = [
    { time: "10:30 - 11:00", session: "Registration", title: "", speaker: "" },
    { time: "11:00 - 11:05", session: "Welcome Remarks", title: "", speaker: "Don Grainger" },
    { time: "11:05 - 11:30", session: "Keynote speech: The pivotal importance of EO for government innovation ", title: "", speaker: "Samira Barzin" },
    { time: "11:30 - 11:40", session: "Coal plants persist as a large barrier to the global solar energy transition", title: "", speaker: "Rui Song" },
    { time: "11:40 - 11:50", session: "Satellite and AI intelligence to Forecast Harmful Algal Blooms", title: "", speaker: "James Doherty" },
    { time: "11:50 - 12:00", session: "Estimating the intensity of explosive volcanic eruptions using satellite observations of volcanic clouds", title: "", speaker: "Becca Tanner" },
    { time: "12:00 - 13:00", session: "Lunch", title: "", speaker: "" },
    { time: "13:00 - 13:10", session: "SOLSTICE: a solar occultation limb sounding constellation for middle atmosphere profiling", title: "", speaker: "Damien Weidmann" },
    { time: "13:10 - 13:20", session: "Improving IASI Trace-Gas Retrievals Through Cloud Correction Using AVHRR Data", title: "", speaker: "Maiurie Rasakulasuriar" },
    { time: "13:20 - 13:30", session: "Tracking of convective clouds using geostationary satellite data in combination with active instruments from CloudSat and EarthCARE", title: "", speaker: "Philip Stier" },
    { time: "13:30 - 14:00", session: "Breakout sessions", title: "", speaker: "" },
    { time: "14:00 - 14:20", session: "Break", title: "", speaker: "" },
    { time: "14:20 - 15:00", session: "From Pixels to Stories: Using Satellite Data in a Newsroom", title: "", speaker: "Erwan Rivault" },
    { time: "15:00 - 15:10", session: "Earth Observation and earthquake Hazards", title: "", speaker: "Richard Walker" },
    { time: "15:10 - 15:20", session: "An automated investigation of Antarctic ice shelf calving from multi-sensor radar satellite data", title: "", speaker: "Amy Morgan" },
    { time: "15:20 - 15:50", session: "", title: "", speaker: "" },
    { time: "15:50 - 16:00", session: "Earth Analogues of Venus Volcanism", title: "", speaker: "Rebekah Rhodes" },
    { time: "16:00 - 16:10", session: "AI+Satellite Intelligence Biodata Platform", title: "", speaker: "Allan Marega " },
    { time: "16:10 - 16:20", session: "Evolution of cloud properties and radiative fluxes observed from space", title: "", speaker: "Elisa Carboni" },
    { time: "16:20 - 16:30", session: "The Resolution Revolution: Hi-Res EO for Hydrology", title: "", speaker: "Nick Everard" },
    { time: "16:30 - 16:40", session: "Spectral and structural complexity predict pollination networks in tropical woodland savannas", title: "", speaker: "Kendall Jeffreys" },
    { time: "16:40 - 16:50", session: "Trace gas retrievals at RAL Remote Sensing Group", title: "", speaker: "Richard Siddans" },
    { time: "16:50 - 17:00", session: "Closing Remarks", title: "", speaker: "Isabelle Taylor" },
    { time: "17:00 - 18:00", session: "Poster session, networking", title: "", speaker: "" },
    { time: "18:30 - TBD", session: "location:Jee Saheb", title: "", speaker: "" },
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

        <div className="hidden md:grid grid-cols-[150px_1fr_200px] lg:grid-cols-[200px_1fr_250px] border-b-2 bg-gray-50 border-[#00162e] pb-2 mb-2 px-2">
          <span className="text-[13px] font-bold text-[#4b5c78] uppercase tracking-wide">Time</span>
          <span className="text-[13px] font-bold text-[#4b5c78] uppercase tracking-wide">Session</span>
          <span className="text-[13px] font-bold text-[#4b5c78] uppercase tracking-wide">Speaker</span>
        </div>

        {/* Table Rows */}
        <div className="flex flex-col">
          {schedule.map((item, index) => (
            <div 
              key={index} 
              className="grid grid-cols-1 md:grid-cols-[150px_1fr_200px] lg:grid-cols-[200px_1fr_250px] py-4 border-b border-[#dfe3eb] gap-2 md:gap-4 px-2 items-start"
            >
              <div className="flex md:block">
                <span className="md:hidden font-bold text-[#4b5c78] uppercase text-[11px] w-20 flex-shrink-0">Time:</span>
                <span className="text-[15px] text-[#00162e] font-medium whitespace-nowrap">{item.time}</span>
              </div>
              <div className="flex md:block">
                <span className="md:hidden font-bold text-[#4b5c78] uppercase text-[11px] w-20 flex-shrink-0">Session:</span>
                <span 
                  className="text-[13px] italic  font-bold leading-snug line-clamp-2"
                  title={item.session}
                >
                  {item.session}
                </span>
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

