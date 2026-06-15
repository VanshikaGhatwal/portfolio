import { Github, ExternalLink, ImageIcon } from "lucide-react";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="card flex flex-col overflow-hidden group">
      {/* Image placeholder */}
      <div className="h-44 bg-gradient-to-br from-slate-100 to-blue-50 dark:from-slate-800 dark:to-slate-800/60 flex items-center justify-center border-b border-slate-100 dark:border-slate-800">
        <div className="flex flex-col items-center gap-2 text-slate-300 dark:text-slate-600">
          <ImageIcon className="w-8 h-8" />
          <span className="text-xs font-mono">
            {project.title.toLowerCase().replace(/\s+/g, "-")}
          </span>
        </div>
      </div>

      {/* Content */}
      
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-blue-500 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-xs px-2 py-0.5 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-2 pt-1">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-xs px-3.5 py-2"
          >
            <Github className="w-3.5 h-3.5" />
            GitHub
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs px-3.5 py-2"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
