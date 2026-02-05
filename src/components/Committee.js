"use client";

export default function Committee() {
  const members = [
    { name: "Dr Isabelle Taylor", affiliation: "AOPP, University of Oxford (Chair)" },
    { name: "Dr Antonin Knizek", affiliation: "AOPP, University of Oxford" },
    { name: "Emma Greenough", affiliation: "Department of Earth Sciences, University of Oxford" },
    { name: "Dr Isamar Cortes", affiliation: "Environmental Change Institute, University of Oxford" },
    { name: "Alamdar Dashdamirov", affiliation: "Department of Earth Sciences, University of Oxford" },
  ];

  return (
    <section id="committee" className="py-8 px-4 sm:px-8 lg:px-16 max-w-[1300px] mx-auto">
      <div className="bg-white border border-[#dfe3eb] rounded-[15px] p-6 lg:p-8 shadow-lg">
        <h2 className="text-[22px] font-bold text-[#00162e] mb-6">
          Organising Committee
        </h2>

        {/* Members Box */}
        <div className="border border-[#dfe3eb] rounded-[15px] p-6 mb-6">
          <h3 className="text-[18px] font-bold text-[#00162e] mb-4">Members</h3>
          <ul className="space-y-4">
            {members.map((member, index) => (
              <li key={index} className="text-[16px] text-[#4b5c78] leading-tight">
                <span className="font-bold text-[#4b5c78]">{member.name}</span>, {member.affiliation}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Box */}
        <div className="border border-[#dfe3eb] rounded-[15px] p-6">
          <h3 className="text-[18px] font-bold text-[#00162e] mb-2">Contact</h3>
          <p className="text-[16px] text-[#4b5c78]">
            Email: <a href="mailto:antonin.knizek@physics.ox.ac.uk" className="text-[#00162e] underline hover:opacity-80 transition-opacity">
              antonin.knizek@physics.ox.ac.uk
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
