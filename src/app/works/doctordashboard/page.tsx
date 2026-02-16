"use client"

import ProjectPresentationWithGallery from "@/components/projectPresentationWithGallery";

export default function DoctorDashboard() {

    const galleryItems = [
        {
            src: "/images/DoctorDashboardInicio.png",
            alt: "Vista inicial del dashboard médico",
            description: "Panel principal del dashboard con resumen de pacientes y actividades del día"
        },
        {
            src: "/images/DoctorDashboardPacientes.png",
            alt: "Gestión de pacientes",
            description: "Interfaz para gestionar información de pacientes, historiales y datos médicos"
        },
        {
            src: "/images/DoctorDashboardSesiones.png",
            alt: "Gestión de sesiones",
            description: "Sistema para programar y gestionar sesiones con pacientes"
        },
        {
            src: "/images/DoctorDashboardGrabaciones.png",
            alt: "Grabaciones de sesiones",
            description: "Repositorio de grabaciones de sesiones con transcripciones y análisis"
        },
        {
            src: "/images/DoctorDashboardHistorial.png",
            alt: "Historial médico",
            description: "Vista completa del historial médico del paciente con todas las sesiones y notas"
        },
        {
            src: "/images/DoctorDashboardMedicaciones.png",
            alt: "Gestión de medicaciones",
            description: "Sistema para registrar y gestionar medicaciones prescritas a pacientes"
        },
        {
            src: "/images/DoctorDashboardMetricas.png",
            alt: "Métricas y analíticas",
            description: "Dashboard de métricas con estadísticas de pacientes, sesiones y rendimiento"
        },
        {
            src: "/images/DoctorDashboardChatAI.png",
            alt: "Asistente de IA para doctores",
            description: "Chat con inteligencia artificial para asistencia médica y análisis de datos"
        }
    ];

    return (
        <ProjectPresentationWithGallery 
            title="Doctor Dashboard" 
            tecnologies={["React", "Next.js", "TypeScript", "Prisma", "LangChain", "AI"]} 
            presentation="Plataforma completa de gestión médica desarrollada para profesionales de la salud. El sistema incluye gestión de pacientes, programación de sesiones, almacenamiento de grabaciones con transcripciones automáticas, historial médico completo, gestión de medicaciones y un asistente de IA integrado. La plataforma utiliza inteligencia artificial para analizar sesiones, generar insights y asistir en la toma de decisiones clínicas. Con una interfaz intuitiva y segura, permite a los profesionales gestionar eficientemente su práctica médica, mantener registros detallados y acceder a análisis avanzados de datos de pacientes."
            linkWeb="https://doctor-dashboard-neural-production.up.railway.app/dashboard"
            galleryItems={galleryItems}
        >
        </ProjectPresentationWithGallery>
    );
}

