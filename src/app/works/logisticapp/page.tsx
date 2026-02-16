"use client"

import ProjectPresentation from "@/components/projectPresentation";

export default function LogisticApp() {

    return (
        <ProjectPresentation 
            title="Logistic App" 
            tecnologies={["React", "Next.js", "TypeScript", "Leaflet", "Google Maps"]} 
            presentation="Aplicación de logística desarrollada para gestionar rutas y entregas de manera eficiente. La plataforma integra mapas interactivos usando Leaflet y Google Maps para visualizar rutas, ubicaciones de entrega y optimización de trayectos. El sistema permite gestionar múltiples rutas, asignar entregas, rastrear vehículos en tiempo real y generar reportes de desempeño. Con una interfaz intuitiva y funcionalidades avanzadas de geolocalización, la aplicación ayuda a optimizar operaciones logísticas, reducir tiempos de entrega y mejorar la eficiencia general del proceso de distribución."
            linkWeb="https://ruta-logistica.vercel.app/"
            srcImgPage="/images/LogisticApp.png"
        >
        </ProjectPresentation>
    );
}

