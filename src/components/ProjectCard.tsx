type Props = {
  img: string | undefined;
  title: string;
  description: string;
  tech: string[];
  link: string;
};

export default function ProjectCard({
  img,
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
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-primary/40
        hover:shadow-2xl
        hover:shadow-primary/10
      "
    >
      {/* ================= IMAGE ================= */}
      <div
        className="
          relative
          h-56
          w-full
          overflow-hidden
          bg-bg
        "
      >
        <img
          src={img}
          alt={`${title} project preview`}
          className="
            h-full
            w-full
            object-cover
            object-top
            transition-transform
            duration-700
            ease-out
            group-hover:scale-105
          "
        />

        {/* Image overlay */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-black/50
            via-black/5
            to-transparent
            opacity-70
            transition-opacity
            duration-500
            group-hover:opacity-50
          "
        />

        {/* Project badge */}
        <div
          className="
            absolute
            left-4
            top-4
            rounded-full
            border
            border-white/20
            bg-black/40
            px-3
            py-1.5
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.2em]
            text-white
            backdrop-blur-md
          "
        >
          Project
        </div>

        {/* View button */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${title}`}
          className="
            absolute
            bottom-4
            right-4
            flex
            h-11
            w-11
            translate-y-3
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            bg-white/15
            text-white
            opacity-0
            backdrop-blur-md
            transition-all
            duration-300
            hover:bg-primary
            hover:text-black
            group-hover:translate-y-0
            group-hover:opacity-100
          "
        >
          ↗
        </a>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative flex flex-1 flex-col p-6">

        {/* Glow */}
        <div
          className="
            pointer-events-none
            absolute
            -right-20
            -top-20
            h-40
            w-40
            rounded-full
            bg-primary/10
            blur-3xl
            transition-all
            duration-500
            group-hover:scale-125
            group-hover:bg-primary/20
          "
        />

        {/* Title */}
        <h3
          className="
            relative
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

        {/* Description */}
        <p
          className="
            relative
            mt-3
            flex-1
            text-sm
            leading-7
            text-text-muted
          "
        >
          {description}
        </p>

        {/* ================= TECH ================= */}
        <div className="relative mt-6">
          <p
            className="
              mb-3
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.2em]
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
        <div className="my-6 h-px w-full bg-border" />

        {/* ================= LINK ================= */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            group/link
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
              group-hover/link:translate-x-1
            "
          >
            →
          </span>
        </a>
      </div>

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
    </article>
  );
}