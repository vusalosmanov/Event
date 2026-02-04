import Header from "@/components/Header";
import About from "@/components/About";
import KeyData from "@/components/KeyData";
import Programme from "@/components/Programe";
import Venue from "@/components/Venue";
import Committee from "@/components/Committee";
import Registration from "@/components/Registration";
import Partners from "@/components/Partners";

export default function Home() {
  return (
    <main className="pb-16">
      <Header />
      
      {/* About Section */}
      <About />

      {/* Key Dates Section */}
      <KeyData />

      {/* Programme Section */}
      <Programme />

      {/* Venue Section */}
      <Venue />

      {/* Committee Section */}
      <Committee />

      {/* Registration Section */}
      <Registration/> 

      {/* Partners Section */}
      <Partners />

        <div className="px-16 max-w-[1300px] mx-auto">
        <p className=" flex justify-start text-[15px] text-[#4b5c78]">© 2026 OxEO Forum Banner image credit: Joshua Stevens, https://science.nasa.gov/earth/earth-observatory/a-view-of-vesuvius-149298/</p>
      </div>
    </main>
  );
}
