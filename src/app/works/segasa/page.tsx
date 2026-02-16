"use client"

import ProjectPresentationWithGallery from "@/components/projectPresentationWithGallery";

export default function Segasa() {

    const galleryItems = [
        {
            src: "/images/SegasaInicio.png",
            alt: "Vista inicial de Segasa",
            description: "Página principal con opciones de búsqueda y configuración de scraping"
        },
        {
            src: "/images/SegasaSelecciones.png",
            alt: "Selección de parámetros de búsqueda",
            description: "Interfaz para configurar parámetros y criterios de búsqueda personalizados"
        },
        {
            src: "/images/SegasaResultados.png",
            alt: "Resultados del scraping",
            description: "Visualización de resultados extraídos con opciones de filtrado y exportación"
        }
    ];

    return (
        <ProjectPresentationWithGallery 
            title="Segasa" 
            tecnologies={["React", "Next.js", "TypeScript", "Puppeteer"]} 
            presentation="Plataforma de web scraping desarrollada con Next.js y Puppeteer para extraer información de sitios web de manera automatizada. El sistema permite configurar búsquedas personalizadas, definir parámetros de extracción y procesar grandes volúmenes de datos. Con una interfaz clara y funcional, los usuarios pueden seleccionar criterios de búsqueda, ejecutar procesos de scraping y visualizar resultados de forma organizada. La herramienta está diseñada para ser eficiente y escalable, facilitando la recopilación de datos para análisis, investigación o automatización de tareas que requieren extracción de información web."
            linkWeb="https://segasa-scraper-production.up.railway.app/"
            galleryItems={galleryItems}
        >
        </ProjectPresentationWithGallery>
    );
}

