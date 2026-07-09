import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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


          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">

              MERN Full <br />
              Stack Developer<br />

              <span className="text-black/60">
                & Creative Designer
              </span>

            </h1>


            <p className="mt-6 text-gray-600 max-w-md">

              <span className="text-2xl md:text-3xl">

                Hi, I’m{" "}
                <b className="font-extrabold">
                  Fahmida Khan Oyshi
                </b>

              </span>

              <br />

              — who loves turning ideas into modern, interactive, and intuitive web applications. I focus on clean design, smooth performance, and great user experience.

            </p>



            {/* SOCIAL ICONS */}

            <div className="flex gap-5 mt-8">


              {/* Github */}

              <a
                href="https://github.com/fahmidaoyshi"
                target="_blank"
                rel="noreferrer"
              >

                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black hover:scale-110 transition shadow-md">

                  <FaGithub className="text-white text-xl"/>

                </div>

              </a>



              {/* LinkedIn */}

              <a
                href="https://www.linkedin.com/in/fahmida-khan-oyshi-a006a4345"
                target="_blank"
                rel="noreferrer"
              >

                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0A66C2] hover:scale-110 transition shadow-md">

                  <FaLinkedin className="text-white text-xl"/>

                </div>

              </a>



              {/* Facebook */}

              <a
                href="https://www.facebook.com/profile.php?id=61591500341669"
                target="_blank"
                rel="noreferrer"
              >

                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1877F2] hover:scale-110 transition shadow-md">

                  <FaFacebook className="text-white text-xl"/>

                </div>

              </a>



              {/* X Twitter */}

              <a
                href="https://x.com/dev_oyshi"
                target="_blank"
                rel="noreferrer"
              >

                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black hover:scale-110 transition shadow-md">

                  <FaXTwitter className="text-white text-xl"/>

                </div>

              </a>



              {/* Email */}

              <a
                href="mailto:fahmidaoyshi77@gmail.com"
              >

                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 hover:scale-110 transition shadow-md">

                  <FaEnvelope className="text-black text-xl"/>

                </div>

              </a>


            </div>

            </motion.div>


          {/* RIGHT IMAGE */}

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

                alt="Fahmida Khan Oyshi"

                className="w-80 rounded-full shadow-2xl"

                whileHover={{
                  scale: 1.05,
                  filter: "grayscale(0%)"
                }}

                whileTap={{
                  scale: 1.05,
                  filter: "grayscale(0%)"
                }}

                initial={{
                  filter: "grayscale(100%)"
                }}

                animate={{
                  filter: "grayscale(100%)"
                }}

                transition={{
                  duration: 0.4
                }}

              />


            </div>


          </motion.div>


        </div>


      </section>

    </>
  );
}