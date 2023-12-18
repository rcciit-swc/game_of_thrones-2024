import {  SponsorPage, TeachersDeck, About, Events } from "./_components";
import HeroSection from "./_components/HeroSection";

export default function Home() {
  return (
    <main className="max-w-full space-y-[100px]">
      <div className="flex flex-col">
        <HeroSection />

        <About />
      </div>
      <Events />
      <TeachersDeck />
      <SponsorPage />
    </main>
  );
}
