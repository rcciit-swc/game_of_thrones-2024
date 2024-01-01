import { teachers } from "@/utils";

import { TeachersDeck, About, Events, Hero } from "./_components";

export default function Home() {
  return (
    <main className="max-w-full space-y-[100px]">
      <div className="flex flex-col">
        <Hero />

        <About />
      </div>
      <Events />
      {teachers.map((value, index) => (
        <TeachersDeck value={value} key={index} />
      ))}
      {/* <SponsorPage /> */}
    </main>
  );
}
