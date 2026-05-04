import { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaPalette, FaLightbulb } from "react-icons/fa";

const blogs = [
  {
    title: "Becoming a MERN Stack Developer",
    category: "Development",
    icon: <FaReact />,
    desc: "My journey from HTML, CSS, JavaScript to building full-stack MERN applications.",
    content:
      "I started my web development journey with basic HTML and CSS, slowly learning how websites are structured and styled. Then I moved into JavaScript, which helped me understand logic and interactivity.\n\nAfter that, I explored React, where I learned how to build reusable components and manage state efficiently. Later I expanded into backend development using Node.js and Express, which allowed me to build complete full-stack applications.\n\nNow I work with MongoDB for database management and combine everything into MERN stack projects. Each project helps me improve my problem-solving skills and understand real-world development workflows.",
  },
  {
    title: "How Graphic Design Helps My Web Development",
    category: "Design",
    icon: <FaPalette />,
    desc: "Using Adobe Photoshop and Illustrator to improve UI design and visual experience.",
    content:
      "Along with coding, I also practice graphic design which plays a big role in improving my UI thinking.\n\nI use Adobe Photoshop for image editing, banner creation, and UI mockups. It helps me understand composition and visual balance.\n\nI also use Adobe Illustrator for creating logos, vector icons, and clean design elements. This combination of design tools helps me make my websites more attractive and professional.\n\nBecause of design knowledge, I can directly convert ideas into visually strong user interfaces without depending on external designers.",
  },
  {
    title: "Why Design + Development Together is Powerful",
    category: "Creative",
    icon: <FaLightbulb />,
    desc: "Combining coding and design skills creates modern, user-friendly web apps.",
    content:
      "When design and development skills come together, it creates a powerful combination.\n\nInstead of only focusing on logic or only on visuals, I can handle both sides of a project. This helps me build faster, think more creatively, and maintain consistency across UI and functionality.\n\nIt also improves my ability to understand user experience, because I can see how design decisions affect real interactions. This balance makes my projects more complete, modern, and user-friendly.",
  },
];

export default function Blog() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="blog" className="py-20 px-6 bg-black/5">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <p className="text-purple-500 font-semibold">My Blog</p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          Building modern MERN apps with creative design
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Sharing my learning journey in MERN Stack Development and Graphic Design.
        </p>
      </div>

      {/* BLOG CARDS */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {blogs.map((blog, i) => (
          <motion.div
            key={i}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 25px rgba(147,51,234,0.4)",
            }}
            onClick={() => setSelected(blog)}
            className="cursor-pointer bg-white p-6 rounded-2xl border border-purple-100 transition"
          >
            {/* ICON */}
            <div className="text-purple-500 text-2xl mb-3">
              {blog.icon}
            </div>

            <p className="text-purple-500 text-sm font-medium">
              {blog.category}
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-2">
              {blog.title}
            </h3>

            <p className="text-gray-600 text-sm mt-3">
              {blog.desc}
            </p>

            <p className="text-purple-500 text-sm mt-4 font-medium">
              Read more →
            </p>
          </motion.div>
        ))}

      </div>

      {/* MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">

          <div className="bg-white max-w-lg w-full p-6 rounded-2xl relative">

            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-gray-500"
            >
              ✖
            </button>

            <div className="text-purple-500 text-2xl mb-2">
              {selected.icon}
            </div>

            <p className="text-purple-500 text-sm">
              {selected.category}
            </p>

            <h2 className="text-2xl font-bold mt-2">
              {selected.title}
            </h2>

            <p className="text-gray-600 mt-4 leading-relaxed">
              {selected.content}
            </p>

          </div>
        </div>
      )}

    </section>
  );
}