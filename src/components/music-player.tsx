"use client"

import { useState, useRef, useEffect } from "react"

import { Button } from "../components/ui/button"
import { Slider } from "@/components/ui/slider"
import Image from "next/image"

import { FaPause, FaPlay } from "react-icons/fa6";
import { FiSkipBack, FiSkipForward } from "react-icons/fi";
import { PiRepeat } from "react-icons/pi";
import { TbArrowsShuffle } from "react-icons/tb";

interface Song {
    title: string
    artist: string
    duration: string
    url: string
    coverArt: string
}

export default function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentSong, setCurrentSong] = useState(0)
    const [progress, setProgress] = useState(0)
    const [shuffle, setShuffle] = useState(false)
    const audioRef = useRef<HTMLAudioElement>(null)

    const songs: Song[] = [
        { title: "Un poco de amor francés", artist: "Patricio Rey", duration: "3:26", url: "/audio/unPocoDeAmorFrances.mp3", coverArt: "/images/portadaUnPocoDeAmorFrances.jpg" },
        { title: "Barro tal vez", artist: "Luis Alberto Spinetta", duration: "3:43", url: "/audio/barroTalVez.mp3", coverArt: "/images/portadaBarroTalVez.jpg" },
        { title: "El anillo del capitán beto", artist: "Invisible", duration: "5:23", url: "/audio/elAnilloDelCapitanBeto.mp3", coverArt: "/images/portadaElCapitánBeto.jpg" },
        { title: "Culpa", artist: "Wos", duration: "3:39", url: "/audio/culpa.mp3", coverArt: "/images/portadaCulpa.jpeg" },
        { title: "La rubia tarada", artist: "Sumo", duration: "3:43", url: "/audio/laRubiaTarada.mp3", coverArt: "/images/portadaLaRubiaTarada.jpg" }
    ]

    const togglePlay = async () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                try {
                    await audioRef.current.play();
                } catch (error) {
                    console.error("Error al reproducir el audio:", error);
                }
            }
            setIsPlaying(!isPlaying);
        }
    };
    


    const restartSong = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            if (isPlaying) {
                audioRef.current.play();
            }
        }
    };

    const nextSong = () => {
        if (shuffle) {
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * songs.length)
            } while (randomIndex === currentSong)
            setCurrentSong(randomIndex)
        } else {
            setCurrentSong((prev) => (prev + 1) % songs.length)
        }
    }

    const previousSong = () => {
        setCurrentSong((prev) => (prev - 1 + songs.length) % songs.length)
    }

    const toggleShuffle = () => {
        setShuffle(!shuffle)
        nextSong()
    }

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.src = songs[currentSong].url;
            audioRef.current.load(); // Asegura que el navegador cargue la nueva fuente
            if (isPlaying) {
                audioRef.current.play().catch((error) => console.error("Error al reproducir:", error));
            }
        }
    }, [currentSong]); // Eliminamos isPlaying de la dependencia para evitar loops innecesarios
    
    


    useEffect(() => {
        const audio = audioRef.current
        if (!audio) return

        const updateProgress = () => {
            if (audio.duration) {
                setProgress((audio.currentTime / audio.duration) * 100)
            }
        }

        audio.addEventListener("timeupdate", updateProgress)
        return () => audio.removeEventListener("timeupdate", updateProgress)
    }, [])

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)
        return `${minutes}:${seconds.toString().padStart(2, "0")}`
    }

    return (
        <div className="relative w-[330px] h-[430px] overflow-hidden py-4 rounded-2xl shadow-2xl bg-gradient-to-br from-gray-900 to-black max-1200:w-[290px] max-1100:w-[240px] max-1000:h-[400px]">
            <div className="absolute inset-0 z-0">
                <Image src={songs[currentSong].coverArt} alt={`${songs[currentSong].title} cover art`} fill className="object-cover opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black" />
            </div>

            <div className="relative z-10 flex flex-col h-full p-6">
                <div className="flex-grow flex flex-col justify-center items-center space-y-2">
                    <Image src={songs[currentSong].coverArt} alt={songs[currentSong].title} width={132} height={132} className="object-cover w-40 h-40 rounded-full" />
                    <h2 className="text-white font-bold text-center">{songs[currentSong].title}</h2>
                    <p className="text-gray-300 text-center">{songs[currentSong].artist}</p>
                </div>
                <Slider value={[progress]} max={100} step={0.1} className="w-full" onValueChange={(value) => {
                    if (audioRef.current) {
                        audioRef.current.currentTime = (value[0] / 100) * audioRef.current.duration
                    }
                }} />
                <div className="flex justify-between text-xs text-gray-400">
                    <span>{audioRef.current ? formatTime(audioRef.current.currentTime) : "0:00"}</span>
                    <span>{songs[currentSong].duration}</span>
                </div>

                <div className="flex justify-between items-center mt-4">
                    <Button variant="ghost" size="icon" onClick={toggleShuffle} className={`${shuffle ? "text-green-400" : "text-white"}`}>
                        <TbArrowsShuffle className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={previousSong} className="text-white">
                        <FiSkipBack className="h-6 w-6" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={togglePlay} className="h-12 w-12 bg-white text-black rounded-full">
                        {isPlaying ? <FaPause fill="black"/> : <FaPlay fill="black"/>}
                    </Button>
                    <Button variant="ghost" size="icon" onClick={nextSong} className="text-white">
                        <FiSkipForward className="h-6 w-6" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={restartSong} className="text-white">
                        <PiRepeat className="h-5 w-5" />
                    </Button>
                </div>
            </div>
            <audio ref={audioRef} src={songs[currentSong].url} onEnded={nextSong}   onLoadedMetadata={() => {
      if (isPlaying) {
          audioRef.current?.play();
      }
  }}  />
        </div>
    )
}
