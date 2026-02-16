"use client"

import { useHoverEffect, useTextAnimationInicio } from "@/hooks/useTextAnimation";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import { RxArrowTopRight } from "react-icons/rx";

interface GalleryItem {
    src: string;
    alt: string;
    description?: string;
}

export default function ProjectPresentationWithGallery({
    title, 
    tecnologies, 
    presentation, 
    linkWeb, 
    galleryItems
}: {
    title: string, 
    tecnologies: Array<string>, 
    presentation: string, 
    linkWeb: string, 
    galleryItems: GalleryItem[]
}) {

    const textRef = useTextAnimationInicio();
    const hoverText = useHoverEffect();

    return (
        <div className="w-full">
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
            <div className="my-[7.5vh] max-800:flex max-800:flex-col">
                <div className="fixed flex flex-col gap-5 px-[7.5%] my-2 font-poppins max-800:w-full max-800:static">
                    <h1 ref={textRef} className="w-[50%] font-unbounded text-[4rem] leading-none max-1000:text-[3.5rem] max-800:w-full">{title}</h1>
                    <div className="flex gap-2 flex-wrap">
                        {tecnologies.map((tec, index) => (
                            <div key={index} ref={textRef} className="w-fit flex items-center justify-center text-[1rem] text-white px-5 py-1 border border-[#262626] rounded-[5rem]">
                                <p className="font-poppins text-[#888]">{tec}</p>
                            </div>
                        ))}
                    </div>
                    <p ref={textRef} className="w-[45%] font-poppins max-1000:text-[0.9rem] max-1000:w-[50%] max-800:w-[80%] max-800:text-[1rem] max-500:text-[0.9rem] max-500:w-[90%]">{presentation}</p>
                    <div ref={textRef} className="flex flex-col gap-3">
                        <Link href={linkWeb} className="flex gap-2 items-center">
                            <p ref={(el) => { if (el) hoverText.current.push(el); }}>
                                Ir a la web
                                <span className="block h-[2px] bg-[#ea3c06] w-[0%] rounded-[4px]"></span>
                            </p>
                            <RxArrowTopRight />
                        </Link>
                        <Link href={"https://api.whatsapp.com/send?phone=5493484337681"} className="flex gap-2 items-center text-[#888] hover:text-[#ea3c06] transition-colors">
                            <p ref={(el) => { if (el) hoverText.current.push(el); }}>
                                ¿Quieres algo similar? Contáctame
                                <span className="block h-[2px] bg-[#ea3c06] w-[0%] rounded-[4px]"></span>
                            </p>
                        </Link>
                    </div>

                </div>
                <div ref={textRef} className="ml-auto w-1/2 h-full flex flex-col gap-8 items-center px-[7.5%] my-2 font-poppins max-800:w-full max-800:mt-8">
                    {galleryItems.map((item, index) => (
                        <div key={index} className="w-full flex flex-col gap-4">
                            <Image 
                                src={item.src} 
                                width={500} 
                                height={400} 
                                alt={item.alt} 
                                className="w-full rounded-[1rem]"
                            />
                            {item.description && (
                                <p className="text-[#888] text-sm font-poppins px-2">{item.description}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

