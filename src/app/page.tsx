
import SponsorPage from "@/components/Sponsor";
import Hero from "@/components/home/Hero";
import TeachersDesk from '@/components/TeachersDesk';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
        <Hero />
      <TeachersDesk />
      <SponsorPage />
    </main>
  );
}
