import { CommitteeDetails } from "@/utils/constant";

const Committee = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 lg:gap-16 ">
      {CommitteeDetails.map((item, index) => {
        return (
          <div
            key={index}
            className="flex flex-col items-center gap-3 lg:gap-5 px-5"
          >
            <h1 className="text-lg lg:text-2xl font-got text-primary tracking-wider text-center">
              {item.title}
            </h1>
            <div className="flex flex-row justify-center flex-wrap items-center gap-8 lg:gap-20">
              {item.members.map((member, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-row flex-wrap  items-center gap-2 text-md lg:text-xl"
                  >
                    <div className="flex flex-col items-center text-center">
                      <p className="font-semibold">{member.name}</p>
                      <p>{member.role}</p>
                      <a
                        href={`tel:${member.phone}`}
                        className="hover:text-green-400"
                      >
                        {member.phone}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Committee;
