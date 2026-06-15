import FadeIn from "@/components/ui/FadeIn";
import { Download, FileText, Eye } from "lucide-react";

export default function Resume() {
  return (
    <section
      id="resume"
      className="section-padding bg-slate-50 dark:bg-slate-900/40"
    >
      <div className="section-container">
        <FadeIn>
          <p className="section-label">Resume</p>
          <h2 className="section-title">My Resume</h2>
          <p className="section-subtitle max-w-xl">
            A one-page overview of my education, skills, and projects.
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="mt-10 max-w-lg">
            <div className="card p-6 flex items-center gap-5">
              {/* Icon */}
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                <FileText className="w-7 h-7 text-blue-500" />
              </div>

              <div className="flex-1 min-w-0">
                <p className="font-semibold text-slate-900 dark:text-slate-100 text-sm">
                  Vanshika_Resume.pdf
                </p>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                  Last updated June 2026 · PDF
                </p>
              </div>

              <div className="flex gap-2 flex-shrink-0">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-xs px-3.5 py-2"
                  aria-label="Preview resume"
                >
                  <Eye className="w-3.5 h-3.5" />
                  Preview
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="btn-primary text-xs px-3.5 py-2"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download
                </a>
              </div>
            </div>

            <p className="text-xs text-slate-400 dark:text-slate-500 mt-3 font-mono">
              {/* Replace /public/resume.pdf with your actual resume file */}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
