"use client"

import Trex from "./trex";
import MusicPlayer from "./music-player";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP, Draggable);

import { IoCloseOutline } from "react-icons/io5";
import { IoIosSquareOutline } from "react-icons/io";
import { GoHorizontalRule } from "react-icons/go";
import { MdOpenInNew } from "react-icons/md";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { FaNode } from "react-icons/fa";
import { SiGreensock } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { useTextAnimation, useTextAnimationDraglabble } from "@/hooks/useTextAnimation";

export default function About() {

    const textRef = useTextAnimation();
    const boxRef = useTextAnimationDraglabble();

    return (

        <div id="about" className="flex flex-col w-full px-[7.5%] mt-[30vh] mb-[30vh] font-poppins">
            <div className="flex flex-col w-full mb-[10vh]">
                <div ref={textRef} className="flex flex-col w-full">
                    <div className="h-3 border-t border-l border-r border-[#262626] mb-2">
                        <div className="w-[25%] h-full border-r border-[#262626]"></div>
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <p className="w-[25%] font-[100]">002</p>
                        <p className="w-[50%] font-[100]">about</p>
                        <p className="w-[25%] text-end font-[100]">©2025</p>
                    </div>
                </div> {/* acá voy a poner los bordes esos */}
                <div className="flex items-center w-full justify-between">
                    <h1 ref={textRef} className="font-unbounded text-[5.5rem] leading-none my-4 max-1100:text-[4.5rem] max-700:text-[3.5rem] max-600:text-[3rem] max-500:text-[2.4rem] max-400:text-[2rem]">ABOUT ME</h1>
                    <p ref={textRef} className="font-unbounded text-[2rem] text-[#878787]">(2)</p>
                </div> {/* acá va el titulo grande "SELECTED WORKS" */}
            </div>
            <div className="container-boxes-about relative w-full h-[90vh] max-900:hidden">
                <div ref={boxRef} className="absolute top-24 left-[15%] w-96 border border-[#262626] rounded-[0.3rem] max-1000:left-[5%] max-1000:top-10">
                    <div className="flex items-center justify-between px-2 py-2 border-b border-[#262626]">
                        <div>
                            <p>About me</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <GoHorizontalRule />
                            <IoIosSquareOutline />
                            <IoCloseOutline />
                        </div>

                    </div>
                    <div className="flex items-center justify-center p-4">
                        <p>I’m a <span className="text-[#ea3c06]">web developer</span> with a passion for creating intuitive user experiences. Currently studying  <span className="text-[#ea3c06]">Systems Analysis</span> at UBA, I have hands-on experience with HTML, CSS, JavaScript, React, and <span className="text-[#ea3c06]">Next.js</span>. I'm driven by challenges and always looking to improve my skills. My goal is to build efficient websites that <span className="text-[#ea3c06]">solve real-world problems</span>.</p>
                    </div>
                </div>
                <div ref={boxRef} className="absolute top-0 left-[60%] w-min border border-[#262626] rounded-[0.3rem] max-1100:left-[70%] max-1000:top-[5%] max-1000:left-[65%]">
                    <div className="flex items-center justify-between gap-16 px-2 py-2 border-b border-[#262626]">
                        <div>
                            <p>Contact</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <GoHorizontalRule />
                            <IoIosSquareOutline />
                            <IoCloseOutline />
                        </div>

                    </div>
                    <div className="flex items-center p-4">
                        <ul className="flex flex-col gap-3">
                            <li>
                                <Link href={"https://api.whatsapp.com/send?phone=5493484337681"} className="group flex items-center gap-3">
                                    <p className="font-[100] group-hover:text-[#ea3c06] group-hover:font-[200] transition-[fill] ease-in-out duration-300">01</p>
                                    <p>Whatsapp</p>
                                    <MdOpenInNew className="fill-[#777] group-hover:fill-[#ea3c06] transition-all ease-in-out duration-300"></MdOpenInNew>
                                </Link>
                            </li>
                            <li>
                                <Link href={"www.linkedin.com/in/joel-cordero-8998232a2"} className="group flex items-center gap-3">
                                    <p className="font-[100] group-hover:text-[#ea3c06] group-hover:font-[200] transition-[fill] ease-in-out duration-300">02</p>
                                    <p>Linkedin</p>
                                    <MdOpenInNew className="fill-[#777] group-hover:fill-[#ea3c06] transition-all ease-in-out duration-300"></MdOpenInNew>
                                </Link>
                            </li>
                            <li>
                                <Link href={"https://github.com/joelC16"} className="group flex items-center gap-3">
                                    <p className="font-[100] group-hover:text-[#ea3c06] group-hover:font-[200] transition-[fill] ease-in-out duration-300">03</p>
                                    <p>Github</p>
                                    <MdOpenInNew className="fill-[#777] group-hover:fill-[#ea3c06] transition-all ease-in-out duration-300"></MdOpenInNew>
                                </Link>
                            </li>
                            <li>
                                <Link href={"mailto:joelcordero.tech@gmail.com"} className="group flex items-center gap-3">
                                    <p className="font-[100] group-hover:text-[#ea3c06] group-hover:font-[200] transition-[fill] ease-in-out duration-300">04</p>
                                    <p>Gmail</p>
                                    <MdOpenInNew className="fill-[#777] group-hover:fill-[#ea3c06] transition-all ease-in-out duration-300"></MdOpenInNew>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div ref={boxRef} className="absolute top-[58%] left-0 w-auto border border-[#262626] rounded-[0.3rem] max-1400:top-[50%] max-1000:hidden">
                    <div className="flex items-center justify-between px-2 py-2 border-b border-[#262626]">
                        <div>
                            <p>T-Chess game - I like playing chess</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <GoHorizontalRule />
                            <IoIosSquareOutline />
                            <IoCloseOutline />
                        </div>

                    </div>
                    <div className="flex items-center justify-center">
                        <Trex></Trex>
                    </div>
                </div>
                <div ref={boxRef} className="absolute top-[45%] left-[80%] w-auto border border-[#262626] rounded-[0.3rem] max-1400:top-[38%] max-1000:left-[65%] max-1000:top-[43%]">
                    <div className="flex items-center justify-between px-2 py-2 border-b border-[#262626]">
                        <div>
                            <p>Tools</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <GoHorizontalRule />
                            <IoIosSquareOutline />
                            <IoCloseOutline />
                        </div>

                    </div>
                    <div className="w-full flex items-center justify-center p-2">
                        <div className="w-full grid grid-cols-4 gap-4 px-3 py-2 max-1700:grid-cols-3">
                            <div className="relative group">
                                <FaHtml5 className="fill-white text-[4rem] p-3 cursor-default hover:fill-[#ea3c06] transition-all ease-in-out duration-300 max-1200:text-[3rem]" />
                                <span className="absolute bottom-full left-1/2 transform -translate-x-[45%] bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    HTML
                                </span>
                            </div>
                            <div className="relative group">
                                <FaCss3 className="fill-white text-[4rem] p-3 cursor-default hover:fill-[#ea3c06] transition-all ease-in-out duration-300 max-1200:text-[3rem]" />
                                <span className="absolute bottom-full left-1/2 transform -translate-x-[45%] bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    CSS
                                </span>
                            </div>
                            <div className="relative group">
                                <FaJsSquare className="fill-white text-[4rem] p-3 cursor-default hover:fill-[#ea3c06] transition-all ease-in-out duration-300 max-1200:text-[3rem]" />
                                <span className="absolute bottom-full left-1/2 transform -translate-x-[45%] bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    JavaScript
                                </span>
                            </div>
                            <div className="relative group">
                                <BiLogoTypescript className="fill-white text-[4rem] p-3 cursor-default hover:fill-[#ea3c06] transition-all ease-in-out duration-300 max-1200:text-[3rem]" />
                                <span className="absolute bottom-full left-1/2 transform -translate-x-[45%] bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    TypeScript
                                </span>
                            </div>
                            <div className="relative group">
                                <FaNode className="fill-white text-[4rem] p-3 cursor-default hover:fill-[#ea3c06] transition-all ease-in-out duration-300 max-1200:text-[3rem]" />
                                <span className="absolute bottom-full left-1/2 transform -translate-x-[45%] bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Node
                                </span>
                            </div>
                            <div className="relative group">
                                <SiGreensock className="fill-white text-[4rem] p-3 cursor-default hover:fill-[#ea3c06] transition-all ease-in-out duration-300 max-1200:text-[3rem]" />
                                <span className="absolute bottom-full left-1/2 transform -translate-x-[45%] bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    GSAP
                                </span>
                            </div>
                            <div className="relative group">
                                <FaReact className="fill-white text-[4rem] p-3 cursor-default hover:fill-[#ea3c06] transition-all ease-in-out duration-300 max-1200:text-[3rem]" />
                                <span className="absolute bottom-full left-1/2 transform -translate-x-[45%] bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    React
                                </span>
                            </div>
                            <div className="relative group">
                                <RiNextjsFill className="fill-white text-[4rem] p-3 cursor-default hover:fill-[#ea3c06] transition-all ease-in-out duration-300 max-1200:text-[3rem]" />
                                <span className="absolute bottom-full left-1/2 transform -translate-x-[45%] bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    NextJS
                                </span>
                            </div>

                            {/* Agrega más elementos según necesites */}
                        </div>
                    </div>
                </div>
                <div ref={boxRef} className="absolute top-[50%] left-[50%] w-auto border border-[#262626] rounded-[0.3rem] max-1800:left-[45%] max-1300:left-[45%] max-1200:left-[45%] max-1100:left-[48%] max-1000:left-[15%] max-1000:top-[40%]">
                    <div className="flex items-center justify-between px-2 py-2 border-b border-[#262626]">
                        <div>
                            <p>I love music</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <GoHorizontalRule />
                            <IoIosSquareOutline />
                            <IoCloseOutline />
                        </div>

                    </div>
                    <div className="flex items-center justify-center p-2">
                        <MusicPlayer></MusicPlayer>
                    </div>
                </div>
            </div>

            <div className="hidden max-900:flex items-center justify-center gap-9 flex-wrap w-full min-h-[70vh]">
                <div className=" w-96 border border-[#262626] rounded-[0.3rem] max-600:w-full">
                    <div className="flex items-center justify-between px-2 py-2 border-b border-[#262626]">
                        <div>
                            <p>About me</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <GoHorizontalRule />
                            <IoIosSquareOutline />
                            <IoCloseOutline />
                        </div>

                    </div>
                    <div className="flex items-center justify-center p-4">
                        <p>I’m a <span className="text-[#ea3c06]">web developer</span> with a passion for creating intuitive user experiences. Currently studying  <span className="text-[#ea3c06]">Systems Analysis</span> at UBA, I have hands-on experience with HTML, CSS, JavaScript, React, and <span className="text-[#ea3c06]">Next.js</span>. I'm driven by challenges and always looking to improve my skills. My goal is to build efficient websites that <span className="text-[#ea3c06]">solve real-world problems</span>.</p>
                    </div>
                </div>
                <div className=" w-min border border-[#262626] rounded-[0.3rem] max-600:w-full">
                    <div className="flex items-center justify-between gap-16 px-2 py-2 border-b border-[#262626]">
                        <div>
                            <p>Contact</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <GoHorizontalRule />
                            <IoIosSquareOutline />
                            <IoCloseOutline />
                        </div>

                    </div>
                    <div className="flex items-center p-4">
                        <ul className="flex flex-col gap-3">
                            <li>
                                <Link href={""} className="group flex items-center gap-3">
                                    <p className="font-[100] group-hover:text-[#ea3c06] group-hover:font-[200] transition-[fill] ease-in-out duration-300">01</p>
                                    <p>Whatsapp</p>
                                    <MdOpenInNew className="fill-[#777] group-hover:fill-[#ea3c06] transition-all ease-in-out duration-300"></MdOpenInNew>
                                </Link>
                            </li>
                            <li>
                                <Link href={"www.linkedin.com/in/joel-cordero-8998232a2"} className="group flex items-center gap-3">
                                    <p className="font-[100] group-hover:text-[#ea3c06] group-hover:font-[200] transition-[fill] ease-in-out duration-300">02</p>
                                    <p>Linkedin</p>
                                    <MdOpenInNew className="fill-[#777] group-hover:fill-[#ea3c06] transition-all ease-in-out duration-300"></MdOpenInNew>
                                </Link>
                            </li>
                            <li>
                                <Link href={""} className="group flex items-center gap-3">
                                    <p className="font-[100] group-hover:text-[#ea3c06] group-hover:font-[200] transition-[fill] ease-in-out duration-300">03</p>
                                    <p>Github</p>
                                    <MdOpenInNew className="fill-[#777] group-hover:fill-[#ea3c06] transition-all ease-in-out duration-300"></MdOpenInNew>
                                </Link>
                            </li>
                            <li>
                                <Link href={""} className="group flex items-center gap-3">
                                    <p className="font-[100] group-hover:text-[#ea3c06] group-hover:font-[200] transition-[fill] ease-in-out duration-300">04</p>
                                    <p>Gmail</p>
                                    <MdOpenInNew className="fill-[#777] group-hover:fill-[#ea3c06] transition-all ease-in-out duration-300"></MdOpenInNew>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className=" w-auto border border-[#262626] rounded-[0.3rem] max-600:w-full">
                    <div className="flex items-center justify-between px-2 py-2 border-b border-[#262626]">
                        <div>
                            <p>Tools</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <GoHorizontalRule />
                            <IoIosSquareOutline />
                            <IoCloseOutline />
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-center p-2">
                        <div className="w-full grid items-center justify-center grid-cols-4 gap-4 px-3 py-2 max-1700:grid-cols-3">
                            <div className="relative group flex items-center justify-center">
                                <FaHtml5 className="fill-white text-[4rem] p-3 cursor-default hover:fill-[#ea3c06] transition-all ease-in-out duration-300 max-1200:text-[3rem] max-600:text-[3.8rem]" />
                                <span className="absolute bottom-full left-1/2 transform -translate-x-[45%] bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    HTML
                                </span>
                            </div>
                            <div className="relative group flex items-center justify-center">
                                <FaCss3 className="fill-white text-[4rem] p-3 cursor-default hover:fill-[#ea3c06] transition-all ease-in-out duration-300 max-1200:text-[3rem] max-600:text-[3.8rem]" />
                                <span className="absolute bottom-full left-1/2 transform -translate-x-[45%] bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    CSS
                                </span>
                            </div>
                            <div className="relative group flex items-center justify-center">
                                <FaJsSquare className="fill-white text-[4rem] p-3 cursor-default hover:fill-[#ea3c06] transition-all ease-in-out duration-300 max-1200:text-[3rem] max-600:text-[3.8rem]" />
                                <span className="absolute bottom-full left-1/2 transform -translate-x-[45%] bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    JavaScript
                                </span>
                            </div>
                            <div className="relative group flex items-center justify-center">
                                <BiLogoTypescript className="fill-white text-[4rem] p-3 cursor-default hover:fill-[#ea3c06] transition-all ease-in-out duration-300 max-1200:text-[3rem] max-600:text-[3.8rem]" />
                                <span className="absolute bottom-full left-1/2 transform -translate-x-[45%] bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    TypeScript
                                </span>
                            </div>
                            <div className="relative group flex items-center justify-center">
                                <FaNode className="fill-white text-[4rem] p-3 cursor-default hover:fill-[#ea3c06] transition-all ease-in-out duration-300 max-1200:text-[3rem] max-600:text-[3.8rem]" />
                                <span className="absolute bottom-full left-1/2 transform -translate-x-[45%] bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Node
                                </span>
                            </div>
                            <div className="relative group flex items-center justify-center">
                                <SiGreensock className="fill-white text-[4rem] p-3 cursor-default hover:fill-[#ea3c06] transition-all ease-in-out duration-300 max-1200:text-[3rem] max-600:text-[3.8rem]" />
                                <span className="absolute bottom-full left-1/2 transform -translate-x-[45%] bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    GSAP
                                </span>
                            </div>
                            <div className="relative group flex items-center justify-center">
                                <FaReact className="fill-white text-[4rem] p-3 cursor-default hover:fill-[#ea3c06] transition-all ease-in-out duration-300 max-1200:text-[3rem] max-600:text-[3.8rem]" />
                                <span className="absolute bottom-full left-1/2 transform -translate-x-[45%] bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    React
                                </span>
                            </div>
                            <div className="relative group flex items-center justify-center">
                                <RiNextjsFill className="fill-white text-[4rem] p-3 cursor-default hover:fill-[#ea3c06] transition-all ease-in-out duration-300 max-1200:text-[3rem] max-600:text-[3.8rem]" />
                                <span className="absolute bottom-full left-1/2 transform -translate-x-[45%] bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    NextJS
                                </span>
                            </div>

                            {/* Agrega más elementos según necesites */}
                        </div>
                    </div>
                </div>
                <div className="w-auto border border-[#262626] rounded-[0.3rem] top-0 max-600:w-full">
                    <div className="flex items-center justify-between px-2 py-2 border-b border-[#262626]">
                        <div>
                            <p>I love music</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <GoHorizontalRule />
                            <IoIosSquareOutline />
                            <IoCloseOutline />
                        </div>

                    </div>
                    <div className="flex items-center justify-center p-2">
                        <MusicPlayer></MusicPlayer>
                    </div>
                </div>
            </div>

        </div>
    );
}
