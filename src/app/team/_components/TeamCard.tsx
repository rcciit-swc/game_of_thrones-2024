import React from "react";
import Image from "next/image";

const TeamCard = () => {
  return (
    <div className="h-[600px] w-[150px] border">
      <Image src={"/assets/events/football2.svg"} height={600} width={600} alt="" />
    </div>
  );
};

export default TeamCard;
