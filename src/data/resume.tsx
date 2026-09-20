import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Amrit Rai",
  initials: "AR",
  url: "https://amritwt.me",
  location: "Mumbai, India",
  locationLink: "",
  birthDate: new Date("2004-04-06"), 
  description:
    "20 year old something guy",
  summary:
  "Tldr; learnt by hacking around on the internet. \n\n" +
  "I like technology. It makes a dent in the universe. \n\n" +
  "I write code agentically. A lot of it.\n\n" +
  "Speed ran content across socials when I was young.\n\n" +
  "\"Problems are inevitable. Problems are soluble.\" - The Beginning of Infinity\n\n" +
  "If you want to know more about me, [here are somethings I believe in](/blog/things-i-believe).",

  avatarUrl: "/me.png",
  skills: [
    "react",
    "next.js",
    "typescript",
    "python",
    "postgres",
    "shitposting",
    "can do hundred pushups"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "iamamrit27@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/retrogtx",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/amritwt",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/amritwt",
        icon: Icons.x,

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
        url: "mailto:iamamrit27@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  education: [
    {
      school: "Mumbai University",
      href: "https://linkedin.com/in/amritwt",
      degree: "Electronics & Telecommunication",
      logoUrl: "/mu.png",
      start: "2022",
      end: "2025 (Dropped Out)",
    },
  ],

  work: [
    {
      company: "Manicule",
      href: "https://manicule.dev/",
      badges: [],
      location: "Remote",
      title: "Member of Technical Staff | Fulltime",
      logoUrl: "/manicule.png",
      start: "Sept 2026",
      end: "Present",
      description:
        "The discovery layer for agents."
    },
    {
      company: "Whop",
      href: "https://whop.com/",
      badges: [],
      location: "Remote",
      title: "Software Engineer | Fulltime",
      logoUrl: "/whop.png",
      start: "Feb 2026",
      end: "Sept 2026",
      description:
        "Building Whop Finance."
    },
    {
      company: "Cracked Devs",
      href: "https://crackeddevs.com/",
      badges: [],
      location: "Remote",
      title: "Software Engineer | Fulltime",
      logoUrl: "/cd.png",
      start: "August 2025",
      end: "Feb 2026",
      description:
        "Making apps at this studio!"
    },
    {
      company: "Orchid",
      href: "https://0.email/",
      badges: [],
      location: "Remote",
      title: "Software Engineer | Fulltime",
      logoUrl: "/orchid.png",
      start: "June 2025",
      end: "August 2025",
      description:
        "Let AI handle your email."
    },
    {
      company: "Google Summer of Code",
      href: "https://summerofcode.withgoogle.com/",
      badges: [],
      location: "Remote",
      title: "Contributor Under Google DeepMind",
      logoUrl: "/gsoc.png",
      start: "May 2025",
      end: "July 2025",
      description:
        "Evaluating Gemini on an open-source benchmark."
    },
    {
      company: "Cal.com",
      href: "https://cal.com/",
      badges: [],
      location: "Remote",
      title: "Software Engineer | Intern",
      logoUrl: "/cal.png",
      start: "February 2025",
      end: "May 2025",
      description:
        "The best way to schedule meetings."
    },
    {
      company: "Superteam, Solana Foundation",
      href: "https://superteam.fun/",
      badges: [],
      location: "Remote",
      title: "Member | Grant Recipient",
      logoUrl: "/superteam.png",
      start: "November 2024",
      end: "September 2025",
      description:
        "Received a $3000 grant from the Solana Foundation for solving inheritance.",
    },
  ],
  // projects: [

  //   {
  //     title: "Eternal Key",
  //     href: "https://eternalkey.xyz/",
  //     dates: "November 2024",
  //     active: true,
  //     description:
  //       "This is how you inherit your cryptocurrency. Backed by Solana Foundation.",
  //     technologies: [
  //       "Next.js",
  //       "Rust",
  //       "Anchor",
  //       "Typescript",
  //     ],
  //     links: [
  //       {
  //         type: "Website",
  //         href: "https://eternalkey.xyz/",
  //         icon: <Icons.globe className="size-3" />,
  //       },
  //     ],
  //     image: "/eternalkey.png",
  //     video:
  //       "",
  //   },
  //   {
  //     title: "Scene AI",
  //     href: "https://scene-ai.amritwt.me/",
  //     dates: "December 2024",
  //     active: true,
  //     description:
  //       "Remove background from videos and replace it with a green screen. SaaS in works.",
  //     technologies: [
  //       "Next.js",
  //       "Pytorch",
  //       "Typescript",
  //     ],
  //     links: [
  //       {
  //         type: "Website",
  //         href: "https://scene-ai.amritwt.me/",
  //         icon: <Icons.globe className="size-3" />,
  //       },
  //     ],
  //     image: "/scene.png",
  //     video:
  //       "",
  //   },
  //   {
  //     title: "Real Time Chat",
  //     href: "https://real-time-chat-liard.vercel.app/",
  //     dates: "November 2024",
  //     active: true,
  //     description:
  //       "A real time chat app that has temporary rooms. Scalable.",
  //     technologies: [
  //       "Next.js",
  //       "Socket.io",
  //       "Typescript",
  //       "TailwindCSS",
  //       "Shadcn UI",
  //     ],
  //     links: [
  //       {
  //         type: "Website",
  //         href: "https://real-time-chat-liard.vercel.app/",
  //         icon: <Icons.globe className="size-3" />,
  //       },
  //     ],
  //     image: "/rlc.png",
  //     video:
  //       "",
  //   },
  //   {
  //     title: "Solana Developer Playground",
  //     href: "https://soldev-playground.vercel.app/",
  //     dates: "August 2024",
  //     active: true,
  //     description:
  //       "A one stop destination for all the tools a blockchain developer on Solana might need.",
  //     technologies: [
  //       "Next.js",
  //       "Typescript",
  //       "TailwindCSS",
  //       "Shadcn UI",
  //     ],
  //     links: [
  //       {
  //         type: "Website",
  //         href: "https://soldev-playground.vercel.app/",
  //         icon: <Icons.globe className="size-3" />,
  //       },
  //     ],
  //     image: "/sol-dev.png",
  //     video:
  //       "",
  //   },
  //   {
  //     title: "Anon QnA",
  //     href: "https://anon-qna.vercel.app/",
  //     dates: "September 2024",
  //     active: true,
  //     description:
  //       "Ask your friends questions anonymously. Answer them yourself.",
  //     technologies: [
  //       "Next.js",
  //       "Typescript",
  //       "TailwindCSS",
  //       "PostgreSQL",
  //     ],
  //     links: [
  //       {
  //         type: "Website",
  //         href: "https://anon-qna.vercel.app/",
  //         icon: <Icons.globe className="size-3" />,
  //       },
  //     ],
  //     image: "/anon-qna.png",
  //     video:
  //       "",
  //   }
  // ],
} as const;
