import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";

export const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Start playing after user interaction
    const startMusic = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play().catch(() => {
          // Auto-play blocked, will play after user interaction
        });
        setIsPlaying(true);
      }
    };

    window.addEventListener("click", startMusic, { once: true });
    
    return () => {
      window.removeEventListener("click", startMusic);
    };
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0]);
    if (value[0] > 0) {
      setIsMuted(false);
    }
  };

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-3 bg-card/80 backdrop-blur-md px-4 py-3 rounded-full border border-border/50 glow-soft">
      <audio
        ref={audioRef}
        src="https://lovable.dev/audio/romantic-music.mp3"
        loop
        preload="auto"
      />
      
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMute}
        className="hover:bg-primary/20 hover:text-primary transition-all"
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5" />
        ) : (
          <Volume2 className="w-5 h-5" />
        )}
      </Button>

      <Slider
        value={[isMuted ? 0 : volume]}
        onValueChange={handleVolumeChange}
        max={1}
        step={0.01}
        className="w-24"
      />
    </div>
  );
};
