import Image from "next/image";
import React from "react";

const TeamCard = () => {
  return (
    <div className="h-[600px] w-[150px] border">
      <Image src={"/assets/events/football2.svg"} height={600} width={600} alt="" />
    </div>
  );
};

export default TeamCard;
