export default function Contact() {
  return (
    <section
      id="contact"
      className="
        container mx-auto
        px-6 py-20
        bg-bg
        text-text
        text-center
        transition-colors duration-300
      "
    >
      <div
        className="
          mx-auto max-w-3xl
          rounded-3xl
          border border-border
          bg-surface
          px-6 py-14
          shadow-sm
          transition-colors duration-300
        "
      >
        {/* Small heading */}
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          Get In Touch
        </p>

        {/* Main heading */}
        <h2 className="text-3xl font-bold md:text-4xl">
          Let’s Work Together
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-xl text-text-muted">
          Available for freelance and remote opportunities.
        </p>

        {/* CTA */}
        <a
          href="mailto:hebasamir535@gmail.com"
          className="
            mt-8 inline-flex
            items-center justify-center
            rounded-xl
            bg-primary-dark
            px-6 py-3
            font-semibold
            text-white
            transition-all duration-300
            hover:bg-primary
            hover:-translate-y-1
            hover:shadow-lg
            hover:shadow-primary/20
          "
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}