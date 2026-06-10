import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vanshika Ghatwal — CSE Student Portfolio",
  description:
    "B.Tech Computer Science Engineering student from Delhi. Building projects in web development, exploring DSA, and learning full-stack development.",
  keywords: [
    "CSE student",
    "portfolio",
    "web development",
    "React",
    "Next.js",
    "B.Tech",
    "Delhi",
  ],
  authors: [{ name: "Vanshika Ghatwal" }],
  openGraph: {
    title: "Vanshika Ghatwal — CSE Student Portfolio",
    description: "B.Tech CSE student building projects and learning every day.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
