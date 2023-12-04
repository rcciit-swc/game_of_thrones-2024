import { Hero, SponsorPage, TeachersDeck, About, Events } from "./_components";

export default function Home() {
  return (
    <main className="max-w-full space-y-[100px]">
      <div className="flex flex-col">
        <Hero />

        <About />
      </div>
      <Events />
      <TeachersDeck />
      <SponsorPage />
    </main>
  );
}
