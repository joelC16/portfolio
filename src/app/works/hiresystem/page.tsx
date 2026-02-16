"use client"

import ProjectPresentation from "@/components/projectPresentation";

export default function lesperesnature() {

    return (
        <ProjectPresentation 
            title="Hire system" 
            tecnologies={["React", "Next.js", "GSAP"]} 
            presentation="Plataforma web desarrollada para Wone, un sistema de recruiting impulsado por inteligencia artificial que optimiza todo el proceso de contratación. El sitio fue diseñado para comunicar de forma clara y atractiva cómo la automatización inteligente permite atraer, evaluar y contratar talento de manera más rápida y precisa. La estructura prioriza una navegación fluida por secciones clave como sourcing, evaluation, tracking y communication, guiando al usuario a lo largo del flujo completo de hiring. El diseño combina una estética tecnológica y minimalista con un enfoque human-first, reforzando la idea de que la IA potencia —y no reemplaza— el criterio humano. Además, la web es completamente responsive, ofreciendo una experiencia consistente y eficiente en cualquier dispositivo. El resultado es un producto digital sólido que transmite innovación, velocidad y una nueva forma de entender el reclutamiento."
            linkWeb="https://github.com/AgenciaDiffio/linkedlnScrapper"
            srcImgPage="/images/hiresystemCompletePage.png"
        >
        </ProjectPresentation>
    );
}
