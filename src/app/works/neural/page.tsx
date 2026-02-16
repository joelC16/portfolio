"use client"

import ProjectPresentation from "@/components/projectPresentation";

export default function Neural() {

    return (
        <ProjectPresentation 
            title="Neural Genius" 
            tecnologies={["HTML", "CSS", "JS", "GSAP"]} 
            presentation="Esta web sobre inteligencia artificial aplicada a la productividad fue diseñada para presentar de forma clara y moderna los beneficios de Neural Genius. Se priorizó una estructura simple y ordenada, con una navegación fluida que guía al usuario por secciones clave como funciones, ventajas y casos de uso. El diseño combina una estética tecnológica con una comunicación directa, pensada para transmitir confianza e innovación. Además, la web es completamente responsive, lo que garantiza una experiencia cómoda desde cualquier dispositivo. En conjunto, un sitio funcional y atractivo que muestra el potencial de la inteligencia artificial en el trabajo diario."
            linkWeb="https://neuralgenius.ai/"
            srcImgPage="/images/neuralgeniusCompletePage.png"
        >
        </ProjectPresentation>
    );
}
