import { useEffect, useRef } from "react";

const MusicComponent = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    // Intento inicial
    audio.play().catch(() => {
      console.warn("Autoplay bloqueado. Esperando interacción...");
    });

    // Reintentar al primer clic
    const handleInteraction = () => {
      audio.play();
      document.removeEventListener("click", handleInteraction);
    };

    document.addEventListener("click", handleInteraction);

    return () => {
      document.removeEventListener("click", handleInteraction);
    };
  }, []);

  return (
    <audio ref={audioRef} src="/Music/Instrumental.mp3" loop />
  );
};

export default MusicComponent;