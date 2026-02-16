"use client"
import { useTextAnimationInicio } from "@/hooks/useTextAnimation";
import Image from "next/image";
import Link from "next/link";
import { BsArrowDown } from "react-icons/bs";

export default function Inicio() {

  const textRef = useTextAnimationInicio();

  return (
    <div id="home" className="flex justify-between flex-col gap-10 w-full h-[80vh] min-h-fit px-[7.5%] mt-[5vh] mb-[20vh] font-poppins">
      <div className="flex">
        <div className="w-full">
          <h1 ref={textRef} className="font-unbounded text-[5.5rem] leading-none max-1100:text-[4.5rem] max-700:text-[3.5rem] max-600:text-[3rem] max-500:text-[2.4rem] max-400:text-[2rem]">WEB · IA · <br /> AUTOMATIZACIÓN</h1>
          <div  ref={textRef}>
            <Image src={"/images/imagenInicio3.jpg"} width={600} height={400} alt="Desarrollo web, IA y automatización" className="w-full h-[200px] object-cover max-600:h-[350px]"></Image>
          </div>
        </div>
        <div ref={textRef} className="flex w-full">
          <div className="flex flex-col items-end justify-between w-full">
            <p className="h-[25%] font-[100] max-500:text-[0.8rem]">001</p>
            <p className="h-[50%] font-[100] max-500:text-[0.8rem]">Inicio</p>
            <p className="flex items-end h-[25%] font-[100] max-500:text-[0.8rem]">©2025</p>
          </div>
          <div className="h-[93.5%] w-3 flex border-t border-b border-r border-[#262626] mt-3 ml-1">
            <div className="h-[27%] w-3 border-b border-[#262626]"></div>
          </div>
        </div>

      </div>

      <div className="flex justify-between items-end max-900:flex-col">
        <div ref={textRef} className="relative border border-[#262626] rounded-full overflow-hidden">
          <Link href={"#about"} className="group ">
            <div className="absolute bottom-0 w-full h-0 bg-[#262626] -z-10  transition-all duration-300 ease-in-out group-hover:bg-[#ea3c06] group-hover:h-full "></div>
            <BsArrowDown className="m-5 max-1100:w-[30px] max-1100:h-[30px] max-1000:m-3 max-1000:w-[20px] max-1000:h-[20px]" size={40} />
          </Link>
        </div>

        <p ref={textRef} className="text-[1.3rem] ml-4 w-[30%] max-1200:text-[1rem] max-1000:w-[35%] max-1000:text-[0.9rem] max-900:w-[50%] max-900:mt-3 max-900:text-end max-500:w-[90%]">Construyo landing pages, dashboards con IA, automatizaciones con n8n y agentes inteligentes con LangChain. Todo desde una sola fuente.</p>
        <h1 ref={textRef} className="font-unbounded text-[5.5rem] text-end leading-none max-1100:text-[4.5rem] max-700:text-[3.5rem] max-600:text-[3rem] max-500:text-[2.4rem] max-400:text-[2rem]">JOEL <br /> CORDERO</h1>
      </div>




    </div>
  );
}
