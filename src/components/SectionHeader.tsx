export default function SectionHeader({ text }: { text: string }) {
  return (
    <div className="relative z-0 flex items-center justify-center py-12 text-center font-got text-[40px] tracking-[7.2px] text-neutral/[0.08] md:text-[70px]">
      {text}
      <div className="z-1 absolute text-center font-got text-white text-[20px] md:text-[35px] px-3">
        {
          text
        }
      </div>
    </div>
  );
}
