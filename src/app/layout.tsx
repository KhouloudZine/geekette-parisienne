import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Geekette Parisienne — Portfolio | PhD, Data Scientist & App Creator",
  description:
    "PhD in Computer Science, Data Scientist & App Creator. 15+ mobile and web applications built with Flutter, React Native, Next.js. Discover Trainify, MaLicorne, MyMenu and more.",
  keywords: [
    "Geekette Parisienne",
    "Data Scientist",
    "PhD Computer Science",
    "Flutter developer",
    "React Native developer",
    "Next.js developer",
    "Mobile Apps",
    "Portfolio",
    "Trainify",
    "MaLicorne",
    "MyMenu",
    "App Creator",
    "Women in Tech",
    "French Tech",
    "EdTech",
  ],
  openGraph: {
    title: "Geekette Parisienne — PhD, Data Scientist & App Creator",
    description:
      "15+ mobile and web applications built with Flutter, React Native, Next.js. Discover my portfolio.",
    url: "https://geekette-parisienne.vercel.app",
    siteName: "Geekette Parisienne",
    locale: "fr_FR",
    alternateLocale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Geekette Parisienne — PhD, Data Scientist & App Creator",
    description:
      "15+ mobile and web applications built with Flutter, React Native, Next.js.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://geekette-parisienne.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
