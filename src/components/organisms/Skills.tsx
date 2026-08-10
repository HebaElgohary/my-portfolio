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
              sm:text-4xl
              lg:text-5xl
            "
          >
            The tools I use to turn
            <span className="text-primary"> ideas into products.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-text-muted">
            A frontend-focused stack built around modern React development,
            type-safe architecture, responsive UI, and scalable application
            development.
          </p>
        </div>

        {/* ================= CORE STACK ================= */}
        <div className="mb-6">
          <p className="mb-5 text-sm font-semibold uppercase tracking-wider text-text-muted">
            Core Stack
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {coreSkills.map((skill) => {
              const Icon = skill.icon;

              return (
                <div
                  key={skill.name}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-border
                    bg-surface
                    p-5
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-primary/40
                    hover:shadow-lg
                    hover:shadow-primary/10
                  "
                >
                  {/* Accent */}
                  <div
                    className="
                      absolute
                      right-0
                      top-0
                      h-20
                      w-20
                      translate-x-8
                      -translate-y-8
                      rounded-full
                      bg-primary/10
                      blur-2xl
                      transition-all
                      duration-500
                      group-hover:scale-150
                    "
                  />

                  <div className="relative">

                    {/* Icon */}
                    <div
                      className="
                        mb-5
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-border
                        bg-bg
                        text-xl
                        text-primary
                        transition-all
                        duration-300
                        group-hover:scale-110
                        group-hover:border-primary/40
                        group-hover:bg-primary/10
                      "
                    >
                      <Icon />
                    </div>

                    <h3 className="font-bold text-text">
                      {skill.name}
                    </h3>

                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-xs text-text-muted">
                        {skill.category}
                      </span>

                      <span
                        className="
                          rounded-full
                          bg-primary/10
                          px-2.5
                          py-1
                          text-[11px]
                          font-medium
                          text-primary
                        "
                      >
                        {skill.level}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= OTHER SKILLS ================= */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="
                rounded-2xl
                border
                border-border
                bg-surface
                p-6
                transition-all
                duration-300
                hover:border-primary/30
              "
            >
              <div className="mb-5 flex items-center gap-3">
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
                  "
                >
                  <span className="h-2 w-2 rounded-full bg-primary" />
                </div>

                <h3 className="font-bold text-text">
                  {group.title}
                </h3>
              </div>

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
            rounded-2xl
            border
            border-primary/20
            bg-primary/5
            px-6
            py-5
            text-center
          "
        >
          <p className="text-sm text-text-muted">
            Focused on building
            <span className="font-semibold text-primary">
              {" "}scalable, maintainable, and user-focused applications.
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}