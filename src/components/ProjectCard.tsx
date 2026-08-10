type Props = {
  title: string;
  description: string;
  tech: string[];
  link: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  link,
}: Props) {
  return (
    <article
      className="
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-3xl
        border
        border-border
        bg-surface
        p-6
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-primary/40
        hover:shadow-2xl
        hover:shadow-primary/10
      "
    >
      {/* ================= GLOW ================= */}
      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-48
          w-48
          rounded-full
          bg-primary/10
          blur-3xl
          transition-all
          duration-500
          group-hover:bg-primary/20
          group-hover:scale-125
        "
      />

      {/* ================= TOP ACCENT ================= */}
      <div
        className="
          absolute
          left-0
          top-0
          h-1
          w-0
          bg-primary
          transition-all
          duration-500
          group-hover:w-full
        "
      />

      <div className="relative flex h-full flex-col">

        {/* ================= PROJECT NUMBER / ICON ================= */}
        <div className="mb-6 flex items-center justify-between">
          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              border
              border-primary/20
              bg-primary/10
              text-sm
              font-bold
              text-primary
              transition-all
              duration-300
              group-hover:scale-110
              group-hover:border-primary/40
              group-hover:bg-primary/15
            "
          >
            <span>↗</span>
          </div>

          <span
            className="
              text-xs
              font-medium
              uppercase
              tracking-widest
              text-text-muted
            "
          >
            Project
          </span>
        </div>

        {/* ================= TITLE ================= */}
        <h3
          className="
            text-xl
            font-bold
            tracking-tight
            text-text
            transition-colors
            duration-300
            group-hover:text-primary
          "
        >
          {title}
        </h3>

        {/* ================= DESCRIPTION ================= */}
        <p
          className="
            mt-4
            flex-1
            text-sm
            leading-7
            text-text-muted
          "
        >
          {description}
        </p>

        {/* ================= TECH STACK ================= */}
        <div className="mt-6">
          <p
            className="
              mb-3
              text-[11px]
              font-semibold
              uppercase
              tracking-widest
              text-text-muted
            "
          >
            Built with
          </p>

          <div className="flex flex-wrap gap-2">
            {tech.map((item) => (
              <span
                key={item}
                className="
                  rounded-lg
                  border
                  border-border
                  bg-bg
                  px-3
                  py-1.5
                  text-xs
                  font-medium
                  text-text-muted
                  transition-all
                  duration-200
                  group-hover:border-primary/20
                  hover:border-primary/50
                  hover:bg-primary/10
                  hover:text-primary
                "
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div
          className="
            my-6
            h-px
            w-full
            bg-border
          "
        />

        {/* ================= LINK ================= */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            justify-between
            rounded-xl
            border
            border-border
            bg-bg
            px-4
            py-3
            text-sm
            font-semibold
            text-text
            transition-all
            duration-300
            hover:border-primary/40
            hover:bg-primary
            hover:text-black
          "
        >
          <span>View Live Project</span>

          <span
            className="
              text-lg
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          >
            →
          </span>
        </a>
      </div>
    </article>
  );
}