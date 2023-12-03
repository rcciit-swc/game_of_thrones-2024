export default function SectionHeader({ text , size  }:{text:string , size:string}) {
    console.log(text);
    return (
      <>
        <div className={`font-got relative z-0 text-${size} xl:text-7xl text-center tracking-widest leading-10 flex py-12 justify-center items-center`} style={{ 
          color: "rgba(255, 255, 255, 0.08)", 
      }}>
        {text}
        <p className='absolute z-10 text-white text-[30px] xl:text-[45px] tracking-3.6px'>{text}</p>
      </div>
      </>
    );
  }