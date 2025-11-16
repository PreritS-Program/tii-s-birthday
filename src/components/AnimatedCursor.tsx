import { useEffect, useRef } from "react";

export const AnimatedCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailsRef = useRef<Array<{ x: number; y: number; timestamp: number }>>([]);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      
      // Add trail point
      trailsRef.current.push({
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now(),
      });

      // Keep only recent trails
      const now = Date.now();
      trailsRef.current = trailsRef.current.filter(
        (trail) => now - trail.timestamp < 1000
      );
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${mousePos.current.x}px`;
        cursorRef.current.style.top = `${mousePos.current.y}px`;
      }
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="cursor-dot fixed pointer-events-none z-[9999]"
        style={{
          width: "20px",
          height: "20px",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="relative w-full h-full">
          {/* Main cursor dot */}
          <div className="absolute inset-0 rounded-full bg-romantic-pink glow-soft animate-glow-pulse" />
          
          {/* Sparkle effect */}
          <div className="absolute -inset-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-glow-pink rounded-full animate-sparkle"
                style={{
                  top: `${Math.sin((i * Math.PI) / 2) * 15 + 50}%`,
                  left: `${Math.cos((i * Math.PI) / 2) * 15 + 50}%`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
