export default function SectionHeader({ text }: { text: string }) {
  const letters = text.split("");
  return (
    <div className="relative z-0 flex items-center justify-center py-12 text-center font-got text-[40px] tracking-[7.2px] text-neutral/[0.08] md:text-[70px]">
      {text}
     <div className="z-1  absolute">
      <ul className="flex items-center gap-[2.2px]">
      {
        letters.map((letter, index) => (
          <li
            key={index}
            className=" text-[20px]  cursor-pointer  hover:text-yellow-300 text-neutral md:text-[40px]"
    
          >
            {letter === " " ? "\u00A0" : letter}
          </li>
        ))
      }
      </ul>
     
     </div>
      
    </div>
  );
}