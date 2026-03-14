"use client";

export default function Posters() {
  const posters = [
    { name: "Isabelle Taylor", title: "Satellite measurements of the La Soufrière eruption columns" },
    { name: "Gabriel Maxemin", title: "Biomass Burning in the Tropics" },
    { name: "Kevin Olsen", title: "Broad Horizons, a new look at our changing planet" },
    { name: "Brandon VanderBeek", title: "Imaging Geothermal Reservoirs with Seismic Observations" },
    { name: "Robbie Ramsay", title: "The Field Spectroscopy Facility - A Free to Access Lending Library of Ground, UAV, and Underwater Instrumention for Earth Observation" },
    { name: "Emma Greenough", title: "Remote sensing hazard assessment in Kambarata, Kyrgyzstan" },
    { name: "Anu Dudhia", title: "Atmospheric Sounding with IASI" },
    { name: "Antonin Knizek", title: "The Scattering Reference Forward Model" },
  ];

  return (
    <section id="posters" className="py-8 px-4 sm:px-8 lg:px-16 max-w-[1300px] mx-auto">
      <div className="bg-white border border-[#dfe3eb] rounded-[15px] p-6 lg:p-8 shadow-lg">
        <h2 className="text-[22px] font-bold text-[#00162e] mb-2">
          List of posters
        </h2>
        <div className="hidden md:grid grid-cols-[200px_1fr] border-b-2 bg-gray-50 border-[#00162e] pb-2 mb-2 px-2">
          <span className="text-[13px] font-bold text-[#4b5c78] uppercase tracking-wide">Name</span>
          <span className="text-[13px] font-bold text-[#4b5c78] uppercase tracking-wide">Poster Title</span>
        </div>

        {/* Table Rows */}
        <div className="flex flex-col">
          {posters.map((poster, index) => (
            <div 
              key={index} 
              className="grid grid-cols-1 md:grid-cols-[200px_1fr] py-4 border-b border-[#dfe3eb] gap-2 md:gap-4 px-2 items-start"
            >
              <div className="flex md:block">
                <span className="md:hidden font-bold text-[#4b5c78] uppercase text-[11px] w-20 flex-shrink-0">Name:</span>
                <span className="text-[15px] text-[#00162e] font-medium">{poster.name}</span>
              </div>
              <div className="flex md:block">
                <span className="md:hidden font-bold text-[#4b5c78] uppercase text-[11px] w-20 flex-shrink-0">Title:</span>
                <span className="text-[13px] italic font-bold leading-snug">
                  {poster.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
