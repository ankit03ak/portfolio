"use client";

import {
  HERO_CONTENT,
  ABOUT_TEXT,
  EXPERIENCES,
  PROJECTS,
  CONTACT,
  EDUCATION,
} from "../constants";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const STATIC_CONTEXT = `
Basic Intro:
${HERO_CONTENT}

About Ankit:
${ABOUT_TEXT}

Contact:
- Location: ${CONTACT.address}
- Phone: ${CONTACT.phoneNo}
- Email 1: ${CONTACT.email1}
- Email 2: ${CONTACT.email2}
- LinkedIn: ${CONTACT.linkedin}
- GitHub: ${CONTACT.github}
- Instagram: ${CONTACT.instagram}
- Facebook: ${CONTACT.facebook}
- Skype: ${CONTACT.skype}
- Twitter: ${CONTACT.twitter}
- WhatsApp: ${CONTACT.whatsapp}
- Telegram: ${CONTACT.telegram}
- Discord: ${CONTACT.discord}

Education:
${EDUCATION.map(
  (e) => `- ${e.degree} at ${e.institute} (${e.year}), Grade: ${e.grade}`
).join("\n")}

Experience:
${EXPERIENCES.map(
  (exp) =>
    `- ${exp.year}: ${exp.role} at ${exp.company}. ${
      exp.description
    } (Tech: ${exp.technologies.join(", ")})`
).join("\n")}

Projects:
${PROJECTS.map(
  (p) =>
    `- ${p.title}: ${p.description}
   Repo: ${p.repo}
   Live: ${p.live}
   Tech: ${p.technologies.join(", ")}`
).join("\n\n")}
`;

const MODES = [
  { id: "default", label: "Default" },
  { id: "developer", label: "Developer" },
  { id: "designer", label: "Designer" },
  { id: "mentor", label: "Mentor" },
];

const MODE_SYSTEM_TEXT = {
  default:
    "You are Ankit's AI assistant for his portfolio. Use the profile/context I give you to answer questions about his projects, skills, tech stack, and contact details. Answer briefly and clearly.",
  developer:
    "You are Ankit's AI developer assistant. Focus on code, stack, architecture, performance, and tradeoffs. Use his projects and experience from the context.",
  designer:
    "You are Ankit's AI design assistant. Focus on UI/UX, accessibility, design systems, and visual decisions based on his projects.",
  mentor:
    "You are Ankit's AI mentor. Use his background, education, and projects to give career and learning guidance. Be supportive and practical.",
};

const apiKey = `${import.meta.env.VITE_GEMINI_API_KEY}`;

if (!apiKey) {
  console.log(
    "No API key found. Please set the VITE_GEMINI_API_KEY environment variable."
  );
}

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState("default");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hey! I’m Ankit’s AI assistant. Ask me anything about his projects, skills, or background.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState("");

  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [messages, loading]);

  const toggleOpen = () => setIsOpen((o) => !o);

  const buildPrompt = (allMessages, modeId) => {
    const persona = MODE_SYSTEM_TEXT[modeId] || MODE_SYSTEM_TEXT.default;

    const convo = allMessages
      .map((m) => `${m.role === "user" ? "User" : "Assistant"}: ${m.content}`)
      .join("\n");

    return `
${persona}

Here is Ankit's full portfolio context (contact info, projects, experience, education). Use this to answer questions about him. If something is not in this data, you can answer generally but make it clear it's a general answer.

CONTEXT:
${STATIC_CONTEXT}

CONVERSATION SO FAR:
${convo}

Now continue the conversation as the assistant. Be concise, sometimes use bullet points, and you can include links when helpful.
Assistant:
`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = { role: "user", content: input.trim() };
    const newMessages = [...messages, userMessage];

    setMessages(newMessages);
    setInput("");
    setErrorText("");
    setLoading(true);

    try {
      const prompt = buildPrompt(newMessages, mode);
      const result = await model.generateContent(prompt);
      const text = result.response.text();

      const assistantMessage = { role: "assistant", content: text };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      console.error(err);
      setErrorText("Something went wrong talking to the AI. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <motion.button
        onClick={toggleOpen}
        className="group fixed bottom-5 left-5 z-40 flex h-12 w-12 items-center justify-center 
             rounded-full bg-orange-400 text-slate-950 shadow-lg shadow-orange-400/50 
             hover:bg-orange-500 transition-colors"
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        whileTap={{ scale: 0.9 }}
      >
        
        <MessageCircle className="h-6 w-6" />
          <span className="absolute left-14 top-1/2 -translate-y-1/2
                   whitespace-nowrap px-3 py-1 rounded-lg text-xs font-medium
                   bg-slate-900 text-white border border-slate-700 shadow-lg
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    Talk to Ankit’s AI Assistant
  </span>
        
      </motion.button>

      {isOpen && (
        <div className="fixed bottom-20 left-5 z-40 w-[320px] md:w-[380px]">
              
          <div
            className="flex h-[460px] flex-col overflow-hidden shadow-xl
            bg-slate-950/80 backdrop-blur-xl border border-slate-800
            rounded-2xl"
            >
            <div className="border-b border-slate-800 px-4 py-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-sm font-semibold">
                    Chat with Ankit&apos;s AI
                  </p>
                  <p className="text-[11px] text-emerald-400">
                    Ask about projects, skills, or career guidance
                  </p>
                </div>
                <button
                  onClick={toggleOpen}
                  className="rounded-full p-1 hover:bg-slate-800"
                  >
                  <X className="h-4 w-4 text-slate-400" />
                </button>
              </div>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {MODES.map((m) => (
                    <button
                    key={m.id}
                    type="button"
                    onClick={() => setMode(m.id)}
                    className={`px-2.5 py-1 rounded-full text-[10px] border ${
                        mode === m.id
                        ? "bg-emerald-400 text-slate-950 border-emerald-400"
                        : "bg-slate-900/70 text-slate-300 border-slate-700 hover:border-emerald-400/70 hover:text-emerald-300"
                    }`}
                    >
                    {m.label}
                  </button>
                ))}
              </div>

              <p className="mt-1 text-[10px] text-slate-500">
                Mode:{" "}
                {mode === "default"
                  ? "Balanced — mixes everything."
                  : mode === "developer"
                  ? "Talks like a dev: code, stack, architecture."
                  : mode === "designer"
                  ? "Focuses on UI/UX and design thinking."
                  : "Mentor vibe: career & learning guidance."}
              </p>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto px-4 py-3 text-xs">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    m.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-3 py-2 ${
                      m.role === "user"
                        ? "bg-emerald-500 text-slate-950"
                        : "bg-slate-900 text-slate-100 border border-slate-800"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="rounded-2xl bg-slate-900 px-3 py-2 text-slate-400 border border-slate-800 text-[11px]">
                    Typing…
                  </div>
                </div>
              )}
              {errorText && (
                <p className="text-[11px] text-red-400 mt-1">{errorText}</p>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form
              onSubmit={handleSubmit}
              className="border-t border-slate-800 px-3 py-2 flex items-center gap-2"
            >
              <input
                type="text"
                className="flex-1 rounded-full bg-slate-900 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 outline-none border border-slate-800 focus:border-emerald-500"
                placeholder="Ask something about Ankit or his projects..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                type="submit"
                disabled={loading}
                className="rounded-full bg-emerald-500 px-3 py-2 text-xs font-medium text-slate-950 hover:bg-emerald-400 disabled:opacity-60"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
