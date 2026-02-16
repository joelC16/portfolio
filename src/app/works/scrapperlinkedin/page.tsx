"use client"

import ProjectPresentation from "@/components/projectPresentation";

export default function ScrapperLinkedin() {

    return (
        <ProjectPresentation 
            title="Scrapper LinkedIn" 
            tecnologies={["React", "Next.js", "TypeScript", "Puppeteer"]} 
            presentation="Herramienta de web scraping desarrollada para extraer información de perfiles de LinkedIn de manera automatizada. La aplicación utiliza técnicas avanzadas de scraping para recopilar datos profesionales, experiencia laboral, habilidades y contactos. Con una interfaz moderna desarrollada con GSAP para animaciones fluidas, el sistema permite configurar búsquedas personalizadas, filtrar resultados y exportar datos en diferentes formatos. La herramienta está diseñada para ser eficiente y respetuosa con las políticas de uso, facilitando la recopilación de información profesional para análisis, investigación o networking."
            linkWeb="#"
            srcImgPage="/images/Scrapperlinkldin.png"
        >
        </ProjectPresentation>
    );
}

