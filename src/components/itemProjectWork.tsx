"use client"

import Link from "next/link";
import Image from "next/image";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP, Draggable);

import { IoCloseOutline } from "react-icons/io5";
import { IoIosSquareOutline } from "react-icons/io";
import { RxArrowTopRight } from "react-icons/rx";
import { GoHorizontalRule } from "react-icons/go";

import { useHoverEffect, useTextAnimation } from "@/hooks/useTextAnimation";

export default function ItemProjectWork({classname, inlineStyles, title, srcImg, year, href, tags }:{
    classname:string, 
    inlineStyles: React.CSSProperties, 
    title: string, 
    srcImg: string, 
    year: number, 
    href: string,
    tags?: string[]
}) {

    const textRef = useTextAnimation();
    const hoverText = useHoverEffect();


    return (
        <div ref={textRef} className={`${classname}`} style={inlineStyles}>
            <div className="flex items-center justify-between px-2 py-2 border-b border-[#262626]">
                <div>
                    <p>{title}</p>
                </div>
                <div className="flex gap-4 items-center">
                    <GoHorizontalRule />
                    <IoIosSquareOutline />
                    <IoCloseOutline />
                </div>
            </div>
            <div className="flex flex-col justify-center p-4">
                <Image src={srcImg} alt={`${title} - Proyecto`} width={500} height={500} className="w-full"></Image>
                {tags && tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2">
                        {tags.map((tag) => (
                            <span key={tag} className="text-[0.7rem] px-2 py-0.5 border border-[#262626] rounded-[5rem] text-[#888]">{tag}</span>
                        ))}
                    </div>
                )}
                <div className="flex items-center justify-between mt-4">
                    <h1>{year}</h1>
                    <div className=" border border-[#262626] rounded-[5rem]">
                        <Link href={href} className="flex gap-2 items-center px-4 py-1">
                            <p ref={(el) => { if (el) hoverText.current.push(el); }}>
                                Más info
                                <span className="block h-[2px] bg-[#ea3c06] w-[0%] rounded-[4px]"></span>
                            </p>
                            <RxArrowTopRight />
                        </Link>
                    </div>
                </div>
            </div>
        </div>


    );
}
