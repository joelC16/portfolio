"use client"

import ProjectPresentation from "@/components/projectPresentation";

export default function Eclipso() {

    return (
        <ProjectPresentation 
            title="Habitue" 
            tecnologies={["Next", "Tsx", "GSAP"]} 
            presentation="Este dashboard fue diseñado para facilitar la gestión integral de reservas de vuelos, hoteles y pasajeros desde una interfaz clara, ordenada y fácil de usar. La plataforma permite visualizar el estado de reservas en tiempo real, administrar datos de pasajeros, cargar documentos y realizar búsquedas eficientes de hoteles y vuelos. Cada sección está pensada para optimizar el flujo de trabajo, con etiquetas de estado, filtros intuitivos y una estructura modular. El diseño responsive y la experiencia de usuario centrada en la simplicidad hacen que sea una herramienta práctica tanto para agentes de viaje como para usuarios administrativos. En conjunto, un sistema completo para centralizar y agilizar procesos de gestión turística."
            linkWeb="https://github.com/joelC16/Dashboard"
            srcImgPage="/images/habitueCompletePage.png"
        >
        </ProjectPresentation>
    );
}
