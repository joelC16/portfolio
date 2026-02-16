"use client"

import ProjectPresentationWithGallery from "@/components/projectPresentationWithGallery";

export default function ParksDashboard() {

    const galleryItems = [
        {
            src: "/images/ParksInicio.png",
            alt: "Vista inicial del dashboard de parques",
            description: "Página principal del dashboard con resumen general del estado de los parques"
        },
        {
            src: "/images/ParksNivelesTanques.png",
            alt: "Monitoreo de niveles de tanques",
            description: "Sistema de monitoreo en tiempo real de niveles de tanques y recursos"
        },
        {
            src: "/images/ParksConsumoDiario.png",
            alt: "Análisis de consumo diario",
            description: "Gráficos y métricas de consumo diario con análisis detallado de recursos"
        },
        {
            src: "/images/ParksChatAI.png",
            alt: "Asistente de IA para parques",
            description: "Chat con inteligencia artificial para consultas y asistencia en la gestión de parques"
        }
    ];

    return (
        <ProjectPresentationWithGallery 
            title="Parks Dashboard" 
            tecnologies={["React", "Next.js", "TypeScript", "Tailwind", "AI"]} 
            presentation="Dashboard de gestión y monitoreo para parques desarrollado con Next.js y React. El sistema permite monitorear en tiempo real los niveles de tanques, analizar el consumo diario de recursos, y gestionar múltiples parques desde una interfaz centralizada. Incluye un asistente de IA integrado que ayuda en la toma de decisiones y resuelve consultas sobre la gestión de los parques. La plataforma ofrece visualizaciones claras de datos, alertas automáticas y reportes detallados para optimizar el uso de recursos y mejorar la eficiencia operativa."
            linkWeb="https://github.com/joelC16"
            galleryItems={galleryItems}
        >
        </ProjectPresentationWithGallery>
    );
}

