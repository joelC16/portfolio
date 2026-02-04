"use client"

import ProjectPresentation from "@/components/projectPresentation";

export default function Eclipso() {

    return (
        <ProjectPresentation 
            title="PDF Extractor" 
            tecnologies={["HTML", "CSS", "JS", "GSAP", "Next.js", "React"]} 
            presentation="Aplicación web desarrollada para cargar, visualizar y extraer información clave desde archivos PDF, pensada para optimizar flujos de trabajo que requieren procesar documentos de forma rápida y precisa. La interfaz permite subir archivos mediante drag & drop o selección manual, previsualizar el PDF y elegir distintos tipos de extracción, como texto completo, direcciones, teléfonos o emails. El proyecto combina una experiencia de usuario clara y moderna con una lógica robusta de procesamiento de datos en el cliente. Además, incluye una sección de visualización estructurada de datos (Data View), simulando escenarios reales como registros de pacientes o servicios, con acciones rápidas para copiar, editar o eliminar información. Todo el sistema es completamente responsive y enfocado en productividad."
            linkWeb="https://github.com/joelC16"
            srcImgPage="/images/imagePDFExtractorCompletePage.png"
        >
        </ProjectPresentation>
    );
}
