
import SponsorPage from "@/components/home/Sponsor";
import Hero from "@/components/home/Hero";
import TeachersDesk from '@/components/home/TeachersDesk';
import About from "@/components/home/About";
import HeroSection from "@/components/home/HeroSection";

export default function Home() {
  return (
    <main className="">
       <HeroSection />
        <About />
      <TeachersDesk />
      <SponsorPage />
    </main>
  );
}
