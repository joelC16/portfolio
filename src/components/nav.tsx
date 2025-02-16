"use client";

import { useState, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(useGSAP, Draggable);


import Link from "next/link";
import { IoMenuOutline } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { SiGmail } from "react-icons/si";
import { useTextAnimationInicio, useHoverEffect } from "@/hooks/useTextAnimation";

const sections = ["home", "about", "projects", "testimonies", "contact"];

export default function Nav() {

    const textRef = useTextAnimationInicio();
    const hoverText = useHoverEffect();

    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (menuRef.current) {
            if (menuOpen) {
                gsap.to(menuRef.current, {
                    x: 0,
                    duration: 0.5,
                    ease: "power.inOut",
                });
            } else if(!menuOpen) {
                gsap.to(menuRef.current, {
                    x: 700,
                    duration: 0.5,
                    ease: "power.inOut",
                });
            }
        }
    }, [menuOpen]);

    const [activeSection, setActiveSection] = useState<string>("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSection = entries.find((entry) => entry.isIntersecting);
                if (visibleSection) {
                    setActiveSection(visibleSection.target.id);
                }
            },
            { threshold: 0.3 } // Detecta cuando el 60% de la sección está visible
        );

        sections.forEach((id) => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect(); // Cleanup cuando el componente se desmonta
    }, []);

    return (
        <nav className="flex justify-between items-center w-full px-[7.5%] my-2 font-poppins">

            <div ref={textRef} className="w-full">
                <ul className="flex items-center gap-10">
                    <li>
                        <Link href={"/"}>
                            <p ref={(el) => { if (el) hoverText.current.push(el); }}>
                                Joel Cordero
                                <span className="block h-[2px] bg-[#ea3c06] w-[0%] rounded-[4px]"></span>
                            </p>
                        </Link>
                    </li>
                    <li className="hidden md:block">
                        <Link href={"#about"}>
                            <p ref={(el) => { if (el) hoverText.current.push(el); }}>
                                About
                                <span className="block h-[2px] bg-[#ea3c06] w-[0%] rounded-[4px]"></span>
                            </p>
                        </Link>
                    </li>
                    <li className="hidden md:block">
                        <Link href={"#projects"}>
                            <p ref={(el) => { if (el) hoverText.current.push(el); }}>
                                Projects
                                <span className="block h-[2px] bg-[#ea3c06] w-[0%] rounded-[4px]"></span>
                            </p>
                        </Link>
                    </li>
                    <li className="hidden md:block">
                        <Link href={"#testimonies"}>
                            <p ref={(el) => { if (el) hoverText.current.push(el); }}>
                                Testimonies
                                <span className="block h-[2px] bg-[#ea3c06] w-[0%] rounded-[4px]"></span>
                            </p>
                        </Link>
                    </li>
                    <li className="hidden md:block">
                        <Link href={"#contact"}>
                            <p ref={(el) => { if (el) hoverText.current.push(el); }}>
                                Contact
                                <span className="block h-[2px] bg-[#ea3c06] w-[0%] rounded-[4px]"></span>
                            </p>
                        </Link>
                    </li>
                </ul>
            </div>
            <Link href={"https://api.whatsapp.com/send?phone=5493484337681"} className="hidden md:block group w-[250px] p-1 transition-all ease-in-out duration-1000">
                <div ref={textRef} className="bg-[#262626] p-1 rounded-[0.2rem] rounded-br-[1.2rem] border border-[#0f0f0f]">
                    <div className="relative w-full flex justify-between">
                        <div className="w-full flex items-center justify-center text-[1.2rem]">
                            <p className="z-10 text-[1rem]">Get in touch</p>
                            <div className="absolute left-0 w-0 h-full bg-none rounded-[0.2rem] rounded-br-[1.2rem] border border-[#262626] group-hover:w-[100%] group-hover:bg-[#ea3c06] transition-all ease-in-out duration-500"></div>
                        </div>
                        <div className="flex items-center justify-center bg-[#505050] px-3 py-2 rounded-[0.2rem] rounded-br-[1.2rem] group-hover:bg-[#262626]  transition-all ease-in-out duration-200">
                            <IoIosArrowRoundForward className="text-[2rem] z-10 fill-[#ea3c06] group-hover:fill-[#fff]  transition-all ease-in-out duration-200"></IoIosArrowRoundForward>
                        </div>
                    </div>
                </div>
            </Link>
            <button className=" md:hidden group p-1 transition-all ease-in-out duration-1000" onClick={() => setMenuOpen(!menuOpen)}>
                <div className="bg-[#262626] p-1 rounded-[0.2rem] rounded-br-[1.2rem]">
                    <div className="relative w-full flex justify-between">
                        <div className="absolute left-0 w-0 h-full bg-none rounded-[0.2rem] rounded-br-[1.2rem] group-hover:w-[100%] group-hover:bg-[#ea3c06] transition-all ease-in-out duration-500"></div>
                        <div className="flex items-center justify-center bg-[#505050] px-3 py-2 rounded-[0.2rem] rounded-br-[1.2rem] group-hover:bg-[#262626]  transition-all ease-in-out duration-200">
                            <IoMenuOutline className="text-[1.5rem] z-10 transition-all ease-in-out duration-200"></IoMenuOutline>
                        </div>
                    </div>
                </div>
            </button>

            {/* Menu mobile */}
            <div ref={menuRef} className={`fixed left-0 top-0 w-full h-screen z-50 bg-[#0c0c0c] px-[7.5%] py-3 flex flex-col gap-4 items-center transition-all duration-300 ${menuOpen ? "block" : "hidden"} md:hidden`} >
                <div className="flex items-start w-full">
                    <div className="flex flex-col w-full">
                        <div className="h-3 border-t border-l border-r border-[#262626] mb-2">
                            <div className="w-[25%] h-full border-r border-[#262626]"></div>
                        </div>
                        <div className="flex items-center justify-between w-full">
                            <p className="w-[25%] font-[100]">000</p>
                            <p className="w-[50%] font-[100]">menu</p>
                            <p className="w-[25%] text-end font-[100]">©2025</p>
                        </div>
                    </div>
                    <button className="group p-1 pt-0 ml-6 transition-all ease-in-out duration-1000" onClick={() => setMenuOpen(!menuOpen)}>
                        <div className="bg-[#262626] p-1 rounded-[0.2rem] rounded-br-[1.2rem]">
                            <div className="relative w-full flex justify-between">
                                <div className="absolute left-0 w-0 h-full bg-none rounded-[0.2rem] rounded-br-[1.2rem] group-hover:w-[100%] group-hover:bg-[#ea3c06] transition-all ease-in-out duration-500"></div>
                                <div className="flex items-center justify-center bg-[#505050] px-3 py-2 rounded-[0.2rem] rounded-br-[1.2rem] group-hover:bg-[#262626]  transition-all ease-in-out duration-200">
                                    <IoCloseOutline className="text-[1.5rem] z-10 transition-all ease-in-out duration-200"></IoCloseOutline>
                                </div>
                            </div>
                        </div>
                    </button>
                </div>
                <div className="flex flex-col h-full w-full border border-[#262626] rounded-[0.3rem]">
                    {sections.map((section) => (
                        <Link
                            key={section}
                            href={`#${section}`}
                            className="flex items-center justify-between py-5 pl-5 border-b border-[#262626]"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <div className="flex items-center gap-4">
                                <p className="text-[1rem] text-[#777]">/01</p>
                                <p ref={(el) => { if (el) hoverText.current.push(el); }} className="text-[2.5rem] font-unbounded max-600:text-[2rem] max-500:text-[1.5rem] max-400:text-[1rem]">
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                    <span className="block h-[2px] bg-[#ea3c06] w-[0%] rounded-[4px]"></span>
                                </p>
                            </div>
                            <div className={`w-2 h-2 rounded-full ${activeSection == section ? "bg-[#ea3c06]" : "bg-[#777]"}  mr-5`}></div>
                        </Link>
                    ))}

                </div>
                <div className="flex gap-1 w-full">
                    <Link href="https://api.whatsapp.com/send?phone=5493484337681" className="group relative flex items-center justify-center w-full border border-[#262626] rounded-[0.3rem] rounded-br-[1.2rem] py-6 overflow-hidden">
                        <div className="absolute left-0 w-0 h-full bg-none rounded-[0.2rem] rounded-br-[1.2rem] group-hover:w-[100%] group-hover:bg-[#ea3c06] transition-all ease-in-out duration-500"></div>
                        <FaWhatsapp size={30} className="z-10 max-600:w-[18px]" />
                    </Link>
                    <Link href="www.linkedin.com/in/joel-cordero-8998232a2" className="group relative flex items-center justify-center w-full border border-[#262626] rounded-[0.3rem] rounded-br-[1.2rem] py-6 overflow-hidden">
                        <div className="absolute left-0 w-0 h-full bg-none rounded-[0.2rem] rounded-br-[1.2rem] group-hover:w-[100%] group-hover:bg-[#ea3c06] transition-all ease-in-out duration-500"></div>
                        <CiLinkedin size={30} className="z-10 max-600:w-[18px]" />
                    </Link>
                    <Link href="mailto:joelcordero.tech@gmail.com" className="group relative flex items-center justify-center w-full border border-[#262626] rounded-[0.3rem] rounded-br-[1.2rem] py-6 overflow-hidden">
                        <div className="absolute left-0 w-0 h-full bg-none rounded-[0.2rem] rounded-br-[1.2rem] group-hover:w-[100%] group-hover:bg-[#ea3c06] transition-all ease-in-out duration-500"></div>
                        <SiGmail size={30} className="z-10 max-600:w-[22px] max-400:w-[18px]" />
                    </Link>
                </div>

            </div>


        </nav>
    );
}
