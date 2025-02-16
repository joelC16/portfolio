"use client"

import { useEffect, useState } from "react";

import Nav from "@/components/nav";
import Inicio from "@/components/inicio";
import About from "@/components/about";
import Projects from "@/components/projects";
import { Testimonies } from '@/components/testimonies';
import Footer from "@/components/footer";




export default function Home() {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Evitar renderizar la imagen en el servidor
  }

  // Hace que cuando se aprete el espacio no se haga scroll, es para que funcione el trex
  useEffect(() => {
    const handleKeyDown = (event: { code: string; preventDefault: () => void; }) => {
      if (event.code === 'Space') {
        event.preventDefault();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  return (
    <div className="w-full">
      <Nav />
      <Inicio />
      <About></About>
      <Projects />
      <Testimonies></Testimonies>

      <div className="relative h-auto overflow-hidden">
        {/* Fondo oscuro superpuesto */}
        <div className="absolute inset-0 bg-[#000000d8] -z-40"></div>

        {/* Contenedor del video */}
        <div className="absolute inset-0 -z-50">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          >
            <source src="/images/fondoFooter.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <Footer />
      </div>
    </div>
  );
}
