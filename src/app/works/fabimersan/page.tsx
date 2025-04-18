"use client"

import ProjectPresentation from "@/components/projectPresentation";

export default function Eclipso() {

    return (
        <ProjectPresentation 
            title="Fabi Mersan" 
            tecnologies={["HTML", "CSS", "JS", "GSAP"]} 
            presentation="Este proyecto fue desarrollado para acompañar la propuesta de Fabi Mersán desde un enfoque cercano, interactivo y funcional. La web presenta un bot conversacional que guía a las usuarias a través de preguntas frecuentes relacionadas con el acompañamiento terapéutico y emocional. El diseño simple y accesible facilita la navegación y pone en primer plano la experiencia de diálogo, creando un entorno cálido y seguro. Se priorizó una estructura clara, con tiempos de respuesta ágiles y un flujo de conversación natural, que permite conectar con el público de forma empática y directa. En conjunto, una herramienta digital que complementa el universo de fabimersan.com, fortaleciendo el vínculo con su comunidad."
            linkWeb="https://fabimersanbot-production.up.railway.app/"
            srcImgPage="/images/fabimersanCompletePage.png"
        >
        </ProjectPresentation>
    );
}
