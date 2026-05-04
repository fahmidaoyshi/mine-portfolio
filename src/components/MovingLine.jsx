export default function MovingLine() {
  return (
    <div className="w-full overflow-hidden bg-purple-100 border-y border-purple-400">

      <div className="flex w-max animate-marquee py-3">

        {/* FIRST SET */}
        <span className="mx-8 text-purple-900 font-medium tracking-wider">
          WEBSITE DESIGN ✦
        </span>
        <span className="mx-8 text-purple-900 font-medium tracking-wider">
          WEBSITE DEVELOPMENT ✦
        </span>
        <span className="mx-8 text-purple-900 font-medium tracking-wider">
          MERN STACK ✦
        </span>
        <span className="mx-8 text-purple-900 font-medium tracking-wider">
          GRAPHIC DESIGN ✦
        </span>
        <span className="mx-8 text-purple-900 font-medium tracking-wider">
          BACKEND DEVELOPMENT ✦
        </span>
        <span className="mx-8 text-purple-900 font-medium tracking-wider">
          FRONTEND DEVELOPMENT ✦
        </span>

        {/* SECOND SET (IMPORTANT FOR SMOOTH LOOP) */}
        <span className="mx-8 text-purple-900 font-medium tracking-wider">
          WEBSITE DESIGN ✦
        </span>
        <span className="mx-8 text-purple-900 font-medium tracking-wider">
          WEBSITE DEVELOPMENT ✦
        </span>
        <span className="mx-8 text-purple-900 font-medium tracking-wider">
          MERN STACK ✦
        </span>
        <span className="mx-8 text-purple-900 font-medium tracking-wider">
          GRAPHIC DESIGN ✦
        </span>
        <span className="mx-8 text-purple-900 font-medium tracking-wider">
          BACKEND DEVELOPMENT ✦
        </span>
        <span className="mx-8 text-purple-900 font-medium tracking-wider">
          FRONTEND DEVELOPMENT ✦
        </span>

      </div>
    </div>
  );
}