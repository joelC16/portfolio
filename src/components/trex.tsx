"use client";

import { useEffect, useRef, useState } from "react";

export default function Trex() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [isGameOver, setIsGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);
    const kingImageRef = useRef<HTMLImageElement | null>(null);

    const dino = { x: 50, y: 120, width: 60, height: 60, velocityY: -10, jumping: false };
    const gravity = 1.1;
    let obstacles: { x: number; y: number; width: number; height: number; imageIndex: number }[] = [];
    const speed = 6.5;
    let frame = 0;
    let animationFrameId: number;
    let nextObstacleFrame = 90 + Math.floor(Math.random() * 11);

    // Cargar imagen del rey de ajedrez
    useEffect(() => {
        const img = new Image();
        img.src = "/images/rey.png"; // Asegúrate de que esta ruta es correcta
        kingImageRef.current = img;
    }, []);

    // Cargar imágenes de obstáculos
    const obstacleImages = [
        "/images/peon2.png",
        "/images/torre2.png",
        "/images/alfil2.png",
        "/images/caballo2.png"
    ].map((src) => {
        const img = new Image();
        img.src = src;
        return img;
    });

    let imagesLoaded = 0;
    obstacleImages.forEach((img) => {
        img.onload = () => {
            imagesLoaded++;
        };
    });

    const handleKeyDown = (e: KeyboardEvent) => {
        if ((e.key === " " || e.key === "ArrowUp") && !dino.jumping) {
            dino.velocityY = -15;
            dino.jumping = true;
            if (!gameStarted) setGameStarted(true);
        }
        if (e.key === "Enter" && isGameOver) restartGame();
        if (e.key === " " && isGameOver) restartGame();
    };

    const restartGame = () => {
        setIsGameOver(false);
        setScore(0);
        setGameStarted(false);
        dino.y = 160;
        dino.velocityY = 0;
        dino.jumping = false;
        obstacles = [];
        frame = 0;
        nextObstacleFrame = 90 + Math.floor(Math.random() * 11);
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const gameLoop = () => {
            if (isGameOver) return;


    // Crear un patrón de cuadros
    const squareSize = 40; // Tamaño de los cuadros
    for (let y = 0; y < canvas.height; y += squareSize) {
        for (let x = 0; x < canvas.width; x += squareSize) {
            ctx.fillStyle = (x + y) % (squareSize * 2) === 0 ? "#0c0c0c" : "#111"; // Alternar colores claros
            ctx.fillRect(x, y, squareSize, squareSize);
        }
    }
 
            // Dibujar el suelo
            ctx.fillStyle = "#222";
            ctx.fillRect(0, 190, canvas.width, 10);

            if (!gameStarted) {
                ctx.fillStyle = "white";
                ctx.font = "1.2rem unbounded";
                ctx.fillText("Presiona ESPACIO para empezar", 120, 100);
                animationFrameId = requestAnimationFrame(gameLoop);
                return;
            }

            // Actualizar el "rey"
            dino.velocityY += gravity;
            dino.y += dino.velocityY;
            if (dino.y >= 135) {
                dino.y = 135;
                dino.jumping = false;
            }

            // Dibujar el rey de ajedrez si la imagen está cargada
            if (kingImageRef.current) {
                ctx.drawImage(kingImageRef.current, dino.x, dino.y, dino.width, dino.height);
            } else {
                ctx.fillStyle = "white";
                ctx.fillRect(dino.x, dino.y, dino.width, dino.height);
            }

            // Generar obstáculos con imágenes aleatorias
            if (frame >= nextObstacleFrame) {
                const randomIndex = Math.floor(Math.random() * obstacleImages.length);
                if(randomIndex == 0) {
                    obstacles.push({ x: canvas.width, y: 147, width: 60, height: 60, imageIndex: randomIndex });
                } else {
                    obstacles.push({ x: canvas.width, y: 137, width: 60, height: 60, imageIndex: randomIndex });
                }
                nextObstacleFrame = frame + (90 + Math.floor(Math.random() * 11));
            }

            frame++;

            // Dibujar y mover obstáculos
            obstacles.forEach((obs, i) => {
                obs.x -= speed;

                if (imagesLoaded === obstacleImages.length) {
                    ctx.drawImage(obstacleImages[obs.imageIndex], obs.x, obs.y, obs.width, obs.height);
                }

                // Colisión
                if (
                    dino.x < (obs.x + obs.width) - 30 &&
                    (dino.x + dino.width) - 31 > obs.x &&
                    dino.y < (obs.y + obs.height) - 10 &&
                    (dino.y + dino.height) - 10 > obs.y
                ) {
                    setIsGameOver(true);
                }
            });

            // Limpiar obstáculos fuera de la pantalla
            obstacles = obstacles.filter((obs) => obs.x + obs.width > 0);

            // Actualizar score
            setScore((prev) => prev + 1);

            animationFrameId = requestAnimationFrame(gameLoop);
        };

        document.addEventListener("keydown", handleKeyDown);
        animationFrameId = requestAnimationFrame(gameLoop);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isGameOver, gameStarted]);

    return (
        <div className="relative flex flex-col items-center justify-center text-white">
            <p className="absolute top-2 right-3 text-white text-[0.8rem] font-unbounded">Puntaje: <span className="text-[#ea3c06]">{score}</span></p>
            <canvas ref={canvasRef} width={600} height={200} className="rounded-b-[0.2rem] max-1700:w-[550px] max-1500:w-[500px] max-1300:w-[400px]"></canvas>


            <div className="absolute flex flex-col items-center mt-4">
                <h2 className={`text-xl font-unbounded ${isGameOver ? "text-[#ea3c06]" : "text-[#0c0c0c00]"}`}>GAME OVER</h2>
                <p className={`mt-2 font-unbounded ${isGameOver ? "text-white" : "text-[#0c0c0c00]"}`}>Presiona ESPACIO para reiniciar</p>
            </div>

        </div>
    );
}
