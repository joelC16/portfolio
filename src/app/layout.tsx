
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Unbounded, Poppins } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react"

import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Joel Cordero - Desarrollo web, IA y automatizaciones",
  description: "Desarrollador de soluciones digitales: landing pages, dashboards con IA, automatizaciones con n8n y agentes inteligentes con LangChain. Next.js, React, TypeScript.",
  keywords: ["desarrollo web", "Next.js", "React", "IA", "LangChain", "n8n", "automatización", "landing page", "dashboard", "Joel Cordero"],
  openGraph: {
    title: "Joel Cordero - Desarrollo web, IA y automatizaciones",
    description: "Construyo landing pages, dashboards con IA, automatizaciones con n8n y agentes inteligentes con LangChain.",
    type: "website",
  },
};

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
});
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-R76YXKB1XT"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-R76YXKB1XT');
            `,
          }}
        />
      </head>

      <body className={`${unbounded.variable} ${poppins.variable} antialiased`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <SpeedInsights />
        <Analytics/>
      </body>
    </html>
  );
}
