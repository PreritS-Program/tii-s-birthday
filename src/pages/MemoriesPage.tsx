import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Heart } from "lucide-react";

const MemoriesPage = () => {
  const navigate = useNavigate();

  // Placeholder images - user will replace these
  const memories = [
    { id: 1, caption: "Our first adventure" },
    { id: 2, caption: "That amazing day" },
    { id: 3, caption: "Laughing together" },
    { id: 4, caption: "Making memories" },
    { id: 5, caption: "Perfect moments" },
    { id: 6, caption: "Forever grateful" },
    { id: 7, caption: "Beautiful times" },
    { id: 8, caption: "You and me" },
    { id: 9, caption: "Special moments" },
  ];

  return (
    <div className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Floating hearts background */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-romantic-pink animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
              fontSize: `${15 + Math.random() * 25}px`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h1 className="font-elegant text-5xl md:text-7xl text-center text-glow mb-16 animate-fadeIn">
          Our Beautiful Memories
        </h1>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {memories.map((memory, index) => (
            <div
              key={memory.id}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-card border border-border/50 glow-soft hover:glow-intense transition-all duration-500 animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Placeholder - user will replace with actual photos */}
              <div className="absolute inset-0 bg-gradient-to-br from-romantic-pink/20 via-romantic-purple/20 to-romantic-blue/20 flex items-center justify-center">
                <div className="text-center p-6">
                  <Heart className="w-16 h-16 mx-auto mb-4 text-romantic-pink animate-heartbeat" />
                  <p className="text-sm text-muted-foreground">
                    Replace with your photo
                  </p>
                </div>
              </div>

              {/* Caption overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <p className="font-elegant text-lg text-foreground">
                  {memory.caption}
                </p>
              </div>

              {/* Sparkle effect on hover */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-glow-pink rounded-full animate-sparkle"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                      animationDelay: `${i * 0.2}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center gap-4">
          <Button
            onClick={() => navigate("/")}
            variant="outline"
            className="group px-6 py-6 border-romantic-pink/50 hover:bg-romantic-pink/10 hover:border-romantic-pink transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back
          </Button>

          <Button
            onClick={() => navigate("/cake")}
            className="group px-8 py-6 text-lg font-semibold bg-gradient-to-r from-romantic-pink to-romantic-purple hover:from-romantic-purple hover:to-romantic-blue transition-all duration-500 glow-soft hover:glow-intense"
          >
            Next Surprise
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MemoriesPage;
