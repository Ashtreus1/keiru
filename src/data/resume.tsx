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
    `Pursuing a [Bachelor's Degree in Information Technology in Cavite State University](#education). 
     Currently, [investing more time to upskill](#projects). 
     Trying to gain more networks and still [actively participating in different contest like hackathons, and stuffs](#hackathons)`,
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
      name: "TailwindCSS",
      icon: "/tailwind.png"
    },
    {
     name: "Node.js",
     icon: "/nodejs.svg",  
    },
    {
      name: "PostgreSQL",
      icon: "/postgre.png"
    },
    {
      name: "Supabase",
      icon: "/supabase.jpeg"
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
      Facebook: {
        name: "Facebook",
        url: "https://www.facebook.com/jameson.gelarman/",
        icon: Icons.facebook,

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
      logoUrl: "/innotech.jpg",
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
      dates: "Jul 5 - Jul 7, 2024",
      location: "De la salle University - Main",
      description:
        "Developed a web application for SDG Solution for Quality Education.",
      image:
        "/hackercup.jpg",
      mlh: "",
      links: [
        {
          icon: "/hackercup.jpg", 
          title: "Hackercup 2024",
          href: "https://github.com/hackercup2024/vibes"
        }
      ],
    },
    {
      title: "ELITS Webfest",
      dates: "May 10 - Jun 10, 2024",
      location: "Cavite State University",
      description:
        "Developed a frontend application for the school organization.",
      image:
        "/elits.jpg",
      mlh: "",
      links: [
        {
          icon: "/elits.jpg", 
          title: "ELITS Webfest",
          href: "https://github.com/innoTech-Solutions/cvsu-elits"
        }
      ],
    },
    {
      title: "Meralco IDOL Hackathon",
      dates: "Nov 18-20, 2024",
      location: "Meralco Multi-Purpose Hall, MOC, Ortigas Pasig City",
      description:
        "Developed a web application for SDG Solution of Energy Efficiency",
      image:
        "/meralco.jpeg",
      mlh: "",
      links: [
        {
          icon: "/meralco.jpeg", 
          title: "Meralco IDOL Hackathon",
          href: ""
        }
      ],
    },
  ],
} as const;
