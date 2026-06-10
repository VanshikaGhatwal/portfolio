import FadeIn from "@/components/ui/FadeIn";
import { BookOpen, Lightbulb, Target } from "lucide-react";

<div className="bg-red-500 text-white p-10">Tailwind Test</div>;
const highlights = [
  {
    icon: BookOpen,
    title: "Currently Learning",
    desc: "Data Structures & Algorithms, Full-Stack Development with React and Next.js",
  },
  {
    icon: Lightbulb,
    title: "Interests",
    desc: "Web development, open-source software, problem solving, and building useful side projects",
  },
  {
    icon: Target,
    title: "Goals",
    desc: "Land a good internship, contribute to real-world projects, and keep growing as an engineer",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-padding bg-slate-50 dark:bg-slate-900/40"
    >
      <div className="section-container">
        <FadeIn>
          <p className="section-label">About Me</p>
          <h2 className="section-title">Who I am</h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-start mt-10">
          <FadeIn delay={100}>
            <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                I&apos;m a second-year B.Tech Computer Science and Engineering
                student based in Delhi, India. I got into programming through
                curiosity, tinkering with websites and slowly figuring out how
                things work under the hood.
              </p>
              <p>
                Right now, I&apos;m focused on building my foundation in web
                development and DSA. I enjoy turning ideas into working
                projects.
              </p>
              <p>
                I&apos;m looking for opportunities to grow, collaborate with
                others, and work on things that actually matter. If you&apos;re
                working on something interesting, I&apos;d love to connect.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-4">
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.title} delay={150 + i * 80}>
                  <div className="card flex gap-4 p-5">
                    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-blue-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-slate-100 text-sm mb-0.5">
                        {item.title}
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
