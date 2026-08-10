import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      type="button"
      onClick={() => setDark((prev) => !prev)}
      aria-label="Toggle theme"
      className="
        relative flex h-10 w-[76px] items-center
        rounded-full
        border border-border
        bg-surface
        p-1
        shadow-sm
        transition-all duration-300
        hover:border-primary
        hover:shadow-md
        hover:shadow-primary/10
      "
    >
      <span
        className={`
          absolute top-1
          flex h-8 w-8 items-center justify-center
          rounded-full
          bg-primary
          text-black
          shadow-md
          transition-transform duration-300
          ${dark ? "translate-x-[36px]" : "translate-x-0"}
        `}
      >
        {dark ? (
          <FiMoon size={16} strokeWidth={2.5} />
        ) : (
          <FiSun size={16} strokeWidth={2.5} />
        )}
      </span>

      <span className="flex w-full items-center justify-between px-2">
        <FiSun
          size={15}
          className={dark ? "text-text-muted" : "text-primary-dark"}
        />

        <FiMoon
          size={15}
          className={dark ? "text-primary-light" : "text-text-muted"}
        />
      </span>
    </button>
  );
}