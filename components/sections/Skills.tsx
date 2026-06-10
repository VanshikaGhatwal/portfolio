import FadeIn from "@/components/ui/FadeIn";
import { SKILL_CATEGORIES } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-white dark:bg-slate-950">
      <div className="section-container">
        <FadeIn>
          <p className="section-label">Skills</p>
          <h2 className="section-title">What I Work With</h2>
          <p className="section-subtitle max-w-xl">
            Technologies I&apos;ve learned through coursework, personal
            projects, and self-study.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {SKILL_CATEGORIES.map((cat, i) => (
            <FadeIn key={cat.category} delay={100 + i * 80}>
              <div className="card p-6 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl" aria-hidden="true">
                    {cat.icon}
                  </span>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-sm">
                    {cat.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-xs px-3 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-md hover:border-blue-300 dark:hover:border-blue-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
