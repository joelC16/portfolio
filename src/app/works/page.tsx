"use client"


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

export default function Works() {

    const textRef = useTextAnimation();
    const hoverText = useHoverEffect();


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
                        <p ref={textRef} className="font-unbounded text-[2rem] text-[#878787]">(6)</p>
                    </div> {/* acá va el titulo grande "SELECTED WORKS" */}
                </div>
                <div className="px-[5%] max-1200:px-[12.5%] h-[180vh] mb-20">
                    <div className="flex flex-col pb-20 gap-16 container-boxes-about relative w-full h-auto min-h-[1400px] max-1200:h-auto">
                        <ItemProjectWork
                            classname="absolute top-16 w-[500px] border border-[#262626] rounded-[0.3rem] max-1500:w-[400px] max-1200:static max-1200:w-full"
                            inlineStyles={{ left: "calc(20% - 200px)" }}
                            title="Fynan"
                            srcImg="/images/imageFynan.png"
                            year={2023}
                            href="/works/fynan"
                        ></ItemProjectWork>


                        <ItemProjectWork
                            classname="absolute top-5 w-[500px] border border-[#262626] rounded-[0.3rem] max-1500:w-[400px] max-1200:static max-1200:w-full"
                            inlineStyles={{ left: "calc(80% - 200px)" }}
                            title="les Pères Nature"
                            srcImg="/images/lespesnature.png"
                            year={2023}
                            href="/works/lesperesnature"
                        ></ItemProjectWork>


                        <ItemProjectWork
                            classname="absolute top-[600px] w-[500px] border border-[#262626] rounded-[0.3rem] max-1500:w-[400px] max-1200:static max-1200:w-full"
                            inlineStyles={{ left: "calc(30% - 200px)" }}
                            title="Jaque"
                            srcImg="/images/imageJaque.png"
                            year={2024}
                            href="/works/jaque"
                        ></ItemProjectWork>


                        <ItemProjectWork
                            classname="absolute top-[480px] w-[500px] border border-[#262626] rounded-[0.3rem] max-1500:w-[400px] max-1200:static max-1200:w-full"
                            inlineStyles={{ left: "calc(70% - 200px)" }}
                            title="Fabi Mersan"
                            srcImg="/images/imageFabimersan.png"
                            year={2025}
                            href="/works/fabimersan"
                        ></ItemProjectWork>


                        <ItemProjectWork
                            classname="absolute top-[920px] left-[70%] w-[500px] border border-[#262626] rounded-[0.3rem] max-1500:w-[400px] max-1200:static max-1200:w-full"
                            inlineStyles={{ left: "calc(80% - 200px)" }}
                            title="Neural Genius"
                            srcImg="/images/imageNeural.png"
                            year={2024}
                            href="/works/neural"
                        ></ItemProjectWork>

                        <ItemProjectWork
                            classname="absolute top-[1050px] left-[20%] w-[500px] border border-[#262626] rounded-[0.3rem] max-1500:w-[400px] max-1200:static max-1200:w-full"
                            inlineStyles={{ left: "calc(20% - 200px)" }}
                            title="Habitue"
                            srcImg="/images/imageHabitue.png"
                            year={2024}
                            href="/works/habitue"
                        ></ItemProjectWork>

                        <ItemProjectWork
                            classname="absolute top-[1400px] left-[60%] w-[500px] border border-[#262626] rounded-[0.3rem] max-1500:w-[400px] max-1200:static max-1200:w-full"
                            inlineStyles={{ left: "calc(60% - 200px)" }}
                            title="Trackio"
                            srcImg="/images/imageTrackio.png"
                            year={2024}
                            href="/works/trackio"
                        ></ItemProjectWork>








                    </div>
                </div>
            </div>

        </>


    );
}
