import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {

  name: "Keiru",
  initials: "KD",
  url: "https://keiru.vercel.app",
  location: "Cavite, Philippines",
  locationLink: "https://www.google.com/maps/place/cavite",
  description:
    "Aspiring Software Engineer. I love building things and helping people. Very active on Reddit and Facebook.",
  summary:
    "Pursuing a [Bachelor's Degree in Information Technology in Cavite State University](#education). Currently, [investing more time to upskill](#projects). Trying to gain more networks and still [actively participating in different contest like hackathons, and stuffs](#hackathons)",
  avatarUrl: "/me.png",
  skills: [
    {
     name: "React",
     icon: "/react.png",  
    },
    {
     name: "Next.js",
     icon: "/nextjs.png",  
    },
    {
     name: "Typescript",
     icon: "/typescript.svg",  
    },
    {
     name: "Javascript",
     icon: "/javascript.png",  
    },
    {
     name: "Node.js",
     icon: "/nodejs.svg",  
    },
    {
     name: "Python",
     icon: "/python.png",  
    },
    {
     name: "Java",
     icon: "/java.png",  
    },
    {
     name: "MySQL",
     icon: "/mysql.png",  
    },
    {
     name: "PHP",
     icon: "/php.png",  
    },
    {
     name: "C++",
     icon: "/c++.png",  
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "jameson.gelarman@cvsu.edu.ph",
    tel: "+639813140408",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Ashtreus1",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jameson-gelarman-a33a8a24b/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Reddit: {
        name: "Reddit",
        url: "https://www.reddit.com/user/Vegetable-Donut1594/",
        icon: Icons.reddit,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:jameson.gelarman@cvsu.edu.ph",
        icon: Icons.email,
        navbar: true,
      },
      cv: {
        name: "Curriculum Vitae",
        url: "/me.pdf",
        icon: Icons.cv,
        navbar: true,
      }
    },
  },

  work: [
    {
      company: "Innotech Org.",
      href: "",
      badges: [],
      location: "Remote",
      title: "Software Developer",
      logoUrl: "",
      start: "Nov 2023",
      end: "Feb 2024",
      description:
        "Implemented maintainable and reusable UI components for the organization. Developed the frontend business boilerplate for different business application like e-commerce store.",
    },
  ],

  education: [
    {
      school: "Cavite State University - Main Campus",
      href: "https://www.facebook.com/CaviteStateU",
      degree: "Bachelor of Science in Information Technology",
      logoUrl: "/cvsu.jpg",
      start: "2023",
      end: "Present",
    },
    {
      school: "Opencourseware Harvard CS50 Course",
      href: "https://cs50.harvard.edu/x/2024/",
      degree: "Harvard CS50 Online Certification",
      logoUrl: "https://tse4.mm.bing.net/th?id=OIP.90PPsXbSD6ueyObrRgV4hAAAAA&pid=Api",
      start: "2023",
      end: "2023",
    },
    {
      school: "Luis Y. Ferrer Jr. Senior Highschool",
      href: "https://www.facebook.com/DepedTayoLYFJSHS342285",
      degree: "ICT Strand Major in Computer Programming",
      logoUrl: "/lyfj.jpg",
      start: "2021",
      end: "2023",
    },
  ],

  projects: [
    {
      title: "Bin2dec",
      href: "https://bin2dex.vercel.app",
      dates: "Aug 2024",
      active: true,
      description:
        "Simple binary to decimal and vice versa conversion web application with information card for each conversion. Also, can view history for the conversion made.",
      technologies: [
        "Next.js",
        "React Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Animata",
      ],
      links: [
        {
          type: "Website",
          href: "https://bin2dex.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "/bin2dec.mp4",
    },
    {
      title: "ELITS code2Crack",
      href: "https://codetocrack.vercel.app",
      dates: "Sept 2024",
      active: true,
      description:
        "An game riddle web application that test your problem-solving and critical-thinking skills. Introduced as weekly event of ELITS school organization",
      technologies: [
        "React Typescript",
        "Next.js",
        "TailwindCSS",
        "MagicUI",
        "REST API",
        "PostgreSQL Railways",
      ],
      links: [
        {
          type: "Website",
          href: "https://codetocrack.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "/code2crack.mp4",
    },
  ],



  hackathons: [
    {
      title: "Hackecup 2024",
      dates: "Jul 5 - Jul 7",
      location: "De la salle University - Main",
      description:
        "Developed a web application for SDG Solution for Quality Education.",
      image:
        "https://scontent.fmnl8-2.fna.fbcdn.net/v/t39.30808-6/441874168_776107501400121_8153537651728207681_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=AcCr7LDvSZAQ7kNvgETd-Cp&_nc_ht=scontent.fmnl8-2.fna&oh=00_AYDMWils8Du8ZWANfntIYtHTqPXXx11u7Clp35RPSdQYXw&oe=66C83721",
      mlh: "",
      links: [],
    },
    {
      title: "ELITS Webfest",
      dates: "May 10 - Jun 10",
      location: "Cavite State University",
      description:
        "Developed a frontend application for the school organization.",
      image:
        "https://scontent.fmnl8-3.fna.fbcdn.net/v/t39.30808-6/411281794_758197356345492_5047425886771009210_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=yzPO1w-Ku1AQ7kNvgFQlBov&_nc_ht=scontent.fmnl8-3.fna&oh=00_AYAKxWRXg1YlmSOWvxejqDwKIUiUdlk0u3UPKozZWFjkqA&oe=66C84379",
      mlh: "",
      links: [],
    },
  ],
} as const;
