"use client"

import { useState } from "react";
import ItemProjectWork from "@/components/itemProjectWork";
import Link from "next/link";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP, Draggable);

import { IoIosArrowRoundForward } from "react-icons/io";
import { useHoverEffect, useTextAnimation } from "@/hooks/useTextAnimation";

const PROJECT_CATEGORIES = ["Todos", "Web", "Dashboard", "IA", "Automatización", "E-commerce"] as const;

const PROJECTS_DATA = [
    { title: "Fynan", srcImg: "/images/imageFynan.png", year: 2023, href: "/works/fynan", tags: ["Web"] },
    { title: "les Pères Nature", srcImg: "/images/lespesnature.png", year: 2023, href: "/works/lesperesnature", tags: ["Web"] },
    { title: "Jaque", srcImg: "/images/imageJaque.png", year: 2024, href: "/works/jaque", tags: ["Web"] },
    { title: "Fabi Mersan", srcImg: "/images/imageFabimersan.png", year: 2025, href: "/works/fabimersan", tags: ["Web"] },
    { title: "Neural Genius", srcImg: "/images/imageNeural.png", year: 2024, href: "/works/neural", tags: ["Web", "IA"] },
    { title: "Habitue", srcImg: "/images/imageHabitue.png", year: 2024, href: "/works/habitue", tags: ["Dashboard"] },
    { title: "Trackio", srcImg: "/images/imageTrackio.png", year: 2024, href: "/works/trackio", tags: ["Dashboard"] },
    { title: "Servicios Ambientales", srcImg: "/images/imageServiciosAmbientales.png", year: 2024, href: "/works/serviciosambientales", tags: ["Web"] },
    { title: "Hire System", srcImg: "/images/imageHiresystem.png", year: 2025, href: "/works/hiresystem", tags: ["Web", "IA"] },
    { title: "PDF Extractor", srcImg: "/images/imagePDFExtractor.png", year: 2025, href: "/works/pdfextractor", tags: ["Web"] },
    { title: "Distribuidora B2B", srcImg: "/images/imageDistribuidoraB2B.png", year: 2024, href: "/works/distribuidorab2b", tags: ["E-commerce", "IA"] },
    { title: "Parks Dashboard", srcImg: "/images/imageParksDashboard.png", year: 2024, href: "/works/parksdashboard", tags: ["Dashboard", "IA"] },
    { title: "Doctor Dashboard", srcImg: "/images/imageDoctorDashboard.png", year: 2024, href: "/works/doctordashboard", tags: ["Dashboard", "IA"] },
    { title: "Books Flights", srcImg: "/images/imageBooksFlights.png", year: 2024, href: "/works/booksflights", tags: ["Web", "IA"] },
    { title: "Logistic App", srcImg: "/images/imageLogisticApp.png", year: 2024, href: "/works/logisticapp", tags: ["Dashboard"] },
    { title: "Segasa", srcImg: "/images/imageSegasa.png", year: 2024, href: "/works/segasa", tags: ["Automatización"] },
    { title: "Scrapper LinkedIn", srcImg: "/images/imageHiresystem.png", year: 2024, href: "/works/scrapperlinkedin", tags: ["Automatización"] },
];

export default function Works() {

    const [activeFilter, setActiveFilter] = useState<string>("Todos");
    const textRef = useTextAnimation();
    const hoverText = useHoverEffect();

    const filteredProjects = activeFilter === "Todos" 
        ? PROJECTS_DATA 
        : PROJECTS_DATA.filter((p) => p.tags.includes(activeFilter));


    return (
        <>
            <nav className="flex justify-between items-center w-full px-[7.5%] my-2 font-poppins">
                <div ref={textRef}>
                    <Link href={"/"}>
                        <p ref={(el) => { if (el) hoverText.current.push(el); }}>
                            Joel Cordero
                            <span className="block h-[2px] bg-[#ea3c06] w-[0%] rounded-[4px]"></span>
                        </p>
                    </Link>
                </div>


                <Link href={"https://api.whatsapp.com/send?phone=5493484337681"} className="group w-[250px] p-1 transition-all ease-in-out duration-1000">
                    <div ref={textRef} className="bg-[#262626] p-1 rounded-[0.2rem] rounded-br-[1.2rem] border border-[#0f0f0f]">
                        <div className="relative w-full flex justify-between">
                            <div className="w-full flex items-center justify-center text-[1.2rem]">
                                <p className="z-10 text-[1rem]">Contáctame</p>
                                <div className="absolute left-0 w-0 h-full bg-none rounded-[0.2rem] rounded-br-[1.2rem] border border-[#262626] group-hover:w-[100%] group-hover:bg-[#ea3c06] transition-all ease-in-out duration-500"></div>
                            </div>
                            <div className="flex items-center justify-center bg-[#505050] px-3 py-2 rounded-[0.2rem] rounded-br-[1.2rem] group-hover:bg-[#262626]  transition-all ease-in-out duration-200">
                                <IoIosArrowRoundForward className="text-[2rem] z-10 fill-[#ea3c06] group-hover:fill-[#fff]  transition-all ease-in-out duration-200"></IoIosArrowRoundForward>
                            </div>
                        </div>
                    </div>
                </Link>
            </nav>
            <div id="about" className="flex flex-col w-full mb-[20vh] font-poppins h-full">
                <div className="flex flex-col w-full mt-[7.5vh] mb-[10vh] px-[7.5%]">
                    <div ref={textRef} className="flex flex-col w-full">
                        <div className="h-3 border-t border-l border-r border-[#262626] mb-2">
                            <div className="w-[25%] h-full border-r border-[#262626]"></div>
                        </div>
                        <div className="flex items-center justify-between w-full">
                            <p className="w-[25%] font-[100]">006</p>
                            <p className="w-[50%] font-[100]">Proyectos</p>
                            <p className="w-[25%] text-end font-[100]">©2025</p>
                        </div>
                    </div> {/* acá voy a poner los bordes esos */}
                    <div className="flex items-center w-full justify-between">
                        <h1 ref={textRef} className="font-unbounded text-[5.5rem] leading-none my-4 max-1100:text-[4.5rem] max-700:text-[3.5rem] max-600:text-[3rem] max-500:text-[2.4rem] max-400:text-[2rem]">PROYECTOS</h1>
                        <p ref={textRef} className="font-unbounded text-[2rem] text-[#878787]">({PROJECTS_DATA.length})</p>
                    </div>
                    <div ref={textRef} className="flex flex-wrap gap-2 mt-4">
                        {PROJECT_CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                className={`px-4 py-2 text-sm font-poppins rounded-[5rem] border transition-all duration-300 ${
                                    activeFilter === cat 
                                        ? "border-[#ea3c06] text-[#ea3c06] bg-[#ea3c0610]" 
                                        : "border-[#262626] text-[#888] hover:border-[#444] hover:text-white"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="px-[5%] max-1200:px-[12.5%] mb-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
                        {filteredProjects.map((project) => (
                            <ItemProjectWork
                                key={project.href}
                                classname="w-full border border-[#262626] rounded-[0.3rem]"
                                inlineStyles={{}}
                                title={project.title}
                                srcImg={project.srcImg}
                                year={project.year}
                                href={project.href}
                                tags={project.tags}
                            />
                        ))}
                    </div>
                </div>
            </div>

        </>


    );
}
