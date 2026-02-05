type Props = {
  title: string;
  description: string;
  tech: string[];
  link: string;
};

export default function ProjectCard({ title, description, tech, link }: Props) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:-translate-y-2 transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-400 mt-2">{description}</p>

      <div className="flex flex-wrap gap-2 mt-4">
        {tech.map((t) => (
          <span key={t} className="text-xs  text-pink-200 px-2 py-1 rounded bg-gray-600">
            {t}
          </span>
        ))}
      </div>

      <a
        href={link}
        target="_blank"
        className="inline-block mt-4 text-pink-500 font-medium"
      >
        Live Demo →
      </a>
    </div>
  );
}
