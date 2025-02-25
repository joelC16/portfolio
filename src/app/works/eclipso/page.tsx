"use client"

import ProjectPresentation from "@/components/projectPresentation";

export default function Eclipso() {

    return (
        <ProjectPresentation 
            title="Eclipso" 
            tecnologies={["HTML", "CSS", "JS", "GSAP"]} 
            presentation="Eclipso es una web que combina diseño limpio, funcionalidad y una estructura bien pensada para presentar servicios digitales de manera clara y efectiva. Priorizando una navegación fluida, integré secciones estratégicas que destacan los servicios ofrecidos, proyectos exitosos y testimonios de clientes. Además, el diseño totalmente responsive garantiza una experiencia óptima en cualquier dispositivo. La sección de planes y precios facilita la conversión, mientras que la identidad visual refuerza la profesionalidad de la marca. En definitiva, un sitio moderno y dinámico."
            linkWeb="https://eclipso-web.vercel.app/"
            srcImgPage="/images/eclipsoCompletePage.png"
        >
        </ProjectPresentation>
    );
}
