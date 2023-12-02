import React from 'react';
import Image from 'next/image';

export default function SponsorPage() {
  return (
    <div className="font-got p-12" style={{ backgroundColor: '#1E1E1E', color: '#FFFFFF' }}>
      <div className='font-got relative z-0 flex py-12  justify-center items-center' style={{ 
          color: "rgba(255, 255, 255, 0.08)", 
          fontFamily: "got", 
          fontSize: "70px", 
          fontStyle: "normal", 
          fontWeight: "400", 
          lineHeight: "normal", 
          letterSpacing: "7.2px", 
          textAlign: "center" 
      }}>
        SPONSORS
        <p className='absolute z-1 text-white text-[40px] tracking-3.6px'>SPONSORS</p>
      </div>
      <div className='grid px-4  pb-10 grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='border rounded-xl gap-5 text-center p-1 w-[300px] h-[300px] max-w-xl mx-auto flex flex-col items-center justify-center'>
          <h2>Broadcasting<br/> Partner</h2>
          <Image src="/sheffield.jpeg" width={158} height={151} alt="Broadcasting Partner" />
        </div>
        <div className='border rounded-xl gap-8 px-4 text-center w-[300px] h-[300px] max-w-xl mx-auto flex flex-col items-center justify-center'>
          <h2>Medical<br/>Partner</h2>
          <Image src="/wsb.jpeg" width={162} height={139} alt="Medical Partner" />
        </div>
        <div className='border rounded-xl px-4 gap-12 text-center w-[300px] h-[300px] max-w-xl mx-auto flex flex-col items-center justify-center'>
          <h2>Kits <br/>Partner</h2>
          <Image src="/dec.png" width={226} height={91} alt="Kits Partner" />
        </div>
        </div>
        <div className='border rounded-xl p-1 gap-1  text-center w-[400px] h-[300px] max-w-xl mx-auto flex flex-col items-center justify-center'>
        <h2>Banking <br/> Partners</h2>
        <div className='flex flex-row items-center justify-center space-x-4'>
          <Image src="/hdfc.png" width={120} height={120} alt="Banking Partners" className="m-2" />
          <Image src="/idfc.jpeg" width={120} height={120} alt="Banking Partners" className="m-2" />
          
        </div>
        <Image src="/boi.png" width={120} height={120} alt="Banking Partners" className="m-2" />
      </div>
      </div>
  );
};