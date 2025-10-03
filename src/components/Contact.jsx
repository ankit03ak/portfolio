import React, { useState } from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import {
  FaDiscord,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaSkype,
  FaTelegramPlane,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className=" h-[75vh] border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.0 }}
        className="my-10 text-center text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
>

        Get in touch
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.0 }}
        className="text-center tracking-tighter"
      >
        <p className="my-4">
          <a
            href={`tel:${CONTACT.phoneNo.replace(/\s+/g, "")}`} // Remove spaces
            className="hover:text-green-500 transition-all duration-300"
          >
            📞 {CONTACT.phoneNo}
          </a>
        </p>

        <p>
          <span
            onClick={() => (window.location.href = `mailto:${CONTACT.email1}`)}
            className="border-b cursor-pointer"
          >
            <FaEnvelope className="inline-block text-xl" />
          &nbsp; {CONTACT.email1}
          </span>
        </p>
        <br />

        <p>
          <span
            onClick={() => (window.location.href = `mailto:${CONTACT.email2}`)}
            className="border-b cursor-pointer"
          >
            <FaEnvelope className="inline-block text-xl" />
            &nbsp; {CONTACT.email2}
          </span>
        </p>
        <p
  className="my-4 cursor-pointer hover:underline"
  onClick={() =>
    window.open(
      `https://www.google.com/maps?q=${encodeURIComponent(CONTACT.address)}`,
      "_blank"
    )
  }
>
  📌 {CONTACT.address}
</p>

        <div className="flex justify-center gap-6 mt-6 text-2xl">
          <a href={CONTACT.github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-400 hover:scale-150 transition-all duration-200" />
          </a>
          <a href={CONTACT.twitter} target="_blank" rel="noopener noreferrer">
            <FaSquareXTwitter className="text-blue-400 hover:scale-150 transition-all duration-200" />
          </a>
          <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-600 hover:scale-150 transition-all duration-200" />
          </a>
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:scale-150 transition-all duration-200"
          >
            <FaWhatsapp />
          </a>
          <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-pink-500 hover:scale-150 transition-all duration-200" />
          </a>
          <a href={CONTACT.skype} target="_blank" rel="noopener noreferrer">
            <FaSkype className="text-sky-400 hover:scale-150 transition-all duration-200" />
          </a>
          <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-blue-700 hover:scale-150 transition-all duration-200" />
          </a>
          <a
            href={CONTACT.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:scale-150 transition-all duration-200"
          >
            <FaTelegramPlane />
          </a>
          <a
            href={CONTACT.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 hover:scale-150 transition-all duration-150"
          >
            <FaDiscord />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
