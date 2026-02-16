"use client"

import { useState } from "react";
import { useTextAnimationProjects } from "@/hooks/useTextAnimation";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdWeb, MdSmartToy, MdAccountTree, MdHub } from "react-icons/md";

export default function Services() {

    const [selectedService, setSelectedService] = useState<{ title: string; message: string } | null>(null);
    const textRef = useTextAnimationProjects();

    const services = [
        {
            icon: MdWeb,
            title: "Desarrollo web",
            description: "Landings, dashboards, e-commerce. Sitios limpios, funcionales y responsive.",
            message: "Hola Joel, me interesa desarrollo web (landing, dashboard o e-commerce). ¿Podemos hablar?",
        },
        {
            icon: MdAccountTree,
            title: "Automatizaciones",
            description: "n8n, integraciones, workflows. Conecto tus herramientas y automatizo procesos.",
            message: "Hola Joel, necesito automatizar procesos con n8n o integraciones. ¿Podemos conversar?",
        },
        {
            icon: MdSmartToy,
            title: "Agentes IA",
            description: "LangChain, asistentes, RAG, chatbots. Soluciones con inteligencia artificial.",
            message: "Hola Joel, me interesa implementar agentes IA o chatbots con LangChain. ¿Podemos hablar?",
        },
        {
            icon: MdHub,
            title: "Soluciones integradas",
            description: "Web + IA + automatización. Todo en uno para resolver problemas complejos.",
            message: "Hola Joel, tengo un proyecto que combina web, IA y automatización. ¿Podemos conversar?",
        },
    ];

    const whatsappUrl = (msg: string) => 
        `https://api.whatsapp.com/send?phone=5493484337681&text=${encodeURIComponent(msg)}`;

    return (
        <div id="services" className="flex flex-col w-full px-[7.5%] my-[5vh] mb-[20vh] font-poppins">
            <div className="flex flex-col w-full">
                <div ref={textRef} className="flex flex-col w-full">
                    <div className="h-3 border-t border-l border-r border-[#262626] mb-2">
                        <div className="w-[25%] h-full border-r border-[#262626]"></div>
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <p className="w-[25%] font-[100]">002.5</p>
                        <p className="w-[50%] font-[100]">Servicios</p>
                        <p className="w-[25%] text-end font-[100]">©2025</p>
                    </div>
                </div>
                <div className="flex items-center w-full justify-between">
                    <p ref={textRef} className="font-unbounded text-[2rem] text-[#878787]">(4)</p>
                    <h1 ref={textRef} className="font-unbounded text-[5.5rem] text-end leading-none my-4 max-1100:text-[4.5rem] max-700:text-[3.5rem] max-600:text-[3rem] max-500:text-[2.4rem] max-400:text-[2rem]">CÓMO PUEDO AYUDARTE</h1>
                </div>
                <div className="w-full">
                    <div ref={textRef} className="flex justify-end gap-5 w-full text-[1.5rem] max-1100:text-[1rem]">
                        <span className="font-poppins text-[#777]">{'//'}</span>
                        <p className="font-poppins text-[#777]">¿Qué tipo de proyecto necesitas? Escríbeme</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-[5vh]">
                {services.map((service, index) => (
                    <div key={index} ref={textRef}>
                    <button
                        key={index}
                        onClick={() => setSelectedService({ title: service.title, message: service.message })}
                        className="border border-[#262626] rounded-[0.3rem] p-6 hover:bg-gradient-to-b hover:from-[#0c0c0c] hover:to-[#1f1f1faf] transition-all duration-300 text-left cursor-pointer hover:border-[#444]"
                    >
                        <service.icon className="fill-[#ea3c06] text-[3rem] mb-4" />
                        <h3 className="font-unbounded text-[1.5rem] mb-2">{service.title}</h3>
                        <p className="text-[#888] font-poppins text-[1rem]">{service.description}</p>
                    </button>
                    </div>
                ))}
            </div>

            {selectedService && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setSelectedService(null)}>
                    <div 
                        className="border border-[#262626] rounded-[0.3rem] bg-[#0c0c0c] p-8 max-w-md w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-unbounded text-[1.5rem]">¿Necesitas {selectedService.title.toLowerCase()}?</h3>
                            <button onClick={() => setSelectedService(null)} className="p-2 hover:bg-[#262626] rounded transition-colors">
                                <IoClose className="text-2xl" />
                            </button>
                        </div>
                        <p className="text-[#888] font-poppins text-[0.95rem] mb-6">
                            Escríbeme por WhatsApp y conversamos. Te dejo un mensaje pre-redactado:
                        </p>
                        <div className="flex flex-col gap-3">
                            <Link
                                href={whatsappUrl(selectedService.message)}
                                className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-poppins rounded-[0.3rem] transition-colors"
                            >
                                Abrir WhatsApp
                                <IoIosArrowRoundForward />
                            </Link>
                            <Link
                                href="mailto:joelcordero.tech@gmail.com"
                                className="flex items-center justify-center gap-2 w-full py-3 px-4 border border-[#262626] hover:bg-[#262626] font-poppins rounded-[0.3rem] transition-colors"
                            >
                                Enviar email
                            </Link>
                        </div>
                    </div>
                </div>
            )}

            <div ref={textRef} className="flex justify-center mt-8">
                <Link href={"https://api.whatsapp.com/send?phone=5493484337681"} className="group w-fit p-1 transition-all ease-in-out duration-1000">
                    <div className="bg-[#262626] p-1 rounded-[0.2rem] rounded-br-[1.2rem] border border-[#0f0f0f]">
                        <div className="relative w-full flex justify-between">
                            <div className="w-full flex items-center justify-center text-[1.2rem] px-6 py-3">
                                <p className="z-10 text-[1rem]">Contáctame</p>
                                <div className="absolute left-0 w-0 h-full bg-none rounded-[0.2rem] rounded-br-[1.2rem] border border-[#262626] group-hover:w-[100%] group-hover:bg-[#ea3c06] transition-all ease-in-out duration-500"></div>
                            </div>
                            <div className="flex items-center justify-center bg-[#505050] px-4 py-3 rounded-[0.2rem] rounded-br-[1.2rem] group-hover:bg-[#262626] transition-all ease-in-out duration-200">
                                <IoIosArrowRoundForward className="text-[1.5rem] z-10 fill-[#ea3c06] group-hover:fill-[#fff] transition-all ease-in-out duration-200"></IoIosArrowRoundForward>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}
