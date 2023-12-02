export default function PrincipalsDesk() {
  return (
    <section className="PrincipalsDesk text-white">
        <div className="text-center font-got pb-10 my-8">
          <div className="text-xl md:text-3xl tracking-[5.20px]">PRINCIPAL’S  DECK</div>
          <div className=" text-white text-opacity-10 text-xl md:text-5xl tracking-[10.40px] mt-[-30px] md:mt-[-40px]">PRINCIPAL’S  DECK</div>
        </div>
        <div className="relative pb-24">
          <div className="flex flex-col bg-primary rounded-xl w-full md:w-[750px] mx-auto ">
            <div className="font-['Poppins'] font-2xl my-6 pl-8">Dear students,</div>
            <div className="text-justify font-['Poppins'] px-12 md:pl-12 md:pr-96">I am thrilled to introduce the upcoming sports extravaganza, "Game of Thrones," that will undoubtedly set the college ablaze with excitement and fervor. As we gear up for this thrilling event, let us embrace the spirit of competition, camaraderie, and sportsmanship. "Game of Thrones" is not just a series of matches; it is a celebration of our college spirit and unity. I encourage each one of you to participate wholeheartedly, whether as a competitor or a fervent supporter. Together, let us make this event a resounding success and create memories that will be etched in the annals of our college's history. May the games begin!</div>
            <div className="font-['Poppins'] pl-44 md:pl-56 mt-4 mb-6">Prof.(Dr.) Anirban Mukherjee<br/>Principal (Officiating) RCCIIT &Professor, IT, RCCIIT</div>
          </div>
          <div className="img absolute top-[100px] md:right-[20vw] lg:right-[30vw] hidden md:block">
            <img className="w-[220px] h-[270px] rounded-3xl" src="principal.png" />
            <div className="w-[220px] h-[270px] rounded-3xl bg-black mt-[-280px] ml-[-10px]"></div>
         </div>
        </div>
    </section>
  );
}