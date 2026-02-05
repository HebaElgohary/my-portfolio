import hebaImg from "../assets/heba.webp";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 
      bg-gradient-to-br from-pink-50 to-white 
      dark:from-gray-900 dark:to-black transition-colors duration-300"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center ">
        {/* Text */}
        <div className="text-center md:text-left ">
          <h1
            className="text-4xl md:text-6xl font-bold leading-tight
            text-gray-900 dark:text-white"
          >
            Hi, I’m <span className="text-pink-600">Heba</span> 👋
          </h1>

          <p className="mt-4 text-xl text-gray-700 dark:text-gray-300">
            Front-End Developer • React.js • Next.js • Tailwind CSS
          </p>

          <p className="mt-4 max-w-xl text-gray-600 dark:text-gray-400">
            I build modern, responsive, and user-friendly web applications with
            a strong focus on clean UI and great user experience.
          </p>

          <div className="mt-8 flex gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 bg-pink-500 text-white rounded-xl
              hover:bg-pink-700 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-pink-500 text-pink-600
              rounded-xl hover:bg-pink-500 hover:text-white transition"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Glow */}
            <div
              className="absolute inset-0 rounded-full 
              bg-pink-500/20 blur-3xl "
            ></div>

            {/* Image */}
            <img
              src={hebaImg}
              alt="Heba"
              className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96
              object-cover  object-[40%_60%] rounded-full aspect-square scale-110 hover:scale-150   duration-1000
              border-4 border-pink-400
              md:translate-x-8
md:-translate-y-4

              scale-220 hover:scale-110 transition
              shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
