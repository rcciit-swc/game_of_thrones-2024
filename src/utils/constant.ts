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
    url: "https://drive.google.com/file/d/1vJklBjwzKoUiiUFwRJlrcrCMn41WoGa5/view?usp=sharing",
  },
  { text: "Contact Us", url: "https://got.rcciit.org.in/contacts" },
];

const socials = [
  {
    src: "assets/socials/google.svg",
    url: "https://www.google.com/search?q=rcciit",
  },
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
    speech: `Life is big – achieving perfection in academic or technical domain is important for professional success in life. But that is not all; one must look for opportunities to explore life beyond that. The young undergrads are having lot of energy and spirit within them which needs expression in different forms. After entering the college, while enjoying the adulthood for the first time in life, a student gets some reprieve from the pressure of
      competitive academics and gets time and
      freedom to nurture his/her talent in sports, arts, performing arts, innovations and all.
      The college fests provide the real platform to showcase their talents and unleash their energy - their youthful exuberance.
      Game of Thrones (GoT) – the annual sports fest of RCCIIT is one such platform created and traditionally supported by RCCIIT. Members of the Student Welfare
      Committee along with hundreds of senior and junior student volunteers have come up and are working together under the careful guidance of senior faculty members to make the 2024 version of GoT a grand success. From last year GoT  has taken up a big challenge by scaling it up to
      the extent of Inter-College Sports Meet attracting participants from Kolkata, other Districts and even other States. This time also it will be a multi-tournament event organized at multiple venues within and outside college. Cricket, Football, Badminton and other sports competitions at college level are now
      fewer in numbers compared to earlier days. Trendy games like gully cricket, futsal are
      more popular which doesn’t hold the traditional spirit of the on-field games. Moreover, it is observed that students are now more inclined towards digital games, which is
      detrimental to their mental and physical health. This is one reason why RCCIIT has put lot of emphasis on games and sports. By accommodating traditional versions of the games in GoT and making those open for all, we believe it will uphold the true spirit of
      games and sports and foster sportsmanship, positivity and friendship among the students. I wish all success of this mega event and hope it will be even better organized this year, particularly considering the institute's silver jubilee celebration year 2024. I also expect better participation and competition this time.`,
    signL1: "Prof.(Dr.) Anirban Mukherjee",
    signL2: "Principal (Officiating) RCCIIT & Professor, IT, RCCIIT",
    img: "https://i.imgur.com/QNCJB8M.png",
    header: "Principal's Desk",
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
    title: "Faculty-In-Charge SA & SW",
    members: [
      {
        name: "Mr. Harinandan Tunga",
        role: "Associate Professor, RCCIIT",
        phone: "+919339877213 ",
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
        name: "Shatabdi Das",
        role: "",
        phone: "+91 9051805749",
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

const gallery = [
  "https://i.imgur.com/SHBXkRE.jpg",
  "https://i.imgur.com/u2P39Nq.jpg",
  "https://i.imgur.com/s9Wk8Y0.jpg",
  "https://i.imgur.com/g88ASiX.jpg",
  "https://i.imgur.com/DTgsRgf.jpg",
  "https://i.imgur.com/EKK6eT3.jpg",
  "https://i.imgur.com/4PEK53m.jpg",
  "https://i.imgur.com/wltRKfO.jpg",
  "https://i.imgur.com/NBlrs4A.jpg",
  "https://i.imgur.com/SuhFhE9.jpg",
  "https://i.imgur.com/Eva7WcO.jpg",
  "https://i.imgur.com/wrrNl9y.jpg",
  "https://i.imgur.com/1g5f0Tc.jpg",
  "https://i.imgur.com/EkSWxv6.jpg",
  "https://i.imgur.com/1KFoy84.jpg",
];

const locations = [
  {
    name: "Canal S Rd, Beleghata, Kolkata, West Bengal 700015",
    landmark: " RCC Institute of Information Technology.",
    place:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.562428918149!2d88.39410617591764!3d22.558058533501942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02768400b479b1%3A0x5ad44b718c770205!2sRCC%20INSTITUTE%20OF%20INFORMATION%20TECHNOLOGY%20(New%20Campus)!5e0!3m2!1sen!2sin!4v1701647880889!5m2!1sen!2sin",
  },
  {
    name: "Spuddy Badminton Academy Kolkata",
    landmark: "near Salt Lake, Kadapara, Phool Bagan, Kankurgachi, Kolkata",
    place:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.214541279687!2d88.39865027601422!3d22.571077879492776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027733c660b6ed%3A0x57fe333dbcb1c621!2sSpuddy%20Badminton%20Academy%20Kolkata!5e0!3m2!1sen!2sin!4v1703173867204!5m2!1sen!2sin",
  },
  {
    name: "Netaji Subhash Eastern Center",
    landmark: " Sector 3, Bidhannagar, Kolkata",
    place:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.3830077589655!2d88.40770427601406!3d22.564774079497397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02742cd148e14b%3A0xc91b0ac3803b0462!2sSports%20Authority%20Of%20India!5e0!3m2!1sen!2sin!4v1703174045601!5m2!1sen!2sin",
  },
];
export {
  links,
  socials,
  teachers,
  sponsors,
  sponsorsData,
  navRoutes,
  CommitteeDetails,
  gallery,
  locations,
};
