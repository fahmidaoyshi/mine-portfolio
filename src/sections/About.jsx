import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 md:px-16 bg-[#f9f7ff] overflow-hidden">

      {/* 🎨 Animated Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 blur-3xl opacity-30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-300 blur-3xl opacity-30 rounded-full animate-pulse"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            💼 Services I Offer
          </h2>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white shadow-md border border-green-200">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative h-3 w-3 rounded-full bg-green-500"></span>
            </span>
            <p className="text-sm text-gray-700 font-medium">
              Currently Available
            </p>
          </div>

          {/* Services */}
          <div className="space-y-3 text-[21px]">
            {[
              "Full Stack Web Development (MERN)",
              "Responsive & Modern Website Design",
              "Figma to React / Tailwind Conversion",
              "Frontend Development (React + Tailwind)",
              "Graphic Design (Adobe Photoshop & Illustrator)"
            ].map((item, i) => (
              <motion.p
                key={i}
                whileHover={{ x: 10 }}
                className="text-gray-700 hover:text-purple-600 transition cursor-pointer"
              >
                • {item}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            About Me
          </h2>

          {/* Sticker */}
          <div className="absolute -top-6 right-0 text-4xl rotate-12">
            🤖
          </div>

          <p className="text-gray-700 leading-relaxed text-[22px]">
            I’m <span className="text-purple-600 font-semibold">Fahmida Khan Oyshi</span>, a passionate{" "}
            <span className="text-purple-600 font-semibold">MERN Stack Developer</span> who loves building
            modern and interactive web experiences.
            <br /><br />
            I specialize in turning ideas into clean, responsive and user-friendly interfaces using{" "}
            <span className="text-purple-600 font-semibold">React</span>,{" "}
            <span className="text-purple-600 font-semibold">Tailwind CSS</span> and <span className="text-purple-600 font-semibold">JavaScript</span>.
            My focus is always on UI/UX, performance, and clean design.
            <br /><br />
            I also enjoy <span className="text-purple-600 font-semibold">graphic design</span>, which helps me
            bring a creative visual touch to my development work.
          </p>
        </motion.div>

      </div>
    </section>
  );
}