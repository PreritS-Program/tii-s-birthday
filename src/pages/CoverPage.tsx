import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const CoverPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-romantic-pink/20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
              fontSize: `${20 + Math.random() * 30}px`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 animate-fadeIn">
        <div className="mb-8">
          <h1 className="font-script text-7xl md:text-9xl text-glow mb-4">
            Happy Birthday Tii!
          </h1>
          <div className="flex justify-center gap-4 mb-8">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-full bg-romantic-pink animate-twinkle"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            ))}
          </div>
        </div>

        <div className="max-w-2xl mx-auto mb-12 space-y-6">
          <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed animate-slideUp" style={{ animationDelay: "0.3s" }}>
            Today is a celebration of you—the incredible person you are,
          </p>
          <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed animate-slideUp" style={{ animationDelay: "0.5s" }}>
            and all the beautiful moments we've shared together.
          </p>
          <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed animate-slideUp" style={{ animationDelay: "0.7s" }}>
            This is my little gift to you, made with love. 💕
          </p>
        </div>

        <Button
          onClick={() => navigate("/memories")}
          className="group relative px-8 py-6 text-lg font-semibold bg-gradient-to-r from-romantic-pink to-romantic-purple hover:from-romantic-purple hover:to-romantic-blue transition-all duration-500 glow-soft hover:glow-intense animate-slideUp"
          style={{ animationDelay: "0.9s" }}
        >
          <span className="relative z-10">Next</span>
          <div className="absolute inset-0 bg-gradient-to-r from-glow-pink to-glow-purple opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-md" />
        </Button>
      </div>

      {/* Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-glow-pink rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CoverPage;
