import React from "react";

const RegForm = () => {
  return (
    <form action="" className="w-screen md:w-[80%] mx-auto  rounded-2xl px-10 py-10 bg-[#252525]">
        <div className="flex px-10  flex-col  gap-10">
        <div className="flex flex-col w-full  items-start gap-5">
        <label htmlFor="">Full Name</label>
        <input
          type="text"
          placeholder="Full Name"
          className="rounded-xl md:w-[80%] border-b border-slate-400 bg-transparent px-5 py-1 placeholder:text-slate-400"
        />
      </div>
      <div className="flex flex-col  items-start gap-10">
        <div className="flex md:w-[60%] flex-col gap-5">
        <label htmlFor="">Phone Number</label>
        <div className="flex  flex-row gap-3">
          <button className="rounded-xl bg-white p-3 text-black ">+91</button>
          <input
            type="number"
            placeholder="94XXXXXXXX"
            className="rounded-xl w-full  border-b border-slate-400 bg-transparent px-5 py-1 placeholder:text-slate-400"
          />
        </div>
        
        </div>
        <div className="flex flex-col w-full items-start gap-5">
          <label htmlFor="">College Name</label>
          <input
            type="text"
            placeholder="College Name"
            className="rounded-xl  md:w-[80%] border-b border-slate-400 bg-transparent px-5 py-1 placeholder:text-slate-400"
          />
        </div>
        <div className="flex flex-col w-full items-start gap-5">
          <label htmlFor="">College Roll Number</label>
          <input
            type="text"
            placeholder="College Roll Number"
            className="rounded-xl  md:w-[80%] border-b border-slate-400 bg-transparent px-5 py-1 placeholder:text-slate-400"
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="">Gender</label>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-16">
            <span className="flex flex-row items-center gap-1">
              <input type="radio" className="text-white" />
              <label htmlFor="">Male</label>
            </span>
            <span className="flex flex-row items-center gap-1">
              <input type="radio" className="text-white" />
              <label htmlFor="">Female</label>
            </span>
            <span className="flex flex-row items-center gap-1">
              <input type="radio" className="text-white" />
              <label htmlFor="">Others</label>
            </span>
          </div>
        </div>

        <input type="submit" value="Submit" className="mx-auto bg-primary w-[80%] py-3 font-semibold tracking-wider rounded-full" />
        
        
      </div>
        </div>
     
    </form>
  );
};

export default RegForm;
