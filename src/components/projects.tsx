"use client"


import { useTextAnimationProjects } from "@/hooks/useTextAnimation";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";

export default function Projects() {

    const textRef = useTextAnimationProjects();

    return (
        <div id="projects" className="flex flex-col w-full px-[7.5%] my-[5vh] font-poppins ">
            <div className="flex flex-col w-full">
                <div ref={textRef} className="flex flex-col w-full">
                    <div className="h-3 border-t border-l border-r border-[#262626] mb-2">
                        <div className="w-[25%] h-full border-r border-[#262626]"></div>
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <p className="w-[25%] font-[100]">003</p>
                        <p className="w-[50%] font-[100]">Proyectos</p>
                        <p className="w-[25%] text-end font-[100]">©2025</p>
                    </div>
                </div> {/* acá voy a poner los bordes esos */}
                <div className="flex items-center w-full justify-between">
                    <p ref={textRef} className="font-unbounded text-[2rem] text-[#878787]">(3)</p>
                    <h1 ref={textRef} className="font-unbounded text-[5.5rem] text-end leading-none my-4 max-1100:text-[4.5rem] max-700:text-[3.5rem] max-600:text-[3rem] max-500:text-[2.4rem] max-400:text-[2rem]">PROYECTOS</h1>
                </div> {/* acá va el titulo grande "SELECTED WORKS" */}
                <div className="w-full">
                    <div ref={textRef} className="flex justify-end gap-5 w-full text-[1.5rem] max-1100:text-[1rem]">
                        <span className="font-poppins text-[#777]">{'//'}</span>
                        <p className="font-poppins text-[#777]">Contribuyo al crecimiento empresarial, llevando historias únicas al mundo</p>
                    </div>
                </div> {/* acá va el coso con el texto más chico */}
            </div>

            <div className="flex flex-col w-full mt-[5vh] border border-[#262626] rounded-[1rem]">
                <div className="flex w-full max-1000:flex-col">
                    <div ref={textRef} className="w-full h-fit border-r border-b border-[#262626] max-1000:border-r-0 hover:bg-gradient-to-b hover:from-[#0c0c0c] hover:to-[#1f1f1faf]">
                        <Link href={"/works/fynan"} className="flex flex-col gap-4 px-9 pt-9 pb-4">
                            <div>
                                <Image src={"/images/imageFynan.png"} width={500} height={500} alt="Fynan una empresa de crypto" className="w-full rounded-[1.5rem] object-cover"></Image>
                            </div>
                            <div className="flex items-center justify-between max-500:flex-col">
                                <div className="flex items-center">
                                    <Image src={"/images/plus.svg"} width={60} height={60} alt="Project"></Image>
                                    <p className="text-[1.4rem] max-600:text-[1rem]">Fynan</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="px-4 py-1 border border-[#262626] rounded-[1.5rem] font-[100] max-600:text-[1rem]">GSAP</p>
                                    <p className="px-4 py-1 border border-[#262626] rounded-[1.5rem] font-[100] max-600:text-[1rem]">JS</p>
                                    <p className="px-4 py-1 border border-[#262626] rounded-[1.5rem] font-[100] max-600:text-[1rem]">CSS</p>
                                </div>
                            </div>
                        </Link>

                    </div>
                    <div ref={textRef} className="w-full h-fit flex flex-col gap-4 border-b border-[#262626] hover:bg-gradient-to-b hover:from-[#0c0c0c] hover:to-[#1f1f1faf]">
                        <Link href={"/works/lesperesnature"} className="flex flex-col gap-4 px-9 pt-9 pb-4">
                            <div>
                                <Image src={"/images/lespesnature.png"} width={500} height={500} alt="les Pères Nature una empresa que vende alimentos saludables" className="w-full rounded-[1.5rem] object-cover"></Image>
                            </div>
                            <div className="flex items-center justify-between max-500:flex-col">
                                <div className="flex items-center">
                                    <Image src={"/images/plus.svg"} width={60} height={60} alt="Project"></Image>
                                    <p className="text-[1.4rem] max-600:text-[1rem]">les Pères Nature</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="px-4 py-1 border border-[#262626] rounded-[1.5rem] font-[100] max-600:text-[1rem]">GSAP</p>
                                    <p className="px-4 py-1 border border-[#262626] rounded-[1.5rem] font-[100] max-600:text-[1rem]">JS</p>
                                    <p className="px-4 py-1 border border-[#262626] rounded-[1.5rem] font-[100] max-600:text-[1rem]">CSS</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="flex w-full flex-wrap max-900:flex-col">
                    <div ref={textRef} className="w-[28%] h-fit flex flex-col gap-4 border-r border-[#262626] max-1000:border-r-0 max-900:w-full max-1500:w-[50%] max-1500:border-b hover:bg-gradient-to-b hover:from-[#0c0c0c] hover:to-[#1f1f1faf]">
                        <Link href={"/works/jaque"} className="flex flex-col gap-4 px-9 pt-9 pb-4">
                            <div>
                                <Image src={"/images/imageJaque.png"} width={500} height={500} alt="De las mejores diseñadoras de Argentina" className="w-full rounded-[1.5rem] object-cover"></Image>
                            </div>
                            <div className="flex flex-col justify-between max-900:flex-row max-500:flex-col">
                                <div className="flex items-center">
                                    <Image src={"/images/plus.svg"} width={60} height={60} alt="Project"></Image>
                                    <p className="text-[1.4rem] max-600:text-[1rem]">Jaque</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="px-4 py-1 border border-[#262626] rounded-[1.5rem] font-[100] max-600:text-[1rem]">GSAP</p>
                                    <p className="px-4 py-1 border border-[#262626] rounded-[1.5rem] font-[100] max-600:text-[1rem]">JS</p>
                                    <p className="px-4 py-1 border border-[#262626] rounded-[1.5rem] font-[100] max-600:text-[1rem]">CSS</p>
                                </div>
                            </div>
                        </Link>

                    </div>
                    <div ref={textRef} className="w-[28%] h-fit flex flex-col gap-4 border-r border-[#262626]  max-1500:w-[50%] max-900:w-full max-1500:border-b  max-1500:border-r-0 hover:bg-gradient-to-b hover:from-[#0c0c0c] hover:to-[#1f1f1faf]">
                        <Link href={"/works/fynan"} className="flex flex-col gap-4 px-9 pt-9 pb-4">
                            <div>
                                <Image src={"/images/imageFynan.png"} width={500} height={500} alt="Fynan una empresa de crypto" className="w-full rounded-[1.5rem] object-cover"></Image>
                            </div>
                            <div className="flex flex-col justify-between max-900:flex-row max-500:flex-col">
                                <div className="flex items-center">
                                    <Image src={"/images/plus.svg"} width={60} height={60} alt="Project"></Image>
                                    <p className="text-[1.4rem] max-600:text-[1rem]">Fynan</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="px-4 py-1 border border-[#262626] rounded-[1.5rem] font-[100] max-600:text-[1rem]">GSAP</p>
                                    <p className="px-4 py-1 border border-[#262626] rounded-[1.5rem] font-[100] max-600:text-[1rem]">JS</p>
                                    <p className="px-4 py-1 border border-[#262626] rounded-[1.5rem] font-[100] max-600:text-[1rem]">CSS</p>
                                </div>
                            </div>
                        </Link>

                    </div>
                    <div ref={textRef} className="w-[28%] h-fit flex flex-col gap-4 border-r border-[#262626] max-1000:border-r-0 max-900:w-full max-1000:border-b max-1500:w-[50%] hover:bg-gradient-to-b hover:from-[#0c0c0c] hover:to-[#1f1f1faf]">
                        <Link href={"/works/fynan"} className="flex flex-col gap-4 px-9 pt-9 pb-4">
                            <div>
                                <Image src={"/images/imageFynan.png"} width={500} height={500} alt="Fynan una empresa de crypto" className="w-full rounded-[1.5rem] object-cover"></Image>
                            </div>
                            <div className="flex flex-col justify-between max-900:flex-row max-500:flex-col">
                                <div className="flex items-center">
                                    <Image src={"/images/plus.svg"} width={60} height={60} alt="Project"></Image>
                                    <p className="text-[1.4rem] max-600:text-[1rem]">Fynan</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="px-4 py-1 border border-[#262626] rounded-[1.5rem] font-[100] max-600:text-[1rem]">GSAP</p>
                                    <p className="px-4 py-1 border border-[#262626] rounded-[1.5rem] font-[100] max-600:text-[1rem]">JS</p>
                                    <p className="px-4 py-1 border border-[#262626] rounded-[1.5rem] font-[100] max-600:text-[1rem]">CSS</p>
                                </div>
                            </div>
                        </Link>

                    </div>
                    <div ref={textRef} className="w-[16%] flex flex-col items-center justify-end max-900:w-full max-1500:w-[50%]">
                        <Link href="/works" className="group w-full p-2 transition-all ease-in-out duration-1000">
                            <div className="bg-[#262626] p-2 rounded-[0.2rem] rounded-br-[1.2rem]">
                                <div className="relative w-full flex justify-between">
                                    <div className="w-full flex items-center justify-center text-[1.2rem]">
                                        <p className="z-10 max-700:text-[1rem]">Ver más</p>
                                        <div className="absolute left-0 w-0 h-full bg-none rounded-[0.2rem] rounded-br-[1.2rem] group-hover:w-[100%] group-hover:bg-[#ea3c06] transition-all ease-in-out duration-500"></div>
                                    </div>
                                    <div className="flex items-center justify-center bg-[#505050] px-6 py-5 rounded-[0.2rem] rounded-br-[1.2rem] group-hover:bg-[#262626]  transition-all ease-in-out duration-200">
                                        <IoIosArrowRoundForward className="text-[2rem] z-10 fill-[#ea3c06] group-hover:fill-[#fff]  transition-all ease-in-out duration-200"></IoIosArrowRoundForward>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
