import { useState } from "react";
import { motion } from "framer-motion";

const links = ["home", "about", "skills", "projects", "blog", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false); // 🔥 mobile menu added

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/30 border-b border-white/20 shadow-sm">
      
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        {/* LOGO */}
        <h1 className="font-bold text-2xl tracking-wide text-purple-500">
          &lt;Oyshi.io/&gt;
        </h1>

        {/* DESKTOP LINKS (tablet fix included) */}
        <div className="hidden md:flex gap-4 lg:gap-8 relative">

          {links.map((item) => (
            <div key={item} className="relative px-2 py-1">

              <a
                href={`#${item}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActive(item);

                  const section = document.getElementById(item);
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="capitalize text-sm lg:text-[20px] font-semibold text-gray-800 hover:text-indigo-600 transition"
              >
                {item}
              </a>

              {/* Bubble */}
              {active === item && (
                <motion.div
                  layoutId="bubble"
                  className="absolute inset-0 rounded-full bg-indigo-200/60 blur-sm -z-10"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}

            </div>
          ))}

        </div>

        {/* MOBILE BUTTON (no extra library → safe) */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-3xl text-gray-800"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-6 py-4 bg-white/80 backdrop-blur-lg border-t border-white/20 space-y-3">

          {links.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={(e) => {
                e.preventDefault();
                setActive(item);
                setOpen(false);

                const section = document.getElementById(item);
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="block capitalize text-gray-800 font-medium hover:text-indigo-600"
            >
              {item}
            </a>
          ))}

        </div>
      )}

    </nav>
  );
}