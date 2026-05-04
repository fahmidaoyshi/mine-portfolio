import { motion } from "framer-motion";

// SAFE ICONS ONLY
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiCanva
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-4xl" /> },
    { name: "React", icon: <FaReact className="text-cyan-500 text-4xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-4xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-4xl" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400 text-4xl" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600 text-4xl" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500 text-4xl" /> },
    { name: "Canva", icon: <SiCanva className="text-blue-400 text-4xl" /> },

    // SAFE ADOBE REPLACEMENT
    { name: "Photoshop", icon: "🖌️" },
    { name: "Illustrator", icon: "🎨" }
  ];

  return (
    <section id="skills" className="relative py-28 px-6 md:px-16 bg-white overflow-hidden">

      {/* purple glow background */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-100 blur-3xl opacity-40 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-200 blur-3xl opacity-30 rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 text-gray-900"
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

          {skills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.3 }}
              className="group relative bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-center gap-3 shadow-md hover:shadow-2xl cursor-pointer overflow-hidden hover:border-purple-200"
            >

              {/* hover purple glow */}
              <div className="absolute inset-0 bg-purple-100 opacity-0 group-hover:opacity-100 transition duration-300"></div>

              <div className="relative z-10 text-4xl">
                {skill.icon}
              </div>

              <p className="relative z-10 text-gray-700 font-medium">
                {skill.name}
              </p>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}