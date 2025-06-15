import FaqSection from "./_components/sections/FAQ";
import HeroSection from "./_components/sections/Hero";
import InfoSection from "./_components/sections/Info";
import LogoCarouselSection from "./_components/sections/LogoCarousel";
import DemoSection from "./_components/sections/DemoRequest";
import StorySection from "./_components/sections/Story";
import TestimonialSection from "./_components/sections/Testimonal";
import CTASection from "./_components/sections/CTA";
import { TeamSection } from "./_components/sections/Team";
import AppStores from "./_components/sections/AppStore";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <InfoSection />
      <LogoCarouselSection />
      <TestimonialSection />
      <StorySection />
      <TeamSection />
      <DemoSection />
      <AppStores />
      <FaqSection />|
      <CTASection />
    </div>
  );
}
