"use client"

import ProjectPresentationWithGallery from "@/components/projectPresentationWithGallery";

export default function BooksFlights() {

    const galleryItems = [
        {
            src: "/images/BooksFlightsInicio.png",
            alt: "Vista inicial de Books Flights",
            description: "Página principal con búsqueda de vuelos y opciones de reserva"
        },
        {
            src: "/images/BooksFlightsBusqueda.png",
            alt: "Resultados de búsqueda de vuelos",
            description: "Interfaz de resultados con filtros avanzados y comparación de opciones"
        },
        {
            src: "/images/BooksFlightsChatAI.png",
            alt: "Asistente de IA para reservas",
            description: "Chat con inteligencia artificial para ayudar en la búsqueda y reserva de vuelos"
        }
    ];

    return (
        <ProjectPresentationWithGallery 
            title="Books Flights" 
            tecnologies={["React", "Next.js", "TypeScript", "LangChain", "AI"]} 
            presentation="Plataforma de reserva de vuelos desarrollada con Next.js que integra un asistente de IA para mejorar la experiencia del usuario. El sistema permite buscar vuelos, comparar opciones, aplicar filtros avanzados y realizar reservas de manera intuitiva. El asistente de IA ayuda a los usuarios a encontrar las mejores opciones según sus preferencias, responder preguntas sobre vuelos y facilitar el proceso de reserva. La interfaz está diseñada para ser rápida, clara y eficiente, priorizando la usabilidad y la experiencia del usuario en cada paso del proceso de reserva."
            linkWeb="#"
            galleryItems={galleryItems}
        >
        </ProjectPresentationWithGallery>
    );
}

