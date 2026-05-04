import { motion } from "framer-motion";
import devPic from "../assets/profile.png";

export default function Hero() {
  return (
    <>
      <section
        id="home"
        className="min-h-[25vh] flex items-start pt-20 pb-5 px-6 bg-white relative overflow-hidden"
      >
        {/* TOP RIGHT DESIGN */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute top-10 right-10 w-40 h-40 bg-purple-500 rounded-full blur-2xl opacity-30"></div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              MERN Full <br /> Stack Developer<br />
              <span className="text-black/60">
                & Creative Designer
              </span>
            </h1>

            <p className="mt-6 text-gray-600 max-w-md">
              <span className="text-2xl md:text-3xl">
                Hi, I’m <b className="font-extrabold">Fahmida Khan Oyshi</b>
              </span>
              <br />
              — who loves turning ideas into modern, interactive, and intuitive web applications. I focus on clean design, smooth performance, and great user experience.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-5 mt-8">

              <a href="https://github.com/fahmidaoyshi" target="_blank">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black hover:scale-110 transition shadow-md">
                  <svg width="22" viewBox="0 0 24 24" fill="white">
                    <path d="M12 .5C5.7.5.7 5.7.7 12c0 5 3.2 9.3 7.6 10.8.5.1.7-.2.7-.5v-1.8c-3.1.7-3.8-1.3-3.8-1.3-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1 1.7 1.5 3.3 1 .1-.7.4-1.3.8-1.6-2.5-.3-5.1-1.3-5.1-5.8 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2.9-.2 1.9-.3 2.8-.3s1.9.1 2.8.3c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 2 1.2 3.3 0 4.5-2.6 5.5-5.1 5.8.4.4.9 1.2.9 2.4v3.5c0 .3.2.6.7.5A11.4 11.4 0 0 0 23.3 12C23.3 5.7 18.3.5 12 .5z"/>
                  </svg>
                </div>
              </a>

              <a href="https://linkedin.com" target="_blank">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0A66C2] hover:scale-110 transition shadow-md">
                  <svg width="22" viewBox="0 0 24 24" fill="white">
                    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.37V9h3.41v1.56h.05c.48-.9 1.65-1.85 3.39-1.85 3.62 0 4.29 2.38 4.29 5.48v6.26zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM3.57 20.45h3.54V9H3.57v11.45z"/>
                  </svg>
                </div>
              </a>

              <a href="mailto:fahmidaoyshi77@gmail.com">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 hover:scale-110 transition shadow-md">
                  <svg width="22" viewBox="0 0 24 24" fill="black">
                    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
              </a>

            </div>
          </motion.div>

          {/* RIGHT IMAGE (FIXED PROPERLY) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute w-72 h-72 bg-purple-400 blur-3xl opacity-30 rounded-full -z-10"></div>

              <motion.img
                src={devPic}
                alt="profile"
                className="w-80 rounded-full shadow-2xl"
                whileHover={{ scale: 1.05, filter: "grayscale(0%)" }}
                whileTap={{ scale: 1.05, filter: "grayscale(0%)" }}
                initial={{ filter: "grayscale(100%)" }}
                animate={{ filter: "grayscale(100%)" }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}