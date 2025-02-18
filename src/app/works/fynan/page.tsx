"use client"

import ProjectPresentation from "@/components/projectPresentation";

export default function Fynan() {

    return (
        <ProjectPresentation 
            title="Fynan" 
            tecnologies={["HTML", "CSS", "JS", "GSAP"]} 
            presentation="FYNAN es una plataforma enfocada en la financiación de proyectos Web3. Para su desarrollo, prioricé un diseño estructurado que presenta la información de manera clara y directa, poniendo el foco en los datos clave y en la propuesta de valor de la empresa. La navegación está pensada para guiar al usuario de forma intuitiva a través de las distintas secciones, destacando los servicios y casos de éxito. La presentación del contenido es ordenada y profesional, manteniendo una estética acorde al sector financiero. Si bien la versión actual está optimizada solo para escritorio, existe la posibilidad de expandir su adaptabilidad en futuras iteraciones."
            linkWeb="https://fynan-web.vercel.app/"
            srcImgPage="/images/fynanCompletePage.png"
        >
        </ProjectPresentation>
    );
}
