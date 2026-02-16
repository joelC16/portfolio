import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyectos | Joel Cordero - Desarrollo web, IA y automatizaciones",
  description: "Portfolio de proyectos: desarrollo web, dashboards con IA, automatizaciones y agentes inteligentes. Ver trabajos realizados con Next.js, React, LangChain y n8n.",
};

export default function WorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
