export default function SectionHeader({ text }: { text: string }) {
  return (
    <div className="relative z-0 flex items-center justify-center py-12 text-center font-got text-[40px] tracking-[7.2px] text-neutral/[0.08] md:text-[70px]">
      {text}
      <p className="z-1 tracking-3.6px absolute text-[20px] text-neutral md:text-[40px]">
        {text}
      </p>
    </div>
  );
}