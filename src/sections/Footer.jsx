import React from "react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#111111] text-white border-t border-[#c45cff]/20 mt-20">

      {/* Background Glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-[#c45cff] blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#6f00ff] blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-extrabold mb-4">
              &lt;<span className="text-[#c45cff]">Oyshi.io</span>/&gt;
            </h2>

            <p className="text-gray-400 leading-relaxed text-sm max-w-sm">
              Crafting modern, responsive and user-focused web experiences
              with clean design and creative development.
            </p>

            {/* Fiverr & Upwork */}
            <div className="flex items-center gap-4 mt-6">

              <a
                href="https://www.fiverr.com/fahmidaoyshii"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-full border border-white/20 hover:bg-[#c45cff] hover:border-[#c45cff] duration-300 text-sm font-medium"
              >
                fi
              </a>

              <a
                href="https://www.upwork.com/freelancers/~0137dfaeda9925f6c0"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-full border border-white/20 hover:bg-[#c45cff] hover:border-[#c45cff] duration-300 text-sm font-medium"
              >
                Upwork
              </a>

            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              Navigation
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>
                <a
                  href="#about"
                  className="hover:text-[#c45cff] transition duration-300 flex items-center gap-2"
                >
                  <span className="text-[#c45cff]">✦</span> About
                </a>
              </li>

              <li>
                <a
                  href="#skills"
                  className="hover:text-[#c45cff] transition duration-300 flex items-center gap-2"
                >
                  <span className="text-[#c45cff]">✦</span> Skills
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="hover:text-[#c45cff] transition duration-300 flex items-center gap-2"
                >
                  <span className="text-[#c45cff]">✦</span> Projects
                </a>
              </li>

              <li>
                <a
                  href="#blog"
                  className="hover:text-[#c45cff] transition duration-300 flex items-center gap-2"
                >
                  <span className="text-[#c45cff]">✦</span> Blog
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-[#c45cff] transition duration-300 flex items-center gap-2"
                >
                  <span className="text-[#c45cff]">✦</span> Contact
                </a>
              </li>

            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-2xl font-bold leading-snug mb-5">
              Let’s build something{" "}
              <span className="text-[#c45cff]">
                creative together.
              </span>
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed mb-7">
              Passionate about building modern MERN stack applications
              with smooth UI/UX and clean development.
            </p>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-[#c45cff] hover:bg-[#ad35ff] text-white px-6 py-3 rounded-full font-medium transition duration-300 shadow-lg shadow-[#c45cff]/30"
            >
              View Projects →
            </a>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-14 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-sm">
            © 2026 Oyshi Portfolio. All rights reserved.
          </p>

          <a
            href="#home"
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#c45cff] hover:border-[#c45cff] duration-300"
          >
            ↑
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;