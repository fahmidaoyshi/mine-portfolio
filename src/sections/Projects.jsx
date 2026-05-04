import { motion } from "framer-motion";
import easyride from "../assets/banner.png";
import hockey from "../assets/Rectangle 1.png";
import soulsync from "../assets/yoga4.jpg";

const projects = [
  {
    title: "EasyRide Ticket Booking System",
    category: "Full Stack Web App",
    description:
      "A modern ticket booking platform with smooth UI and responsive design.",
    img: easyride,
    live: "https://fahmidaoyshi.github.io/EasyRide-Ticket/",
    github: "https://github.com/fahmidaoyshi/EasyRide-Ticket",
  },
  {
    title: "SoulSync Fitness Website",
    category: "Frontend Development",
    description:
      "A fitness-focused website with engaging UI and interactive sections.",
    img: soulsync,
    live: "https://fahmidaoyshi.github.io/SoulSync-Fitness/",
    github: "https://github.com/fahmidaoyshi/SoulSync-Fitness",
  },
  {
    title: "Hockey Tournament Website",
    category: "Web Design & Development",
    description:
      "A sports-themed website showcasing tournament details with clean layout.",
    img: hockey,
    live: "https://fahmidaoyshi.github.io/Hockey/",
    github: "https://github.com/fahmidaoyshi/Hockey",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-purple-50 via-white to-purple-100">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
        <div>
          <p className="text-purple-500 font-semibold">My Work</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Showcasing my{" "}
            <span className="text-purple-500">creative projects</span> & web
            applications
          </h2>
        </div>

        <p className="text-gray-600 max-w-md">
          These projects reflect my passion for building modern, responsive,
          and user-friendly web experiences using MERN stack and creative UI design.
        </p>
      </div>

      {/* CARDS */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {projects.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-purple-100"
          >
            {/* IMAGE */}
            <div className="h-60 overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="text-purple-500 font-medium mt-1">
                {item.category}
              </p>

              <p className="text-gray-600 text-sm mt-2">
                {item.description}
              </p>

              {/* BUTTONS */}
              <div className="flex gap-3 mt-4">
                <a
                  href={item.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-white bg-purple-500 px-3 py-1 rounded-lg hover:bg-purple-600 transition"
                >
                  Live
                </a>

                <a
                  href={item.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-purple-500 border border-purple-300 px-3 py-1 rounded-lg hover:bg-purple-50 transition"
                >
                  Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}