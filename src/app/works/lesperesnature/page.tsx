"use client"

import ProjectPresentation from "@/components/projectPresentation";

export default function lesperesnature() {

    return (
        <ProjectPresentation 
            title="Les Pères Nature" 
            tecnologies={["HTML", "CSS", "JS", "GSAP"]} 
            presentation="El sitio web de Les Pères Nature fue diseñado para transmitir su esencia como tienda de alimentos saludables, restaurante y catering. Se priorizó una estructura clara y funcional, donde los usuarios pueden explorar fácilmente productos, recetas y servicios. El diseño destaca la filosofía de la marca: ingredientes frescos, procesos artesanales y una pasión por la calidad. Secciones como menús, promociones y canastas de regalo están organizadas para facilitar la navegación y mejorar la experiencia del usuario."
            linkWeb="https://github.com/joelC16/lesperesnature"
            srcImgPage="/images/lesperesnatureCompletePage.png"
        >
        </ProjectPresentation>
    );
}
