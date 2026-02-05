const skills = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Redux",
  "Next.js",
  "JavaScript",
  "Bootstrap",
  "Git",
];

export default function Skills() {
  return (
    <section className="py-20 text-center
      bg-white text-gray-900
      dark:bg-gray-900 dark:text-gray-100"
    >
      <h2 className="text-3xl font-bold mb-8">Skills</h2>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="
              px-5 py-2 rounded-full text-sm font-medium
              bg-gray-100 text-gray-800
              dark:bg-gray-800 dark:text-pink-200
              transition hover:scale-105
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
