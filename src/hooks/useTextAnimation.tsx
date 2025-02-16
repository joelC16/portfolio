import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(useGSAP, Draggable);

const useTextAnimation = (delay: number = 0.2) => {
  const textRefs = useRef<HTMLHeadingElement[]>([]);

  useEffect(() => {
    textRefs.current.forEach((el, index) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: delay + index * 0.1,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, [delay]);

  return (el: HTMLHeadingElement | null) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current = [...textRefs.current, el]; // Asegura que no haya referencias duplicadas
    }
  };
};


const useTextAnimationInicio = (delay: number = 0.2) => {
    const textRefs = useRef<HTMLHeadingElement[]>([]);
  
    useEffect(() => {
      textRefs.current.forEach((el, index) => {
        if (!el) return;
  
        gsap.fromTo(
          el,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: delay + index * 0.1,
          }
        );
      });
    }, [delay]);
  
    return (el: HTMLHeadingElement | null) => {
      if (el && !textRefs.current.includes(el)) {
        textRefs.current = [...textRefs.current, el];
      }
    };
};

const useTextAnimationProjects = (delay: number = 0.2) => {
    const textRefs = useRef<HTMLHeadingElement[]>([]);
  
    useEffect(() => {
      // Determina si el dispositivo es móvil o no
      const isMobile = window.matchMedia("(max-width: 900px)").matches;
  
      textRefs.current.forEach((el, index) => {
        if (!el) return;
  
        gsap.fromTo(
          el,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: delay + index * 0.1,
            scrollTrigger: {
              trigger: el,
              start: isMobile ? "top 160%" : "top 100%", // Usa 120% para móvil y 80% para desktop
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, [delay]);
  
    return (el: HTMLHeadingElement | null) => {
      if (el && !textRefs.current.includes(el)) {
        textRefs.current = [...textRefs.current, el]; // Asegura que no haya referencias duplicadas
      }
    };
  };
  

const useTextAnimationFooter = (delay: number = 0.2) => {
  const textRefs = useRef<HTMLHeadingElement[]>([]);

  useEffect(() => {
    textRefs.current.forEach((el, index) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: delay + index * 0.1,
          scrollTrigger: {
            trigger: el,
            start: "top 160%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, [delay]);

  return (el: HTMLHeadingElement | null) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current = [...textRefs.current, el];
    }
  };
};


const useTextAnimationDraglabble = (delay: number = 0.2) => {
    const boxRefs = useRef<HTMLHeadingElement[]>([]);
  
    useEffect(() => {
      boxRefs.current.forEach((box, index) => {
        if (box) {
          // Animación inicial con GSAP
          gsap.fromTo(
            box,
            { opacity: 0, y: 100 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              delay: delay + index * 0.1,
              scrollTrigger: {
                trigger: box,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            });
  
          // Agregar Draggable después de la animación
          Draggable.create(box, {
            type: "x,y", // Permite arrastrar en ambos ejes
            edgeResistance: 0.5, // Resistencia en los bordes
            bounds: ".container-boxes-about", // Limitar el área de arrastre
          });
        }
      });
    }, [delay]);
  
    return (el: HTMLHeadingElement | null) => {
      if (el && !boxRefs.current.includes(el)) {
        boxRefs.current = [...boxRefs.current, el]; // Asegura que no haya referencias duplicadas
      }
    };
};


const useHoverEffect = () => {
    const textRefs = useRef<(HTMLHeadingElement | HTMLParagraphElement)[]>([]);
  
    useEffect(() => {
      const handleHoverIn = (index: number) => {
        gsap.to(textRefs.current[index]?.querySelector("span")!, {
          width: "100%", // La línea crece
          duration: 0.4, // Duración de la animación
          ease: "power2.out",
        });
      };
  
      const handleHoverOut = (index: number) => {
        gsap.to(textRefs.current[index]?.querySelector("span")!, {
          width: "0%", // La línea se reduce
          duration: 0.4,
          ease: "power2.in",
        });
      };
  
      textRefs.current.forEach((el, index) => {
        if (el) {
          el.addEventListener("mouseenter", () => handleHoverIn(index));
          el.addEventListener("mouseleave", () => handleHoverOut(index));
        }
      });
  
      return () => {
        textRefs.current.forEach((el, index) => {
          if (el) {
            el.removeEventListener("mouseenter", () => handleHoverIn(index));
            el.removeEventListener("mouseleave", () => handleHoverOut(index));
          }
        });
      };
    }, []);
  
    return textRefs;
  };
  

export { useTextAnimation, useTextAnimationFooter, useTextAnimationProjects, useTextAnimationInicio, useTextAnimationDraglabble, useHoverEffect };
