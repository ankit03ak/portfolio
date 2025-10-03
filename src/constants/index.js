import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";
import project7 from "../assets/projects/project-7.jpg";
import project8 from "../assets/projects/project-8.jpg";

// export const HERO_CONTENT = `I am a passionate full-stack developer with a strong foundation in crafting robust and scalable web applications. With hands-on experience in front-end technologies like React, Next.js, and back-end technologies such as Node.js, MongoDB, MySQL, and Cloudinary, I strive to create seamless user experiences. My goal is to leverage my diverse skills to create innovative solutions that drive user engagement and business growth.`;
export const HERO_CONTENT = `MERN Stack Developer | Building Fast, Modern Web Applications and Fixing Bugs Quickly | Passionate about Software Development | Problem Solver.`;


export const ABOUT_TEXT = `I am an ambitious and dedicated full-stack developer, currently pursuing my B.Tech in Computer Science and Engineering at the Indian Institute of Information Technology, Ranchi. Over the years, I have gained practical experience working with various web technologies, including React, Next.js, Node.js, and MongoDB. I am passionate about software development and love creating efficient, user-centric applications. Outside of coding, I enjoy exploring new tech, contributing to open-source projects, and developing creative solutions to complex problems.`;


export const EXPERIENCES = [
    {
      year: "2024 - Present",
      role: "Full Stack Developer (Freelancer)",
      company: "Self-employed",
      description: `Developed a social media platform with real-time messaging, leveraging technologies like React, Node.js, and Socket.IO for real-time communication. Deployed the backend on Render, ensuring scalability and security.`,
      technologies: ["React", "Node.js", "Socket.IO", "MongoDB", "Render"],
    },
    {
      year: "2024",
      role: "Full Stack Developer (Freelancer)",
      company: "Self-employed",
      description: `Developed a Netflix-inspired streaming platform with a user-friendly interface using React, Cloudinary for media storage, and secure authentication with JWT. Deployed the platform on Render for reliability and performance.`,
      technologies: ["React", "Node.js", "JWT", "Cloudinary", "MongoDB"],
    },
    {
      year: "2023 - 2024",
      role: "Full Stack Developer",
      company: "Self-employed",
      description: `Led the development of a real-time live cricket score tracking web app using Socket.IO. Integrated live score updates via an external API and deployed the app with Vercel for fast performance.`,
      technologies: ["React", "Vite", "Socket.IO", "Node.js", "Axios"],
    },
  ];
  
  export const PROJECTS = [

    {
  title: "BudgetIQ - AI Powered Expense Tracker",
  repo: "https://github.com/ankit03ak/expense-tracker",
  live: "https://budget-iq-gray.vercel.app/",
  image: project7,
  description:
    "Developed a full-stack expense tracker with Next.js, Supabase, and Prisma. Integrated AI-powered receipt scanning, secure authentication with Clerk, and dynamic dashboards using Recharts.",
  technologies: ["Next.js", "React", "Tailwind CSS", "Prisma", "Supabase", "Clerk", "Recharts", "Inngest", "Resend"],
},

      {
      title: "Social Media Platform",
      repo:"https://github.com/ankit03ak/deploy-social-media",
      live:"https://deploy-social-media-ui1.vercel.app/",
      image: project2,
      description:
        "Created a full-stack social media platform with real-time messaging and user profiles. Integrated real-time messaging using Socket.IO and deployed the backend on Render for scalability.",
      technologies: ["React", "Node.js", "Socket.IO", "MongoDB", "Render"],
    },

    {
      title: "Netflix-Inspired Streaming Platform",
      repo:"https://github.com/ankit03ak/full-stack-netflixClone",
      live:"https://deploy-netflix-ui01.vercel.app/",
      image: project3,
      description:
        "Built a full-stack video streaming platform using React and Cloudinary for media storage. Integrated secure authentication with JWT and developed a movie management dashboard.",
      technologies: ["React", "Node.js", "JWT", "Cloudinary", "MongoDB"],
    },
        {
      title: "Live Cricket Score App",
      repo:"https://github.com/ankit03ak/live-cricket-score",
      live:"https://live-cric-score.vercel.app/",
      image: project1,
      description:
        "Developed a real-time cricket score tracking web app with live user count monitoring using Socket.IO. Integrated live score updates and deployed the frontend on Vercel and backend on Render.",
      technologies: ["React", "Vite", "Socket.IO", "Node.js", "Axios"],
    },
{
  title: "Bad Body Posture Detection App",
  repo: "https://github.com/ankit03ak/analyze-body-posture", // replace with your repo
  live: "https://analyze-body-posture.vercel.app/", // replace if you deployed it
  image: project5, // replace with actual image import
  description:
    "Built a full-stack posture detection system that analyzes body alignment from video using Mediapipe and OpenCV. The backend (Node.js, Express, Multer) processes video files and runs Python-based analysis, while the frontend (React) displays posture feedback.",
  technologies: [
    "React", 
    "Node.js", 
    "Express",
    "Python", 
    "OpenCV", 
    "Mediapipe"
  ],
},
{
  title: "Chauhan Ready Made Center - Clothing Catalog Website",
  repo: "https://github.com/ankit03ak/clothShop-for-friend",
  live: "https://chauhan-vastralaya.vercel.app/",
  image: project8,
  description:
    "Built a product catalog website for a local clothing shop, allowing customers to browse available items with details like price, size, color, and availability. Designed with a clean UI for easy navigation and optimized for responsive display.",
  technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Cloudinary"],
},

{
  title: "AI Chat App",
  repo: "https://github.com/ankit03ak/chatbot", // replace with your repo link
  live: "https://chatwithme-two.vercel.app/", // replace with your deployed link
  image: project6, // replace with your imported image reference
  description:
    "Built a real-time chat interface with emoji picker, toast notifications, and love-themed UI. Integrated smooth UX features like click-outside-to-close emoji picker, gradient/faded background design, and floating effects for a lively chatting experience.",
  technologies: ["React", "Tailwind CSS", "Emoji Picker", "Sonner", "JavaScript"]
}

    // {
    //   title: "Portfolio Website",
    //   repo:"https://github.com/ankit03ak/portfolio",
    //   live:"https://ankitk-portfolio.vercel.app/",
    //   image: project4,
    //   description:
    //     "A personal portfolio website showcasing projects, skills, and contact information, designed using React and TailwindCSS.",
    //   technologies: ["React","TailwindCSS"],
    // },
  ];

  
  
export const CONTACT = {
  address: "Ayodhya, Uttar Pradesh 224164 ",
  phoneNo: "+91 8726685833 ",
  email1: "vickyak1339@gmail.com",
  email2: "ankit.2022ug1107@iiitranchi.ac.in",
  linkedin: "http://www.linkedin.com/in/ankit-kumar-b2206436a",
  github: "https://github.com/ankit03ak",
  instagram:"https://www.instagram.com/vicky03__ak/?igshid=ZDdkNTZiNTM%3D",
  facebook:"https://www.facebook.com/profile.php?id=100014892287859",
  skype:"https://join.skype.com/invite/uaRzMQcw4jXj",
  twitter:"https://x.com/AnkitKu54762704",
  whatsapp: "https://wa.me/918726685833?text=Hello%20Developer%20:)",
  telegram: "https://t.me/nkitK",
  discord: "https://discord.com/users/ankitkumar1107"
};

export const EDUCATION = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    institute: "Indian Institute of Information Technology, Ranchi",
    year: "2022 - 2026",
    grade: "7.95 CGPA",
  },
  {
    degree: "Senior Secondary (XII)",
    institute: "ND DAV Public School Kumarganj, Ayodhya UP",
    year: "2021",
    grade: "89.00%",
  },
  {
    degree: "High School (X)",
    institute: "ND DAV Public School Kumarganj, Ayodhya UP",
    year: "2019",
    grade: "93.00%",
  },
];




//now add photos screenshots and more stylish