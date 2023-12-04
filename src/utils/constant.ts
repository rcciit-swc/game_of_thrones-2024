const navRoutes = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Events",
    href: "/events",
  },
  {
    name: "Gallery",
    href: "/gallery",
  },
  {
    name: "Contact Us",
    href: "/contacts",
  },
];

const links = [
  { text: "About RCCIIT", url: "https://www.rcciit.org/" },
  { text: "Events", url: "https://got.rcciit.org.in/#events" },
  { text: "Gallery", url: "https://got.rcciit.org.in/gallery" },
  {
    text: "Sponsorship Brochure",
    url: "https://drive.google.com/file/d/14b8aQFhIhg3PDtByyscxF50MkNfq43B_/view",
  },
  { text: "Contact Us", url: "https://got.rcciit.org.in/#contact" },
];

const socials = [
  { src: "socials/google.svg", url: "https://www.google.com/search?q=rcciit" },
  {
    src: "socials/facebook.svg",
    url: "https://www.facebook.com/rcciit_kolkata",
  },
  {
    src: "socials/insta.svg",
    url: "https://www.instagram.com/rcciit_kolkata",
  },
];

const teachers = [
  {
    speech:
      'I am thrilled to introduce the upcoming sports extravaganza, "Game of Thrones," that will undoubtedly set the college ablaze with excitement and fervor. As we gear up for this thrilling event, let us embrace the spirit of competition, camaraderie, and sportsmanship. "Game of Thrones" is not just a series of matches; it is a celebration of our college spirit and unity. I encourage each one of you to participate wholeheartedly, whether as a competitor or a fervent supporter. Together, let us make this event a resounding success and create memories that will be etched in the annals of our college\'s history. May the games begin!',
    signL1: "Prof.(Dr.) Anirban Mukherjee",
    signL2: "Principal (Officiating) RCCIIT &Professor, IT, RCCIIT",
    img: "teachers/principal.png",
  },
  {
    speech:
      'I am delighted to welcome you all to the 2021 edition of "Game of Thrones," the annual sports fest of RCCIIT. This year, we are hosting the event virtually, and I am confident that it will be a grand success. I am sure that the participants will give their best and make the event a memorable one. I wish all the participants the very best and hope that they will enjoy the event to the fullest.',
    signL1: "Prof.(Dr.) Anirban Mukherjee",
    signL2: "Principal (Officiating) RCCIIT &Professor, IT, RCCIIT",
    img: "teachers/s.png",
  },
  {
    speech:
      'It gives me immense pleasure to welcome you all to the 2021 edition of "Game of Thrones," the annual sports fest of RCCIIT. This year, we are hosting the event virtually, and I am confident that it will be a grand success. I am sure that the participants will give their best and make the event a memorable one. I wish all the participants the very best and hope that they will enjoy the event to the fullest.It gives me immense pleasure to welcome you all to the 2021 edition of "Game of Thrones," the annual sports fest of RCCIIT. This year, we are hosting the event virtually, and I am confident that it will be a grand success. I am sure that the participants will give their best and make the event a memorable one. I wish all the participants the very best and hope that they will enjoy the event to the fullest.',
    signL1: "Prof.(Dr.) Anirban Mukherjee",
    signL2: "Principal (Officiating) RCCIIT &Professor, IT, RCCIIT",
    img: "teachers/h.png",
  },
];

const sponsors = [
  {
    typeOfPartner: "Broadcasting",
    sponsorImage: ["/sponsors/sheffieldTimes.jpeg"],
  },
  {
    typeOfPartner: "Medical",
    sponsorImage: ["/sponsors/wsbClinic.jpeg"],
  },
  {
    typeOfPartner: "Kits",
    sponsorImage: ["/sponsors/decathlon.png"],
  },
  {
    typeOfPartner: "Banking",
    sponsorImage: [
      "/sponsors/hdfcBank.png",
      "/sponsors/idfcBank.jpeg",
      "/sponsors/boi.png",
    ],
  },
];
interface SponsorDataType {
  name: string;
  logo: string[];
}
const sponsorsData: SponsorDataType[] = [
  {
    name: "Brodcasting Partner",
    logo: ["/sheffield.jpeg"],
  },
  {
    name: "Medical Partner",
    logo: ["/wsb.jpeg"],
  },
  {
    name: "Kits Partner",
    logo: ["/dec.png"],
  },
  {
    name: "Banking Partners",
    logo: ["/hdfc.png", "/idfc.jpeg", "/boi.png"],
  },
];

const CommitteeDetails = [
  {
      title:"Faculty-In-Charge (Sports) and Assistant Professor, RCCIIT" ,
      members:[{
          name : "Sarbojit Mukherjee",
          role:"",
          phone : "+919433852385"
      }]
  },
  {
      title:"SWC Faculty Sub Committee (Sports)" ,
      members:[{
          name : "Naiwrita Dey",
          role:"Assistant Professor, RCCIIT",
          phone : "+918420479505"
      },
  {
      name : "Dipan Bandyopadhyay",
      role:"Assistant Professor, RCCIIT",
      phone : "+917003467858"
  },
  {
      name : "Deepam Gangopadhyay ",
      role:"Assistant Professor, RCCIIT",
      phone : "+918240668401"
  }]
  },
  {
      title:"For Event Details" ,
      members:[{
          name : "Pritam Sarkar",
          role:"",
          phone : " +918918969446"
      },
  {
      name : "Prasanna Biswas ",
      role:"",
      phone : "+919830360175"
  },
  {
      name : "Arnab Das",
      role:"",
      phone : " +916289881455"
  }]
  },
  {
      title:"For Sponsorship" ,
      members:[{
          name : "Aritra Kr. Basu ",
          role:"",
          phone : "+916291080552"
      }]
  },
  {
      title:"SWC Student Representatives" ,
      members:[{
          name : "Sanmoy Mallick  ",
          role:" Assistant General Secretary , Cultural",
          phone : " +919433018776"
      },
  {
      name : "Arghya Guha",
      role:" Assistant General Secretary,Tech",
      phone : "+918777498780"
  },
  {
      name : "Arghya Guha  ",
      role:" Assistant General Secretary,Tech",
      phone : "+918777498780"
  },
  {
      name : "Gautami Sinha ",
      role:"General Secretary",
      phone : " +917980345714"
  }
]
  },
]
export { links, socials, teachers, sponsors , sponsorsData , navRoutes , CommitteeDetails };
