import ChooseUs from "@/components/ChooseUs";
import HeroSection from "@/components/Hero";
import Recent from "@/components/rec";
import SecRecent from "@/components/SecRec";
import Services from "@/components/Services";
import { CarouselSize } from "@/components/test";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <Services />
      {/* Carousel Section Below */}
      <div className="container mx-auto px-6 py-12">
        <CarouselSize />
      </div>
      <ChooseUs />
      <Recent/>
      <SecRecent/>
       
    </div>
  );
}
