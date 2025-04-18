"use client"

import ProjectPresentation from "@/components/projectPresentation";

export default function Eclipso() {

    return (
        <ProjectPresentation 
            title="Trackio" 
            tecnologies={["Next", "Typescript", "Tailwind"]} 
            presentation="Este sitio fue desarrollado para presentar Trackio como una solución integral, intuitiva y potente para la gestión de negocios. Desde una propuesta clara y directa, la web acompaña al usuario en la exploración de todas las funcionalidades clave de la plataforma: integraciones automáticas, control de inventario en tiempo real, reportes detallados y migración simplificada entre tiendas online. El diseño limpio y funcional permite recorrer la propuesta de valor de Trackio de forma fluida, resaltando los beneficios concretos de centralizar operaciones en un solo lugar. Cada sección está pensada para responder rápidamente a las necesidades de emprendedores y empresas, con llamados a la acción que facilitan la prueba del producto y el contacto directo. En conjunto, una herramienta digital ágil que transmite eficiencia, control y crecimiento, alineada con la misión de Trackio: simplificar la gestión para que cada negocio pueda enfocarse en lo que realmente importa."
            linkWeb="https://github.com/joelC16/frontendTrackio"
            srcImgPage="/images/trackioCompletePage.png"
        >
        </ProjectPresentation>
    );
}
