import Image from "next/image";
import React from "react";

const TeamCard = () => {
  return (
    <div className="w-[150px] h-[200px] border">
      <Image src={"/assets/events/football2.svg"} height={0} width={0} alt="" />
     
    </div>
  );
};

export default TeamCard;
