"use client"

import ProjectPresentation from "@/components/projectPresentation";

export default function Eclipso() {

    return (
        <ProjectPresentation 
            title="Servicios Ambientales" 
            tecnologies={["React", "Next.js", "GSAP"]} 
            presentation="Sitio web corporativo desarrollado para SSAS | Servicios Ambientales, enfocado en comunicar de manera clara y profesional sus servicios de gestión ambiental, higiene y seguridad laboral, y laboratorio. La web presenta una estructura ordenada y una navegación intuitiva que guía al usuario por secciones clave como nosotros, servicios y contacto. El diseño prioriza una estética limpia y confiable, alineada con los valores de la empresa: compromiso, transparencia, calidad y responsabilidad ambiental. Además, el sitio es completamente responsive, garantizando una experiencia fluida en dispositivos móviles, tablets y escritorio. En conjunto, se trata de una web funcional y moderna que refuerza la identidad institucional y el compromiso con un futuro sostenible."
            linkWeb="https://serviciosambientales.vercel.app/"
            srcImgPage="/images/serviciosambientalesCompletePage.png"
        >
        </ProjectPresentation>
    );
}
