import { 
     FiGithub, FiLinkedin } from "react-icons/fi";
import ThemeToggle from "../molecules/ThemeToggle"

const navLinks = [
  { label: "Home", href: "#home" },
//   { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="mx-auto mt-4 max-w-6xl px-4">
        <nav
          className="
            flex h-16 items-center justify-between
            rounded-2xl
            border border-border
            bg-surface/80
            px-5
            shadow-lg shadow-black/5
            backdrop-blur-xl
          "
        >
          {/* Logo */}
          <a
            href="#home"
            className="
              text-xl font-extrabold tracking-tight
              text-text
              transition-colors
              hover:text-primary-dark
            "
          >
            <span className="text-primary">H</span>eba
          </a>

          {/* Navigation */}
          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="
                  relative text-sm font-medium
                  text-text-muted
                  transition-colors duration-200
                  hover:text-primary-dark
                  after:absolute
                  after:-bottom-1
                  after:left-0
                  after:h-[2px]
                  after:w-0
                  after:rounded-full
                  after:bg-primary
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                "
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* GitHub */}
            <a
              href="https://github.com/HebaElgohary"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="
                hidden h-9 w-9
                items-center justify-center
                rounded-full
                text-text-muted
                transition-all duration-200
                hover:bg-primary/10
                hover:text-primary-dark
                sm:flex
              "
            >
              <FiGithub size={18} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/heba-elgohary-230422199/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="
                hidden h-9 w-9
                items-center justify-center
                rounded-full
                text-text-muted
                transition-all duration-200
                hover:bg-primary/10
                hover:text-primary-dark
                sm:flex
              "
            >
              <FiLinkedin size={18} />
            </a>

            {/* Theme */}
            <ThemeToggle />

            {/* Contact */}
          
            {/* <a
              href="#contact"
              className="
                hidden items-center gap-2
                rounded-full
                bg-primary
                px-4 py-2
                text-sm font-semibold
                text-black
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-primary-dark
                hover:shadow-lg
                hover:shadow-primary/20
                md:flex
              "
            >
              Let's Talk
              <FiArrowDown size={15} className="-rotate-45" />
            </a> */}
          </div>
        </nav>
      </div>
    </header>
  );
}