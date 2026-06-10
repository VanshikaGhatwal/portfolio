import FadeIn from "@/components/ui/FadeIn";
import { Mail, Github, Linkedin, Phone } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "vanshikaghatwal24304@gmail.com",
    href: "mailto:vanshikaghatwal24304@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/VanshikaGhatwal",
    href: "https://github.com/VanshikaGhatwal",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/VanshikaGhatwal",
    href: "https://www.linkedin.com/in/vanshika-ghatwal-b44a7a35b/",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 93190 16625",
    href: "tel:+919319016625",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding bg-white dark:bg-slate-950"
    >
      <div className="section-container">
        <FadeIn>
          <p className="section-label">Contact</p>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle max-w-xl">
            I&apos;m open to internships, collaborations, and interesting
            conversations. Feel free to reach out through any of these.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-4 mt-12 max-w-2xl">
          {contacts.map((item, i) => {
            const Icon = item.icon;
            return (
              <FadeIn key={`${item.label}-${i}`} delay={80 + i * 60}>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="card flex items-center gap-4 p-5 group hover:border-blue-200 dark:hover:border-blue-800 transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-slate-50 dark:bg-slate-800 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 flex items-center justify-center transition-colors">
                    <Icon className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-400 dark:text-slate-500 mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                      {item.value}
                    </p>
                  </div>
                </a>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
