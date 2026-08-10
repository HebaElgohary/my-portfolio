import { coreSkills, skillGroups } from "../../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        bg-bg
        px-6
        py-24
        text-text
        transition-colors
        duration-300
      "
    >
      <div className="mx-auto max-w-6xl">

        {/* ================= HEADER ================= */}
        <div className="mb-16 max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />

            <span
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.2em]
                text-primary
              "
            >
              Technical Expertise
            </span>
          </div>

          <h2
            className="
              text-3xl
              font-extrabold
              tracking-tight
              text-text
              sm:text-4xl
              lg:text-5xl
            "
          >
            The tools I use to turn
            <span className="text-primary">
              {" "}
              ideas into products.
            </span>
          </h2>

          <p
            className="
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-text-muted
            "
          >
            A frontend-focused stack built around modern React development,
            type-safe architecture, responsive UI, and scalable application
            development.
          </p>
        </div>

        {/* ================= CORE STACK ================= */}
        <div className="mb-6">
          <p
            className="
              mb-5
              text-sm
              font-semibold
              uppercase
              tracking-wider
              text-text-muted
            "
          >
            Core Stack
          </p>

          <div
            className="
              grid
              gap-5
              sm:grid-cols-2
              lg:grid-cols-3
          "
          >
            {coreSkills.map((skill) => {
              const Icon = skill.icon;

              return (
                <div
                  key={skill.name}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-3xl
                    border
                    border-border
                    bg-surface
                    p-6

                    transition-all
                    duration-500
                    ease-out

                    hover:-translate-y-2
                    hover:border-primary/40
                    hover:shadow-2xl
                    hover:shadow-primary/10
                  "
                >
                  {/* ================= BACKGROUND GLOW ================= */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-16
                      -top-16
                      h-40
                      w-40
                      rounded-full
                      bg-primary/10
                      blur-3xl

                      transition-all
                      duration-700

                      group-hover:scale-150
                      group-hover:bg-primary/20
                    "
                  />

                  {/* ================= TOP ACCENT ================= */}
                  <div
                    className="
                      absolute
                      left-0
                      right-0
                      top-0
                      h-[2px]
                      origin-left
                      scale-x-0
                      bg-primary

                      transition-transform
                      duration-500

                      group-hover:scale-x-100
                    "
                  />

                  <div className="relative z-10">

                    {/* ================= ICON + LEVEL ================= */}
                    <div
                      className="
                        mb-8
                        flex
                        items-start
                        justify-between
                      "
                    >
                      {/* Icon */}
                      <div
                        className="
                          flex
                          h-14
                          w-14
                          items-center
                          justify-center
                          rounded-2xl

                          border
                          border-border

                          bg-bg

                          text-2xl
                          text-primary

                          shadow-sm

                          transition-all
                          duration-500

                          group-hover:scale-110
                          group-hover:rotate-3
                          group-hover:border-primary/40
                          group-hover:bg-primary/10
                          group-hover:shadow-lg
                          group-hover:shadow-primary/10
                        "
                      >
                        <Icon />
                      </div>

                      {/* Level */}
                      <span
                        className="
                          rounded-full
                          border
                          border-primary/20
                          bg-primary/5

                          px-3
                          py-1

                          text-[11px]
                          font-semibold
                          tracking-wide
                          text-primary

                          transition-all
                          duration-300

                          group-hover:border-primary/40
                          group-hover:bg-primary/10
                        "
                      >
                        {skill.level}
                      </span>
                    </div>

                    {/* ================= NAME ================= */}
                    <h3
                      className="
                        text-lg
                        font-bold
                        tracking-tight
                        text-text

                        transition-colors
                        duration-300

                        group-hover:text-primary
                      "
                    >
                      {skill.name}
                    </h3>

                    {/* ================= CATEGORY ================= */}
                    <p
                      className="
                        mt-2
                        text-sm
                        text-text-muted
                      "
                    >
                      {skill.category}
                    </p>

                    {/* ================= BOTTOM INDICATOR ================= */}
                    <div
                      className="
                        mt-6
                        flex
                        items-center
                        gap-2
                      "
                    >
                      <span
                        className="
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-primary

                          transition-all
                          duration-300

                          group-hover:w-6
                        "
                      />

                      <span
                        className="
                          text-[11px]
                          font-medium
                          uppercase
                          tracking-wider
                          text-text-muted

                          transition-colors
                          duration-300

                          group-hover:text-primary
                        "
                      >
                        Core technology
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= OTHER SKILLS ================= */}
        <div
          className="
            mt-12
            grid
            gap-5
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="
                group
                rounded-2xl
                border
                border-border
                bg-surface
                p-6

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-primary/30
                hover:shadow-lg
                hover:shadow-primary/5
              "
            >
              {/* Group heading */}
              <div
                className="
                  mb-5
                  flex
                  items-center
                  gap-3
                "
              >
                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-lg
                    bg-primary/10
                    text-primary

                    transition-all
                    duration-300

                    group-hover:bg-primary/15
                  "
                >
                  <span
                    className="
                      h-2
                      w-2
                      rounded-full
                      bg-primary
                    "
                  />
                </div>

                <h3
                  className="
                    font-bold
                    text-text
                  "
                >
                  {group.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      rounded-lg
                      border
                      border-border
                      bg-bg

                      px-3
                      py-2

                      text-sm
                      text-text-muted

                      transition-all
                      duration-200

                      hover:border-primary/40
                      hover:bg-primary/5
                      hover:text-primary
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ================= BOTTOM STATEMENT ================= */}
        <div
          className="
            mt-10
            overflow-hidden
            rounded-2xl
            border
            border-primary/20
            bg-primary/5
            px-6
            py-5
            text-center
          "
        >
          <p
            className="
              text-sm
              text-text-muted
            "
          >
            Focused on building
            <span
              className="
                font-semibold
                text-primary
              "
            >
              {" "}
              scalable, maintainable, and user-focused applications.
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}