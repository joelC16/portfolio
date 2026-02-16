"use client"
import * as React from "react"

import { Card, CardContent } from "./ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {useTextAnimationFooter} from "@/hooks/useTextAnimation";

export function Testimonies() {

    const textRef = useTextAnimationFooter();

    return (
        <div id="testimonies" className="flex flex-col items-center w-full px-[7.5%] mt-[30vh] mb-[30vh] font-poppins">
            <div className="flex flex-col w-full mb-[15vh]">
                <div ref={textRef} className="flex flex-col w-full">
                    <div className="h-3 border-t border-l border-r border-[#262626] mb-2">
                        <div className="w-[25%] h-full border-r border-[#262626]"></div>
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <p className="w-[25%] font-[100]">004</p>
                        <p className="w-[50%] font-[100]">Testimonios</p>
                        <p className="w-[25%] text-end font-[100]">©2025</p>
                    </div>
                </div> {/* acá voy a poner los bordes esos */}
                <div className="flex items-center w-full justify-between">
                    <h1 ref={textRef} className="font-unbounded text-[5.5rem] leading-none my-4 max-1100:text-[4.5rem] max-800:text-[3.2rem] max-700:text-[3.5rem] max-600:text-[3rem] max-500:text-[2.2rem] max-400:text-[1.7rem]">TESTIMONIOS</h1>
                    <p ref={textRef} className="font-unbounded text-[2rem] max-700:text-[1.7rem] text-[#878787]">(1)</p>
                </div> {/* acá va el titulo grande "SELECTED WORKS" */}
                <div className="w-full">
                    <div ref={textRef} className="flex gap-5 w-full text-[1.5rem] max-1100:text-[1rem]">
                        <span className="font-poppins text-[#777]">{'//'}</span>
                        <p className="font-poppins text-[#777]">Un vistazo desde el otro lado</p>
                    </div>
                </div> {/* acá va el coso con el texto más chico */}
            </div>
            <Carousel
                opts={{
                    align: "center",
                }}
                className="w-[85%] h-auto"
            >
                <CarouselContent ref={textRef} className="">
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <div className="flex items-center justify-center p-1">
                            <Card className="flex items-center justify-center border border-[#262626]">
                                <CardContent className="flex items-center justify-center px-6 py-8 max-1100:py-6 max-1100:px-4">
                                    <div className="flex gap-3 max-1300:flex-col">
                                        <div>
                                            <Avatar className="w-12 h-12">
                                                <AvatarImage 
                                                    src="/images/perfilJaque.jpeg"
                                                    className="object-cover w-full h-full" 
                                                />
                                                <AvatarFallback>J</AvatarFallback>
                                            </Avatar>
                                        </div>
                                        <div>
                                            <h3 className="text-[1.5rem] font-unbounded max-600:text-[1.3rem]">Jaque</h3>
                                            <p className="text-[1rem] max-600:text-[0.9rem]">Trabajar con Joel fue una experiencia súper fluida. Pude enfocarme en lo creativo sabiendo que él resolvía cada parte técnica. Hubo comunicación constante, organización en cada etapa y un resultado final que me dejó muy contenta.</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>

    )
}
