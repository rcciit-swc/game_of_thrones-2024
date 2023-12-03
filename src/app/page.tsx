
import SponsorPage from "@/components/home/Sponsor";
import Hero from "@/components/home/Hero";
import TeachersDesk from '@/components/home/TeachersDesk';
import About from "@/components/home/About";

export default function Home() {
  return (
    <main className="">
        <Hero />
        <About />
      <TeachersDesk />
      <SponsorPage />
    </main>
  );
}
