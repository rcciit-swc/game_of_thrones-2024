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
    name: "Team",
    href: "/team",
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
  { text: "Contact Us", url: "https://got.rcciit.org.in/contacts" },
];

const socials = [
  { src: "assets/socials/google.svg", url: "https://www.google.com/search?q=rcciit" },
  {
    src: "assets/socials/facebook.svg",
    url: "https://www.facebook.com/rcciitofficial",
  },
  {
    src: "assets/socials/insta.svg",
    url: "https://www.instagram.com/rcciit_kolkata",
  },
];

const teachers = [
  {
    speech:
      'I am thrilled to introduce the upcoming sports extravaganza, "Game of Thrones," that will undoubtedly set the college ablaze with excitement and fervor. As we gear up for this thrilling event, let us embrace the spirit of competition, camaraderie, and sportsmanship. "Game of Thrones" is not just a series of matches; it is a celebration of our college spirit and unity. I encourage each one of you to participate wholeheartedly, whether as a competitor or a fervent supporter. Together, let us make this event a resounding success and create memories that will be etched in the annals of our college\'s history. May the games begin!',
    signL1: "Prof.(Dr.) Anirban Mukherjee",
    signL2: "Principal (Officiating) RCCIIT &Professor, IT, RCCIIT",
    img: "https://i.imgur.com/QNCJB8M.png",
  },
  {
    speech:
      'I am delighted to welcome you all to the 2021 edition of "Game of Thrones," the annual sports fest of RCCIIT. This year, we are hosting the event virtually, and I am confident that it will be a grand success. I am sure that the participants will give their best and make the event a memorable one. I wish all the participants the very best and hope that they will enjoy the event to the fullest.',
    signL1: "Prof.(Dr.) Anirban Mukherjee",
    signL2: "Principal (Officiating) RCCIIT &Professor, IT, RCCIIT",
    img: "https://i.imgur.com/QNCJB8M.png",
  },
  {
    speech:
      'It gives me immense pleasure to welcome you all to the 2021 edition of "Game of Thrones," the annual sports fest of RCCIIT. This year, we are hosting the event virtually, and I am confident that it will be a grand success. I am sure that the participants will give their best and make the event a memorable one. I wish all the participants the very best and hope that they will enjoy the event to the fullest.It gives me immense pleasure to welcome you all to the 2021 edition of "Game of Thrones," the annual sports fest of RCCIIT. This year, we are hosting the event virtually, and I am confident that it will be a grand success. I am sure that the participants will give their best and make the event a memorable one. I wish all the participants the very best and hope that they will enjoy the event to the fullest.',
    signL1: "Prof.(Dr.) Anirban Mukherjee",
    signL2: "Principal (Officiating) RCCIIT &Professor, IT, RCCIIT",
    img: "https://i.imgur.com/QNCJB8M.png",
  },
];

const sponsors = [
  {
    typeOfPartner: "Broadcasting",
    sponsorImage: ["/assets/sponsors/sheffieldTimes.jpeg"],
  },
  {
    typeOfPartner: "Medical",
    sponsorImage: ["/assets/sponsors/wsbClinic.jpeg"],
  },
  {
    typeOfPartner: "Kits",
    sponsorImage: ["/assets/sponsors/decathlon.png"],
  },
  {
    typeOfPartner: "Banking",
    sponsorImage: [
      "/assets/sponsors/hdfcBank.png",
      "/assets/sponsors/idfcBank.jpeg",
      "/assets/sponsors/boi.png",
    ],
  },
];
interface SponsorDataType {
  name: string;
  logo: string[];
}
const sponsorsData: SponsorDataType[] = [
  {
    name: "Brodcasting",
    logo: ["https://i.imgur.com/7FUt9No.jpg"],
  },
  {
    name: "Medical",
    logo: ["https://i.imgur.com/emWVQXE.jpg"],
  },
  {
    name: "Kits",
    logo: ["https://i.imgur.com/I0jZRoR.png"],
  },
  {
    name: "Banking",
    logo: [
      "https://i.imgur.com/h5axSQ5.png",
      "https://i.imgur.com/R8zURqG.jpg",
      "https://i.imgur.com/wOa6bYo.png",
    ],
  },
];

const CommitteeDetails = [
  {
    title: "Faculty-In-Charge (Sports)",
    members: [
      {
        name: "Sarbojit Mukherjee",
        role: "Assistant Professor, RCCIIT",
        phone: "+919433852385",
      },
    ],
  },
  {
    title: "SWC Faculty Sub-Committee (Sports)",
    members: [
      {
        name: "Ms. Jayanti Das",
        role: "Assistant Professor, RCCIIT",
        phone: "+91 9836585886",
      },
      {
        name: "Dipan Bandyopadhyay",
        role: "Assistant Professor, RCCIIT",
        phone: "+91 7003467858",
      },
      {
        name: "Deepam Gangopadhyay ",
        role: "Assistant Professor, RCCIIT",
        phone: "+91 8240668401",
      },
    ],
  },
  {
    title: "For Event Details",
    members: [
      {
        name: "Aritra Mitra",
        role: "",
        phone: "+91 9674508498",
      },
      {
        name: "Shatabdi Das",
        role: "",
        phone: "+91 9051805749",
      },
      {
        name: "Souvik Debnath",
        role: "",
        phone: "+91 8637096286",
      },
    ],
  },
  {
    title: "For Sponsorship",
    members: [
      {
        name: "Aranya Nandi",
        role: "",
        phone: "+91 6296851026",
      },
      {
        name: "Shourya Shikhar Ghosh",
        role: " Assistant General Secretary, Tech",
        phone: "+91 9732020301",
      }
    ],
  },
  {
    title: "SWC Student Representatives",
    members: [
      {
        name: "Md. Sabique",
        role: "General Secretary",
        phone: "+91 8017328234",
      },
      {
        name: "Tridibes Pal",
        role: " Assistant General Secretary, Sports",
        phone: "+91 8327656606",
      },
      {
        name: "Shourya Shikhar Ghosh",
        role: " Assistant General Secretary, Tech",
        phone: "+91 9732020301",
      },
      {
        name: "Sankalpa Aich",
        role: "Assistant General Secretary, Cultural",
        phone: "+91 8910498851",
      },
    ],
  },
];

const gallery=[
  {
    image:"https://i.imgur.com/SHBXkRE.jpg",
    title:"Game of Thrones 2023",
    sport:"Carrom",
  },
  {
    image:"https://i.imgur.com/u2P39Nq.jpg",
    title:"Game of Thrones 2023",
    sport:"Kabaddi",
  },
  {
    image:"https://i.imgur.com/s9Wk8Y0.jpg",
    title:"Game of Thrones 2023",
    sport:"Prize Distribution",
  },
  {
    image:"https://i.imgur.com/g88ASiX.jpg",
    title:"Game of Thrones 2023",
    sport:"Our Principal Sir",
  },
  {
    image:"https://i.imgur.com/DTgsRgf.jpg",
    title:"Game of Thrones 2023",
    sport:"Football",
  },
  {
    image:"https://i.imgur.com/EKK6eT3.jpg",
    title:"Game of Thrones 2023",
    sport:"Football",
  },
  {
    image:"https://i.imgur.com/wqZ8enj.jpg",
    title:"Game of Thrones 2023",
    sport:"Badminton",
  },
  {
    image:"https://i.imgur.com/wltRKfO.jpg",
    title:"Game of Thrones 2023",
    sport:"Cricket",
  },
  {
    image:"https://i.imgur.com/NBlrs4A.jpg",
    title:"Game of Thrones 2023",
    sport:"Our Faculties",
  },
  {
    image:"https://i.imgur.com/SuhFhE9.jpg",
    title:"Game of Thrones 2023",
    sport:"Cricket",
  },
  // {
  //   image:"/assets/gallery/6.jpg",
  //   title:"Game of Thrones",
  //   sport:"Cricket",
  // },
  

  
  {
    image:"https://i.imgur.com/Eva7WcO.jpg",
    title:"Game of Thrones 2023",
    sport:"Badminton",
  },
  
  {
    image:"https://i.imgur.com/wrrNl9y.jpg",
    title:"Game of Thrones 2023",
    sport:"Football",
  },
  {
    image:"https://i.imgur.com/1g5f0Tc.jpg",
    title:"Game of Thrones 2023",
    sport:"Tug of War",
  },
  {
    image:"https://i.imgur.com/EkSWxv6.jpg",
    title:"Game of Thrones 2023",
    sport:"Chess",
  },
]
export {
  links,
  socials,
  teachers,
  sponsors,
  sponsorsData,
  navRoutes,
  CommitteeDetails,
  gallery
};
