import { useHoverEffect, useTextAnimationFooter } from "@/hooks/useTextAnimation";
import Image from "next/image";
import Link from "next/link";

import { IoIosArrowRoundForward } from "react-icons/io";
import { IoArrowUp } from "react-icons/io5";

export default function Footer() {

  const textRef = useTextAnimationFooter();
  const hoverText = useHoverEffect();


  return (
    <div id="contact" className="flex flex-col w-full px-[7.5%] mb-[2.5vh] mt-[10vh] font-poppins font-[500]">
      <div className="flex flex-col w-full">
        <div className="flex flex-col w-[40%] mb-20 max-1000:w-[60%] max-700:w-[80%] max-500:w-[90%]">
          <div className="flex items-center gap-4">
            <div ref={textRef} className="w-5 h-5 rounded-full bg-white"></div>
            <p ref={textRef} className="text-[1.5rem] font-poppins leading-tight max-1200:text-[1.2rem] max-700:text-[1rem]">
              Ready to elevate your brand?
            </p>
          </div>
          <p ref={textRef} className="text-[1.5rem] text-[#777] leading-tight max-1200:text-[1.2rem] max-700:text-[1rem]">
            Drop a message, and let’s start building something amazing
            together.
          </p>
        </div>
        <div className="w-full flex flex-col items-end justify-center">
          <p ref={textRef} className="font-unbounded text-[5.5rem] leading-none max-1100:text-[4.5rem] max-700:text-[3.5rem] max-600:text-[3rem] max-500:text-[2.4rem] max-400:text-[2rem]">
            LETS BRING
          </p>
          <p ref={textRef} className="font-unbounded text-[5.5rem] leading-none max-1100:text-[4.5rem] max-700:text-[3.5rem] max-600:text-[3rem] max-500:text-[2.4rem] max-400:text-[2rem]">
            YOUR IDEAS
          </p>
          <div ref={textRef} className="flex min-w-[45%]">
            <Link href={"https://api.whatsapp.com/send?phone=5493484337681"} className="group w-full p-1 transition-all ease-in-out duration-1000 mr-3">
              <div className="bg-[#262626] p-1 rounded-[0.2rem] rounded-br-[1.2rem] border border-[#0f0f0f]">
                <div className="relative w-full flex justify-between">
                  <div className="w-full px-5 flex items-center justify-center text-[1.2rem] max-700:px-3 max-500:px-1">
                    <p className="z-10 text-[1rem] max-700:text-[0.9rem] w-full">Get in touch</p>
                    <div className="absolute left-0 w-0 h-full bg-none rounded-[0.2rem] rounded-br-[1.2rem] border border-[#262626] group-hover:w-[100%] group-hover:bg-[#ea3c06] transition-all ease-in-out duration-500"></div>
                  </div>
                  <div className="flex items-center justify-center bg-[#505050] px-6 py-5 rounded-[0.2rem] rounded-br-[1.2rem] group-hover:bg-[#262626]  transition-all ease-in-out duration-200 max-1100:py-3 max-700:py-1 max-700:px-2">
                    <IoIosArrowRoundForward className="text-[2rem] z-10 fill-[#ea3c06] group-hover:fill-[#fff]  transition-all ease-in-out duration-200"></IoIosArrowRoundForward>
                  </div>
                </div>
              </div>
            </Link>
            <p ref={textRef} className="w-full font-unbounded text-[5.5rem] leading-none text-nowrap max-1100:text-[4.5rem] max-700:text-[3.5rem] max-600:text-[3rem] max-500:text-[2.4rem] max-400:text-[2rem]">
              TO LIFE
            </p>
          </div>
        </div>
      </div>

      <div className="mt-2">
        <div className="flex">
          <div ref={textRef} className="flex flex-col w-full">
            <div className="flex h-3 border-t border-l border-[#262626] mb-2">
              <div className="w-[37%] h-full border-r border-[#262626]"></div>
              <div className="w-[37.5%] h-full border-r border-[#262626]"></div>
            </div>
            <div className="flex items-center justify-between w-full">
              <p className="w-[25%] font-[100] max-500:text-[0.9rem]">005</p>
              <p className="w-[25%] font-[100] max-500:text-[0.9rem]">Contact</p>
              <p className="w-[25%] font-[100] max-500:text-[0.9rem]">©2025</p>
            </div>
            <div className="flex items-end pb-5 mt-auto border-b border-[#262626]">
              <div className="w-[37%]">
                <Image
                  src={"/images/plus.svg"}
                  width={50}
                  height={50}
                  alt="Contact"
                  className="relative left-[-15] bottom-[-12] max-800:mb-4"
                ></Image>
                <Link href={"mailto:joelcordero.tech@gmail.com"} className="max-1000:text-[0.8rem]">
                  <p ref={(el) => { if (el) hoverText.current.push(el); }} className="w-fit">
                    joelcordero.tech@gmail.com
                    <span className="block h-[2px] bg-[#ea3c06] w-[0%] rounded-[4px]"></span>
                  </p>
                </Link>
                <Link href={"https://api.whatsapp.com/send?phone=5493484337681"} className="hidden max-1000:text-[0.8rem] max-800:block max-800:my-4">
                  <p ref={(el) => { if (el) hoverText.current.push(el); }} className="w-fit">
                    +5493484337681
                    <span className="block h-[2px] bg-[#ea3c06] w-[0%] rounded-[4px]"></span>
                  </p>
                </Link>
                <Link href={"/"} className="hidden max-1000:text-[0.8rem] max-800:block">
                  <p ref={(el) => { if (el) hoverText.current.push(el); }} className="w-fit">
                    Linkedin
                    <span className="block h-[2px] bg-[#ea3c06] w-[0%] rounded-[4px]"></span>
                  </p>
                </Link>
              </div>
              <div className="w-[38%] max-800:hidden">
                <Image
                  src={"/images/plus.svg"}
                  width={50}
                  height={50}
                  alt="Contact"
                  className="relative left-[-15] bottom-[-12]"
                ></Image>
                <Link href={"https://api.whatsapp.com/send?phone=5493484337681"} className="max-1000:text-[0.8rem]">
                  <p ref={(el) => { if (el) hoverText.current.push(el); }} className="w-fit">
                    +5493484337681
                    <span className="block h-[2px] bg-[#ea3c06] w-[0%] rounded-[4px]"></span>
                  </p>
                </Link>
              </div>
              <div className="w-[25%] max-800:hidden">
                <Image
                  src={"/images/plus.svg"}
                  width={50}
                  height={50}
                  alt="Contact"
                  className="relative left-[-15] bottom-[-12]"
                ></Image>
                <Link href={"www.linkedin.com/in/joel-cordero-8998232a2"} className="max-1000:text-[0.8rem]">
                  <p ref={(el) => { if (el) hoverText.current.push(el); }} className="w-fit">
                    Linkedin
                    <span className="block h-[2px] bg-[#ea3c06] w-[0%] rounded-[4px]"></span>
                  </p>
                </Link>
              </div>
            </div>
          </div>{" "}
          {/* acá voy a poner los bordes esos */}
          <div className="w-[25%] pt-20 pb-3 border border-[#262626] max-1300:w-[30%] max-700:w-[40%] max-500:w-[50%]">
            <div className="flex items-center justify-end gap-3 p-3 max-1100:flex-col-reverse">
              <p className="font-unbounded text-center">BACK TO TOP</p>
              <Link href={"#home"} className="group relative border border-[#262626] rounded-full overflow-hidden">
                <div className="absolute bottom-0 w-full h-0 bg-[#ea3b060c] -z-10  transition-all duration-300 ease-in-out group-hover:bg-[#ea3c06] group-hover:h-full "></div>
                <IoArrowUp className="m-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
