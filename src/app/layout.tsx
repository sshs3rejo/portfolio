import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { profile } from "@/data/profile";
import { SITE_URL } from "@/data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Felipe Serejo — Desenvolvedor Web";
const description =
  "Portfólio de Felipe Serejo, desenvolvedor web em formação. Sistemas com TypeScript, Next.js | Laravel — Fábrica de Software UniFacema e SAAE Caxias.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: "%s | Felipe Serejo",
  },
  description,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Felipe Serejo",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Felipe Serejo — Desenvolvedor Web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Felipe Serejo",
  alternateName: "Felipe Gabriel Serejo de Andrade",
  jobTitle: "Desenvolvedor Web",
  description,
  url: SITE_URL,
  image: `${SITE_URL}/avatar.jpg`,
  sameAs: [
    profile.links.github,
    profile.links.linkedin,
    profile.links.instagram,
  ],
  knowsAbout: [
    "TypeScript",
    "Next.js",
    "React",
    "Laravel",
    "PHP",
    "C#",
    ".NET",
    "PostgreSQL",
    "Docker",
    "Linux",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "UniFacema",
  },
  worksFor: [
    { "@type": "Organization", name: "Fábrica de Software UniFacema" },
    { "@type": "Organization", name: "SAAE Caxias" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
