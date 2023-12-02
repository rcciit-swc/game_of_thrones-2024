export default function SectionHeader({ text }:{text:string}) {
    console.log(text);
    return (
      <>
        <div className='font-got relative z-0 flex py-12 justify-center items-center' style={{ 
          color: "rgba(255, 255, 255, 0.08)", 
          fontFamily: "got", 
          fontSize: "70px", 
          fontStyle: "normal", 
          fontWeight: "300", 
          lineHeight: "normal", 
          letterSpacing: "7px", 
          textAlign: "center" 
      }}>
        {text}
        <p className='absolute z-10 text-white text-[30px] xl:text-[45px] tracking-3.6px'>{text}</p>
      </div>
      </>
    );
  }