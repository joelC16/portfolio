"use client"

import ProjectPresentation from "@/components/projectPresentation";

export default function Jaque() {

    return (
        <ProjectPresentation 
            title="Jaque" 
            tecnologies={["HTML", "CSS", "JS"]} 
            presentation="Este proyecto fue desarrollado para reflejar la creatividad y el enfoque detallista de Jaquelina, una diseñadora apasionada por el arte y la experiencia digital. La estructura del sitio prioriza una navegación clara y fluida, destacando sus habilidades en diseño web, UX/UI e identidad visual. Cada sección está diseñada para comunicar su estilo minimalista y profesional, con un enfoque en tipografías limpias y layouts equilibrados. Se buscó mantener una presentación visual atractiva que resalte sus mejores trabajos y proyectos destacados."
            linkWeb="https://jaquelinacordero.com/"
            srcImgPage="/images/jaqueCompletePage.png"
        >
        </ProjectPresentation>
    );
}
