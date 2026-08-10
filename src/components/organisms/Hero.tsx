import hebaImg from "../../assets/heba.jpeg";

const technologies = [
  "React",
  "TypeScript",
  "Next.js",
  "React Native",
  "Tailwind CSS",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        !mt-5
        overflow-hidden
        bg-bg
        text-text
        transition-colors duration-300
      "
    >
      {/* Background decoration */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-96
          w-96
          rounded-full
          bg-primary/10
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-96
          w-96
          rounded-full
          bg-primary/10
          blur-3xl
        "
      />

      <div
        className="
          container
          !mx-auto
          grid
          min-h-[calc(100vh-80px)]
          items-center
          gap-16
          !px-6
          !py-20
          md:grid-cols-2
          lg:gap-24
        "
      >
        {/* ================= LEFT ================= */}
        <div
          className="
            relative
            z-10
            text-center
            md:text-left
          "
        >
          {/* Eyebrow */}
          <div
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-border
              bg-surface
              px-4
              py-2
              text-sm
              font-medium
              text-primary-dark
              shadow-card
            "
          >
            <span
              className="
                h-2
                w-2
                animate-pulse
                rounded-full
                bg-primary
              "
            />

            Front-End Developer
          </div>

          {/* Heading */}
          <h1
            className="
              max-w-3xl
              text-4xl
              font-extrabold
              leading-[1.1]
              tracking-tight
              text-text
              sm:text-5xl
              lg:text-6xl
            "
          >
            I build modern
            <span className="block text-primary">
              web & mobile
            </span>
            experiences.
          </h1>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-7
              text-text-muted
              md:mx-0
              md:text-lg
            "
          >
            I’m Heba, a Front-End Developer specializing in React,
            TypeScript, and Next.js. I build scalable, responsive
            applications with a strong focus on clean architecture,
            performance, and great user experience.
          </p>

          {/* CTA */}
          <div
            className="
              mt-8
              flex
              flex-wrap
              justify-center
              gap-4
              md:justify-start
            "
          >
            <a
              href="#projects"
              className="
                inline-flex
                items-center
                justify-center
                rounded-xl
                bg-primary-dark
                px-6
                py-3
                font-semibold
                text-white
                shadow-card
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-primary
                hover:shadow-glow
              "
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="
                inline-flex
                items-center
                justify-center
                rounded-xl
                border
                border-border
                bg-surface
                px-6
                py-3
                font-semibold
                text-text
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-primary
                hover:text-primary-dark
                hover:shadow-card
              "
            >
              Let’s Talk
            </a>
          </div>

          {/* Tech stack */}
          <div className="mt-10">
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-text-muted">
              Core Technologies
            </p>

            <div
              className="
                flex
                flex-wrap
                justify-center
                gap-2
                md:justify-start
              "
            >
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full
                    border
                    border-border
                    bg-surface
                    px-3
                    py-1.5
                    text-xs
                    font-medium
                    text-text-muted
                    transition-all
                    duration-300
                    hover:border-primary
                    hover:bg-primary/10
                    hover:text-primary-dark
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div
          className="
            relative
            flex
            items-center
            justify-center
          "
        >
          {/* Main glow */}
          <div
            className="
              absolute
              h-72
              w-72
              rounded-full
              bg-primary/20
              blur-3xl
              sm:h-96
              sm:w-96
            "
          />

          {/* Decorative ring */}
          <div
            className="
              absolute
              h-72
              w-72
              rounded-full
              border
              border-primary/20
              sm:h-96
              sm:w-96
            "
          />

          {/* Image */}
          <div className="relative">
            <img
              src={hebaImg}
              alt="Heba - Front-End Developer"
              className="
                relative
                h-64
                w-64
                rounded-full
                border-4
                border-primary
                object-cover
                object-[60%_40%]
                shadow-elevated
                transition-transform
                duration-700

                hover:scale-105
                sm:h-72
                sm:w-72
                md:h-80
                md:w-80
                lg:h-96
                lg:w-96
              "
            />

            {/* Top floating card */}
            <div
              className="
                absolute
                -right-6
                top-4
                hidden
                rounded-2xl
                border
                border-border
                bg-surface/90
                px-4
                py-3
                shadow-elevated
                backdrop-blur-md
                sm:block
              "
            >
              <p className="text-sm text-gray-500">
                Core Stack
              </p>

              <p className="mt-1 font-semibold text-text">
                React + TypeScript
              </p>
            </div>

            {/* Bottom floating card */}
            <div
              className="
                absolute
                -bottom-6
                -left-6
                hidden
                rounded-2xl
                border
                border-border
                bg-surface/90
                px-5
                py-3
                shadow-elevated
                backdrop-blur-md
                sm:block
              "
            >
              <p className="text-2xl font-bold text-primary">
                3+
              </p>

              <p className="text-xs text-text-muted">
                Years of hands-on experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}