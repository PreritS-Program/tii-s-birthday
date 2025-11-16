import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const LetterPage = () => {
  const navigate = useNavigate();
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const fullText = `A very very very Happy Birthday Tii!

Looking back, a lot of things happened in this year, too many ups and downs, but you know me, i'd like to think of them all as growth and loadss of learning opportunity instead, and i know, you do too ;)

You know, you are an amazing person Tii, you know what's right and wrong, you actually respect yourself without caring what other people thinks, and no matter how hard it gets, even when you're low, it really takes courage to admit it, being accountable, and working on it. It is really a great quality, also you're a really kind individual, well, in your own way atleast lol, but yea, you genuinely care about other people, you care about friendships, and you genuinely love them, and not just say for the sake of it. Tere liye respect toh hai sahi mein fr fr.

Well, i just hope, no matter what happens, you can stay true to yourself, be better and keep growing while having utmost fun, and welp, effortlessly conquer the world! And if you ever need my help regarding literally anything, i'm here for you Tii, forever.

Here's to your last teenage year, which i hope would be filled with lots of experiences, lots of learning, growing, being more mature, while also having lots of fun! 

Again, a very happy birthday Tithi.

I love you.

Carpe diem!`;

  useEffect(() => {
    let index = 0;
    const typingSpeed = 30; // milliseconds per character

    const typeInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.substring(0, index + 1));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typeInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typeInterval);
  }, []);

  return (
    <div className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Floating sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
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

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Letter container */}
        <div className="bg-card/60 backdrop-blur-md rounded-3xl p-12 md:p-16 border border-border/50 glow-soft animate-fadeIn">
          <h1 className="font-elegant text-5xl md:text-6xl text-center text-glow mb-12">
            For My Girl
          </h1>

          <div className="relative">
            {/* Paper texture overlay */}
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZmlsdGVyIGlkPSJub2lzZSI+CiAgICA8ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC42NSIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPgogIDwvZmlsdGVyPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuNSIvPgo8L3N2Zz4=')]" />

            {/* Letter text */}
            <div className="relative font-elegant text-lg md:text-xl leading-relaxed text-foreground/90 whitespace-pre-wrap">
              {displayedText}
              {!isTypingComplete && (
                <span className="inline-block w-1 h-6 bg-romantic-pink ml-1 animate-pulse" />
              )}
            </div>
          </div>

          {/* Signature area */}
          {isTypingComplete && (
            <div className="mt-16 text-right animate-fadeIn">
              <div className="inline-block">
                <p className="font-script text-3xl md:text-4xl text-romantic-pink mb-2">
                  With love,
                </p>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-romantic-pink to-transparent mb-4" />
                <div className="flex justify-end gap-2">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 rounded-full bg-romantic-pink animate-heartbeat"
                      style={{ animationDelay: `${i * 0.3}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-start">
          <Button
            onClick={() => navigate("/cake")}
            variant="outline"
            className="px-6 py-6 border-romantic-pink/50 hover:bg-romantic-pink/10 hover:border-romantic-pink transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Birthday Cake
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LetterPage;
