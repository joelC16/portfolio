"use client"

import ProjectPresentationWithGallery from "@/components/projectPresentationWithGallery";

export default function DistribuidoraB2B() {

    const galleryItems = [
        {
            src: "/images/ClienteInicio.png",
            alt: "Vista inicial del cliente en Distribuidora B2B",
            description: "Página de inicio del cliente con catálogo de productos y navegación intuitiva"
        },
        {
            src: "/images/ClienteProducto.png",
            alt: "Detalle de producto para cliente",
            description: "Vista detallada de productos con información completa y opciones de compra"
        },
        {
            src: "/images/ClienteCarrito.png",
            alt: "Carrito de compras del cliente",
            description: "Sistema de carrito de compras con gestión de productos y checkout"
        },
        {
            src: "/images/adminDashboard.png",
            alt: "Dashboard administrativo",
            description: "Panel de control principal para administradores con métricas y resumen general"
        },
        {
            src: "/images/AdminProductos.png",
            alt: "Gestión de productos",
            description: "Interfaz de administración para gestionar productos, inventario y categorías"
        },
        {
            src: "/images/AdminMetricas.png",
            alt: "Métricas y analíticas",
            description: "Dashboard de métricas con gráficos y estadísticas de ventas y rendimiento"
        },
        {
            src: "/images/AdminAsistenteIA.png",
            alt: "Asistente de IA para administradores",
            description: "Asistente inteligente con IA para ayudar en la gestión y toma de decisiones"
        }
    ];

    return (
        <ProjectPresentationWithGallery 
            title="Distribuidora B2B" 
            tecnologies={["React", "Next.js", "TypeScript", "Tailwind", "AI"]} 
            presentation="Plataforma de e-commerce B2B completa desarrollada para distribuidoras, con dos interfaces principales: una para clientes con catálogo de productos, carrito de compras y proceso de checkout, y otra para administradores con dashboard completo, gestión de productos, métricas avanzadas y un asistente de IA integrado. El sistema permite gestionar inventario, categorías, pedidos y analizar el rendimiento del negocio. La arquitectura está diseñada para escalar y manejar grandes volúmenes de transacciones, con una experiencia de usuario optimizada tanto para compradores como para administradores."
            linkWeb="https://b2becommerce-project.vercel.app/login"
            galleryItems={galleryItems}
        >
        </ProjectPresentationWithGallery>
    );
}

