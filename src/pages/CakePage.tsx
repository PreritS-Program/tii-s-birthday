import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

const CakePage = () => {
  const navigate = useNavigate();
  const [showWishModal, setShowWishModal] = useState(false);
  const [showCongratsModal, setShowCongratsModal] = useState(false);
  const [extinguishedCandles, setExtinguishedCandles] = useState<number[]>([]);
  const totalCandles = 5;

  useEffect(() => {
    // Show wish modal on page load
    const timer = setTimeout(() => {
      setShowWishModal(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Check if all candles are extinguished
    if (extinguishedCandles.length === totalCandles && extinguishedCandles.length > 0) {
      setTimeout(() => {
        setShowCongratsModal(true);
      }, 500);
    }
  }, [extinguishedCandles]);

  const handleCandleHover = (candleId: number) => {
    if (!extinguishedCandles.includes(candleId)) {
      setExtinguishedCandles([...extinguishedCandles, candleId]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Wish Modal */}
      <Dialog open={showWishModal} onOpenChange={setShowWishModal}>
        <DialogContent className="bg-card border-romantic-pink/50 glow-soft max-w-md">
          <DialogHeader>
            <DialogTitle className="font-elegant text-3xl text-center text-glow">
              Make a Wish! ✨
            </DialogTitle>
            <DialogDescription className="text-center text-lg text-foreground/80 py-4">
              Close your eyes, make a beautiful wish, and when you're ready...
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex justify-center">
            <Button
              onClick={() => setShowWishModal(false)}
              className="px-8 py-6 text-lg bg-gradient-to-r from-romantic-pink to-romantic-purple hover:from-romantic-purple hover:to-romantic-blue transition-all duration-500 glow-soft"
            >
              Made! 🌟
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Congratulations Modal */}
      <Dialog open={showCongratsModal} onOpenChange={setShowCongratsModal}>
        <DialogContent className="bg-card border-romantic-pink/50 glow-intense max-w-2xl">
          <DialogHeader>
            <DialogTitle className="font-elegant text-3xl text-center text-glow mb-4">
              🎉 Happy Birthday! 🎉
            </DialogTitle>
            <DialogDescription className="text-center text-lg text-foreground/90 py-6 leading-relaxed">
              A very happy birthday to the most kind & beautiful girl! 💕
              <br />
              <br />
              May all your wishes come true and may this year bring you endless joy, love, and amazing adventures!
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex justify-center">
            <Button
              onClick={() => setShowCongratsModal(false)}
              className="px-8 py-6 text-lg bg-gradient-to-r from-romantic-pink to-romantic-purple hover:from-romantic-purple hover:to-romantic-blue transition-all duration-500 glow-soft"
            >
              Thank you 🌸
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Main Content */}
      <div className="relative z-10 text-center animate-fadeIn">
        <h1 className="font-elegant text-5xl md:text-7xl text-glow mb-16">
          Your Birthday Cake! 🎂
        </h1>

        <p className="text-lg text-muted-foreground mb-8">
          Hover over the candles to blow them out! 🕯️
        </p>

        {/* Birthday Cake */}
        <div className="flex justify-center w-full">
          <div className="relative inline-block">
            {/* Candles */}
            <div className="flex justify-center gap-8 mb-1">
            {[...Array(totalCandles)].map((_, i) => (
              <div
                key={i}
                className="relative cursor-pointer"
                onMouseEnter={() => handleCandleHover(i)}
              >
                {/* Candle stick */}
                <div className="w-4 h-20 bg-gradient-to-b from-candle-gold to-candle-flame/50 rounded-full relative z-10" />
                
                {/* Flame */}
                {!extinguishedCandles.includes(i) && (
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                    <div className="relative">
                      {/* Flame glow */}
                      <div className="absolute inset-0 w-8 h-12 bg-candle-flame/50 blur-xl animate-candle-flicker" />
                      {/* Flame */}
                      <div className="relative w-6 h-10 bg-gradient-to-t from-candle-flame via-yellow-300 to-candle-flame rounded-full animate-candle-flicker" 
                           style={{ 
                             clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
                           }} 
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Cake layers */}
          <div className="space-y-0 glow-soft">
            {/* Top layer - frosting */}
            <div className="w-80 h-20 bg-gradient-to-b from-pink-300/60 to-pink-400/40 rounded-t-3xl border-4 border-pink-400/60 relative overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
              {/* Frosting details */}
              <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-pink-400/50 via-pink-300/50 to-pink-400/50" />
            </div>
            
            {/* Middle layer - cake */}
            <div className="w-96 h-24 bg-gradient-to-b from-amber-800/70 to-amber-900/60 border-4 border-amber-700/60 relative overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-600/10 to-transparent animate-shimmer" style={{ animationDelay: "0.5s" }} />
              {/* Cake texture */}
              <div className="absolute inset-0 opacity-30" style={{ 
                backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(139, 69, 19, 0.3) 2px, rgba(139, 69, 19, 0.3) 4px)'
              }} />
            </div>
            
            {/* Bottom layer - cake base */}
            <div className="w-[28rem] h-28 bg-gradient-to-b from-amber-900/70 to-amber-950/60 rounded-b-3xl border-4 border-amber-800/60 relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-700/10 to-transparent animate-shimmer" style={{ animationDelay: "1s" }} />
              {/* Cake texture */}
              <div className="absolute inset-0 opacity-30" style={{ 
                backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(139, 69, 19, 0.3) 2px, rgba(139, 69, 19, 0.3) 4px)'
              }} />
              {/* Plate effect */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[30rem] h-4 bg-gradient-to-b from-slate-400/40 to-slate-500/30 rounded-full blur-sm" />
            </div>
          </div>

          {/* Sparkles around cake */}
          {extinguishedCandles.length === totalCandles && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-glow-pink rounded-full animate-sparkle"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>
          )}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="fixed bottom-8 left-0 right-0 flex justify-between px-6 max-w-6xl mx-auto">
        <Button
          onClick={() => navigate("/")}
          variant="outline"
          className="px-6 py-6 border-romantic-pink/50 hover:bg-romantic-pink/10 hover:border-romantic-pink transition-all duration-300"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Button>

        <Button
          onClick={() => navigate("/letter")}
          className="px-8 py-6 text-lg bg-gradient-to-r from-romantic-pink to-romantic-purple hover:from-romantic-purple hover:to-romantic-blue transition-all duration-500 glow-soft hover:glow-intense"
        >
          Next
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>
    </div>
  );
};

export default CakePage;
