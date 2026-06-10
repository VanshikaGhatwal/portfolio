import { Github, Linkedin, Mail, Code2 } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="section-container py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Code2 className="w-4 h-4 text-blue-500" />
          <span>
            © {year}{" "}
            <span className="text-slate-900 dark:text-slate-100 font-medium">
              Vanshika Ghatwal
            </span>
            . Built with Next.js & Tailwind CSS.
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:vanshikaghatwal@gmail.com"
            aria-label="Email"
            className="text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
