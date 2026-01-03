import React, { useState } from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import {
  FaDiscord,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTelegramPlane,
  FaWhatsapp,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaCopy,
  FaCheck
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Contact = () => {
  const [copied, setCopied] = useState(null);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const SocialLink = ({ href, icon: Icon, color }) => (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className={`text-2xl ${color} p-3 rounded-full bg-neutral-900/50 hover:bg-neutral-800 border border-neutral-800 hover:border-${color.split('-')[1]}-500 transition-all shadow-lg`}
    >
      <Icon />
    </motion.a>
  );

  return (
    <div className="border-b border-neutral-900 pb-24 pt-10">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        className="my-12 text-center text-4xl font-light tracking-tight text-white"
      >
        Get in Touch
      </motion.h1>

      <div className="text-center tracking-tighter w-full max-w-4xl mx-auto px-4">
        
        {/* Main Glass Card */}
        <motion.div
           whileInView={{ opacity: 1, scale: 1 }}
           initial={{ opacity: 0, scale: 0.9 }}
           transition={{ duration: 0.8 }}
           className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/30 p-8 backdrop-blur-xl shadow-2xl"
        >
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-cyan-900/20 blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-purple-900/20 blur-3xl -z-10" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                
                <div className="flex flex-col gap-8 text-left">
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        Let's Connect
                    </h2>
                    <p className="text-neutral-400">
                        I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                    
                    <div className="space-y-4">
                        <div 
                            className="flex items-center gap-4 group cursor-pointer"
                            onClick={() => handleCopy(CONTACT.email1, 'email1')}
                        >
                            <div className="p-3 rounded-lg bg-neutral-800 text-cyan-400 group-hover:bg-cyan-900/30 transition-colors">
                                <FaEnvelope />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm text-neutral-500">Email (Personal)</p>
                                <p className="text-neutral-200 font-medium group-hover:text-cyan-300 transition-colors">{CONTACT.email1}</p>
                            </div>
                            <div className="text-neutral-600 group-hover:text-cyan-400 transition-colors">
                                {copied === 'email1' ? <FaCheck /> : <FaCopy />}
                            </div>
                        </div>

                        
                         <div 
                            className="flex items-center gap-4 group cursor-pointer"
                            onClick={() => handleCopy(CONTACT.email2, 'email2')}
                        >
                            <div className="p-3 rounded-lg bg-neutral-800 text-purple-400 group-hover:bg-purple-900/30 transition-colors">
                                <FaEnvelope />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm text-neutral-500">Email (College)</p>
                                <p className="text-neutral-200 font-medium group-hover:text-purple-300 transition-colors">{CONTACT.email2}</p>
                            </div>
                            <div className="text-neutral-600 group-hover:text-purple-400 transition-colors">
                                {copied === 'email2' ? <FaCheck /> : <FaCopy />}
                            </div>
                        </div>

                        <div 
                            className="flex items-center gap-4 group cursor-pointer"
                            onClick={() => handleCopy(CONTACT.phoneNo, 'phone')}
                        >
                            <div className="p-3 rounded-lg bg-neutral-800 text-green-400 group-hover:bg-green-900/30 transition-colors">
                                <FaPhone />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm text-neutral-500">Phone</p>
                                <p className="text-neutral-200 font-medium group-hover:text-green-300 transition-colors">{CONTACT.phoneNo}</p>
                            </div>
                            <div className="text-neutral-600 group-hover:text-green-400 transition-colors">
                                {copied === 'phone' ? <FaCheck /> : <FaCopy />}
                            </div>
                        </div>

                         <div 
                            className="flex items-center gap-4 group cursor-pointer"
                            onClick={() => window.open(`https://www.google.com/maps?q=${encodeURIComponent(CONTACT.address)}`, "_blank")}
                        >
                            <div className="p-3 rounded-lg bg-neutral-800 text-red-400 group-hover:bg-red-900/30 transition-colors">
                                <FaMapMarkerAlt />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm text-neutral-500">Location</p>
                                <p className="text-neutral-200 font-medium group-hover:text-red-300 transition-colors">{CONTACT.address}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center gap-8 border-t md:border-t-0 md:border-l border-neutral-800 pt-8 md:pt-0 md:pl-8">
                     
                     <a 
                        href={`mailto:${CONTACT.email1}`}
                        className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-bold text-lg hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
                     >
                        Say Hello <FaPaperPlane />
                     </a>

                     <p className="text-neutral-500 text-sm">or connect via social media</p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <SocialLink href={CONTACT.linkedin} icon={FaLinkedin} color="text-blue-500" />
                        <SocialLink href={CONTACT.github} icon={FaGithub} color="text-neutral-200" />
                        <SocialLink href={CONTACT.twitter} icon={FaSquareXTwitter} color="text-white" />
                        <SocialLink href={CONTACT.instagram} icon={FaInstagram} color="text-pink-500" />
                        <SocialLink href={CONTACT.discord} icon={FaDiscord} color="text-indigo-500" />
                        <SocialLink href={CONTACT.telegram} icon={FaTelegramPlane} color="text-blue-400" />
                        <SocialLink href={CONTACT.whatsapp} icon={FaWhatsapp} color="text-green-500" />
                    </div>
                </div>

            </div>
        </motion.div>

        <footer className="mt-20 text-neutral-600 text-sm">
            <p>Designed and Built by Ankit Kumar</p>
        </footer>

      </div>
    </div>
  );
};

export default Contact;
