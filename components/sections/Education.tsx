import FadeIn from "@/components/ui/FadeIn";
import { GraduationCap, School, Trophy, Star, Users } from "lucide-react";

const education = [
  {
    level: "B.Tech — Computer Science & Engineering",
    institution: " Guru Gobind Singh Indraprastha University",
    detail: "CGPA: 8.6 / 10",
    year: "2024 – 2028",
    icon: GraduationCap,
    current: true,
  },
  {
    level: "Class XII — Science (PCM + CS)",
    institution: "Cambridge School Srinivaspuri",
    detail: "Percentage: 90.4%",
    year: "2022 – 2023",
    icon: School,
    current: false,
  },
  {
    level: "Class X",
    institution: "Cambridge School Srinivaspuri",
    detail: "Percentage: 87.6%",
    year: "2020 – 2021",
    icon: School,
    current: false,
  },
];

const achievements = [
  {
    icon: Trophy,
    title: "3rd Place — College Hackathon",
    desc: "Built a functional web app in 24 hours and placed 3rd among 40+ teams.",
  },
  {
    icon: Star,
    title: "Academic Excellence",
    desc: "Maintaining CGPA of 8.6 across core subjects including OS, DBMS, and DSA.",
  },
  {
    icon: Users,
    title: "Active Community Participant",
    desc: "Regular attendee of coding workshops, dev events, and college tech fests.",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="section-padding bg-white dark:bg-slate-950"
    >
      <div className="section-container">
        {/* Education */}
        <FadeIn>
          <p className="section-label">Background</p>
          <h2 className="section-title">Education</h2>
        </FadeIn>

        <div className="mt-10 relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-2 bottom-2 w-px bg-slate-200 dark:bg-slate-800 hidden md:block" />

          <div className="space-y-6">
            {education.map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeIn key={`${item.institution}-${i}`} delay={80 + i * 80}>
                  <div className="flex gap-5 md:gap-8 items-start">
                    {/* Icon dot */}
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border-2 z-10 ${
                        item.current
                          ? "bg-blue-500 border-blue-500 text-white"
                          : "bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-700 text-slate-400"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>

                    <div className="card flex-1 p-5">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <p className="font-semibold text-slate-900 dark:text-slate-100 text-sm mb-0.5">
                            {item.level}
                          </p>
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            {item.institution}
                          </p>
                        </div>
                        <div className="text-right">
                          <span
                            className={`font-mono text-xs px-2.5 py-1 rounded ${
                              item.current
                                ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                                : "bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                            }`}
                          >
                            {item.detail}
                          </span>
                          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1 font-mono">
                            {item.year}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>

        {/* Achievements */}
        <FadeIn>
          <div className="mt-20">
            <p className="section-label">Achievements</p>
            <h2 className="section-title">Highlights</h2>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-3 gap-5 mt-10">
          {achievements.map((item, i) => {
            const Icon = item.icon;
            return (
              <FadeIn key={`${item.title}-${i}`} delay={80 + i * 80}>
                <div className="card p-5 h-full">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mb-4">
                    <Icon className="w-4 h-4 text-blue-500" />
                  </div>
                  <p className="font-semibold text-slate-900 dark:text-slate-100 text-sm mb-2">
                    {item.title}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
