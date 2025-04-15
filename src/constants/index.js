import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full-stack developer with a strong foundation in crafting robust and scalable web applications. With hands-on experience in front-end technologies like React, Next.js, and back-end technologies such as Node.js, MongoDB, MySQL, and Cloudinary, I strive to create seamless user experiences. My goal is to leverage my diverse skills to create innovative solutions that drive user engagement and business growth.`;


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
      title: "Live Cricket Score App",
      repo:"https://github.com/ankit03ak/live-cricket-score",
      live:"https://live-cric-score.vercel.app/",
      image: project1,
      description:
        "Developed a real-time cricket score tracking web app with live user count monitoring using Socket.IO. Integrated live score updates and deployed the frontend on Vercel and backend on Render.",
      technologies: ["React", "Vite", "Socket.IO", "Node.js", "Axios"],
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
      title: "Portfolio Website",
      repo:"https://github.com/ankit03ak/portfolio",
      live:"https://ankitk-portfolio.vercel.app/",
      image: project4,
      description:
        "A personal portfolio website showcasing projects, skills, and contact information, designed using React and TailwindCSS.",
      technologies: ["React","TailwindCSS"],
    },
  ];

  
export const CONTACT = {
  address: "Milkipur Ayodhya, Uttar Pradesh 224164 ",
  phoneNo: "+91 8726685833 ",
  email1: "vickyak1339@gmail.com",
  email2: "ankit.2022ug1107@iiitranchi.ac.in",
  linkedin: "https://www.linkedin.com/in/ankit-kumar-554316253",
  github: "https://github.com/ankit03ak",
  instagram:"https://www.instagram.com/vicky03__ak/?igshid=ZDdkNTZiNTM%3D",
  facebook:"https://www.facebook.com/profile.php?id=100014892287859",
  skype:"https://join.skype.com/invite/uaRzMQcw4jXj",
  twitter:"https://x.com/AnkitKu54762704",
  whatsapp: "https://wa.me/918726685833",
  telegram: "https://t.me/nkitK",
  discord: "https://discord.com/users/ankitkumar1107"
};


//now add photos screenshots and more stylish