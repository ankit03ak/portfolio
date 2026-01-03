import { animate, motion } from "framer-motion";
import React from "react";
import { FaNodeJs, FaReact, FaJs, FaDocker, FaAws } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiMysql,
  SiPostman,
  SiMongodb,
  SiExpress,
  SiCplusplus,
  SiNextdotjs,
  SiPrisma,
  SiSupabase,
  SiClerk,
  SiCloudinary,
  SiKubernetes,
} from "react-icons/si";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const TechCard = ({ Icon, color, duration, name }) => (
  <motion.div
    variants={iconVariants(duration)}
    initial="initial"
    animate="animate"
    whileHover={{ scale: 1.1 }}
    className="rounded-2xl border-4 border-neutral-800 p-4 bg-neutral-900/50 backdrop-blur-sm hover:border-cyan-500/50 transition-colors flex flex-col items-center gap-2 group"
  >
    <Icon className={`text-7xl ${color}`} />
    <span className="opacity-0 group-hover:opacity-100 text-sm text-neutral-300 transition-opacity absolute -bottom-8">
      {name}
    </span>
  </motion.div>
);

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1.0 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 1.0 }}
        className="flex flex-wrap items-center justify-center gap-8 px-4"
      >
        <TechCard Icon={RiReactjsLine} color="text-cyan-400" duration={2.5} name="React" />
        <TechCard Icon={SiNextdotjs} color="text-white" duration={2} name="Next.js" />
        <TechCard Icon={SiMongodb} color="text-green-500" duration={4} name="MongoDB" />
        <TechCard Icon={FaJs} color="text-yellow-300" duration={2} name="JavaScript" />
        <TechCard Icon={FaNodeJs} color="text-green-500" duration={5} name="Node.js" />
        <TechCard Icon={SiMysql} color="text-blue-500" duration={3} name="MySQL" />
        <TechCard Icon={SiPostman} color="text-orange-500" duration={2} name="Postman" />
        <TechCard Icon={SiExpress} color="text-yellow-500" duration={3} name="Express" />
        <TechCard Icon={SiCplusplus} color="text-blue-500" duration={1} name="C++" />
        <TechCard Icon={SiCloudinary} color="text-blue-400" duration={9} name="Cloudinary" />
        <TechCard Icon={SiClerk} color="text-purple-400" duration={7} name="Clerk" />
        <TechCard Icon={SiSupabase} color="text-emerald-400" duration={6} name="Supabase" />
        <TechCard Icon={SiPrisma} color="text-green-500" duration={5} name="Prisma" />
        <TechCard Icon={FaDocker} color="text-blue-500" duration={4} name="Docker" />
        <TechCard Icon={SiKubernetes} color="text-blue-600" duration={3} name="Kubernetes" />
        <TechCard Icon={FaAws} color="text-yellow-500" duration={6} name="AWS" />
      </motion.div>
    </div>
  );
};

export default Technologies;
