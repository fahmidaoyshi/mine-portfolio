import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";


export default function Contact() {

  return (

    <section 
      id="contact" 
      className="py-20 px-6 bg-white"
    >


      {/* HEADER */}

      <div className="max-w-6xl mx-auto text-center mb-12">

        <p className="text-purple-500 font-semibold">
          Contact Me
        </p>


        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">

          Let’s Connect & Work Together

        </h2>


        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">

          Feel free to reach out for collaboration, freelance work, or any project ideas.

        </p>


      </div>




      {/* CARDS */}

      <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-6">



        {/* EMAIL */}

        <motion.a

          whileHover={{ scale: 1.05 }}

          href="mailto:fahmidaoyshi77@gmail.com"

          className="bg-gray-50 p-6 rounded-2xl shadow-md text-center border border-gray-100 hover:shadow-purple-200"

        >

          <FaEnvelope className="text-purple-500 text-2xl mx-auto mb-3" />


          <p className="font-semibold text-gray-800">
            Email
          </p>


          <p className="text-sm text-gray-600 mt-1">
            Send me a mail
          </p>


        </motion.a>





        {/* LINKEDIN */}

        <motion.a

          whileHover={{ scale: 1.05 }}

          href="https://www.linkedin.com/in/fahmida-khan-oyshi-a006a4345"

          target="_blank"

          rel="noreferrer"

          className="bg-gray-50 p-6 rounded-2xl shadow-md text-center border border-gray-100 hover:shadow-purple-200"

        >

          <FaLinkedin className="text-blue-600 text-2xl mx-auto mb-3" />


          <p className="font-semibold text-gray-800">
            LinkedIn
          </p>


          <p className="text-sm text-gray-600 mt-1">
            Professional network
          </p>


        </motion.a>






        {/* GITHUB */}

        <motion.a

          whileHover={{ scale: 1.05 }}

          href="https://github.com/fahmidaoyshi"

          target="_blank"

          rel="noreferrer"

          className="bg-gray-50 p-6 rounded-2xl shadow-md text-center border border-gray-100 hover:shadow-purple-200"

        >

          <FaGithub className="text-black text-2xl mx-auto mb-3" />


          <p className="font-semibold text-gray-800">
            GitHub
          </p>


          <p className="text-sm text-gray-600 mt-1">
            My projects & code
          </p>


        </motion.a>






        {/* FACEBOOK */}

        <motion.a

          whileHover={{ scale: 1.05 }}

          href="https://www.facebook.com/profile.php?id=61591500341669"

          target="_blank"

          rel="noreferrer"

          className="bg-gray-50 p-6 rounded-2xl shadow-md text-center border border-gray-100 hover:shadow-purple-200"

        >

          <FaFacebook className="text-blue-600 text-2xl mx-auto mb-3" />


          <p className="font-semibold text-gray-800">
            Facebook
          </p>


          <p className="text-sm text-gray-600 mt-1">
            Follow my updates
          </p>


        </motion.a>






        {/* X TWITTER */}

        <motion.a

          whileHover={{ scale: 1.05 }}

          href="https://x.com/dev_oyshi"

          target="_blank"

          rel="noreferrer"

          className="bg-gray-50 p-6 rounded-2xl shadow-md text-center border border-gray-100 hover:shadow-purple-200"

        >

          <FaXTwitter className="text-black text-2xl mx-auto mb-3" />


          <p className="font-semibold text-gray-800">
            X
          </p>


          <p className="text-sm text-gray-600 mt-1">
            Follow my thoughts
          </p>


        </motion.a>



      </div>






      {/* EMAIL HIGHLIGHT */}

      <div className="text-center mt-10 text-gray-600">


        📧 Direct Email:{" "}


        <a

          href="mailto:fahmidaoyshi77@gmail.com"

          className="text-purple-500 font-medium"

        >

          fahmidaoyshi77@gmail.com

        </a>


      </div>



    </section>

  );

}