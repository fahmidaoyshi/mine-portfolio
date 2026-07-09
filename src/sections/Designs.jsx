import { motion } from "framer-motion";

export default function Designs() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">

        <p className="text-purple-500 font-semibold">
          Creative Works
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">
          Graphic Design &{" "}
          <span className="text-purple-500">
            Visual Creativity
          </span>
        </h2>

        <p className="text-gray-600 max-w-xl mx-auto mt-4">
          Alongside web development, I create modern visual designs
          including branding, flyers, and creative graphics.
        </p>


        <motion.a
          whileHover={{ scale: 1.05 }}
          href="https://www.behance.net/fahmidaoyshi"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-8 bg-purple-500 text-white px-6 py-3 rounded-xl hover:bg-purple-600 transition"
        >
          View My Behance Portfolio →
        </motion.a>

      </div>
    </section>
  );
}