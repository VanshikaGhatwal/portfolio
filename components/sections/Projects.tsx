import FadeIn from "@/components/ui/FadeIn";
import ProjectCard from "@/components/ui/ProjectCard";
import { PROJECTS } from "@/lib/data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-padding bg-slate-50 dark:bg-slate-900/40"
    >
      <div className="section-container">
        <FadeIn>
          <p className="section-label">Projects</p>
          <h2 className="section-title">Things I&apos;ve Built</h2>
          <p className="section-subtitle max-w-xl">
            A mix of personal projects, college assignments, and experiments.
            Each one taught me something new.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {PROJECTS.map((project, i) => (
            <FadeIn key={project.id} delay={100 + i * 80}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
